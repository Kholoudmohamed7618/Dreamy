// Start Settings Box

// Check If There is Local Storage color
let mainColor = localStorage.getItem('color_option');

console.log(mainColor);

if (mainColor !== null) {
  // console.log ('local storage is not impety');
  // console.log (localStorage.getItem ('color_option'));
  document.documentElement.style.setProperty('--main-color',mainColor);

  // Remove Active Class From Colors List Items
  document.querySelectorAll('color-list li').forEach (elemnt => {

    elemnt.classList.remove('active');

    // Add Active Class On Element With Data Color === LOcal Storage
    if (element.dataset.color === mainColor) {

      // Add Active Class
      element.classList.add('active');
    }    
  });
}

// Random Background Option 
let backgroundOption = true;

// Variable To Control The Background Interval 
let backgroundInterval;

// Check if There Is Local Storage Background Item 
let backgroundLocalItem = localStorage.getItem('background_option');

// Check if Random Background Local Storage Not Empty
if ( backgroundLocalItem !== null) {

  if ( backgroundLocalItem === 'true') {

    backgroundOption = true;

  }else {
    backgroundOption = false;
  }
}

// Remove Active Class From All Spans 
document.querySelectorAll('.random-back span').forEach(element => {

  element.classList.remove('active');

});

if (backgroundLocalItem === 'true') {

  document.querySelector('.random-back .yes').classList.add('active');

}else {

  document.querySelector('.random-back .no').classList.add('active');
}

// Toggle Spin Class On Icon
document.querySelector ('.toggle-settings .fa-gear').onclick = function () {
  // Toggle Class Fa-spin For Rotation On Self
  this.classList.toggle ('fa-spin');

  // Toggle Class Open On Main Settings Box
  document.querySelector ('.settings-box').classList.toggle ('open');
};
//Switch color
const colorLi = document.querySelectorAll ('.colors-list li');

// Loop On All List Items
colorLi.forEach (li => {

  // Click on Every List Items
  li.addEventListener ('click', e => {

    // Set Color On Root
    document.documentElement.style.setProperty ('--main-color',e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem ('color_option', e.target.dataset.color);

    
    // Remove Active Class From All Children
    e.target.parentElement.querySelectorAll ('.active').forEach (elemnt => {
      elemnt.classList.remove ('active');
    });

    // Add Active Class Itself
    e.target.classList.add ('active');
  });
});

// Switch Random Background Option
const randomBack = document.querySelectorAll ('.random-back span');

// Loop On All Spans 
randomBack.forEach (span => {

  // Click on Every Span 
  span.addEventListener ('click', e => {

    // Remove Active Class From All Spans
    e.target.parentElement.querySelectorAll ('.active').forEach (elemnt => {

      elemnt.classList.remove ('active');
    });

    // Add Active Class Itself
    e.target.classList.add ('active');

    if (e.target.dataset.background === 'yes') {

      backgroundOption = true;
      randomizeImgs();

      localStorage.setItem('background_option', true);

    }else {

    
      backgroundOption = false;
      
      clearInterval(backgroundInterval);
      localStorage.setItem('background_option', false);
    }
  });
});

// End Settings Box

// Start Landing Page

// Select Landing Page
let landingPage = document.querySelector ('.landing-page');

//Get Array of Imgs
let imgsArray = ['05.jpg', '`10.jpg', '12.jpg', '04.jpg', '06.jpg'];

// Function To Randomize Imgs
function randomizeImgs(){

  if (backgroundOption === true) {

    backgroundInterval = setInterval (() => {

      // Get Random Number
      let randomNumber = Math.floor (Math.random () * imgsArray.length);
    
      // Change Background Imgs
      landingPage.style.backgroundImage =
        'url("imgs/' + imgsArray[randomNumber] + '")';
    }, 10000);
  }
};
randomizeImgs();
// End Landing Page

// Select Skills Selectors
let ourSkills = document.querySelector('.skills');

window.onscroll = function () {
  
  // Skills offset Top
  let skillsOffsetTop = ourSkills.OffsetTop;

  // Skills Outer Height 
  let skillsOuterHeight = ourSkills.outerHeight;

  // Window Height 
  let windowHeight = window.innerHeight;

  // Window Scroll Top
  let windowScrollTop = window.pageYOffset;

  if(windowScrollTop < ((skillsOffsetTop + skillsOuterHeight) - windowHeight)){

    let allSkills = document.querySelectorAll('.skill-box .skill-progress span');

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;
    });

  }
};

