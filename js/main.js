const testimonialContainer = document.getElementById('testimonial-container');

// Load testimonial data from JSON file
fetch('js/testimonials.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(testimonial => {
      createSlide(testimonial);
    });
    showSlides(0);
    setInterval(() => plusSlides(1), 5000); // Auto slide every 2 seconds
  });

let slideIndex = 0;

function createSlide({ author, image, testimonial }) {
  const slide = document.createElement('div');
  slide.classList.add('slide');

  const img = document.createElement('img');
  img.src = image;

//   const authorElem = document.createElement('div');
//   authorElem.classList.add('author');
//   authorElem.innerText = author;

  const testimonialElem = document.createElement('div');
  testimonialElem.classList.add('testimonial');
  testimonialElem.innerText = testimonial;

  slide.appendChild(img);
//   slide.appendChild(authorElem);
  slide.appendChild(testimonialElem);

  testimonialContainer.appendChild(slide);
}

function showSlides(n) {
  const slides = document.getElementsByClassName('slide');
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'flex';
}

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

/* HEADER ON SCROLL */
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY >= 100) {
    header.style.top = '0px';
    header.style.borderBottom = '1px solid #efefef';
  } else {
    header.style.top = '40px';
    header.style.border = 'none';
  }
});

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

const tabData = {
  dashboard: {
    image: '/assets/features/article editor.png',
    accordions: [
      {
        id: 1,
        icon: '/assets/features/language.png',
        headline: 'Create New Articles',
        accordionBody: 'Accordion Body text goes here.'
      },
      {
        id: 2,
        icon: '/assets/features/category.png',
        headline: 'Organize your knowledge',
        accordionBody: 'Accordion Body text goes here.'
      }
      ,
      {
        id: 3,
        icon: '/assets/features/world.png',
        headline: 'Share Access',
        accordionBody: 'Accordion Body text goes here.'
      }
      ,
      {
        id: 4,
        icon: '/assets/features/send.png',
        headline: 'Helpjuice',
        accordionBody: 'Accordion Body text goes here.'
      }
    ]
  },
  analytics: {
    image: '/assets/features/article editor.png',
    accordions: [
      {
        id: 1,
        icon: '/assets/features/language.png',
        headline: 'Multi-Language Translations',
        accordionBody: 'Accordion Body text goes here.'
      },
      {
        id: 2,
        icon: '/assets/features/category.png',
        headline: 'Test3',
        accordionBody: 'Accordion Body text goes here.'
      }
      ,
      {
        id: 3,
        icon: '/assets/features/world.png',
        headline: 'Abc',
        accordionBody: 'Accordion Body text goes here.'
      }
      ,
      {
        id: 4,
        icon: '/assets/features/send.png',
        headline: 'GoodGame',
        accordionBody: 'Accordion Body text goes here.'
      }
    ]
  },
  editor: {
    image: '/assets/features/article editor.png',
    accordions: [
      {
        id: 1,
        icon: '/assets/features/language.png',
        headline: 'W1',
        accordionBody: 'Accordion Body text goes here.'
      },
      {
        id: 2,
        icon: '/assets/features/category.png',
        headline: 'W443',
        accordionBody: 'Accordion Body text goes here.'
      }
      ,
      {
        id: 3,
        icon: '/assets/features/world.png',
        headline: 'Wasd',
        accordionBody: 'Accordion Body text goes here.'
      }
      ,
      {
        id: 4,
        icon: '/assets/features/send.png',
        headline: 'Qwerty',
        accordionBody: 'Accordion Body text goes here.'
      }
    ]
  },
  customize: {
    image: '/assets/features/article editor.png',
    accordions: [
      {
        id: 1,
        icon: '/assets/features/language.png',
        headline: 'Abcd',
        accordionBody: 'Accordion Body text goes here.'
      },
      {
        id: 2,
        icon: '/assets/features/category.png',
        headline: 'Efgh',
        accordionBody: 'Accordion Body text goes here.'
      }
      ,
      {
        id: 3,
        icon: '/assets/features/world.png',
        headline: 'Hijkl',
        accordionBody: 'Accordion Body text goes here.'
      }
      ,
      {
        id: 4,
        icon: '/assets/features/send.png',
        headline: 'Mnopq',
        accordionBody: 'Accordion Body text goes here.'
      }
    ]
  },
  support: {
    image: '/assets/features/article editor.png',
    accordions: [
      {
        id: 1,
        icon: '/assets/features/language.png',
        headline: 'Rstu',
        accordionBody: 'Accordion Body text goes here.'
      },
      {
        id: 2,
        icon: '/assets/features/category.png',
        headline: 'Vwxyz',
        accordionBody: 'Accordion Body text goes here.'
      }
      ,
      {
        id: 3,
        icon: '/assets/features/world.png',
        headline: 'Access Control',
        accordionBody: 'Accordion Body text goes here.'
      }
      ,
      {
        id: 4,
        icon: '/assets/features/send.png',
        headline: 'Draft, Preview, Publish',
        accordionBody: 'Accordion Body text goes here.'
      }
    ]
  }
};

