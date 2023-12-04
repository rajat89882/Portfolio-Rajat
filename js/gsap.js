var tl = gsap.timeline();
{
  tl.from("header nav", {
    y: -300,
    duration: 0.6,
    delay: 0.1,
    opacity: 0,
    stagger: 0.5,
  });

  tl.from(".banner .banner1", {
    x: 0,
    duration: 0.6,
    delay: 0.5,
    scale: 0.1,
    opacity: 0,
    stagger: 0.5,
  });
}
