  gsap.set("#parallax-sky", {height: "100%"});
  gsap.set("#parallax-layer-9-img", { y: "100%", scale: 2});
  gsap.set("#parallax-layer-8-img", { y: "100%", scale: 2});
  gsap.set("#parallax-layer-7-img", { y: "100%", scale: 2});
  gsap.set("#parallax-water", { y: "200%", scale: 2});
  gsap.set("#parallax-layer-6-img", { y: "100%", scale: 2});
  gsap.set("#parallax-layer-5-img", { y: "100%", scale: 2});
  gsap.set("#parallax-layer-4-img", { y: "100%", scale: 2});
  gsap.set("#parallax-layer-3-img", { y: "100%", scale: 2});
  gsap.set("#parallax-layer-2-img", { y: "100%", scale: 2});
  gsap.set("#parallax-layer-1-img", { y: "100%", scale: 2});
  gsap.set("#parallax-layer-0-img", { y: "100%", scale: 2});
  gsap.set("#sun", {opacity: 0});


  let parallaxStart = gsap.timeline();

  parallaxStart.to("#parallax-sky", {height: "55%", duration: 1 }, 0);
  parallaxStart.to("#parallax-layer-9-img", { y: 0, scale: 1.01, duration: 1 }, 0);
  parallaxStart.to("#parallax-layer-8-img", { y: 0, scale: 1.01, duration: 1}, 0.1);
  parallaxStart.to("#parallax-layer-7-img", { y: 0, scale: 1.01, duration: 1}, 0.2);
  parallaxStart.to("#parallax-water", { y: 0, scale: 1, duration: 1}, 0.3);
  parallaxStart.to("#parallax-layer-6-img", { y: 0, scale: 1.01, duration: 1}, 0.3);
  parallaxStart.to("#parallax-layer-5-img", { y: 0, scale: 1.01, duration: 1}, 0.4);
  parallaxStart.to("#parallax-layer-4-img", { y: 0, scale: 1.01, duration: 1}, 0.5);
  parallaxStart.to("#parallax-layer-3-img", { y: 0, scale: 1.01, duration: 1}, 0.5);
  parallaxStart.to("#parallax-layer-2-img", { y: 0, scale: 1.01, duration: 1}, 0.6);
  parallaxStart.to("#parallax-layer-1-img", { y: 0, scale: 1.01, duration: 1}, 0.7);
  parallaxStart.to("#parallax-layer-0-img", { y: 0, scale: 1.01, duration: 1}, 0.7);
  parallaxStart.to("#sun", {opacity: 1}, 0.9);

  parallaxStart.delay(0.5);


///////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////

let scene = gsap.timeline();

// ScrollTrigger.create({
//   animation: scene,
//   trigger: "#main-contend",
//   start: "top top",
//   end: "30% center",
//   scrub: 2,
//   pin: true,
//   markers: true
// });

ScrollTrigger.create({
  animation: scene,
  trigger: "#home",
  start: "top top",
  end: "bottom top",
  scrub: 2,
  pin: true
});

scene.to("#profile", { y: -100 }, 0);
scene.to("#parallax-layer-9", { y: -30 }, 0);
scene.to("#parallax-layer-8", { y: -50 }, 0);
scene.to("#parallax-layer-7", { y: -70 }, 0);
scene.to("#parallax-water-dark", { y: -70}, 0);
scene.to("#parallax-water-light", { y: -70}, 0);
scene.to("#parallax-layer-6", { y: -110 }, 0);
scene.to("#parallax-layer-5", { y: -160 }, 0);
scene.to("#parallax-layer-4", { y: -180 }, 0);
scene.to("#parallax-layer-3", { y: -190 }, 0);
scene.to("#parallax-layer-2", { y: -260 }, 0);
scene.to("#parallax-layer-1", { y: -280 }, 0);
scene.to("#parallax-layer-0", { y: -310 }, 0);

