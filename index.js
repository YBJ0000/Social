import { buttonGroupToggle } from '@/js/func/ButtonGroupToggle';
import './index.css';
import { 
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
  main_right_message } from '@/js/common';

const buttonGroup = main_right_message.querySelectorAll('span')
buttonGroupToggle(buttonGroup)