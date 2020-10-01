const form = document.querySelector('.add');
const list = document.querySelector('.todos');

function generateTemplate(todo) {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
    `;
    list.innerHTML += html;
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const todo = form.add.value.trim();
    if(todo.length>0){
        generateTemplate(todo);
        form.reset();
    }
});

// Delete todos
list.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});