const html = document.querySelector('.html');
const css = document.querySelector('.css');
const js = document.querySelector('.js');
const ps = document.querySelector('.photoshop');
const ai = document.querySelector('.illustrator');

document.querySelector('.img').addEventListener('mouseover', function(){
    html.style.display = 'block'
    css.style.display = 'block'
    js.style.display = 'block'
    ps.style.display = 'block'
    ai.style.display = 'block'
});

document.querySelector('.img').addEventListener('mouseout', function(){
    html.style.display = 'none'
    css.style.display = 'none'
    js.style.display = 'none'
    ps.style.display = 'none'
    ai.style.display = 'none'
});






