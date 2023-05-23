gsap.registerPlugin(ScrollTrigger);

gsap.from(".com-border-r", {
    scrollTrigger: {
        trigger: ".com-main",
        toggleActions: "restart pause resume pause",
        start: 'top 60%',
    },
    duration: 1,
     scale: 0.7,
      x: 200,
       y: 300,
        ease: "fade"});
gsap.from(".com-border-y", {
    scrollTrigger: {
        trigger: ".com-main",
        toggleActions: "restart pause resume pause",
        start: 'top 60%',
    },
    duration: 1,
     scale: 0.7,
      x: -200,
       y: -300,
       opacity: 0,
        ease: "fade"});

gsap.from(".com-main", {
    scrollTrigger: {
        trigger: ".com-main",
        toggleActions: "restart pause resume pause",
        start: 'top 60%',
    },
    duration: 1.5,
     scale: 0.3,
      opacity: 0,
       ease: "fade"});


gsap.from(".corporate-border-r", {
    scrollTrigger: {
        trigger: ".corporate-border-r",
        toggleActions: "restart pause resume pause",
        start: 'top 50%',
    },
    duration: 1,
     scale: 0.7,
      x: 200,
       y: 300,
        ease: "fade"});
gsap.from(".corporate-border-y", {
    scrollTrigger: {
        trigger: ".corporate-border-y",
        toggleActions: "restart pause resume pause",
        start: 'top 50%',
    },
    duration: 1,
     scale: 0.7,
      x: -200,
       y: -300,
       opacity: 0,
        ease: "fade"});

gsap.from(".corporate-main", {
    scrollTrigger: {
        trigger: ".corporate-main",
        toggleActions: "restart pause resume pause",
        start: 'top 50%',
    },
    duration: 1.5,
     scale: 0.3,
      opacity: 0,
       ease: "fade"});




gsap.set(".img-container", {position: 'absolute', y: 300});

gsap.to('.img-container', {
    yPercent: -100,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".com-main",
        start: '.com-main 30%',
        end: '+=1000px',
        scrub: ".section",
        pin: ".section"
    },
    opacity: 1
})
gsap.set(".img-container1", {position: 'absolute', y: 300});

gsap.to('.img-container1', {
    yPercent: -100,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: 'top 30%',
        end: '+=1000px',
        scrub: ".section1",
        pin: ".section1"
    },
    opacity: 1
})
