let imageArea = document.querySelector("images");
let unorderedList = document.querySelector("ul");
// let image1 = document.querySelector("#image-1")
// let image2 = document.querySelector("#image-2")
// let image3 = document.querySelector("#image-3")

function lineThrough() {
  let listItem = document.querySelector("li");
  listItem.style.textDecoration = "line-through";
}
lineThrough();

function setURL(id, url) {
  let imageId = `#${id}`;
  let newImage = document.querySelector(imageId);
  newImage.src = url;
}

setURL(
  "image-1",
  "https://t4.ftcdn.net/jpg/00/97/58/97/240_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
);
setURL(
  "image-2",
  "https://t3.ftcdn.net/jpg/02/95/94/94/240_F_295949484_8BrlWkTrPXTYzgMn3UebDl1O13PcVNMU.jpg"
);
setURL(
  "image-3",
  "https://t4.ftcdn.net/jpg/01/82/25/35/240_F_182253513_g1U1140bP8g7Y9fyhrv8S3eRcHYpRlVy.jpg"
);

function deleteListItem() {
  let listItem = document.querySelector("li");
  listItem.remove();
}

deleteListItem();
deleteListItem();

function fontSize(id, fontSize) {
  let iD = `#${id}`;
  let element = document.querySelector(iD);
  element.style.fontSize = `${fontSize}px`;
}

fontSize("heading", 40);

let image4 = document.createElement("img");
image4.src =
  "https://t4.ftcdn.net/jpg/01/82/25/35/240_F_182253513_g1U1140bP8g7Y9fyhrv8S3eRcHYpRlVy.jpg";

function addElement(element) {
  let list = document.querySelector("#arguments");
  list.append(element);
}
addElement(image4);

function image30(img) {
  img.style.height = "30px";
}

image30(image4);

function invisible(element) {
  element.className = "invisible";
}

//invisible(image4)

function newLI(text) {
  let newListItem = document.createElement("li");
  newListItem.innerText = text;
  return newListItem;
}

let item_1 = newLI("this is a new list item");
let item_2 = newLI("this is another list item");

let arguments = document.querySelector("#arguments");
arguments.append(item_1, item_2);

function createHeader(headerSize, text) {
  let newHeader = document.createElement(`h${headerSize}`);
  newHeader.innerText = text;
  return newHeader;
}

let newHead = createHeader("1", "hello world");
arguments.append(newHead);
