

// Wait for the page to fully load before hiding the preloader
window.addEventListener('load', function() {
  // Get the preloader element
  var preloader = document.querySelector('.preloader');
  // Hide the preloader after a delay (adjustable)
  setTimeout(function() {
    preloader.style.display = 'none';
    // Show the content
    document.querySelector('.contentA').style.display = 'block';
  }, 2500); // Adjust the delay (milliseconds) to match the preloader animation duration
});


const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".projects");
window.addEventListener("scroll", () => {
  if (window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});

//tabs project for about section

const tabs = document.querySelector(".rightside");
const btns = document.querySelectorAll("button");
const articles = document.querySelectorAll(".content");


tabs.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("live");
    });
    event.target.classList.add("live");
    articles.forEach((article) => {
      article.classList.remove("live");
    })
  }
  const element = document.getElementById(id)
  element.classList.add("live")
})


function openLink(url) {
  window.open(url, '_blank');
}


document.addEventListener('DOMContentLoaded', function () {
  var throttleTimeout;
  var designsDiv = document.querySelector('.designs');
  var triggerPosition = 1.1 * window.innerHeight; // 80vh

  function handleScroll() {
      var scrollPosition = window.scrollY;

      if (scrollPosition >= triggerPosition) {
          designsDiv.classList.add('hide');
      } else {
          designsDiv.classList.remove('hide');
      }
  }

  function throttle(func, delay) {
      if (!throttleTimeout) {
          throttleTimeout = setTimeout(function () {
              func();
              throttleTimeout = null;
          }, delay);
      }
  }

  window.addEventListener('scroll', function () {
      throttle(handleScroll, 100); // Adjust throttle delay as needed
  });
});


//code for the animation at the top page

const leftbox = document.querySelector(".animation1");
const rightbox = document.querySelector(".animation2");

const leftdata = ["ECOMMERCE WEBSITES.", "PERSONAL WEBSITES.", "LANDING PAGES.", "NEWS/BLOGSITES.", "BUSINESS WEBSITES.", "ENTERTAINMENT WEBSITES.", "MEMBERSHIP WEBSITES.", "ORGANIZATION WEBSITES.", "EVENT WEBSITES.", "EDUCATIONAL WEBSITES."];
const rightdata = ["Wordpress customization.", "Web repair/refreshment.", "Payment intergration.", "Speed Optimization.", "Figma to HTML(pixel perfect).", "CSS,HTML and Javascript code.", "React Framework Tasks.", "Hosting Management.", "Web SEO optimization.", "Mock Designs.", "API Intergration.", "WEB CONSULTATION.", "Custom Code Websites.", "✨THIS SITE IS MADE OF RAW CODE."];

let leftindex = 3;
let leftcharacterindex = 1;

let rightindex = 3;
let rightcharacterindex = 1;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function updatetext(careers, container, careerIndex, characterIndex) {
  const paragraphs = container.getElementsByTagName("p");

  const startIndex = careerIndex >= 3 ? careerIndex - 3 : 0;
  const endIndex = careerIndex;

  for (let i = startIndex; i <= endIndex; i++) {
    const paragraph = paragraphs[i - startIndex];
    const span = paragraph.querySelector("span");

    if (i === careerIndex) {
      span.textContent = `${careers[i].slice(0, characterIndex)}`;
    } else {
      span.textContent = `${careers[i]}`;
    }
  }

  characterIndex++;

  if (characterIndex - 1 === careers[careerIndex].length) {
    await sleep(2500);
    characterIndex = 1;
    careerIndex++;
    if (careerIndex === careers.length) {
      careerIndex = 0;
      const firstParagraph = paragraphs[0].cloneNode(true);
      container.appendChild(firstParagraph);
    }
  }

  if (container.children.length > 4) {
    container.removeChild(container.firstChild);
  }

  setTimeout(() => {
    updatetext(careers, container, careerIndex, characterIndex);
  },50);
}

updatetext(leftdata, leftbox, leftindex, leftcharacterindex);
updatetext(rightdata, rightbox, rightindex, rightcharacterindex);



// Get all the link div elements
const linkDivs = document.querySelectorAll('.link-div');

// Function to handle scrolling event
function handleScroll() {
  const windowHeight = window.innerHeight;

  linkDivs.forEach((linkDiv) => {
    const rect = linkDiv.getBoundingClientRect();
    const linkDivTop = rect.top;
    const linkDivHeight = rect.height;

    // Check if the link div is 3/4 on the process of scrolling to the view screen
    if (linkDivTop < windowHeight - (linkDivHeight)) {
      linkDiv.classList.add('open');
    } else {
      linkDiv.classList.remove('open');
    }
  });
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);




