// // Your code goes here
// console.log('yes')

// // var selectA = document.querySelectorAll(.nav-container .nav .nav-link);

// homeLink.addEventListener(
//    'click', // string with the name of the event
//    () => {
//        // things we want happening when this 
//        //link get clicked
//        console.log("the link got clicked");
//    }
// )

// function clickEventHandler(event) {
//     event.preventDefault()
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     console.log(event.target)
//     console.log(event.currentTarget);
//   }

// document.querySelector('nav').addEventListener('click', clickEventHandler)

// //attatch a 'click' event listener to the header element
// //and console.log('')

// document.querySelector('header').addEventListener('click', clickEventHandler)

// document.body.addEventListener('click',clickEventHandler)

// document.addEventListener('click',clickEventHandler)

// window.addEventListener('click', clickEventHandler)


// Task 2: Create Unique Event Listeners
//  Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:
//  mouseover
//  keydown
//  wheel
//  drag / drop
//  load
//  focus
//  resize
//  scroll
//  select
//  dblclick

// test.addEventListener("mouseover", function( event ) {   
//     // highlight the mouseover target
//     event.target.style.color = "orange";



const navColoring = document.querySelector(".nav-container .nav");
navColoring.addEventListener("mouseover", function(event){
    event.target.style.color ="orange";
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    },false);

const eventTarget = document.querySelector("body")


eventTarget.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 65) {
        return console.log("Yes, you press 'a'");
    }
    });

function zoom(event) {
    event.preventDefault();
    
    scale += event.deltaY * -0.01;
    
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
    
    // Apply scale transform
    advImg.style.transform = `scale(${scale})`;
    }
    
    let scale = 1;
    const advImg = document.querySelector('div .img-content');
    // busImage.onwheel = zoom;

    advImg.addEventListener('wheel', zoom);



    var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropping") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropping") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropping") {
    event.target.style.background = "";
    // dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);


window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

const form = document.getElementById('form');

form.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
},true);

// const heightOutput = document.querySelector('#height');
// const widthOutput = document.querySelector('#width');

// function reportWindowSize() {
//   heightOutput.textContent = window.innerHeight;
//   widthOutput.textContent = window.innerWidth;
// }

// console.log(window.addEventListener('resize', reportWindowSize));
function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    
    // Display result inside a div element
    document.querySelector(".container .intro .bus").innerHTML = "Width: " + w + ", " + "Height: " + h;
}
 
// Attaching the event listener function to window's resize event
console.log(window.addEventListener("resize", displayWindowSize));



    window.addEventListener('scroll', () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;

        if (Math.ceil(scrolled) === scrollable) {
            alert(`You've reached the bottom`);
        }
    });

function logSelection(event) {
    const log = document.querySelector('.home .intro .log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
        log.textContent = `You selected this country: ${selection}`;
    }
    
    const input = document.querySelector('input');
    input.addEventListener('select', logSelection);   


const biggerBus = document.querySelector('.bus');

biggerBus.addEventListener('dblclick', function (e) {
    biggerBus.classList.toggle('large');
});

