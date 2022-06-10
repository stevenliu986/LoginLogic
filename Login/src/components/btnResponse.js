class BtnResponse {

  constructor(domName) {
    this.button = document.querySelector(domName)
    this.status = true
  }

  /** delay 是多久之后做 callback，afterDelay 是做这件事之后多久才能再做 */
  delay = ({ delay, afterDelay, callback }) => {
    if (callback) {
      delay ? setTimeout(() => this._afterDelay({ afterDelay, callback }), delay * 1000) : this._afterDelay({ afterDelay, callback });
    }
  }

  _afterDelay = ({ afterDelay, callback }) => {
    if (this.status && callback) {
      this.status = false
      new Promise((resolve, reject) => {
        setTimeout(() => {
          this.status = true
        }, afterDelay * 1000)
      })
      callback()
    }
  }
}

export { BtnResponse }