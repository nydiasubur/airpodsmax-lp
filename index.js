document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll(".circle");
  const displayImageFront = document.getElementById("display-image-front");
  console.log(
    `displayImageFront element:  ${JSON.stringify(displayImageFront)}`
  );
  const displayImageSide = document.getElementById("display-image-side");

  circles.forEach((circle) => {
    console.log(`displayImageFront element:  ${JSON.stringify(circle)}`);
    circle.addEventListener("click", function () {
      const newFrontImageUrl = this.getAttribute("image-front-url");
      const newSideImageUrl = this.getAttribute("image-side-url");
      displayImageFront.src = newFrontImageUrl;
      displayImageSide.src = newSideImageUrl;
    });
  });
});

// Debounce function to limit the frequency of scroll event
const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

// Select elements to animate

//animation for y axis
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in-y");
      } else {
        entry.target.classList.remove("animate-in-y"); // Delay to match the animation duration
      }
    });
  },
  { threshold: 0.1 }
);

const elementsToAnimate = document.querySelectorAll("h2, p, h4");
elementsToAnimate.forEach((element) => observer.observe(element));

//animation to add fade in and out
const observerFade = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-out");
      } else {
        entry.target.classList.remove("fade-in-out"); // Delay to match the animation duration
      }
    });
  },
  { threshold: 0.1 }
);

const elementsToAnimateFade = document.querySelectorAll("h1, .hero h4, img");
elementsToAnimateFade.forEach((element) => observerFade.observe(element));

//animation to fade
