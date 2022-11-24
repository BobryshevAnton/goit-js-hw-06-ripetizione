const btnDecrement = document.querySelector( '[data-action="decrement"]' );
const btnIncrement = document.querySelector( '[data-action="increment"]' );
const valueEl = document.querySelector( '#value' );

let totalCounter = 0;

btnDecrement.addEventListener( 'click', handleBtnDecrement );
btnIncrement.addEventListener( 'click', handleBtnIncrement );

function handleBtnDecrement () {
    totalCounter -= 1;
    valueEl.textContent =totalCounter;
};
function handleBtnIncrement () {
    totalCounter += 1;
    valueEl.textContent =totalCounter;
};
window.addEventListener( 'keydown', onIncrementPress );
window.addEventListener( 'keydown', onDecrementPress );

function onIncrementPress ( event ) {
       if(event.key==='+'){
totalCounter += 1;
    valueEl.textContent =totalCounter;
   
}
};
function onDecrementPress ( event ) {
       if(event.key==='-'){
totalCounter -= 1;
    valueEl.textContent =totalCounter;
           
}
};