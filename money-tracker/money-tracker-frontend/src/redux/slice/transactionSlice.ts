import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "localhost:3001/api/transactions";

export interface Transaction {
  id?: number;
  amount: number;
  type: "income" | "expense";
  category: string;
  description: string;
  date: string;
}

interface TransactionState {
  transactions: Transaction[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: TransactionState = {
  transactions: [],
  status: "idle",
  error: null,
};

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchAll",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

export const addTransaction = createAsyncThunk(
  "transactions/add",
  async (transaction: Transaction) => {
    const response = await axios.post(API_URL, transaction);
    return response.data;
  }
);

export const updateTransaction = createAsyncThunk(
  "transactions/update",
  async (transaction: Transaction) => {
    const response = await axios.put(
      `${API_URL}/${transaction.id}`,
      transaction
    );
    return response.data;
  }
);

export const deleteTransaction = createAsyncThunk(
  "transactions/delete",
  async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch all
      .addCase(fetchTransactions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchTransactions.fulfilled,
        (state, action: PayloadAction<Transaction[]>) => {
          state.status = "succeeded";
        }
      )
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch transactions";
      })
      // Add
      .addCase(
        addTransaction.fulfilled,
        (state, action: PayloadAction<Transaction>) => {
          state.transactions.push(action.payload);
        }
      )
      .addCase(
        updateTransaction.fulfilled,
        (state, action: PayloadAction<Transaction>) => {
          const index = state.transactions.findIndex(
            (t) => t.id === action.payload.id
          );
          if (index !== -1) {
            state.transactions[index] = action.payload;
          }
        }
      )
      .addCase(
        deleteTransaction.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.transactions = state.transactions.filter(
            (t) => t.id !== action.payload
          );
        }
      );
  },
});

export default transactionSlice.reducer;
