var t1 = gsap.timeline();

t1.timeScale(0.5)
    .fromTo(".hero", 
    {opacity: 0},
    {duration: 0.5,
    opacity: 1}
    )
    .fromTo(".sub-headline", 
    {opacity: 0},
    {duration:2,
    opacity: 1}
);
