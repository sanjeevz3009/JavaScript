function dragStartHandler(e) {
  console.log(e);
  const data = e.target.id;
  console.log(data);
  e.dataTransfer.setData('text/plain', data);
}

function dragOverHandler(e) {
  e.preventDefault();
}

function dropHandler(e) {
  const data = e.dataTransfer.getData('text/plain');
  console.log(data);
  const dragged = document.getElementById(data);
  e.currentTarget.append(dragged);
}

const dropzones = document.querySelectorAll('.dropzone');
console.log(dropzones);
for (const dropzone of dropzones) {
  dropzone.addEventListener('dragover', dragOverHandler);
  dropzone.addEventListener('drop', dropHandler);
}

const divs = document.querySelectorAll('div');
for (const div of divs) {
  div.addEventListener('dragstart', dragStartHandler);
}

