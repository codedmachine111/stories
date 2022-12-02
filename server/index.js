const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers

const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

const commentRouter = require('./routes/Comments');
app.use("/comments", commentRouter);

const userRouter = require('./routes/Users');
app.use("/auth", userRouter);

const likesRouter = require('./routes/Likes');
app.use("/likes", likesRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
