"use strict";

const sectionElements = document.querySelectorAll(".hidden");

const scrollHandler = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      /* 
        remove this else statement if you dont want to
        repeat animations everytime user scroll
      */
      entry.target.classList.remove("active");
    }
  });
});

sectionElements.forEach((section) => scrollHandler.observe(section));
