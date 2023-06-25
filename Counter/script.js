const counter1 = document.querySelector('#counter');


function increment()
{ 
    let val  = parseInt(counter1.innerText);
    val++;
    counter1.innerText = val;

};


function decrement()
{ 
    let val  = parseInt(counter1.innerText);
    val--;
    counter1.innerText = val;

};