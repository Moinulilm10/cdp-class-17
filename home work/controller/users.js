const usersModel = require("../model/Users");
exports.getUser = (ctx) => {
  try {
    const user = usersModel.get();
    ctx.status = 200;
    ctx.body = { statuscode: "get method success", user: user };
  } catch (error) {
    console.log("error", error);
    ctx.status = 400;
    ctx.body = { statuscode: "get method failed" };
  }
};
exports.postUser = (ctx) => {
  try {
    const user = usersModel.get();
    ctx.status = 201;
    ctx.body = { statuscode: "user created", user: user };
  } catch (error) {
    console.log("error", error);
    ctx.status = 400;
    ctx.body = { statuscode: "post method failed" };
  }
};

exports.putUser = (ctx) => {
  try {
    const userId = ctx.params.id;
    const updatedUser = usersModel.put(userId, ctx.request.body);
    ctx.status = 200;
    ctx.body = { message: "user updated", user: updatedUser };
  } catch (error) {
    ctx.status = 400;
    ctx.body = "put method fail";
  }
};

exports.patchUser = (ctx) => {
  try {
    const userId = ctx.params.id;
    const patchedUser = usersModel.patch(userId, ctx.request.body);
    ctx.status = 200;
    ctx.body = { message: "user patched", user: patchedUser };
  } catch (error) {
    ctx.status = 400;
    ctx.body = "patch method fail";
  }
};

exports.deleteUser = (ctx) => {
  try {
    const userId = ctx.params.id;
    const deletedUser = usersModel.delete(userId);
    ctx.status = 200;
    ctx.body = { message: "User deleted successfully", user: deletedUser };
  } catch (error) {
    ctx.status = 400;
    ctx.body = "delete method fail";
  }
};
