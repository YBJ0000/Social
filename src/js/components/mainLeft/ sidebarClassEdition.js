export default class Sidebar {
  sidebarInfo = null
  dom = null

  constructor(sidebarInfo) {
    this.sidebarInfo = sidebarInfo
    this.build()
  }

  build() {
    this.#createSidebar()
  }

  #createSidebar() {
    this.dom = document.createElement('div')
    this.dom.classList.add('sidebar')
    this.sidebarInfo.forEach(item => {
      const sidebarItem = this.#createSideBarItem(item)
      this.dom.appendChild(sidebarItem)
    })
  }

  #createSideBarItem(item) {

    const sidebarItem = this.#createBasicSideBarItem(item)
    const icon = this.#createIcon(item)
    const title = this.#createTitle(item)
  
    sidebarItem.appendChild(icon)
    sidebarItem.appendChild(title)
    return sidebarItem
  }
  
  #createBasicSideBarItem(item) {
    const sidebarItem = document.createElement('a')
    sidebarItem.classList.add('menu-item')
    sidebarItem.classList.add(item.name)
    return sidebarItem
  }
  
  #createIcon(item) {
    const span = document.createElement('span')
    const i = document.createElement('i')
    item.icon_class_list.forEach(iconClass => {
      i.classList.add(iconClass)
    })
    span.appendChild(i)
    return span
  }
  
  #createTitle(item) {
    const h2 = document.createElement('h2')
    h2.textContent = item.name
    return h2
  }

}



// const sideBar = new Sidebar(sidebar)