$(document).ready(()=>{
    $('#fond').delay(1000).fadeOut(1000,()=>{
        $('#fond').detach()
        $('body').css({
            'overflow-y':'auto'
        })
    })

})

ScrollReveal().reveal('.descendre',{
    'delay': 500,
    'interval' : 500,
    'duration': 800,
    'distance': '70px',
    'origin': 'top'
})

ScrollReveal().reveal('.monter',{
    'delay': 200,
    'interval' : 500,
    'duration': 1000,
    'origin' : 'bottom',
    'distance': '100px',

})

ScrollReveal().reveal('.gauche',{
    'delay': 200,
    'interval' : 500,
    'duration': 1000,
    'origin' : 'left',
    'distance' : "70px"
})

ScrollReveal().reveal('.droite',{
    'delay': 200,
    'interval' : 500,
    'duration': 1000,
    'origin' : 'right',
    'distance' : "70px"
})

// $(".bouge").paroller({ factor:0.25,  type: 'foreground', direction: 'vertical' })
// $(".bouge2").paroller({ factor:-0.3,  type: 'foreground', direction: 'vertical' })
// $("h3").paroller({ factor:0.05,  type: 'foreground', direction: 'vertical' })
$("#baniere").paroller({
    factor: -0.2,            // multiplier for scrolling speed and offset
    factorXs: 0.041,           // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'vertical', // vertical, horizontal
    //transition: 'transform 0.2s ease-in' // CSS transition
});

$(".bar").paroller({
    factor: -0.07,            // multiplier for scrolling speed and offset
    factorXs: 0.041,           // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'horizontal', // vertical, horizontal
    //transition: 'transform 0.2s ease-in' // CSS transition
});

$(".esatic, #contacts").paroller({
    factor: 0.1,            // multiplier for scrolling speed and offset
    //factorXs: 0.041,           // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'vertical', // vertical, horizontal
    //transition: 'transform 0.2s ease-in' // CSS transition
});

