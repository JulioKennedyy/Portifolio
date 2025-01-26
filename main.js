let lua = document.getElementById('luaa')
let body = document.querySelector('body')
let dado = document.getElementById('dados')
let front = document.getElementById('front')
let tec = document.getElementById('tec')


lua.addEventListener('click', ()=>{
    body.classList.toggle('dark')
    dado.classList.toggle('dark')
    front.classList.toggle('dark')
    tec.classList.toggle('dark')
    console.log('Clique detectado!');
    if (lua.classList.contains('fa-moon')) {
        lua.classList.remove('fa-moon');
        lua.classList.add('fa-sun');
        console.log('Mudou para sol');
    } else {
        lua.classList.remove('fa-sun');
        lua.classList.add('fa-moon');
        console.log('Mudou para lua');
    }
});

