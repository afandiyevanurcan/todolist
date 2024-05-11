let btn = document.querySelector('.button');
let btn1 = document.querySelector('.btN');
let up = document.querySelector('i.up');
let down = document.querySelector('i.down');
let inputPart = document.querySelector('.card-input');
let cardList = document.querySelector('.card-list');
let x = document.querySelector('.x');
let input = document.querySelector('input');
let span = document.querySelector('span.validation');
let ol = document.querySelector('ol');

let tasks = [];
let count = 0;

const deleteElement = (id) => {
    tasks.splice(id, 1);
    renderList();
}

const newList = (el) =>{
    el.preventDefault();
    if ( input.value.trim().length) {
        tasks.push(input.value.trim());
        renderList();
        input.value = '';
    } 
 
    inputPart.classList.toggle('none');
}

const inputListChanger = (e) => {
    
    e.preventDefault();
    if ( input.value.trim().length) {
        tasks.push(input.value.trim());
        renderList();
        input.value = '';
    } 
    else {       
        input.value = '';
        span.style.display = 'block';
    }

    inputPart.classList.add('none');
    cardList.classList.remove('none');
}

const renderList = () => {

    ol.innerHTML = '';

    tasks.forEach((task, index) => {
        ol.innerHTML += `
            <li>
                <span class='task-inner'>${index+1}.${ task}</span>
             
              <div class='icon'>  <i class="fa-regular fa-circle-xmark delete-btn" onclick="deleteElement(${index})"></i></div>
            </li>`;
    });
}

const clearInputValue = () => {
    input.value = '';
}

const filterAZ = () => {
    tasks.sort();
    renderList();
}

const filterZA = () => {
    tasks.sort((a, b) => b.localeCompare(a));
    renderList();
}

btn.addEventListener('click', inputListChanger);
btn1.addEventListener('click', newList);
up.addEventListener('click', filterZA);
down.addEventListener('click', filterAZ);
x.addEventListener('click', clearInputValue);

