const nav=document.querySelector('.show-desktop');
const toggle=document.querySelector('.menu');
const close=document.querySelector('.exit-btn');
toggle.addEventListener('click', ()=>{
        const visiblity = nav.getAttribute('data-visible');
        if(visiblity==="false"){
            nav.setAttribute('data-visible', true)
        }
});
close.addEventListener('click', ()=>{
    const visiblity = nav.getAttribute('data-visible');
    if(visiblity==="true"){
        nav.setAttribute('data-visible', false)
    }
})