import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import userRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";
import commentsRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import likesRoutes from "./routes/likes.js";
import relationshipsRoutes from "./routes/relationships.js";

const app = express();

//middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);

    next();
});
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename);
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/likes", likesRoutes);
app.use("/api/relationships", relationshipsRoutes);

app.listen(8800, () => {
    console.log("API working!");
});