document.addEventListener("mousemove", function (event) {
  var customCursor = document.querySelector(".custom-cursor");
  var x = event.clientX;
  var y = event.clientY;
  customCursor.style.left = -20 + x + "px";
  customCursor.style.top = -20 + y + "px";
});


const heightcard = document.querySelectorAll(".card")
const button = document.querySelector(".togglemode")
const inputEl = document.querySelector(".input")
const bodyEl = document.querySelectorAll("div,p,h1,h2,h3,h5")
const logoImage = document.getElementById('logoImage');
console.log(bodyEl)
inputEl.checked = JSON.parse(localStorage.getItem("mod"))


updatebody()

function updatebody() {
  if (inputEl.checked) {

    logoImage.src = 'light-logo.png';
    bodyEl.forEach(
      item => {
        item.classList.add("activated")
      })

  } else {

    logoImage.src = 'dark-logo.png';
    bodyEl.forEach(
      item => {
        item.classList.remove("activated")
      }
    )
  }
}
button.addEventListener("click", () => {

  updatelocalstorage()
  updatebody()
  toggleMode()
  revertMode()
})

function updatelocalstorage() {
  localStorage.setItem("mod",
    JSON.stringify(inputEl.checked)
  )
}
function readmore() {
  heightcard.forEach(
    card => { card.classList.toggle("cardheight") })
}

// Show popup when page loads
// Show popup after a delay

// Execute actions when the page loads
window.onload = function () {
  // Show popup after a delay
  setTimeout(function () {
    document.getElementById("popup").classList.add("popup-visible"); // Add class to make popup visible
  
  
  }, 3000); // Delay in milliseconds (1000 milliseconds = 1 second)

  // Toggle dark mode after 2 seconds
 
  setTimeout(function () {
    toggleMode(); // Call toggleMode function to switch to dark mode
    // Revert back to light mode after 1 second
    setTimeout(function () {
      revertMode(); // Call toggleMode function again to switch back to light mode
    }, 3000); // Delay in milliseconds (1000 milliseconds = 1 second)
  }, 10000); // Delay in milliseconds (2000 milliseconds = 2 seconds)
}

// Toggle between dark mode and light mode
function toggleMode() {
  updatebodyp();

}


function updatebodyp() {
  const love = inputEl.checked; // Store the current state of the checkbox
  document.getElementById("popup").classList.remove("popup-visible");

  if (!love) {

    logoImage.src = 'light-logo.png';
    document.getElementsByClassName("label")[0].style.backgroundColor="rgb(20, 39, 46)"
    document.getElementsByClassName("circle")[0].style.backgroundColor="rgb(255, 255, 255)"
    document.getElementsByClassName("circle")[0].style.transform="translateX(40px)"

    bodyEl.forEach(function (item) {
      item.classList.add("activated");
    });
  } else {
    document.getElementsByClassName("label")[0].style.backgroundColor="rgb(255,255,255)"
    document.getElementsByClassName("circle")[0].style.backgroundColor="rgb(20, 39, 46)"
    document.getElementsByClassName("circle")[0].style.transform="translateX(0px)"
    logoImage.src = 'dark-logo.png';
    bodyEl.forEach(function (item) {
      item.classList.remove("activated");


    });
  }

}
function revertMode() {
  

  if (inputEl.checked) {
    document.getElementsByClassName("label")[0].style.backgroundColor="rgb(20, 39, 46)"
    document.getElementsByClassName("circle")[0].style.backgroundColor="rgb(255, 255, 255)"
    document.getElementsByClassName("circle")[0].style.transform="translateX(40px)"
    logoImage.src = 'light-logo.png';
    bodyEl.forEach(function (item) {
      item.classList.add("activated");

 
    });
  } else {
    document.getElementsByClassName("label")[0].style.backgroundColor="rgb(255,255,255)"
    document.getElementsByClassName("circle")[0].style.backgroundColor="rgb(20, 39, 46)"
    document.getElementsByClassName("circle")[0].style.transform="translateX(0px)"
    logoImage.src = 'dark-logo.png';
    bodyEl.forEach(function (item) {
      item.classList.remove("activated");

  
    });

  }

}
// Close popup
function closePopup() {
  document.getElementById("popup").classList.remove("popup-visible"); // Remove class to hide popup
}

document.getElementById("upworkButton").addEventListener("click", function() {
  window.open("https://www.upwork.com/freelancers/abrahamonyando", "_blank");
});



