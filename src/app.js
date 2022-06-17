import express from "express";

import { user, story, auth } from "./components";
import { checkToken } from "./auth";

export const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/user",checkToken,user)
app.use("/story", story);
app.use("/auth", auth);
