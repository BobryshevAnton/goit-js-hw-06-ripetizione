const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ulList = document.querySelector( '#ingredients' );

const li = document.createElement( 'li' );




const mass = ingredients.map( ( item ) => {
  
  const li = document.createElement( 'li' );

  li.textContent = ( item );
  li.classList.add( 'item' );

  return li;
  
})

ulList.append(...mass)