function createAccordionHTML(accordion) {
  return `
    <div class="accordion">
      <div class="accordion-header" onclick="toggleAccordion(${accordion.id})">
        <img src="${accordion.icon}" alt="Icon">
        <span>${accordion.headline}</span>
      </div>
      <div id="accordion-body-${accordion.id}" class="accordion-body" style="display: none;">
        ${accordion.accordionBody}
      </div>
    </div>
  `;
}

function toggleAccordion(accordionId) {
  const accordionBody = document.getElementById(`accordion-body-${accordionId}`);
  accordionBody.style.display = accordionBody.style.display === 'none' ? 'block' : 'none';
}

function changeTab(tabId) {
  const tabImage = document.getElementById('tab-image');
  const tabContent = document.getElementById('tab-content');

  // Remove "active" class from all tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Add "active" class to the selected tab
  const selectedTab = document.getElementById(tabId);
  selectedTab.classList.add('active');

  // Display accordions
  const accordions = tabData[tabId].accordions;
  const accordionHTML = accordions.map(accordion => createAccordionHTML(accordion)).join('');
  tabContent.innerHTML = accordionHTML;

  tabImage.src = tabData[tabId].image;
}

window.addEventListener('load', function () {
  const dashboardTab = document.getElementById('dashboard');
  dashboardTab.classList.add('active');
  changeTab('dashboard');
});


const testimonials = [
  {
    "industry": "software",
    "impact": "employee-onboarding",
    "size": "200-1000",
    "image_url": "assets/testimonials/reservations.png",
    "testimonial_text": "“Set up was easy and the Helpjuice team was prompt with customization requests. Intuitive interface. It makes it easy to create and deploy a rich content library.”",
    "author_name": "Manoj, Chief Strategy Officer, Reservations.com",
    "case_study_link": "https://helpjuice.com/case-studies/1542688-Thanks%20to%20Helpjuice%20KraussMaffei%20Technologies%20reduced%20training%20sessions%20by%2050%%20with%20their%20global%20sales%20team,%20as%20they%20can%20answer%20most%20of%20their%20questions%20by%20themselves",
    "author_img": "/assets/testimonials/author1.png"
  },
  {
    "industry": "it",
    "impact": "employee-onboarding",
    "size": "200-1000",
    "image_url": "assets/testimonials/jiminny.png",
    "testimonial_text": "“We have found Helpjuice to have more features than we expected, important reporting, wonderful customizability, and great customer support.”",
    "author_name": "Will, Software Engineer, Teem",
    "case_study_link": "https://helpjuice.com/case-studies/epic-engineering-saved-40-hours-per-employee-during-onboarding-thanks-to-helpjuice",
    "author_img": "/assets/testimonials/author3.png"
  },
  {
    "industry": "banking",
    "impact": "employee-kb",
    "size": "1000+",
    "image_url": "/assets/testimonials/shipt.png",
    "testimonial_text": "“We tried others, but nothing was as customizable as Helpjuice. They even customize your knowledge base for you”",
    "author_name": "Ross, Director of Growth, Shipt.com",
    "case_study_link": "https://helpjuice.com/case-studies/wefunder-sees-a-reduction-of-at-least-700-emails-a-week-since-they-started-using-helpjuice",
    "author_img": "/assets/testimonials/author.png"
  },
  {
    "industry": "banking",
    "impact": "employee-kb",
    "size": "1000+",
    "image_url": "/assets/testimonials/webpunch.png",
    "testimonial_text": "“We love the customized features, the customer support has been great. It’s very easy to use (like using Google Docs or Microsoft Word). We chose Helpjuice as the pricing was good too.”",
    "author_name": "Ginger, Co-Owner, Web Punch",
    "case_study_link": "https://helpjuice.com/case-studies/wefunder-sees-a-reduction-of-at-least-700-emails-a-week-since-they-started-using-helpjuice",
    "author_img": "/assets/testimonials/author4.png"
  }
  // Add more testimonials as needed
];


