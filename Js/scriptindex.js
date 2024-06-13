function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}

init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
main.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 0+"px"
    crsr.style.top = dets.y + 0+"px"
})
main.addEventListener("mouseenter",(dets) => {
    console.log(enter)
  })

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    // markers:true,
    start:"top 28%",
    end:"top 0%",
    scrub:3
  }
})
tl.to(".page1 h1",{
  x:-100
},"anim")
tl.to(".page1 h2",{
  x:100
},"anim")
tl.to(".page1 video", {
  width: "90%"
}, "anim")

var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      start: "top -115%",
      end: "top -120%",
      scrub: 3
  }
})
tl2.to(".main", {
  backgroundColor: "#fff"
})

var tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page3 h1",
      scroller: ".main",
      // markers:true,
      start: "top 20%",
      end: "top 0%",
      scrub: 3
  }
})
tl3.to(".main", {
  backgroundColor: "#00000f"
})
