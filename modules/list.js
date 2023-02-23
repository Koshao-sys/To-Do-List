import { Todobject } from './todo.js';
/* eslint-disable import/prefer-default-export */

export class Todolist {
  constructor() {
    this.todo = [];
  }

  loadItems = () => {
    if (localStorage.getItem('todo')) {
      this.todo = JSON.parse(localStorage.getItem('todo'));
      this.todo == null ? this.todo = [] : this.todo;
      this.createlist();
    }
  }

  addList = (input, ind) => {
    const newList = new Todobject(input, ind);
    this.todo == null ? this.todo = [] : this.todo;
    this.todo.push(newList);
    localStorage.setItem('todo', JSON.stringify(this.todo));
    this.createlist();
  }

  deleteList = (index) => {
    // eslint-disable-next-line eqeqeq
    this.todo = this.todo.filter((obj) => obj.index != index);
    this.todo.forEach((item, index) => {
      item.index = index + 1;
    });
    localStorage.setItem('todo', JSON.stringify(this.todo));
    this.createlist();
  }

  createlist = () => {
    const todoHolder = document.querySelector('.todolists');
    todoHolder.innerHTML = '';
    for (let x = 0; x < this.todo.length; x += 1) {
      const checkItems = document.createElement('li');
      checkItems.setAttribute('class', 'chk01');
      checkItems.setAttribute('id', `chk${this.todo[x].index}`);
      checkItems.innerHTML = `
        <div class="chk02" id="${this.todo[x].index}">
          <input type="checkbox" value="${this.todo[x].index}">
          <label id="${this.todo[x].index}">${this.todo[x].description}</label>
        </div> 
        <button id="btnDel${this.todo[x].index}"><i class="fa fa-ellipsis-v" id="icon-${this.todo[x].index}"></i></button>
      `;
      todoHolder.appendChild(checkItems);
    }
    this.addListeners();
  }

  addListeners = () => {
    const labels = document.querySelectorAll('label');
    for (let x = 0; x < labels.length; x += 1) {
      labels[x].addEventListener('click', () => {
        const lid = `chk${labels[x].id}`;
        const li = document.getElementById(lid);
        li.style.background = '#f7e9c1';
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.classList = 'edit-list';
        inputElement.value = labels[x].innerText;
        inputElement.style.backgroundColor = '#f7e9c1';

        // replace label with input when clicked
        labels[x].parentNode.replaceChild(inputElement, labels[x]);
        const IcoNum = `icon-${labels[x].id}`;
        const iconBox = document.getElementById(IcoNum);
        iconBox.classList = ('fas fa-trash');

        const btNum = `btnDel${labels[x].id}`;
        const btnDel = document.getElementById(btNum);
        btnDel.onclick = () => {
          li.parentNode.removeChild(li);
          this.deleteList(labels[x].id);
        };

        inputElement.focus();

        inputElement.addEventListener('blur', () => {
          labels[x].innerText = inputElement.value;
          li.style.background = 'white';
          // replace input with label if user clicks away or takes away focus
          inputElement.parentNode.replaceChild(labels[x], inputElement);
          inputElement.style.backgroundColor = 'white';
          iconBox.classList = 'fa fa-ellipsis-v';
        });

        inputElement.addEventListener('input', (e) => {
          // eslint-disable-next-line prefer-destructuring
          const value = e.target.value;
          this.todo = JSON.parse(localStorage.getItem('todo'));
          for (let i = 0; i < this.todo.length; i += 1) {
            // eslint-disable-next-line eqeqeq
            if (this.todo[i].index == labels[x].id) {
              this.todo[i].description = value;
            }
          }
          localStorage.setItem('todo', JSON.stringify(this.todo));
        });
      });
    }
  }
}
