const list = document.querySelector( '#categories' );

const ulList = document.querySelectorAll( '.item' );

console.log( `Number of categories: ${ list.children.length }` );

ulList.forEach( ( item ) => {
    console.log( `Category: ${item.children[ 0 ].textContent}` );
    console.log(`Category: ${item.children[ 1 ].children.length}`)
})

// console.log( `Number of categories: ${ ulList.length }` );