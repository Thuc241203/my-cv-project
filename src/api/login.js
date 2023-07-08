import instance from "./config";

const getLogin = () => {
    return instance.get("/users");
};
const updateLogin = (user) => {
  return instance.put(`/users/`, user);
};
export {getLogin, updateLogin};