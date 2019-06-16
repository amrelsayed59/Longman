/* jslint plusplus: true, evil: true*/
/*global console, alert, prompt */


// Get Slider Items | Array.from [Es6 Feature]

var sliderImages = Array.from(document.querySelectorAll('.slider-container .main'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number String Element
var slideNumberElement = document.getElementById('slide-number');

// Previous And Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick =  nextSlide;
prevButton.onclick =  prevSlide;

// Create The Main Ul Element
var paginationElement = document.createElement('ul');

// Set ID On Created UI Element
paginationElement.setAttribute('id', 'pagination-ul');

// Crate List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {
    
    // Create The Li
    var paginationItem = document.createElement('li');

    // Set Custom Attribute
    paginationItem.setAttribute('data-index', i);

    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    // Append Items To The Main Ul List
    paginationElement.appendChild(paginationItem);

}

//Add The Created Ul Element To The Page
document.getElementById('indicators').appendChild(paginationElement);


// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Item | Array.form [ES6 Features]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {
paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));
    theChecker();

}


}


//Trigger The Checker Function 
theChecker();


//Next Slide Function
  function nextSlide () {

    if (nextButton.classList.contains('disabled')) {

        //Do Nothing
        return false;

    } else {

        currentSlide++;
        theChecker();

    }
    
}

//Previous Slide Function
function prevSlide () {

    if (prevButton.classList.contains('disabled')) {

        //Do Nothing
        return false;

    } else {

        currentSlide--;
        theChecker();
    }
}

//Create The Checker Function
function theChecker() {
    'use strict';
    //Set The Slide Number
    slideNumberElement.textContent = (currentSlide) + ' of ' + (slidesCount);
    

    //Remove All Active Classes
    removeAllActive();

    //Set Active Class On Current Slide
    sliderImages[currentSlide - 1].classList.add('active');

    //Set Active On Current Pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    // Check if Current Slide is The First
    if (currentSlide == 1) {

        //Add Disabled Class on Previous Button
        prevButton.classList.add('disabled');

    } else {

        //Remove Disabled Class From Previous Button
        prevButton.classList.remove('disabled');

    }

     // Check if Current Slide is The Last
     if (currentSlide == slidesCount) {

        //Add Disabled Class on Next Button
        nextButton.classList.add('disabled');

    } else {

        //Remove Disabled Class From Next Button
        nextButton.classList.remove('disabled');

    }
}

// Remove All Active Classes From Images And Pagination Bullets
function removeAllActive() {

    // Loop Through Images
    sliderImages.forEach(function (img) {

        img.classList.remove('active');

    }) ;

    // Loop Through Pagination Bullets
    paginationsBullets.forEach(function (bullet) {

        bullet.classList.remove('active')

    });

}