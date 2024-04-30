exports.get = () => {
  return {
    id: 1,
    name: "akib",
    email: "akib@gmail.com",
  };
};

exports.post = () => {
  return {
    id: 2,
    name: "rakib",
    email: "rakib@gmail.com",
    message: "user created",
  };
};

exports.put = (id, userData) => {
  return {
    id,
    userData,
  };
};

exports.patch = (id, userData) => {
  return { id, userData };
};

exports.delete = (id) => {
  return {
    id,
    message: "user deleted",
  };
};
