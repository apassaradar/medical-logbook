const express = require("express");
const router = express.Router();
const { users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    users.create({
      email: email,
      password: hash,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await users.findOne({ where: { email: email } });

  if (!user) {
    res.json({ error: "User Doesn't Exist" });
    return;
  }


  bcrypt.compare(password, user.password).then((match) => {
    if (!match) {
      res.json({ error: "Wrong Username And Password Combination" });
      return;
    }

    res.json("YOU LOGGED IN!!!");
  });
});

module.exports = router;