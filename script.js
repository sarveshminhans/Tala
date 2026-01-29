gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();






var menu=document.querySelector("#fullnav")
var button=document.querySelector("#rnav i")

var flag=0
button.addEventListener("click",function(){
    if(flag==0){
    menu.style.top="0%"
    document.querySelector("#lnav h2").style.color="#2B2B2B" 
    document.querySelector("#rnav h2").style.color="#2B2B2B" 
    document.querySelector("#rnav i").style.color="#2B2B2B"
    document.querySelector("#nav i").style.transform= "rotate(-90deg)" 
    flag=1
    }
    else{
        menu.style.top="-100%"
        flag=0
        document.querySelector("#nav h2").style.color="#D1D1D1"
        document.querySelector("#rnav h2").style.color="#D1D1D1" 
    document.querySelector("#rnav i").style.color="#D1D1D1"
        document.querySelector("#nav i").style.transform= "rotate(0deg)"  
    }
})
var ti=gsap.timeline();
    ti.from("#page1 h1",{
        y:50,
        duration:1,
        opacity:0,
    })
    ti.from("#page1 h2",{
        y:50,
        duration:1,
        opacity:0,
        delay:-.5
    })
    ti.from("#page1 h3",{
        y:50,
        duration:1,
        opacity:0,
        delay:-.5
    })

gsap.to("#p1img",{
    scale:1,
    duration:2,
    scrollTrigger:{
        trigger:"#p1img",
        scroller:"#main",
        scrub:4,
    }
})

gsap.from("#page2 h1",{
    rotateX:"90deg",
    opacity:.2,
    scale:.5,
    duration:2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        scrub:4,
        start:"top 70%",
        end:"top 20%",
    }
    
})

gsap.from("#p3line",{
    width:"20%",
    duration:2,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        scrub:4,
        end:"top 20%",
    }
    
})


document.querySelector("#p3c h1:nth-child(1)").addEventListener("mousemove",function(det){
    document.querySelector("#p3c h1:nth-child(1)").style.color=" black";
    document.querySelector("#p3c h1:nth-child(1)").style.webkitTextStroke = "2px #D1D1D1";
    document.querySelector("#p3r h1:nth-child(1)").style.opacity=1  
})
document.querySelector("#p3c h1:nth-child(1)").addEventListener("mouseleave",function(det){
    document.querySelector("#p3c h1:nth-child(1)").style.color=" #D1D1D1";
    document.querySelector("#p3c h1:nth-child(1)").style.webkitTextStroke = "2px #D1D1D1";
    document.querySelector("#p3r h1:nth-child(1)").style.opacity=0 
})

document.querySelector("#p3c h1:nth-child(2)").addEventListener("mousemove",function(det){
    document.querySelector("#p3c h1:nth-child(2)").style.color=" black";
    document.querySelector("#p3c h1:nth-child(2)").style.webkitTextStroke = "2px #D1D1D1";
    document.querySelector("#p3r h1:nth-child(2)").style.opacity=1  
})
document.querySelector("#p3c h1:nth-child(2)").addEventListener("mouseleave",function(det){
    document.querySelector("#p3c h1:nth-child(2)").style.color=" #D1D1D1";
    document.querySelector("#p3c h1:nth-child(2)").style.webkitTextStroke = "2px #D1D1D1";
    document.querySelector("#p3r h1:nth-child(2)").style.opacity=0 
})

document.querySelector("#p3c h1:nth-child(3)").addEventListener("mousemove",function(det){
    document.querySelector("#p3c h1:nth-child(3)").style.color=" black";
    document.querySelector("#p3c h1:nth-child(3)").style.webkitTextStroke = "2px #D1D1D1";
    document.querySelector("#p3r h1:nth-child(3)").style.opacity=1  
})
document.querySelector("#p3c h1:nth-child(3)").addEventListener("mouseleave",function(det){
    document.querySelector("#p3c h1:nth-child(3)").style.color=" #D1D1D1";
    document.querySelector("#p3c h1:nth-child(3)").style.webkitTextStroke = "2px #D1D1D1";
    document.querySelector("#p3r h1:nth-child(3)").style.opacity=0 
})

