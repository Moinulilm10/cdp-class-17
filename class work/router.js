const Router = require("koa-router");
const {
  postUser,
  getUser,
  putUser,
  patchUser,
  deleteUser,
} = require("./controller/users");
const router = new Router();

router.get("/users", getUser);
router.post("/users", postUser);
router.put("/users/:id", putUser);
router.patch("/users/:id", patchUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
