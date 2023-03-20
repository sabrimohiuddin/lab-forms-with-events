
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const error = document.querySelector('p');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const input = document.getElementById('list');
  const text = input.value;

  if (!text) {
    error.textContent = 'Error. Todo cannot be empty';
    return;
  }

  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
  input.value = '';
});

ul.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.style.textDecoration = 'line-through';
  }
});





// const list = document.querySelector("form");
//       list.addEventListener("submit" , (event) => {
//       event.preventDefault();

//     const unOrdered = document.querySelector("ul")
//     const listText = document.getElementById("list").value;

//     if (listText){
//         const newLi = document.createElement("li")
//         newLi.textContent = listText
//         unOrdered.append(newLi)
//     }
// })


// const formElement = document.getElementById('form')
//       formElement.addEventListener("submit", (event) => {
//       event.preventDefault();

//     const listElement = document.createElement('li');
//     const textInputValue = event.target.testInput.value;

//     listElement.textContent = textInputValue;

//     listElement.addEventListener('click', handleClick => {
//     handleClick.target.style.textDecoration = "line-through";

//     })
//         const unorderedListElement = document.querySelector('ul');
//         unorderedListElement.append(listElement);
//         event.target.testInput.value = '';

//     })

