var tl = gsap.timeline();
{
  tl.from("header nav", {
    y: -100,
    duration: 0.5,
    delay: 0.1,
    opacity: 0,
    stagger: 0.5,
  });

  tl.from(".banner .banner1", {
    x: -100,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.5,
  });

  tl.from(".about ", {
    x: -100,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.5,
  });
}
