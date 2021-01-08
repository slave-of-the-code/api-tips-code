const express = require("express");
const router = express.Router();
const { getAll, addTips } = require("../controllers/git.controller");

router
  .route("/")
  .get(getAll)
  .post(addTips)
  .delete((req, res) => res.send("DEL git"))
  .put((req, res) => res.send("PUT git"))
  .patch((req, res) =>
    res.send("PATCH git - patch actualiza solo una propiedad")
  );

router.route("/:id/:name?").get((req, res) => {
  res.json({
    elId: req.params.id,
    elName: req.params.name || "none",
  });
});

router.route("*").get((req, res) => {
  res.send("404 ERROR");
});

module.exports = router;
