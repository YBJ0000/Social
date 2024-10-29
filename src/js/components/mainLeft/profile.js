import { crtDom } from "@/js/utils"

export default class Profile {
  img = null
  name = null
  at = null
  dom = null

  constructor(info) {
    this.img = info.img_src
    this.name = info.name
    this.at = info.at
    this.build()
  }

  build() {
    this.dom = crtDom('a')
    this.dom.classList.add('profile')
    
    this.dom.innerHTML = `
      <div class="profile-photo">
        <img src="${this.img}" alt="${this.name}">
      </div>

      <div class="profile-description">
        <h2>${this.name}</h2>
        <p>${this.at}</p>
      </div>
    `
    return this.dom
  }
}