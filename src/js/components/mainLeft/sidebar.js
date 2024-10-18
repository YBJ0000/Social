import { sidebar } from "../../../../data/db.json"

const sideBar = document.createElement('div')
sideBar.classList.add('sidebar')

sidebar.forEach((item) => {
  // 打包
  createSideBarItem(item)
})

function createSideBarItem(item) {

  const sidebarItem = createBasicSideBarItem(item)
  const icon = createIcon(item)
  const title = createTitle(item)

  sidebarItem.appendChild(icon)
  sidebarItem.appendChild(title)
  sideBar.appendChild(sidebarItem)
}

function createBasicSideBarItem(item) {
  const sidebarItem = document.createElement('a')
  sidebarItem.classList.add('menu-item')
  sidebarItem.classList.add(item.name)
  return sidebarItem
}

function createIcon(item) {
  const span = document.createElement('span')
  const i = document.createElement('i')
  item.icon_class_list.forEach(iconClass => {
    i.classList.add(iconClass)
  })
  span.appendChild(i)
  return span
}

function createTitle(item) {
  const h2 = document.createElement('h2')
  h2.textContent = item.name
  return h2
}

console.log(sideBar);

export default sideBar