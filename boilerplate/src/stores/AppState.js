import { observable, action } from 'mobx'

class AppState {
  @observable authenticated
  @observable authenticating
  @observable items
  @observable item
  @observable username

  authenticated = false
  authenticating = false
  items = []
  item = {}
  username = 'Bob'

  async fetchData (pathname, id) {
    const result = await fetch(`/api/${pathname}`)
    const data = await result.json()
    // console.log(data)
    data.length > 0 ? this.setData(data) : this.setSingle(data)
  }

  @action setData (data) {
    this.items = data
  }

  @action setSingle (data) {
    this.item = data
  }

  @action clearItems () {
    this.items = []
    this.item = {}
  }

  @action authenticate () {
    return new Promise((resolve, reject) => {
      this.authenticating = true
      setTimeout(() => {
        this.authenticated = !this.authenticated
        this.authenticating = false
        resolve(this.authenticated)
      }, 0)
    })
  }
}

export default AppState
