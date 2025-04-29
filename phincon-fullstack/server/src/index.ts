import express, { Request, Response } from "express";
const app = express();

const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "Jim Doe",
  },
];
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello from backend!");
});

app.get("/users", (_req, res) => {
  res.json({
    status: "success",
    message: "Users fetched successfully",
    data: users,
  });
});

app.put("/user/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
      data: null,
    });
    return;
  }
  user.name = name;
  res.json({
    status: "success",
    message: "User updated successfully",
    data: user,
  });
});

app.post("/user", (_req, res) => {
  const { name } = _req.body;
  const id = users.length + 1;
  users.push({ id, name });
  res.json({
    status: "success",
    message: "User added successfully",
    data: users,
  });
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
