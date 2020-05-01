// Task 1.0
// Select and cache the <main>element in a variable named mainEl.
let mainEl = document.querySelector('main');

// Task 1.1
// Set the background color of mainEl to the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)';


// Task 1.2
// Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML= '<h1> SEI Rocks!</h1>';

// Task 1.3
// Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr');



// Task 2.0
// select and cache <nav id
let topMenuEl = document.querySelector('#top-menu');

// Task 2.1 
// set height of the topMenuEl to 100%
topMenuEl.style.height = '100%';

// Task 2.2 
// Set the background color of topMenuEl to the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3 
// Add a class of flex-around to topMenuEl
topMenuEl.className = 'flex-around';



// Task 3.0
var menuLinks = [
  {text: 'about', 
  href: '/about'},

  {text: 'catalog', 
  href: '#', 
  subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},

  {text: 'orders', 
  href: '#' , 
  subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},

  {text: 'account', 
  href: '#', 
  subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},

];

// Task 3.1 
// Iterate over the entire menuLinks array and for each "link" object:
    

    for(let menuLink of menuLinks) {
        // Create an <a> element.
        let aTag = document.createElement('a');
    
        // On the new element, add an href attribute with its value set to the href property of the "link" object.
        aTag.setAttribute('href', menuLink.href);

        // Set the new element's content to the value of the textproperty of the "link" object.
        aTag.innerHTML= menuLink.text;

        // Append the new element to the topMenuEl element.
        topMenuEl.appendChild(aTag);
        
    };


// Task 4.0
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl
let subMenuEl = document.querySelector('#sub-menu');

// Task 4.1
// Set the height subMenuElelement to be 100%.
subMenuEl.style.height = '100%';

// Task 4.2
// Set the height subMenuElelement to be 100%.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Task 4.3
// Add the class of flex-around to the subMenuElelement.
subMenuEl.className = 'flex-around';

// Task 4.4
// Set the CSS position property of subMenuElto the value of absolute.
subMenuEl.style.position = 'absolute';

// Task 4.5
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0';

// Task 5.0
// Update the menuLinksarray in script.js 
// see update in "task 3.0"

// Task 5.1
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
// Declare a global showingSubMenu variable and initialize it to false;

let topMenuLinks = topMenuEl.querySelectorAll('a'); 
console.log(topMenuLinks);

let showingSubMenu = false; 

// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault() method.
// The second line of code function should immediately return if the element clicked was not an <a> element.
// console.log the content of the <a> to verify the handler is working.

/*///////// START EVENT LISTENER ////////*/
topMenuEl.addEventListener('click', function(evt){
  
  evt.preventDefault();
  if (evt.target.tagName !== "A") {
    return ;
  };

  // Task 5.3
  // Next in the event listener, if the clicked <a> link has a class of active:
  // Set the showingSubMenu to false.
  // Set the CSS top property of subMenuEl to 0.

  // THIS IS SAYING IF I CLICK ON A TOP MENU LINK THAT IS ALREADY OPEN, CLOSE THE SUBMENU
  if (evt.target.classList.contains('active')){
    evt.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  };

  // THIS IS SAYING IF I CLICK ON A TOP MENU LINK, RESET/REMOVE ALL SUBMENUS
  
  // Task 5.4
  // Next, the event listener should remove a class name of active 
  //from each <a> element in topMenuLinks- whether the activeclass exists or not.
  
  for(let i=0; i< topMenuLinks.length; i++) { 
    // Remove the active class from the clicked <a> element
    topMenuLinks[i].classList.remove('active');
    
  };
  
  //Task 5.5
  // evt.target.classlist.remove('active');
  evt.target.classList.add('active');


  // Task 5.6 
  // Set showingSubMenu to true if the clicked <a> element's "link" object 

  // within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), 
  // otherwise, set it to false.
  
  let linkObj = [];

  for (let i=0; i < menulinks.length; i++) { 
    if (evt.target.innerText === menuLinks[i].text) {

      if (menuLinks[i].subLinks) {
        showingSubMenu = true;
        linkObj = menuLinks[i].sublinks;
      }
    } else {
        showingSubMenu = false;
    };
  };  

/******** LEFT OFF HERE **********/


//Task 5.7
//Next in the event listener...

// If showingSubMenu is true:
  //if (showingSubMenu === true) {
    //Call a buildSubMenu function passing to it the subLinks array for the clicked <a>element.
      // pass sublinks array for the clicked <a> elements here
      // (my note) first we need to make sure that the thing is clicked by seeing if there was the class active applied..
      // unsure if we really need evt. target or just 
      
      /*
      
      if evt.target.classList.contains('active') {
      
        // (my note) because this is passes for each clicked <a> element, use a for loop shown below
        
        for (let i=0; i < menulinks.subLinks.length; i++) {
        // (my note) this is where you take the elements in the sublinks array and create/append as an aTag
        buildSubMenu ();

        // Set the CSS top property of subMenuEl to 100%.
        subMenuEl.style.top = '100%';
         };
      } else {
        //Otherwise (showingSubMenuis false): Set the CSS top property of subMenuEl to 0.
        subMenuEl.style.top = '0';
      };
*/

   // };
    
  });


/*

// Task 5.8
// Code the buildSubMenu function so that it:

let function buildSubMenu(){

  // Clears the contents of subMenuEl.
  //?????????????????????????????????????///

  // Iterates over the subLinks array passed as an argument; and for each "link" object:
  for(let subLink of subLinks) {

    // Create an <a> element.
    let aTag = document.createElement('a');

    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    aTag.setAttribute('href', subLink.href);

    // Set the new element's content to the value of the textproperty of the "link" object.
    aTag.innerHTML= subLink.text;

    // Append the new element to the subMenuEl element.
    subMenuEl.appendChild(aTag);
    
};


};


// Task 6.0
//Attach a delegated 'click' event listener to subMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault()method.
// The second line of code function should immediately return if the element clicked was not an <a>element.
// console.log the content of the <a>to verify the handler is working.

subMenuEl.addEventListener('click', function(evt){
  evt.preventDefault();

  if (evt.target.tagName !== "A") {
    return ;
  };

    // Task 6.1
    // Next, the event listener should:
    // Set showingSubMenu to false.
   showingSubMenu = false;

    // Set the CSS top property of subMenuEl to 0.
    subMenuEl.style.top = '0';

    // Task 6.2
    // Remove the class name of active from each <a> element in topMenuLinks - whether the active class exists or not.
    subMenuLinks.children.classList.remove('active');

    // Task 6.3
    // Update the contents of mainEl to the contents of the <a> element, within an <h1>, clicked within subMenuEl.
    mainEl.innerHTML= subMenuEl.h1.aTag.text;

    // Task 6.4
    // If the ABOUT link is clicked, an <h1>about</h1>should be displayed.
    if (evt.target.innerHTML === 'ABOUT') {
      document.getElementById('pageName').innerHTML = 'ABOUT';
    } else { return;};
    
}


*/