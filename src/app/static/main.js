// function edit(id) {
//     var edit_element = document.querySelector("#" + id);
//     edit_element.removeAttribute("readonly");
// }
//
// function test() {
//     alert("a");
// }
//
// function setImage(target) {
//     var reader = new FileReader();
//     reader.onload = function (e) {
//         document.getElementById("icon").setAttribute('src', e.target.result);
//     }
//     reader.readAsDataURL(target.files[0]);
// };
//
// // みや追加分
// const buttonOpen_follow = document.getElementById('modalOpen_follow');
// const modal_follow = document.getElementById('easyModal_follow');
// const buttonClose_follow = document.getElementsByClassName('modalClose_follow')[0];
//
// const buttonOpen_followed = document.getElementById('modalOpen_followed');
// const modal_followed = document.getElementById('easyModal_followed');
// const buttonClose_followed = document.getElementsByClassName('modalClose_followed')[0];
//
// //ボタンがクリックされた時
// //フォローの表示
// buttonOpen_follow.addEventListener('click', modalOpen_follow);
// function modalOpen_follow() {
// 　　modal_follow.style.display = 'block';
// };
//
// //バツ印がクリックされた時
// buttonClose_follow.addEventListener('click', modalClose_follow);
// function modalClose_follow() {
// 　　modal_follow.style.display = 'none';
// };
//
// //モーダルコンテンツ以外がクリックされた時
// addEventListener('click', outsideClose_follow);
// function outsideClose_follow(e) {
// 　　if (e.target == modal_follow) {
// 　　modal_follow.style.display = 'none';
// 　　};
// };
//
// //ボタンがクリックされた時
// //フォロワーの表示
// buttonOpen_followed.addEventListener('click', modalOpen_followed);
// function modalOpen_followed() {
// 　　modal_followed.style.display = 'block';
// };
//
// //バツ印がクリックされた時
// buttonClose_followed.addEventListener('click', modalClose_followed);
// function modalClose_followed() {
// 　　modal_followed.style.display = 'none';
// };
//
// //モーダルコンテンツ以外がクリックされた時
// addEventListener('click', outsideClose_followed);
// function outsideClose_followed(e) {
// 　　if (e.target == modal_followed) {
// 　　modal_followed.style.display = 'none';
// 　　};
// };
