/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * 01 SelectNodes.md
*/

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

// Your code goes here...
const allItems = document.querySelectorAll('.item');
console.log(allItems);


/**
 * @task
 * Select the main container by the id of "main"
 * Store it in the main constant
 * Example: const main = <Your code>
 * */

// Your code goes here
const main = document.querySelector('#main');
console.log(main);

/**
 * @task
 * Select the favorites container by id of "favs"
 * Store it in the favs constant
 * Example: const favs = <Your code>;
 */

// Your code goes here
const favs = document.querySelector('#favs');
console.dir(favs);


/**
 * @task
 * Create the updateCollections(id, direction) function that follows the list of requirements:
 * Takes an argument of the item id (number)
 * Take an argument of direction as a string value of 'toMain' or 'toFavs'
 * Moves the element from the current parent to the new parent (from main to favs or vice versa)
 * Changes the icon of the element: fa-heart-circle-plus for main, fa-heart-crack for favs items.
 */

// Your code goes here
const updateCollections = (id, direction) => {
  const elementId = document.getElementById(id);
  if (direction === 'toFavs') {
    favs.append(elementId);
    elementId.firstElementChild.classList.remove("fa-heart-circle-plus");
    elementId.firstElementChild.classList.add("fa-heart-crack");
  } else if (direction === 'toMain') {
    main.append(elementId);
    elementId.firstElementChild.classList.remove("fa-heart-crack");
    elementId.firstElementChild.classList.add("fa-heart-circle-plus");
  }
};

// const updateCollections = (id, direction) => {
//   let element = document.getElementById(id)
//   const value = element.parentNode.id == 'main' && direction === 'toFavs' ? ['fa-heart-crack', 'favs'] : ['fa-heart-circle-plus', 'main'];
//   parent = document.getElementById(value[1])
//   element.innerHTML = `
//     <i class="fa-solid ${value[0]}"></i>
//     Card Title ${id}
//   `

//   parent.appendChild(element);
// };






/**
 * @task
 * Iterate through the every item in allItems NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Get the current item's parent id ('main' or 'favs')
 * * Get the current item id (a number value)
 * * Set the direction constant to be equal to 'toFavs' or 'toMain', based off the current location
 * * The direction means the collection to move the item into, when the item is clicked
 * * If the correct item's location is the parent of id 'main' -> the direction is 'toFavs'
 * * If the correct item's location is the parent of id 'favs' -> the direction is 'toMain'
 * * Make the updateCollections function call, assign the item Id and the direction defined above
 */

// Your code goes here...
allItems.forEach((item) => {
  item.addEventListener('click', () => {
    const collection = item.parentElement.id;
    const id = item.id;
    let direction;

    if (collection === 'main') {
      direction = 'toFavs';
    } else if (collection === 'favs') {
      direction = 'toMain';
    }

    updateCollections(id, direction);
  });
})


// allItems.forEach((item) => {
//   item.addEventListener('click', e => {
//     const parentId = e.target.parentNode.id
//     const id = e.target.id;
//     let direction = parentId === 'main' ? 'toFavs' : 'toMain'
//     updateCollections(id, direction);
//   })
// });

