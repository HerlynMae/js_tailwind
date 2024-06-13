// header

//we will select the header nav and toggle menu
// const variable cannot be changed once it has been declared.
const nav = document.querySelector(".header__nav");
const menu = document.querySelector(".toggle__menu");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
  menu.classList.toggle("open");
});

// slider

var slider = tns({
  container: ".slider__content",
  items: 1,
  autoplay: true,
});

// accordion

//we will select all the h4 in dropdown__item
const dropdowns = document.querySelectorAll("h4");
// const icon = document.querySelector("i");

// forEach in JS is looping which means we will iterate the array
// or it will perform repeatedly since we have 3 accordion
// loop used to repeat a set of instructions
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    dropdown.nextElementSibling.classList.toggle("open");
    //we will select each icon so that we can rotate the icon once we click the question
    dropdown.querySelector("i").classList.toggle("open");
    // icon.classList.toggle("open");
  });
});

// tabs
const tabs = document.querySelectorAll(".tabs__link");
const contents = document.querySelectorAll(".tabs__image");
//the purpose of this is to put an active in all images at one

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActiveTab(); //remove active tab is just a variable
    tab.classList.add("active");
    const activeContent = document.querySelector(`#${tab.id}-content`); // $ it is used as its alias and used it to know the string that needs to be imported in JS and it is shorthand for the getElementByID method
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

//remove active tab is just a variable
function removeActiveTab() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}

function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}

// progress bar
const spans = document.querySelectorAll(".progress__bar span");
//The dataset property itself can be read, but not directly written.
//Instead, all writes must be to the individual properties within the dataset,
//which in turn represent the data attributes.

// To use innerHTML, you need to select the HTML element
// that you would like to modify and then set its content using the innerHTML property.

spans.forEach((span) => {
  span.style.width = span.dataset.width;
  span.innerHTML = span.dataset.width;
});
