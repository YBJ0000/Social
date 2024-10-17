import './index.css';
import { sidebar } from "./data/db.json"

const mainLeft = document.querySelector('.main-left')
mainLeft.innerHTML = ""

const sideBar = document.createElement('div')
sideBar.classList.add('sidebar')
mainLeft.appendChild(sideBar)

console.log(mainLeft);

sidebar.forEach((item) => {
  createSideBarItem(item)
})

const homeDom = document.querySelector('.Home')
console.log(homeDom);

homeDom.addEventListener('click', () => {
  homeDom.classList.toggle('btn')
  homeDom.classList.toggle('btn-primary')
})

function createSideBarItem(item) {
  const sidebarItem = document.createElement('a')
  sidebarItem.classList.add('menu-item')
  const span = document.createElement('span')
  const i = document.createElement('i')
  item.icon_class_list.forEach(iconClass => {
    i.classList.add(iconClass)
  })
  sidebarItem.classList.add(item.name)
  const h2 = document.createElement('h2')
  h2.textContent = item.name
  
  span.appendChild(i)
  sidebarItem.appendChild(span)
  sidebarItem.appendChild(h2)
  sideBar.appendChild(sidebarItem)
}