// Create Popup With The Image
let ourGellery = document.querySelectorAll('.imgs-box img');

ourGellery.forEach(img => {

  img.addEventListener('click', (e) => {

    // Create Overlay Element
    let overlay = document.createElement('div');

    // Add Class To Overlay
    overlay.classList = 'popup-overlay';

    // Append Overlay To Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement('div');
    
    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    if (img.alt !== null) {

      // Create Heading
      let imgHeading = document.createElement('h3');

      // Create Text For Heading 
      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading 
      imgHeading.appendChild(imgText);

      // Append The Heading To The Popup box
      popupBox.appendChild(imgHeading);
    }

    // Create The Image
    let popupImage = document.createElement('img');

    // Set Image Source 
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To The Body
    document.body.appendChild(popupBox);

    // Create The Close Span
    let closeButton = document.createElement('span');

    // Create The close Button Text
    let closeButtonText = document.createTextNode('x');

    // Append Text To close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button
    closeButton.className = 'close-button';

    // Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);
    

  });
});

// Close Popup
document.addEventListener('click', (e) => { 

  if (e.target.className == 'close-button') {

    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector('.popup-overlay').remove();
  }

});

// Select All Bullets
const allBullets = document.querySelectorAll('.nav-bullets .bullets');

// allBullets.forEach(bullet => {

//   bullet.addEventListener('click', (e) => {

//     document.querySelectorAll(e.target.dataset.section).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

// Select All Links
const links = document.querySelectorAll('.links');

// function scrollOn(element) {

//   element.forEach(ele => {


//     ele.addEventListener('click', e => {
      
//       e.preventDefault();

//       document.querySelectorAll('e.target.dataset.section').scrollIntoView({

//         behavior: 'smooth'
//       });
//     });
//   });
// }
// scrollOn(allBullets);
// scrollOn(links);

// Handle Active State
function handleActive (ev) {

  // Remove Active Class From All Children
  ev.target.parentElement.querySelectorAll('.active').forEach (element => {

    element.classList.remove('active');
  });

  // Add Active Class Onself
  ev.target.classList.add('active');
};


let bulletSpan = document.querySelectorAll('.bullets-option span');

let bulletContainer = document.querySelector('.nav-bullets');

let bulletLocalItem = localStorage.getItem('bullets-option'); 

if (bulletLocalItem !== null) {
  

  bulletSpan.forEach(span => {

    span.classList.remove('active');
  });

  if (bulletLocalItem === 'block') {

    bulletContainer.style.display = 'block';

    document.querySelector('.bullets-option .yes').classList.add('active');

  } else {

    bulletContainer.style.display = 'none';
    document.querySelector('.bullets-option .no').classList.add('active');

  }
}

bulletSpan.forEach(span => {

  span.addEventListener('click' , (e) => {

    if (span.dataset.display === 'show') {
    
      bulletContainer.style.display = 'block';

      localStorage.setItem('bullets-option', 'block');

    } else {

      bulletContainer.style.display = 'none';

      localStorage.setItem('bullets-option', 'none');

    }

    handleActive(e);
  });

});

// Reset Button 
document.querySelector('.reset-options').onclick = function () {

  //localStorage.clear();
  localStorage.removeItem('color_option');
  localStorage.removeItem('background_option');
  localStorage.removeItem('bullets_option');

  // Reload Window
  window.location.reload();

} 

// Toggle Menue
let toggleBtn = document.querySelector('.toggle-menue');
let tLinks = document.querySelector('.links');

toggleBtn.onclick = function (e) {

  // Stop propagation
  e.stopPropagation();

  // Toggle Class -menue-active- on Button
  toggleBtn.classList.toggle('menue-active');

 // Toggle Class -Open- on Links
  tLinks.classList.toggle('open');
};

// Click Anywhere Outside Menu And Toggle Button 
document.addEventListener('click', (e) => {


  if (e.target !== toggleBtn && e.target !== tLinks) {

    if (tLinks.classList.contains('open')) {

      // Toggle Class -menue-active- on Button
      toggleBtn.classList.toggle('menue-active');

      // Toggle Class -Open- on Links
      tLinks.classList.toggle('open');
    }

  }

});

// Stop Propagation on Menue 
tLinks.onclick = function (e) {

  e.stopPropagation();

}

if() {
  
}



