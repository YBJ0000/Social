import { crtDom } from "@/js/utils"

export default class FriendList {
  info = null
  dom = null
  constructor(info = []) {
    this.info = info
  }

  build = () => {
    this.dom = crtDom('div')
    this.dom.classList.add('friend-list')
    this.info.forEach(item => {
      this.dom.appendChild(new FriendListItem(item).build())
    })
    return this.dom
  }
}

class FriendListItem {
  src = null
  name = null
  msg = null
  dom = null
  constructor(info) {
    this.src = info.src
    this.name = info.name
    this.msg = info.msg
  }

  build = () => {
    this.dom = crtDom('div')
    this.dom.classList.add('profile')
    this.dom.innerHTML = `
      <div class="profile-photo">
        <img src="${this.src}" alt="profile photo">
      </div>

      <div class="profile-description">
        <h2>${this.name}</h2>
        <p>${this.msg}</p>
      </div>
    `
    return this.dom
  }
}