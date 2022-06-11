import "./style.css";
import { ToSomewhere } from "./src/servers/toSomewhereBtn";
import axios from "axios";
import { showWelcome } from "./src/components/inOutAnimation";

ToSomewhere.init();

const fetchMethod = {
  "FETCH": "fetch",
  "AXIOS": "axios",
};

const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');

registerBtn.addEventListener("click", registerBtn);

const new_username = document.querySelector("#new-username");
const password_one = document.querySelector("#password-one");
const password_two = document.querySelector("#password-two");

function register(event) {
  event.prevent.preventDefault();
  if (password_one.value === password_two.value) {
    const address = "http://localhost:7890/api/register";
    const method = fetchMethod.FETCH
    const response = await postPassword(method, address, new_username.value, password_one.value)

  }
}

async function postPassword(method, address, username, password) {
  switch (method) {
    case fetchMethod.FETCH:
      return await fetch(address, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
username,password
        }).then(res=> res.json()).catch(err=> console.log(err))
      })
    case fetchMethod.AXIOS:
      break;
  }
}



/*
const fetchMethod = {
  FETCH: "fetch",
  AXIOS: "axios",
};
const ACTIVE = "active";
const ERROR = "error";

const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");

loginBtn.addEventListener("click", login);
registerBtn.addEventListener("click", register);

const new_username = document.querySelector("#new-username");
const password_one = document.querySelector("#reg-password-one");
const password_two = document.querySelector("#reg-password-two");

function addClick(doms, type) {
  doms.forEach((dom) => {
    dom.addEventListener(type || "click", () => {
      removeErrorTag(dom);
    });
  });
}

function addErrorTag(dom) {
  dom.classList.remove(ERROR);
  dom.classList.add(ERROR);
}

function removeErrorTag(dom) {
  dom.classList.remove(ERROR);
}

addClick([new_username, password_one, password_two]);

async function register(event) {
  event.preventDefault();
  if (inputEmpty([new_username, password_one, password_two])) return;
  if (password_one.value === password_two.value) {
    const address = "http://localhost:7890/api/register";
    const method = fetchMethod.AXIOS;
    const response = await postPassword(
      method,
      address,
      new_username.value,
      password_one.value
    );
    switch (response.code) {
      case 0:
        break;
      case 1:
        addErrorTag(new_username);
        break;
      case 2:
        break;

      default:
        break;
    }
  } else {
    addErrorTag(password_one);
    addErrorTag(password_two);
  }
}

async function postPassword(method, address, username, password) {
  switch (method) {
    case fetchMethod.FETCH:
      return await fetch("http://localhost:7890/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }).then((res) => res.json());
    case fetchMethod.AXIOS:
      return axios
        .post("http://localhost:7890/api/register", {
          username,
          password,
        })
        .then((res) => res.data)
        .catch((err) => {
          console.error(err);
        });
    default:
      return null;
  }
}

function inputEmpty(doms) {
  let status = false;
  doms.forEach((dom) => {
    if (dom.value === "") {
      addErrorTag(dom);
      status = true;
    }
  });
  return status;
}

const username = document.querySelector("#username");
const password = document.querySelector("#password");

addClick([username, password]);

async function login(event) {
  event.preventDefault();
  // console.log("username.value:", username.value);
  // console.log("password.value:", password.value);
  if (inputEmpty([username, password])) return;
  const response = await axios
    .post("http://localhost:7890/api/user", {
      username: username.value,
      password: password.value,
    })
    .then((res) => res.data)
    .catch((err) => console.errors(err));
  switch (response.code) {
    case 0:
      showWelcome();
      break;
    case 1:
      addErrorTag(username);
      break;
    case 2:
      addErrorTag(password);
      break;

    default:
      break;
  }
}
*/