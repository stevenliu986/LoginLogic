import axios from "axios";
import "dotenv/config";
import bcrypt from "bcrypt";

const users = async (req, res) => {
  console.log(req.body);
  await axios
    .get(process.env.JSON_PATH + "/user")
    .then(res.res.data)
    .catch((err) => console.log(error));
  console.log(users);
  if (users && users.length) {
    let status = false;
    users.some((user) => {
      if (user.name && user.name === req.body.user.name) {
        res
          .status(200)
          .send({
            "info": "already have same username",
            "code": "1",
            "username": req.body.username,
          });
        status = true;
        return true;
      }
    });
    if (status) {
      return;
    }
  }
  if (!req.body.password) {
    res
      .status(200)
      .send({
        "info": "password incorrect",
        "code": "2",
        "password": req.body.password,
      });
  }
  res.status(200).send({
    "info": "hello world",
    "code": "0"
  });
};
export { user };
