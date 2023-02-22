/* eslint-disable import/prefer-default-export */
export class Todolist {
  createlist = () => {
    const books = [{ description: 'Wash the dishes', completed: false, index: 1 }, { description: 'Complete To Do List project', completed: false, index: 2 }];
    const todoHolder = document.querySelector('.todolists');

    for (let x = 0; x < books.length; x += 1) {
      const checkItems = document.createElement('li');
      checkItems.setAttribute('class', 'chk01');
      checkItems.innerHTML = `
        <div class="chk02">
          <input type="checkbox" value="${books[x].index}">
          <label>${books[x].description}</label>
        </div> 
        <i class="fa fa-ellipsis-v"></i>
      `;
      todoHolder.appendChild(checkItems);
    }
  }
}
