const inputName = document.querySelector( '#name-input' );
const outputMessage = document.querySelector( '#name-output' );

inputName.addEventListener( 'input', handleSubmit );

function handleSubmit () {
     inputName.value === "" ?outputMessage.textContent ="Ananimus":outputMessage.textContent = inputName.value;
}