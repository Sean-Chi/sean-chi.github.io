const btn = document.getElementById('themeBtn');
if(btn){
    btn.addEventListener('click', ()=>{
        document.body.classList.toggle('dark');
    })
}
