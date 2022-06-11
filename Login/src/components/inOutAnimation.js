import { gsap } from "gsap"

class InOutAnimation {
  constructor(domName) {
    this.dom = domName
  }
  comeIn(tween) {
    tween = tween || gsap.timeline()
    tween.to(this.dom, {
      duration: 0, display: "none", opacity: 0, x: 0, y: 40
    })
    tween.to(this.dom, {
      duration: 0.5, display: "flex", opacity: 1, x: 0, y: 0
    })
  }
  comeOut(tween) {
    tween = tween || gsap.timeline()
    tween.to(this.dom, {
      duration: 0, display: "flex", opacity: 1, x: 0, y: 0
    })
    tween.to(this.dom, {
      duration: 0.5, display: "none", opacity: 0, x: 0, y: -40
    })
  }
}

const loginAnimation = new InOutAnimation('.login')
const RegisterAnimation = new InOutAnimation('.register')

const WelcomeAnimation = new InOutAnimation('.welcome')

function showLogin() {
  console.log('showLogin');
  const tween = gsap.timeline({ delay: 0.1 })
  RegisterAnimation.comeOut(tween)
  loginAnimation.comeIn(tween)
}

function showRegister() {
  console.log('showRegister');
  const tween = gsap.timeline({ delay: 0.1 })
  loginAnimation.comeOut(tween)
  RegisterAnimation.comeIn(tween)
}

function showWelcome() {
  console.log('showWelcome');
  const tween = gsap.timeline({ delay: 0.5 })
  loginAnimation.comeOut(tween)
  WelcomeAnimation.comeIn(tween)
}

export { InOutAnimation, loginAnimation, RegisterAnimation, showLogin, showRegister, showWelcome }