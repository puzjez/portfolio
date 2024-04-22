const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click',() => {
        document.body.classList.remove('nav-open');
    })
})

document.getElementById('twitter-link').addEventListener('click', function(event) {
    event.preventDefault();
  
    alert("Sorry, I don't have Twitter at the moment. 🥺");
  });

  //test
 // Function to add animation class when the page loads
 /*
function addAnimationClass() {
    const title = document.querySelector('.section__title--intro');
    const subtitle = document.querySelector('.section__subtitle--intro');

    // Add animation class after a delay
    setTimeout(() => {
        title.classList.add('animated');
    }, 1000); // 1000 milliseconds = 1 second delay

    setTimeout(() => {
        subtitle.classList.add('animated');
    }, 2000); // 2000 milliseconds = 2 second delay
}

window.addEventListener('DOMContentLoaded', addAnimationClass);
*/
function addAnimationClass() {
    const title = document.querySelector('.section__title--intro');
    const subtitle = document.querySelector('.section__subtitle--intro');

    // Add animation class after a delay
    setTimeout(() => {
        title.classList.add('slide-in-left');
        subtitle.classList.add('slide-in-right');
    }, 500); // 500 milliseconds = 0.5 second delay
}

window.addEventListener('DOMContentLoaded', addAnimationClass);