document.querySelector("#p3c h1:nth-child(4)").addEventListener("mousemove",function(det){
    document.querySelector("#p3c h1:nth-child(4)").style.color=" black";
    document.querySelector("#p3c h1:nth-child(4)").style.webkitTextStroke = "2px #D1D1D1";
    document.querySelector("#p3r h1:nth-child(4)").style.opacity=1  
})
document.querySelector("#p3c h1:nth-child(4)").addEventListener("mouseleave",function(det){
    document.querySelector("#p3c h1:nth-child(4)").style.color=" #D1D1D1";
    document.querySelector("#p3c h1:nth-child(4)").style.webkitTextStroke = "2px #D1D1D1";
    document.querySelector("#p3r h1:nth-child(4)").style.opacity=0 
})

document.querySelector("#p3c h1:nth-child(5)").addEventListener("mousemove",function(det){
    document.querySelector("#p3c h1:nth-child(5)").style.color=" black";
    document.querySelector("#p3c h1:nth-child(5)").style.webkitTextStroke = "2px #D1D1D1";
    document.querySelector("#p3r h1:nth-child(5)").style.opacity=1  
})
document.querySelector("#p3c h1:nth-child(5)").addEventListener("mouseleave",function(det){
    document.querySelector("#p3c h1:nth-child(5)").style.color=" #D1D1D1";
    document.querySelector("#p3c h1:nth-child(5)").style.webkitTextStroke = "2px #D1D1D1";
    document.querySelector("#p3r h1:nth-child(5)").style.opacity=0 
})

document.querySelector("#p3c h1:nth-child(1)").addEventListener("mousemove",function(det){
    document.querySelector("#mango").style.opacity=1   
     document.querySelector("#mango").style.left=`${det.x -150}px`   
     document.querySelector("#mango").style.top=`${det.y -300}px`
     document.querySelector("#mango").style.transform= "rotate(15deg)"  
})
document.querySelector("#p3c h1:nth-child(1)").addEventListener("mouseleave",function(det){
    document.querySelector("#mango").style.opacity=0
    document.querySelector("#mango").style.transform= "rotate(0deg)" 
})

document.querySelector("#p3c h1:nth-child(2)").addEventListener("mousemove",function(det){
    document.querySelector("#banana").style.opacity=1   
     document.querySelector("#banana").style.left=`${det.x -150}px`   
     document.querySelector("#banana").style.top=`${det.y -300}px`
     document.querySelector("#banana").style.transform= "rotate(15deg)" 
})
document.querySelector("#p3c h1:nth-child(2)").addEventListener("mouseleave",function(det){
    document.querySelector("#banana").style.opacity=0
    document.querySelector("#banana").style.transform= "rotate(0deg)" 
})

document.querySelector("#p3c h1:nth-child(3)").addEventListener("mousemove",function(det){
    document.querySelector("#pineapple").style.opacity=1   
     document.querySelector("#pineapple").style.left=`${det.x -150}px`   
     document.querySelector("#pineapple").style.top=`${det.y -300}px`
     document.querySelector("#pineapple").style.transform= "rotate(15deg)" 
})
document.querySelector("#p3c h1:nth-child(3)").addEventListener("mouseleave",function(det){
    document.querySelector("#pineapple").style.opacity=0
    document.querySelector("#pineapple").style.transform= "rotate(0deg)" 
})

document.querySelector("#p3c h1:nth-child(4)").addEventListener("mousemove",function(det){
    document.querySelector("#pithaya").style.opacity=1   
     document.querySelector("#pithaya").style.left=`${det.x -150}px`   
     document.querySelector("#pithaya").style.top=`${det.y -300}px`
     document.querySelector("#pithaya").style.transform= "rotate(15deg)" 
})
document.querySelector("#p3c h1:nth-child(4)").addEventListener("mouseleave",function(det){
    document.querySelector("#pithaya").style.opacity=0
    document.querySelector("#pithaya").style.transform= "rotate(0deg)" 
})

