const express = require("express");
const router = express.Router();
const {
  user_index_get,
  user_add_get,
  user_edit_get,
  user_view_get,
  user_update_put,
  user_delete_post,
  user_delete_post2,
  user_add_post,
} = require("../controllers/usecontrollers");
router.get("/", user_index_get);

router.get("/user/add.html", user_add_get);

router.get("/edit/:id", user_edit_get);

router.get("/user/:id", user_view_get);

router.put("/edit/:id", user_update_put);

router.delete("/edit/:id", user_delete_post);

router.delete("/:id", user_delete_post2);

router.post("/user/add.html", user_add_post);

module.exports = router;
