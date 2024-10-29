import { sidebar, profile, highline, cards, message, request } from "@/data/db.json"
import { findDom } from "@/js/utils"
// import sideBar from "./components/mainLeft/sidebar"
// import Sidebar from "./components/mainLeft/ sidebarClassEdition"
import Sidebar from "@/js/components/mainLeft/sidebar"
import Profile from "@/js/components/mainLeft/profile"
import Highline from "@/js/components/mainMiddle/highline"
import { create_message } from "@/js/components/mainRight/createMessage"
import FriendList from "@/js/components/mainRight/friendList"
import RequestList from "./components/mainRight/requestList"
import { create_post as create_post_main_middle } from "./components/mainMiddle/createPost"
import createPost from "./components/mainLeft/createPost"
import { CardList } from "./components/mainMiddle/cardList"


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

const main_left_profile = new Profile(profile)
main_left.appendChild(main_left_profile.dom)

const sideBar = new Sidebar(sidebar)
main_left.appendChild(sideBar.dom)

const main_left_createPost = createPost()
main_left.appendChild(main_left_createPost)

// MainMiddle
const main_middle = findDom('.main-middle', main_container)
const main_middle_highline = new Highline(highline).build()
main_middle.appendChild(main_middle_highline)
const main_middle_create_post = create_post_main_middle(profile)
main_middle.appendChild(main_middle_create_post)
const main_middle_cardList = new CardList(cards).build()
main_middle.appendChild(main_middle_cardList)

// MainRight
const main_right = findDom('.main-right', main_container)
const main_right_message = create_message()
main_right.appendChild(main_right_message)
const main_right_friend_list = new FriendList(message).build()
main_right_message.appendChild(main_right_friend_list)
const main_right_request_list = new RequestList(request).build()
main_right.appendChild(main_right_request_list)


export {
  navbar,
  navbar_container,
  navbar_container_logo,
  navbar_container_searchBar,
  navbar_create,
  main,
  main_container,
  main_left,
  sideBar,
  main_left_createPost,
  main_right,
  main_right_message
}