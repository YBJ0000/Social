import { sidebar } from "../../data/db.json"
import { findDom } from "./utils"
// import sideBar from "./components/mainLeft/sidebar"
// import Sidebar from "./components/mainLeft/ sidebarClassEdition"
import Sidebar from "./components/mainLeft/sidebarClassOptimize"


// Navbar

const navbar = 
  findDom('nav')
const navbar_container = 
  findDom('.container', navbar)
const navbar_container_logo = 
  findDom('.logo', navbar_container)
const navbar_container_searchBar = 
  findDom('.search-bar', navbar_container)
const navbar_create = 
  findDom('.create', navbar_container)


// Main
const main = 
  findDom('main')
const main_container = 
  findDom('.container', main)

// MainLeft
const main_left = 
  findDom('.main-left', main_container)

// const sidebar = sideBar
// main_left.appendChild(sidebar)

const sideBar = new Sidebar(sidebar)
main_left.appendChild(sideBar.dom)

// MainMiddle

// MainRight

export {
  navbar,
  navbar_container,
  navbar_container_logo,
  navbar_container_searchBar,
  navbar_create,
  main,
  main_container,
  main_left,
  sidebar
}