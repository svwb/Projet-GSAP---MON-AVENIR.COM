const animation = gsap.timeline({
        repeat:-1
});

animation
.to('.moving_txt p',{autoAlpha:1, stagger:1})
.to('.moving_txt p',{y:-100,autoAlpha:0, stagger:1},1)


