const inputSize = document.querySelector( "#font-size-control" );
const spanResize = document.querySelector( "#text ");

spanResize.style.fontSize = inputSize.value = "56px";


inputSize.addEventListener( 'input', handleSize );

function handleSize (event) {
    spanResize.style.fontSize = event.currentTarget.value + "px"

}
// const input = document.querySelector( "#font-size-control" );
// const span = document.querySelector( "#text" );

// span.style.fontSize = input.value = "56px";
// input.addEventListener( "input", handlerClick );

// function handlerClick ( event ) {
//     span.style.fontSize = event.currentTarget.value + "px";
// };