export function findDom(str, dom = document) {
  return dom.querySelector(str)
}

export function crtDom(str, dom = document) {
  return dom.createElement(str)
}