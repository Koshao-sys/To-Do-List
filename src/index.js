import './style.css';
import { Todolist } from '../modules/list.js';

const lists = new Todolist();

if (localStorage.getItem('todo')) {
  lists.todo = JSON.parse(localStorage.getItem('todo'));
  lists.createlist();
}

const inputTodo = document.getElementById('input-todo');
const enterClick = document.getElementById('enter');
enterClick.addEventListener('click', () => {
  if (inputTodo.value) {
    const check = document.querySelectorAll('.chk01');
    let ind = 1;
    ind += check.length;
    lists.addList(inputTodo.value, ind);
  }
  inputTodo.value = '';
});