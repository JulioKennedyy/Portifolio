let lua = document.getElementById('lua')
let body = document.querySelector('body')
let dado = document.getElementById('dados')
let front = document.getElementById('front')
let tec = document.getElementById('tec')
let html = document.getElementById('htmll')


lua.addEventListener('click', ()=>{
    body.classList.toggle('dark')
    dado.classList.toggle('dark')
    front.classList.toggle('dark')
    tec.classList.toggle('dark')
    html.classList.toggle('dark')
    if (lua.classList.contains('fa-moon')) {
        lua.classList.remove('fa-moon');
        lua.classList.add('fa-sun');
    } else {
        lua.classList.remove('fa-sun');
        lua.classList.add('fa-moon');
    }
});

