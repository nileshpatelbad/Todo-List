const addForm = document.addfrm;
const textItem = addForm.add;
const ul = document.querySelector(".todos");

const addItem = (item) => {
  let str = ` <li
    class="list-group-item d-flex justify-content-between aling-items-center"
  >
    <span>${item}</span>
    <i class="fa-regular fa-trash-can"></i>
  </li>`;
  ul.innerHTML += str;
};
ul.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    //click krne pr tag name dege
    e.target.parentElement.remove();
  }
});
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (textItem.value.length !== 0) {
    addItem(textItem.value);
  }
  textItem.value = "";
});
const searchList = (str) => {
  let all_li = ul.children; //all_li is a html collection
  for (let li of all_li) {
    if (li.innerText.toLowerCase().includes(str) === false) {
      //str li ke innertext me aa raha hai match karega
      li.classList.add("filtered");
    } else {
      li.classList.remove("filtered");
    }
  }
};
let searchText = document.querySelector(".search input");
searchText.addEventListener("keyup", (e) => {
  searchList(searchText.value.toLowerCase().trim());
});
