const form = document.querySelector('.add-todo');
const input = document.querySelector('.inputValue');
const button = document.querySelector('.button');
const ul = document.querySelector('.todos-elements');
const present = new Date()

const addTodo = (value) => {
  ul.innerHTML += `<li>${value} ${present.getDate()}/${present.getMonth()}/${present.getFullYear()} </li>`;
  event.target.reset()
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const value = input.value;
  addTodo(value);
});

ul.addEventListener('click', (event) => {
  const removeLi = event.target
  removeLi.remove()
})



