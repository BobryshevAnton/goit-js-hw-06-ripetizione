
const body = document.querySelector( "body" );
const spanColor = document.querySelector( ".color" );
const buttonChangeColor = document.querySelector( ".change-color" );



buttonChangeColor.addEventListener( 'click', handleClick );
 
function handleClick () {

 const color = getRandomHexColor();
  spanColor.textContent = color;

  body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${ Math.floor( Math.random() * 16777215 ).toString( 16 ) }`;
 
}

