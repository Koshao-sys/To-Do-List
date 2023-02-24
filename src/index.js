import './style.css';
import { Todolist } from '../modules/list.js';
import { updateStatus, clearButton, checkboxListeners } from '../modules/status.js';

const lists = new Todolist();

lists.loadItems();

const inputTodo = document.getElementById('input-todo');
const enterClick = document.getElementById('enter');
enterClick.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputTodo.value) {
    const check = document.querySelectorAll('.chk01');
    let ind = 1;
    ind += check.length;
    lists.addList(inputTodo.value, ind);
  }
  checkboxListeners();
  inputTodo.value = '';
});

const chkBox = document.querySelectorAll('.chk02 input');
for (let i = 0; i < chkBox.length; i += 1) {
  chkBox[i].addEventListener('change', () => {
    const chkStatus = chkBox[i].checked;
    const val = chkBox[i].value;
    updateStatus(chkStatus, val);
  });
}

const clearAll = document.getElementById('btnClear');
clearAll.onclick = () => {
  clearButton();
};

window.onload = () => {
  lists.todo = JSON.parse(localStorage.getItem('todo'));
  for (let i = 0; i < chkBox.length; i += 1) {
    lists.todo[i].completed = false;
  }
  localStorage.setItem('todo', JSON.stringify(lists.todo));
};