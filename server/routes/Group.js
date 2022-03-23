const router = require("express").Router();
const { sequelize } = require("../models");

router.get("/list-student-by-user", async (req, res) => {
  const userId = Number(req.query.userId);
  const [data, metadata] = await sequelize.query(
    "SELECT dataID, patients.userID, hn, patient_name, diagnosis, wardID, unitID, users.fname userName, ward.name wardName, unit.name unitName, patients.createdAt, patients.updatedAt, status FROM patients left join users on users.userID = patients.userID left join ward on ward.id = patients.wardID left join unit on unit.id = patients.unitID WHERE users.roleID = 3 AND patients.userID in (SELECT DISTINCT gg.userID  FROM `group` gg WHERE gg.group in (SELECT DISTINCT g.group  FROM users LEFT JOIN `group` g ON users.userID = g.userID  WHERE users.userID = ?));",
    {
      replacements: [userId],
    }
  );
  res.json(data);
});

router.get("/list-student", async (req, res) => {
  const groupId = req.query.groupId;
  const [data, metadata] = await sequelize.query(
    "SELECT * FROM `group` gg join users on gg.userID = users.userID WHERE users.roleID = 3 AND gg.group = :group",
    {
      replacements: {
        group: groupId,
      },
    }
  );
  res.json(data);
});

router.get("/list-user-group", async (req, res) => {
  const userId = req.query.userId;
  const [data, metadata] = await sequelize.query(
    "SELECT g.group FROM users LEFT JOIN `group` g ON users.userID = g.userID WHERE users.userID = :user;",
    {
      replacements: {
        user: userId,
      },
    }
  );
  res.json(data);
});

module.exports = router;
