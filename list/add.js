let btn1 = document.querySelector('.button1');
let input = document.querySelector('.text');
let list = document.querySelector('.list');
let ol = document.querySelector('ol');
let btn3 = document.querySelector('.button3');
let toList = document.getElementById('.to-list');

function newAdd(e){
    e.preventDefault();
    if (input.value === ''){
        alert('Enter your text');
    }
    else {
        let li = document.createElement('li');
        li.innerText = input.value.trim();
        ol.appendChild(li);
        let span = document.createElement("span");
        span.innerText = '\u00d7';    // x - üçün kod
        li.appendChild(span);

    }
    input.value = '';

}

    ol.addEventListener('click', function(del){
   if( del.target.tagName == 'SPAN'){
    del.target.parentElement.remove();
   }
})

   btn3.addEventListener('click', function () {
    let toList = document.querySelector('.to-list');
    let c = true;
    
  
    btn3.addEventListener('click', function () {
      sortListItems();
    });

function sortListItems() {
    let items = Array.from(toList.getElementsByTagName('li'));
    items.sort((a, b) => {
        let a1 = a.innerText.trim().toLowerCase();
        let b1 = b.innerText.trim().toLowerCase();
        if (c) {
          return a1.localeCompare(b1);
        } 
        else if(!c){
          return b1.localeCompare(a1);
        }
      });

      items.forEach(item => item.remove());
      items.forEach(item => toList.append(item));
  
     
    }
});


btn1.addEventListener('click', newAdd);



