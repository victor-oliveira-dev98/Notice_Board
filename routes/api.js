const express = require("express");
const router = express.Router();
const posts = require("../model/posts");

router.get("/all", (req, res) => {
  res.json(JSON.stringify(posts.getAll()));
});

router.post(
  "/new",
  express.json(),
  express.urlencoded({ extended: true }),
  (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    console.log(title, description);
    posts.newPost(title, description);

    res.send("Post adicionado");
  }
);

module.exports = router;
