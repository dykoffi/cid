$(document).ready(()=>{
    $('#fond').delay(1000).fadeOut(1000,()=>{
        $('#fond').detach()
        $('body').css({
            'overflow-y':'auto'
        })
    })

})
ScrollReveal().reveal('.card',{
    'delay': 700,
    // 'reset' :true,
    'duration': 1000,
    'distance': '70px',
})
ScrollReveal().reveal('.details p, .bar',{
    'delay': 300,
    // 'reset' :true,
    'duration': 1000,
    'distance': '40px',
    'origin': 'left'
})
ScrollReveal().reveal('h3',{
    'delay': 500,
    // 'reset' :true,
    'duration': 800,
    'distance': '70px',
    'origin': 'top'
})
ScrollReveal().reveal('.monter',{
    'delay': 200,
    // 'reset' :true,
    'duration': 1000,
})

ScrollReveal().reveal('.monter2',{
    'delay': 200,
    'duration': 1000,
    'origin' : 'bottom'
})

// $(".bouge").paroller({ factor:0.25,  type: 'foreground', direction: 'vertical' })
// $(".bouge2").paroller({ factor:-0.3,  type: 'foreground', direction: 'vertical' })
// $("h3").paroller({ factor:0.05,  type: 'foreground', direction: 'vertical' })