const testimonialsPerPage = 4;  // Number of testimonials to display per page
let currentPage = 1;  // Current page number

// Function to filter testimonials based on selected filters
function filterTestimonials(selectedIndustry, selectedImpact, selectedSize) {
  const filteredTestimonials = testimonials.filter(testimonial => {
    return (selectedIndustry === 'all' || testimonial.industry === selectedIndustry) &&
           (selectedImpact === 'all' || testimonial.impact === selectedImpact) &&
           (selectedSize === 'all' || testimonial.size === selectedSize);
  });
  return filteredTestimonials;
}

// Event listener for filter dropdowns
function updateFilteredTestimonials() {
  const selectedIndustry = document.getElementById('industry-filter').value;
  const selectedImpact = document.getElementById('impact-filter').value;
  const selectedSize = document.getElementById('size-filter').value;

  const filteredTestimonials = filterTestimonials(selectedIndustry, selectedImpact, selectedSize);

  // Reset pagination to first page
  currentPage = 1;

  // Display filtered testimonials based on the selected filters and page
  handlePagination(currentPage);
}

// Event listener for filter dropdowns
document.getElementById('industry-filter').addEventListener('change', updateFilteredTestimonials);
document.getElementById('impact-filter').addEventListener('change', updateFilteredTestimonials);
document.getElementById('size-filter').addEventListener('change', updateFilteredTestimonials);

// Function to display testimonials for the given page
function displayTestimonials(testimonials, page) {
  const startIndex = (page - 1) * testimonialsPerPage;
  const endIndex = startIndex + testimonialsPerPage;
  const testimonialsContainer = document.getElementById('testimonial-items');
  testimonialsContainer.innerHTML = '';  // Clear previous content

  for (let i = startIndex; i < endIndex && i < testimonials.length; i++) {
    const testimonial = testimonials[i];
    const testimonialItem = document.createElement('div');
    testimonialItem.classList.add('testimonial-item');
    testimonialItem.setAttribute('data-industry', testimonial.industry);
    testimonialItem.setAttribute('data-impact', testimonial.impact);
    testimonialItem.setAttribute('data-size', testimonial.size);

    testimonialItem.innerHTML = `
      <img src="${testimonial.image_url}" alt="Product Image" width="640" height="195">
      <div class="testimonial-content">
      <p class="testimonial-text">${testimonial.testimonial_text}</p>
      <div class="tc-bottom">
      <div class="author">
      <img class="author-img" src="${testimonial.author_img}">
      <p class="author-name"> ${testimonial.author_name}</p>
      </div>
      <a href="${testimonial.case_study_link}" class="read-case-study-button">Read Case Study <img src="/assets/testimonials/arrow_front.svg"></a>
      </div>
      </div>
      
    `;
    
    testimonialsContainer.appendChild(testimonialItem);
  }
}

// Function to handle pagination and display testimonials
function handlePagination(page) {
  const filteredTestimonials = filterTestimonials(
    document.getElementById('industry-filter').value,
    document.getElementById('impact-filter').value,
    document.getElementById('size-filter').value
  );

  const totalPages = Math.ceil(filteredTestimonials.length / testimonialsPerPage);
  displayTestimonials(filteredTestimonials, page);

  // Display pagination controls
  const paginationControls = document.getElementById('pagination-controls');
  paginationControls.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('span');
    pageLink.innerText = i;
    pageLink.classList.add('pagination-link');
    pageLink.addEventListener('click', () => {
      currentPage = i;
      displayTestimonials(filteredTestimonials, i);
    });
    paginationControls.appendChild(pageLink);
  }
}

// Initial display of all testimonials
handlePagination(currentPage);
