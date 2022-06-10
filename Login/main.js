import './style.css'
import { ToSomewhere } from './src/servers/toSomewhereBtn'
import axios from 'axios'

ToSomewhere.init()

const loginBtn = document.querySelector('.login-btn span')
const registerBtn = document.querySelector('.register-btn span')

loginBtn.addEventListener('click', login)
registerBtn.addEventListener('click', register)

async function login(event) {
  event.preventDefault()
}

async function register(event) {
  event.preventDefault()
  const new_username = document.querySelector('#new-username')
  const password_one = document.querySelector('#reg-password-one')
  const password_two = document.querySelector('#reg-password-two')

  if (password_one.value === password_two.value) {
    // const result = await fetch('http://localhost:7890/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     username: new_username.value, password: password_one.value
    //   })
    // }).then(res => res.json())

    axios.post('http://localhost:7890/register', {
      username: new_username.value, password: password_one.value
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    })
  }
}