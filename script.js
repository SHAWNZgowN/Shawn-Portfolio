//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click",  () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    } 

    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    } 

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxUtA7DxerkyefgM5ErqQom1dGunV_xbbefR0gMIE5lWkjzePpj4mgcJerdoVvlGLAh/exec';
const form = document.forms['submit-to-google-sheet'];

document.addEventListener('DOMContentLoaded', () => {
  const msg = document.getElementById("msg");

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Show "Sending..." immediately
    msg.innerHTML = "Sending...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(() => {
        msg.innerHTML = "Message Sent Successfully!";
        setTimeout(() => {
          msg.innerHTML = ""; // Clear message after 2 seconds
        }, 5000);
        form.reset(); // Reset the form fields
      })
      .catch((error) => {
        msg.innerHTML = "Failed to send message. Please try again!";
        setTimeout(() => {
          msg.innerHTML = ""; // Clear message after 2 seconds
        }, 5000);
        console.error('Error!', error.message);
      });
  });
});






