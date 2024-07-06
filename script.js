// Smooth Scrolling for Anchor Links
document.querySelectorAll('.header a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
// document.querySelectorAll('.header a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//       const target = document.querySelector(this.getAttribute('href'));
//       if (target) {
//         target.scrollIntoView({
//           behavior: 'smooth'
//         });
//       }
//     });
//   });