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
const elementsToAnimate = document.querySelectorAll(
  "h2, p, h4, .design-explanation p, h1, .hero h4"
);

console.log("Elements to animate:", elementsToAnimate);

// Configure the Intersection Observer
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      console.log("Intersection entry:", entry);

      if (entry.isIntersecting) {
        // Add a class to trigger the animation when element is in view
        console.log("Element is intersecting:", entry.target);
        entry.target.classList.add("animate-in");
      } else {
        // Optionally, remove the class when element is not in view
        console.log("Element is not intersecting:", entry.target);
        entry.target.classList.remove("animate-in");
      }
    });
  },
  { threshold: 0 }
); // Adjust threshold as needed

// Observe each element
elementsToAnimate.forEach((element) => {
  console.log("Observing element:", element);
  observer.observe(element);
});
