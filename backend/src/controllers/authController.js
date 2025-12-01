import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { users } from "../config/db.js";

// REGISTER
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Check existing user
  const exists = users.find((u) => u.email === email);
  if (exists) {
    return res.status(400).json({ message: "Email already registered" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user to temporary array
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword,
  };

  users.push(newUser);

  res.status(201).json({ message: "User registered successfully" });
};

// LOGIN
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Create JWT
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login successful",
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
};
