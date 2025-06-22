const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})
const socialLinks = {
    "github-header": "https://github.com/sainiharsh121",
    "linkedin-header": "https://www.linkedin.com/in/harsh-saini-a044ab2ba/",
   
    "github-footer": "https://github.com/sainiharsh121",
    "linkedin-footer": "https://www.linkedin.com/in/harsh-saini-a044ab2ba/",
   
};
Object.keys(socialLinks).forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.style.cursor = "pointer";
        el.addEventListener("click", () => {
            window.open(socialLinks[id], "_blank");
        });
    }
});



// EmailJS integration
  


  window.addEventListener("DOMContentLoaded", () => {
    emailjs.init("j1yG-hYTwdso76RoA"); // Replace with your EmailJS Public Key

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_h03ljtu", "template_kxoi85h", this) // Replace with your actual IDs
        .then(() => {
          alert("✅ Message sent successfully!");
          form.reset(); // clear the form
        }, (error) => {
          alert("❌ Failed to send message.\n\n" + JSON.stringify(error));
        });
    });
  });