gsap.from("#page4 h1",{
    y:120,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start:"top 50%",
    }
})

gsap.to("#p5bottom img",{
    rotate:360,
    repeat:-1,
    duration:2,
    ease: "linear"
})

var s1=document.querySelectorAll("#page6 .s1 h1")
s1.forEach(function(elem){
    gsap.to(elem,{
        transform:'translateX(-100%)',
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:3
        }
    })
})
var s2=document.querySelectorAll("#page6 .s2 h1")
s2.forEach(function(elem){
    gsap.from(elem,{
        transform:'translateX(-100%)',
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:3
        }
    })
})
document.querySelector("#yes").addEventListener("mousemove",function(det){
    document.querySelector("#yes img").style.opacity=1   
     document.querySelector("#yes img").style.left=`${det.x -80}px`   
     document.querySelector("#yes img").style.top=`${det.y -400}px`
})
document.querySelector("#yes").addEventListener("mouseleave",function(det){
    document.querySelector("#yes img").style.opacity=0
})

document.querySelector("#no").addEventListener("mousemove",function(det){
    document.querySelector("#no img").style.opacity=1  
     document.querySelector("#no img").style.left=`${det.x -80}px`   
     document.querySelector("#no img").style.top=`${det.y -400}px`
})
document.querySelector("#no").addEventListener("mouseleave",function(det){
    document.querySelector("#no img").style.opacity=0
})

document.querySelector("#p8img img:nth-child(1)").addEventListener("mousemove",function(){
     document.querySelector("#p8img img:nth-child(1)").style.transform= "rotate(15deg)" 
     document.querySelector("#p8img img:nth-child(1)").style.scale=".9"
})
document.querySelector("#p8img img:nth-child(1)").addEventListener("mouseleave",function(){
    document.querySelector("#p8img img:nth-child(1)").style.transform= "rotate(0deg)" 
    document.querySelector("#p8img img:nth-child(1)").style.scale=".8"
})

document.querySelector("#p8img img:nth-child(2)").addEventListener("mousemove",function(){
     document.querySelector("#p8img img:nth-child(2)").style.transform= "rotate(15deg)" 
     document.querySelector("#p8img img:nth-child(2)").style.scale="1"
})
document.querySelector("#p8img img:nth-child(2)").addEventListener("mouseleave",function(){
    document.querySelector("#p8img img:nth-child(2)").style.transform= "rotate(0deg)" 
    document.querySelector("#p8img img:nth-child(2)").style.scale=".9"
})

document.querySelector("#p8img img:nth-child(3)").addEventListener("mousemove",function(){
     document.querySelector("#p8img img:nth-child(3)").style.transform= "rotate(15deg)" 
     document.querySelector("#p8img img:nth-child(3)").style.scale="1.1"
})
document.querySelector("#p8img img:nth-child(3)").addEventListener("mouseleave",function(){
    document.querySelector("#p8img img:nth-child(3)").style.transform= "rotate(0deg)" 
    document.querySelector("#p8img img:nth-child(3)").style.scale="1"
})

document.querySelector("#p8img img:nth-child(4)").addEventListener("mousemove",function(){
     document.querySelector("#p8img img:nth-child(4)").style.transform= "rotate(15deg)" 
     document.querySelector("#p8img img:nth-child(4)").style.scale="1"
})
document.querySelector("#p8img img:nth-child(4)").addEventListener("mouseleave",function(){
    document.querySelector("#p8img img:nth-child(4)").style.transform= "rotate(0deg)" 
    document.querySelector("#p8img img:nth-child(4)").style.scale=".9"
})

document.querySelector("#p8img img:nth-child(5)").addEventListener("mousemove",function(){
     document.querySelector("#p8img img:nth-child(5)").style.transform= "rotate(15deg)" 
     document.querySelector("#p8img img:nth-child(5)").style.scale=".9"
})
document.querySelector("#p8img img:nth-child(5)").addEventListener("mouseleave",function(){
    document.querySelector("#p8img img:nth-child(5)").style.transform= "rotate(0deg)" 
    document.querySelector("#p8img img:nth-child(5)").style.scale=".8"
})