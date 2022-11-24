const textEnter = document.querySelector( '#validation-input' );

const number= textEnter.getAttribute("data-length" );

textEnter.addEventListener( 'blur', handleInput );


function handleInput () {
    
    if ( textEnter.value.length !== Number( number ))  {
        textEnter.classList.add( 'invalid' );
        textEnter.classList.remove( 'valid' );
        
    }
    else {
        textEnter.classList.add( 'valid' );
        textEnter.classList.remove( 'invalid' );
    }
}



