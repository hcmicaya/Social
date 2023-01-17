import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";
import commentsRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import likesRoutes from "./routes/likes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/likes", likesRoutes);

app.listen(8800, () => {
    console.log("API working!");
});
