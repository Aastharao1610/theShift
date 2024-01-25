gsap.registerPlugin(ScrollTrigger);

function toggleNavMenuVisibility(show) {
  const navUl = document.querySelector("#nav-menu ul");
  const navButton = document.querySelector("#menu-button");
  if (show) {
    navUl.style.display = "block";
    navButton.style.display = "none";
  } else {
    navUl.style.display = "none";
    navButton.style.display = "block";
  }
}

// Create a ScrollTrigger that changes the menu visibility based on the scroll position.
ScrollTrigger.create({
  trigger: "#main", // The element you want to trigger the scroll animation
  start: "top top", // Adjust this threshold as needed
  end: "bottom top", // Adjust this threshold as needed
  onEnter: () => toggleNavMenuVisibility(true),
  onLeaveBack: () => toggleNavMenuVisibility(false),
});

// Initialize Locomotive Scroll and set up the ScrollTrigger
function loco() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

loco();



// gsap.registerPlugin(ScrollTrigger);

// function toggleNavMenuVisibility(show) {
//   const navUl = document.querySelector("#nav-menu ul");
//   const navButton = document.querySelector("#nav-menu button");
//   if (show) {
//     navUl.style.display = "block";
//     navButton.style.display = "none";
//   } else {
//     navUl.style.display = "none";
//     navButton.style.display = "block";
//   }
// }

// // ScrollTrigger.create({
// //   trigger: "#page1",
// //   start: "top 20%",
// //   end: "top 5%",
// //   onEnter: () => toggleNavMenuVisibility(true),
// //   onLeave: () => toggleNavMenuVisibility(false),
// //   onEnterBack: () => toggleNavMenuVisibility(true),
// //   onLeaveBack: () => toggleNavMenuVisibility(false),
// // });
// ScrollTrigger.create({
//   trigger: "#page1",
//   start: "top 80%", // Adjust this threshold as needed
//   end: "top 20%", // Adjust this threshold as needed
//   onEnter: () => toggleNavMenuVisibility(true),
//   onLeave: () => toggleNavMenuVisibility(false),
//   onEnterBack: () => toggleNavMenuVisibility(true),
//   onLeaveBack: () => toggleNavMenuVisibility(false),
// });
// function loco(){
//   gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//  el: document.querySelector("#main"),
//  smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//  scrollTop(value) {
//    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//  getBoundingClientRect() {
//    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//  },
//  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });



// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


// ScrollTrigger.refresh();

// }
// loco()


// gsap.to("#nav-menu ul",{
//   transform:"translateX(-100%) "
// })
var main=document.querySelector("#main")

var crsr=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
crsr.style.left=dets.x+25+"px"
crsr.style.top=dets.y+20+"px"
})

// // Get all video elements with the class "autoplay-video"
// var videoElements = document.querySelectorAll(".autoplay-video");

// // Create an array of video URLs
// var videoUrls = [
//   "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2022/05/19141516/Untitled.mp4",
//   "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2019/07/06141434/JSM.mp4"
// ];

// var activeVideo = 0;

// // Function to handle video ending
// function handleVideoEnd() {
//   activeVideo = (activeVideo + 1) % videoUrls.length;
//   videoElements[activeVideo].currentTime = 0;
//   videoElements[activeVideo].play();
// }

// // Add event listeners to all video elements
// videoElements.forEach(function (videoElement) {
//   videoElement.addEventListener("ended", handleVideoEnd);
// });

// // Play the first video
// videoElements[activeVideo].play();





var videoElements = document.querySelectorAll(".autoplay-video");


var videoUrls = [
    "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2022/05/19141516/Untitled.mp4",
    "https://d17292ff19wl6v.cloudfront.net/v2/wp/wp-content/uploads/2019/07/06141434/JSM.mp4" 
    ];
var activeVideo = 0;

// Function to handle video ending
function handleVideoEnd() {
  activeVideo = (activeVideo + 1) % videoElements.length;
  videoElements[activeVideo].currentTime = 0;
  videoElements[activeVideo].play();
}

// Add event listeners to all video elements
videoElements.forEach(function (videoElement) {
  videoElement.addEventListener("ended", handleVideoEnd);
});

// Play the first video
videoElements[activeVideo].play();

// var box=document.querySelector("#box h1")
// box.addEventListener("mouseenter",function(){
//   gsap.to(box,{
//     x:-80,
//     duration:1,
   
// })
// })
// box.addEventListener("mouseleave",function(){
//   gsap.to(box,{
//     x:0,
//     duration:1,
   
// })
// })

gsap.to("#box h1",{
      x:-80,
      duration:1,
      stagger:1
     
  })
gsap.from("#page1 h1",{
   y:60 ,
   duration:.6,
   opacity:0,
   delay:.8,
   stagger:0.1
})
gsap.from("#nav ul li",{
   y:20 ,
   duration:.6,
   opacity:0,
   delay:.8,
   stagger:0.1
})

// var tl=gsap.timeline({
//   x:-80,
//   duration:2,
  // scrollTrigger:{
  //   trigger:"#box h1",
  //   scroller:"#main",
  //   markers:true,
  //   start:"top 200%",
  //   end:"top 210%",
  //   scrub:3
  //   }
  // )

var box=document.querySelectorAll(".anim")
// console.log(box)
box.forEach(function(elem){
 elem.addEventListener("mouseenter",function(){
 var att=elem.getAttribute("data-image")
 crsr.style.width="40vh"
 crsr.style.height="60vh"
 crsr.style.borderRadius="0"
 
 crsr.style.transition="all ease 0.5s"
 crsr.style.backgroundImage=`url(${att})`
 }
 
 )
 elem.addEventListener("mouseleave",function(){
   elem.style.backgroundColor="transparent"
   crsr.style.width="20px"
 crsr.style.height="20px"
 crsr.style.borderRadius="50%"
 crsr.style.backgroundImage=`none`
  
 })
 
})
gsap.from("#page3 .anim h1",{
 ScrollTrigger:{
 x:100,
 delay:1,
 duration:.6,
 stagger:0.5
 }
})

 