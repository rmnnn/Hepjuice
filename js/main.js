const backEndBtn = document.getElementById('back-end-btn');
const frontEndBtn = document.getElementById('front-end-btn');
const iframe = document.getElementById('active-kb');
const textElement = document.querySelector('.text');

backEndBtn.addEventListener('click', () => {
  iframe.src = 'https://alteia.helpjuice.com/dashboard';
  backEndBtn.classList.add('kb-btn-active');
  frontEndBtn.classList.remove('kb-btn-active');
  textElement.innerText = iframe.src; // Update the text with the current URL
});

frontEndBtn.addEventListener('click', () => {
  iframe.src = 'https://help.alteia.com/';
  frontEndBtn.classList.add('kb-btn-active');
  backEndBtn.classList.remove('kb-btn-active');
  textElement.innerText = iframe.src; // Update the text with the current URL
});
const examples = [
  {
    id: 1,
    frontendLink: "https://faq.edding.com/",
    backendLink: "https://example.com/backend1",
    image: "path/to/image1.jpg"
  },
  {
    id: 2,
    frontendLink: "https://help.jiminny.com/",
    backendLink: "https://example.com/backend2",
    image: "path/to/image2.jpg"
  },
  {
    id: 3,
    frontendLink: "https://help.loomispay.com/",
    backendLink: "https://example.com/backend3",
    image: "path/to/image3.jpg"
  },
  {
    id: 4,
    frontendLink: "https://knowledge.expereo.com/",
    backendLink: "https://example.com/backend4",
    image: "path/to/image4.jpg"
  },
  // Add more examples as needed
];
let currentExampleIndex = 0;
let isDashboard = false;  // Default to frontendLink

function updateIframes() {
  const liveExampleIframe = document.getElementById("active-kb");
  const imageKbs = document.querySelectorAll('.image-kb');

  if (isDashboard) {
    liveExampleIframe.src = examples[currentExampleIndex].backendLink;
  } else {
    liveExampleIframe.src = examples[currentExampleIndex].frontendLink;
  }
  
  imageKbs.forEach((image, index) => {
    image.style.backgroundImage = `url(${examples[(currentExampleIndex + index + 1) % examples.length].image})`;
  });

  const textDiv = document.querySelector('.text');
  textDiv.innerHTML = `<a href="${isDashboard ? examples[currentExampleIndex].backendLink : examples[currentExampleIndex].frontendLink}" target="_blank">${isDashboard ? examples[currentExampleIndex].backendLink : examples[currentExampleIndex].frontendLink}</a>`;
}

function switchKB() {
  isDashboard = !isDashboard;
  const switchButton = document.getElementById('switch-kb');
  switchButton.innerText = isDashboard ? 'Switch to live page' : 'Switch to dashboard';
  updateIframes();
}

function changeExample(direction) {
  currentExampleIndex = (currentExampleIndex + direction + examples.length) % examples.length;
  updateIframes();
}

document.getElementById("chev-left").addEventListener("click", () => changeExample(-1));
document.getElementById("chev-right").addEventListener("click", () => changeExample(1));
document.getElementById("switch-kb").addEventListener("click", switchKB);

// Clicking on image-KBs should also change the active KB
const imageKbs = document.querySelectorAll('.image-kb');
imageKbs.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentExampleIndex = (currentExampleIndex + index + 1) % examples.length;
    updateIframes();
  });
});

document.addEventListener("DOMContentLoaded", updateIframes);

/////////////////
// JavaScript to handle tab activation on click
const tabImages = {
  "dashboard-tab": "https://static.helpjuice.com/helpjuice_production/uploads/upload/image/14992/3533253/1696490638437-dashboard-tab.png",
  "articleeditor-tab": "https://static.helpjuice.com/helpjuice_production/uploads/upload/image/14992/3533253/1696490638437-dashboard-tab.png",
  "customization-tab": "https://static.helpjuice.com/helpjuice_production/uploads/upload/image/14992/3533253/1696490638437-dashboard-tab.png",
  "support-tab": "https://static.helpjuice.com/helpjuice_production/uploads/upload/image/14992/3533253/1696490638437-dashboard-tab.png",
  "seo-tab": "https://static.helpjuice.com/helpjuice_production/uploads/upload/image/14992/3533253/1696490638437-dashboard-tab.png",
  // Add other tab IDs and image URLs here
};

// JavaScript to handle tab activation on click
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    console.log('Tab clicked:', tab.id);

    // Remove .tab-active class from all tabs
    tabs.forEach(tab => tab.classList.remove('tab-active'));

    // Add .tab-active class to the clicked tab
    tab.classList.add('tab-active');

    // Update the image source based on the tab's ID from the JSON
    const imageContainer = document.getElementById('image-container');
    const tabImage = document.getElementById('tab-image');
    const tabId = tab.id;
    const imageSrc = tabImages[tabId] || ''; // Get the image URL from the JSON or empty string if not found

    tabImage.src = imageSrc;

    console.log('Classes after click:', tab.classList);
  });
});


////////////////////////////////////////
const sliderContainer = document.getElementById('slider-container');
  let isDown = false;
  let startX;
  let scrollLeft;

  sliderContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - sliderContainer.offsetLeft;
    scrollLeft = sliderContainer.scrollLeft;
  });

  sliderContainer.addEventListener('mouseleave', () => {
    isDown = false;
  });

  sliderContainer.addEventListener('mouseup', () => {
    isDown = false;
  });

  sliderContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderContainer.offsetLeft;
    const walk = (x - startX) * 1;  // Adjust the divisor for slower/faster scrolling
    const maxScroll = sliderContainer.scrollWidth - sliderContainer.offsetWidth;
    const newScrollLeft = Math.max(0, Math.min(maxScroll, scrollLeft - walk));

    if (newScrollLeft === maxScroll) {
      isDown = false;  // Stop scrolling when reaching the end
    }

    sliderContainer.scrollLeft = newScrollLeft;
  });

  const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});
