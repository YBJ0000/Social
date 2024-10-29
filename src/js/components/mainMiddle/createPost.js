import { crtDom } from "@/js/utils";
export const create_post = (profile) => {
  const form = crtDom('form');
  form.classList.add('create-post');
  form.innerHTML = `
    <div class="profile-photo">
      <img src="${profile.img_src}">
    </div>
    <input type="text" name="post" id="create-post" placeholder="What's on your mind, ${profile.name} ?" >
    <input type="submit" value="Post" class="btn btn-primary" >
  `
  return form
}