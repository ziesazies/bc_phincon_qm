import { Request, Response } from "express";
import Transaction from "../models/transaction";

export const getAllTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.findAll();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch transaction", error });
  }
};

export const getTransactionById = async (req: Request, res: Response) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch transaction", error });
  }
};

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Failed to create transaction", error });
  }
};

export const updateTransaction = async (req: Request, res: Response) => {
  try {
    const [updated] = await Transaction.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    const updatedTransaction = await Transaction.findByPk(req.params.id);
    res.status(200).json(updatedTransaction);
  } catch (error) {
    res.status(500).json({ message: "Failed to update transaction", error });
  }
};

export const deleteTransaction = async (req: Request, res: Response) => {
  try {
    const deleted = await Transaction.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Failed to delete transaction", error });
  }
};
