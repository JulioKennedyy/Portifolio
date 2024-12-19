let lua = document.getElementById('lua')
let body = document.querySelector('body')


lua.addEventListener('click', ()=>{
    body.classList.toggle('dark')
    if (lua.classList.contains('fa-moon')) {
        lua.classList.remove('fa-moon');
        lua.classList.add('fa-sun');
    } else {
        lua.classList.remove('fa-sun');
        lua.classList.add('fa-moon');
    }
});

