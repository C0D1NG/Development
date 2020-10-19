var inputEl = document.getElementById('input-field');
var colorsEl = document.getElementsByClassName('color-box');
var btnSaveEl = document.getElementById('btn-save');
var btnDeleteEl = document.getElementById('btn-delete');
var listEl = document.getElementById('listed');

var noteCount = 0;
var activeNote = null;

for (var i = 0; i < colorsEl.length; i++) {
  var color = convertColor(colorsEl[i].style.backgroundColor);
  colorsEl[i].setAttribute('onclick', 'inputColor("' + color + '")');
}

function convertColor(color) {
  var result = w3color(color.toLowerCase());
  return result.valid ? result.toHexString() : '';
}

function inputColor(color) {
  inputEl.style.backgroundColor = color;
}

inputEl.onkeypress = function (event) {
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == '13') {
    btnSaveEl.onclick();
  }
}

btnSaveEl.onclick = function () {
  var text = inputEl.value;
  if (text === '') {
    alert('Please write a note.');
    return;
  }
  var id = noteCount + 1;
  var color = inputEl.style.backgroundColor;
  if (activeNote) {
    document.querySelector('#listed div[id=note' + activeNote + ']').style.backgroundColor = color;
    document.querySelector('#listed div[id=note' + activeNote + '] p').textContent = text;
    document.getElementById("btn-icon").classList.remove("fa-remove");
    document.getElementById("btn-icon").classList.add("fa-eraser");
    activeNote = null;
  } else {
    var textEl = document.createElement('p');
    textEl.setAttribute('class', 'card-text p-3');
    textEl.appendChild(document.createTextNode(text));
    var containerEl = document.createElement('div');
    containerEl.setAttribute('id', 'note' + id);
    containerEl.setAttribute('class', 'card shadow-sm rounded');
    containerEl.setAttribute('onclick', 'editNote(' + id + ')');
    containerEl.style.backgroundColor = color || '#fff';

    containerEl.appendChild(textEl);
    listEl.appendChild(containerEl);

    noteCount++;
  }

  inputEl.value = '';
  inputEl.style.backgroundColor = '#fff';
}

function editNote(id) {
  var itemEl = document.getElementById('note' + id);
  var textItem = itemEl.querySelector('p').textContent;
  activeNote = id;
  inputEl.value = textItem;
  inputEl.style.backgroundColor = itemEl.style.backgroundColor;

  document.getElementById("btn-icon").classList.remove("fa-eraser");
  document.getElementById("btn-icon").classList.add("fa-remove");
}

btnDeleteEl.onclick = function () {
  if (activeNote) {
    var note = listEl.querySelector('div[id=note' + activeNote + ']');
    note.remove();
    activeNote = null;
  }
  inputEl.value = '';
  inputEl.style.backgroundColor = '#fff';
  document.getElementById("btn-icon").classList.remove("fa-remove");
  document.getElementById("btn-icon").classList.add("fa-eraser");
}