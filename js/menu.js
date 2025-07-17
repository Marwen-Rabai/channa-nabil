// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  const aside = document.querySelector(".layout__aside");
  const button = document.querySelector(".layout__menu-toggle");
  const icon = document.querySelector(".menu-toggle__icon");
  const layout = document.querySelector(".layout");
  const content = document.querySelector(".content__page");

  // Check if elements exist before adding event listeners
  if (!aside || !button || !icon) {
    console.warn('Menu elements not found');
    return;
  }

  // Ensure menu starts in closed state
  aside.classList.remove("layout__aside--active");
  icon.classList.remove("fa-xmark");
  icon.classList.add("fa-bars");

  function toggleMenu() {
    let visible = document.querySelector(".layout__aside--active");
    if (!visible) {
      aside.classList.add("layout__aside--active");
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      aside.classList.remove("layout__aside--active");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  }

  // Add both click and touch events for better mobile support
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleMenu();
  });

  button.addEventListener("touchstart", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });

  button.addEventListener("touchend", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleMenu();
  });

//SOLVE IT
// icon.addEventListener("click", (event) => {
//   let visible = aside.classList.contains("layout__aside--active");
//   if (!visible) {
//     aside.classList.add("layout__aside--active");
//     icon.classList.remove("fa-bars");
//     icon.classList.add("fa-xmark");
//   } else {
//     aside.classList.remove("layout__aside--active");
//     icon.classList.remove("fa-xmark");
//     icon.classList.add("fa-bars");
//   }
// });

  //TO CLOSE MENU WHEN CLICKING OUTSIDE OF IT
  document.addEventListener("click", (event) => {
    // console.log(event.target.classList)
    // console.log( document.querySelector(".layout__aside").classList.contains("layout__aside--active"))
    // console.log(event.target === content)

    if (
      aside.classList.contains("layout__aside--active") 
      &&
      !aside.contains(event.target)
      &&
      !button.contains(event.target)
    ) {
      console.log(event.target)
      aside.classList.remove("layout__aside--active");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

    }

  });


  //HIDE MENU ON RESIZE SCREEN
  window.addEventListener("resize", () => {
   let size = parseInt(document.body.clientWidth);
   if(size < 1060){
      aside.classList.remove("layout__aside--active");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

   }
  });

}); // Close DOMContentLoaded function