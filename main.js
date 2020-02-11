function addImageUrl(id, url) {
  const image = document.querySelector(id);
  
  image.src = url;
}

addImageUrl('#image-1', 'https://dinosaurcowboys.files.wordpress.com/2019/01/2018allosaurus.jpg')
addImageUrl('#image-2', 'https://blogs.plos.org/paleocomm/files/2015/12/Iguanodon_feeding.jpg')
addImageUrl('#image-3', 'https://1.bp.blogspot.com/-QJipmWfotUc/U8PeIPie3rI/AAAAAAAAF6M/dyi86JNDoBY/s1600/Dinosaur+(2000)14.jpg')

function strikeThroughFirstItem() {
  const firstItem = document.querySelector('ul#arguments > li:first-child');

  firstItem.style.textDecoration = 'line-through';
}

strikeThroughFirstItem()


function removeLastLi() {
  const lastLi = document
    .querySelector('ul#arguments')
    .lastElementChild;
  // Or, with one query:
  // const lastLi = document.querySelector('ul > li:last-child');
  lastLi.remove();
}

removeLastLi();
removeLastLi();

function addToList(element, list) {
  list.appendChild(element);
}


function addToArgumentsList(element) {
  document.querySelector('ul#arguments').appendChild(element)

  // Explicit step-by-step way.
  // const arguments = document.querySelector('ul#arguments')
  // arguments.appendChild(element);
}

const newImage = document.createElement('img');
newImage.src = 'https://1.bp.blogspot.com/-QJipmWfotUc/U8PeIPie3rI/AAAAAAAAF6M/dyi86JNDoBY/s1600/Dinosaur+(2000)14.jpg';
newImage.style.height = '60px';

addToArgumentsList(newImage);

function makeSmall(image) {
  image.style.height = '30px';
}

const image2 = document.querySelector('#image-2');
makeSmall(image2);

function makeInvisible(element) {
  element.className = 'invisible';
}

const disappearingTextField = document.querySelector('input');
makeInvisible(disappearingTextField);

function changeFontSize(element, newFontSize) {
  element.style.fontSize = newFontSize;
}

const thing2 = document.querySelector('#thing-2');
changeFontSize(thing2, '5px');

function makeTodo(todoText) {
  const newTodo = document.createElement('li');
  newTodo.innerText = todoText;

  return newTodo;
}

const newTodo = makeTodo('hello')
addToArgumentsList(newTodo);


function makeHeader(text, size) {
  const header = document.createElement('h' + size);
  header.innerText = text;

  return header;
}

const header = makeHeader('I\'m a header', 2);
addToArgumentsList(header);