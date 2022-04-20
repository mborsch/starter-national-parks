/* console.log(document);

const heading = document.querySelector("h1");
console.log(heading);

const value = document.querySelector(".value");
console.log(value);

const button = document.querySelector("button");
console.log(button);

const area = document.querySelector(".area-display");
console.log(area);

const hello = document.querySelector(".hello");
console.log(hello);

const stat = document.querySelector("div .stat");
console.log(stat);

const buttons = document.querySelectorAll("button");
console.log(buttons);

const heading3List = document.querySelectorAll("h3");

//to print each one
for (let element of heading3List.values()) {
  console.log(element);
}

const ratingList = document.querySelectorAll("div .rating-display");
for (let rating of ratingList.values()) {
  console.log(rating);
}

const areas = document.querySelectorAll("div .area-display");
for (let i = 0; i < areas.length; i++) {
  const area = areas[i];
  console.log(area);
}
*/

const descriptions = document.querySelectorAll(".description-display");
// changing the text of the description and making the ellipses an anchor with innerHTML
for (let desc of descriptions.values()) {
  let content = desc.innerText;
  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }
  desc.innerHTML = content;
}

const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

//add a new element with text
const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");
const header = document.querySelector("header");
header.appendChild(newElement);

//removing DOM element
/*
const main = document.querySelector("main");
const park = main.querySelector(".park-display");
main.removeChild(park);
*/

//Event Listeners Section
//for one button
const firstBtn = document.querySelector("button");

firstBtn.addEventListener("click", (event) => {
  console.log(event, event.target);
});

//for all buttons of all parks
const allBtns = document.querySelectorAll(".rate-button");

//iterate through the list of buttons and add an event handler
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.parentNode);
  });
});

//you can manipulate this element in any way..
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});

//sort by eventListener example
//function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

//function for handling the 'nameSorter' click
const nameSorterClickHandler = (event) => {
  //prevents the page from refreshing when clicked
  event.preventDefault();
  //get the main element
  const main = document.querySelector("main");
  //get the list of parks
  const parksList = main.querySelectorAll(".park-display");
  //empty the main element
  main.innerHTML = "";
  //create an arry
  const parksArray = Array.from(parksList);
  //sort the array
  parksArray.sort(sortByName);
  //insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

//Select the 'nameSorter' link
const nameSorter = document.querySelector("#name-sorter");

//Add an event listener
nameSorter.addEventListener("click", nameSorterClickHandler);

//sorting by rating
const sortByRate = (parkA, parkB) => {
  const parkAName = parkA.querySelector("div").innerText;
  const parkBName = parkB.querySelector("div").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

const rateSorterClickHandler = (event) => {
  event.preventDefault();
  const main = document.querySelector("main");
  const ratingsList = main.querySelectorAll(".rating-display");
  console.log(ratingsList);
  main.innerHtml = "";
  const ratingsArray = Array.from(ratingsList);
  const parksList = main.querySelectorAll(".park-display");
  const parksArray = Array.from(parksList);
  console.log(ratingsArray);
  ratingsArray.sort(sortByRate);
  console.log(parksArray.sort(sortByRate));

  ratingsArray.forEach((park) => {
    main.appendChild(park);
  });
};

const rateSorter = document.querySelector("#rating-sorter");
rateSorter.addEventListener("click", rateSorterClickHandler);
