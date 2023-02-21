/* eslint-disable */
export class todolist {
/* eslint-enable */
  createlist = () => {
    const books = [{ description: 'Wash the dishes', completed: false, index: 1 }, { description: 'Complete To Do List project', completed: false, index: 2 }];
    const todoHolder = document.querySelector('.todo-list');

    const todoContainer = document.createElement('div');
    todoContainer.setAttribute('class', 'todo-Container');
    const todoLabel = document.createElement('p');
    todoLabel.textContent = "Today's To Do";
    const todoIcon = document.createElement('i');
    todoIcon.setAttribute('class', 'fa fa-sync-alt');

    todoContainer.appendChild(todoLabel);
    todoContainer.appendChild(todoIcon);
    todoHolder.appendChild(todoContainer);

    const addItem = document.createElement('div');
    addItem.setAttribute('class', 'addItem-holder');
    const addInput = document.createElement('input');
    addInput.setAttribute('type', 'text');
    addInput.setAttribute('placeholder', 'Add to your list...');
    const enterItem = document.createElement('i');
    enterItem.setAttribute('class', 'fa fa-arrow-right');

    addItem.appendChild(addInput);
    addItem.appendChild(enterItem);
    todoHolder.appendChild(addItem);

    for (let x = 0; x < books.length; x += 1) {
      const checkItems = document.createElement('div');
      checkItems.setAttribute('class', 'todo-lists');
      checkItems.innerHTML = `
        <div class="chk01">
            <input type="checkbox" value="${books[x].index}">
            <p>${books[x].description}</p>
        </div>
        <i class="fa fa-ellipsis-v"></i>
      `;
      todoHolder.appendChild(checkItems);
    }

    const clearBtn = document.createElement('button');
    clearBtn.setAttribute('class', 'clear-btn');
    clearBtn.textContent = 'Clear all completed';
    todoHolder.appendChild(clearBtn);
  }
}
