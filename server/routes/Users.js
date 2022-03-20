const express = require("express");
const router = express.Router();
const { users } = require("../models");
const bcrypt = require("bcrypt");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");

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

  if (!user) res.json({ error: "User Doesn't Exist" });

  bcrypt.compare(password, user.password).then(async (match) => {
    if (!match) res.json({ error: "Wrong email And Password Combination" });

    
    const accessToken = sign(
      { email: user.email, id: user.userID, role: user.roleID },
      "importantsecret"
    );
    res.json({ token: accessToken, email: email, id: user.userID, role: user.roleID, fname: user.fname, lname: user.lname });
  });
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

router.get("/basicinfo/:id", async (req, res) => {
  const id = req.params.id;

  const basicInfo = await users.findByPk(id, {
    attributes: { exclude: ["password"] },
  });

  res.json(basicInfo);
});

router.put("/changepassword", validateToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = await users.findOne({ where: { email: req.user.email } });

  bcrypt.compare(oldPassword, user.password).then(async (match) => {
    if (!match) res.json({ error: "Wrong Password Entered!" });

    bcrypt.hash(newPassword, 10).then((hash) => {
      users.update(
        { password: hash },
        { where: { email: req.user.email } }
      );
      res.json("SUCCESS");
    });
  });
});

module.exports = router;