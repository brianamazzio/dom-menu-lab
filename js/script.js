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
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
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

    