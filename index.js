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
