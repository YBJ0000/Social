import { crtDom } from "@/js/utils"

export class CardList {
  #info = null
  #dom = null

  constructor(info = []) {
    this.#info = info
  }

  #build = () => {
    this.#dom = crtDom()
    this.#dom.classList.add('card')
    this.#info.forEach(card => {
      this.#dom.appendChild(new Card(card).build())
    })

    return this.#dom
  }

  get build() {
    return this.#build
  }

  get dom() {
    return this.#dom
  }
}

class Card {
  #info = null
  #dom = null

  constructor(info = {}) {
    this.#info = info
  }

  #build = () => {
    this.#dom = crtDom()
    this.#dom.classList.add('info')

    this.#dom.appendChild(new InfoProfile(this.#info.profile).build())
    this.#dom.appendChild(new InfoPicture(this.#info.picture).build())
    this.#dom.appendChild(new InfoControl(this.#info.control).build())
    this.#dom.appendChild(new InfoComment(this.#info.comment).build())

    return this.#dom
  }

  get build() {
    return this.#build
  }
}


class InfoProfile {
  #info = null
  #dom = null

  constructor(info = {}) {
    this.#info = info
  }

  #build = () => {
    this.#dom = document.createElement('div');
    this.#dom.classList.add('info-profile');

    this.#dom.innerHTML = `
      <div class="profile">
        <div class="profile-photo">
          <img src="${this.#info.src}">
        </div>
        <div class="profile-description">
          <h2>${this.#info.name}</h2>
          <p>${this.#info.position}, ${this.#info.time}</p>
        </div>
      </div>
      <i class="uil uil-ellipsis-h"></i>
    `

    return this.#dom
  }

  get build() {
    return this.#build
  }

  get dom() {
    return this.#dom
  }
}

class InfoPicture {
  #info = null
  #dom = null
  constructor(info = {}) {
    this.#info = info
  }

  #build = () => {
    this.#dom = document.createElement('div')
    this.#dom.classList.add('info-picture')

    this.#dom.innerHTML = `
      <img src="${this.#info.img_src}">
    `
    return this.#dom
  }

  get build() {
    return this.#build
  }

  get dom() {
    return this.#dom
  }
}

class InfoControl {
  #info = null
  #dom = null
  constructor(info = {}) {
    this.#info = info
  }

  #build = () => {
    this.#dom = document.createElement('div')
    this.#dom.classList.add('info-control')
    this.#dom.innerHTML = `
      <div class="main-control">
        <i class="uil uil-heart control_heart"></i>
        <i class="uil uil-comment-dots"></i>
        <i class="uil uil-share-alt"></i>
      </div>
      <i class="uil uil-bookmark"></i>
    `
    return this.#dom
  }

  get build() {
    return this.#build
  }

  get dom() {
    return this.#dom
  }
}

class InfoComment {
  #info = null
  #dom = null
  constructor(info = {}) {
    this.#info = info
  }

  #build = () => {
    this.#dom = document.createElement('div')
    this.#dom.classList.add('info-comment')

    this.#createProfileList()
    this.#createCommentInfo()
    this.#createViewBtn()
    return this.#dom
  }

  #createProfileList = () => {
    const fatherDom = this.#dom
    const childDom = document.createElement('div')
    childDom.classList.add('profile-photo-list')

    this.#createPhotoList(childDom)
    this.#createLikeInfo(childDom)
    fatherDom.appendChild(childDom)
  }

  #createPhotoList = (fatherDom) => {
    this.#info.img_src_list.forEach(url => {
      const img = document.createElement('img')
      img.classList.add('profile-photo')
      img.src = url
      fatherDom?.appendChild(img)
    })
  }

  #createLikeInfo = (fatherDom) => {
    const dom = document.createElement('span')
    dom.classList.add('like-info')
    dom.innerHTML = `
      Liked by <strong> ${this.#info.first_people_name}</strong> and <strong> ${this.#info.like_peoples_number}</strong> others
    `
    fatherDom?.appendChild(dom)
  }

  #createCommentInfo = () => {
    const dom = document.createElement('span')
    dom.classList.add('comment-info')
    dom.textContent = this.#info.comment_info
    this.#dom.appendChild(dom)
  }

  #createViewBtn = () => {
    const dom = document.createElement('span')
    dom.classList.add('view-btn')
    dom.textContent = `View all ${this.#info.view_number} comments`
    this.#dom.appendChild(dom)
  }

  get build() {
    return this.#build
  }

  get dom() {
    return this.#dom
  }
}