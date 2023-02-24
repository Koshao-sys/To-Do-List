import { Todobject } from './todo.js';

const list = new Todobject();

export function updateStatus(stat, ind) {
  list.todo = JSON.parse(localStorage.getItem('todo'));
  for (let i = 0; i < list.todo.length; i += 1) {
    // eslint-disable-next-line eqeqeq
    if (list.todo[i].index == ind) {
      list.todo[i].completed = stat;
    }
  }
  localStorage.setItem('todo', JSON.stringify(list.todo));
}

export function checkboxListeners() {
  const chkBox = document.querySelectorAll('.chk02 input');
  for (let i = 0; i < chkBox.length; i += 1) {
    chkBox[i].addEventListener('change', () => {
      const chkStatus = chkBox[i].checked;
      const val = chkBox[i].value;
      updateStatus(chkStatus, val);
    });
  }
}

export function clearButton() {
  list.todo = JSON.parse(localStorage.getItem('todo'));
  list.todo = list.todo.filter((obj) => obj.completed === false);
  list.todo.forEach((item, index) => {
    item.index = index + 1;
  });
  localStorage.setItem('todo', JSON.stringify(list.todo));
  checkboxListeners();
}