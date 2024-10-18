export function findDom(str, dom = document) {
  return dom.querySelector(str)
}