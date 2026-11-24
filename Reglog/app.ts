
import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app: Application = express();

app.use(express.json());

const SECRET_KEY = "mysecretkey";
type user = {
  id: number;
  name: string;
  email: string;
  password: string;
};

const users: user[] = [];

app.post("/register", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "all fields are required",
    });
  }
  const existinguser = users.find(user => user.email === email);
  if (existinguser) {
    return res.status(400).json({
      message: "email alredy exist",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10); //10 is cost factor or salt round

  const newUser: user = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword,
  };
  users.push(newUser);

  res.status(201).json({
    message: "user registered successfully",
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    },
  });
});

//login

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(400).json({
      message: "user not found",
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({
      message: "invalid password",
    });
  }

  //generate jwt

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: "1d",
  });
  res.status(200).json({
    message: "login successfull",
    token,
  });
});

app.get("/users", (req, res) => {
  const userList = users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
  }));

  res.json({
    message: "available users",
    userList,
  });
});

app.listen(6000, () => {
  console.log(`running on port 6000`);
});
