
const header=document.querySelector('.header');
const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{const open=header.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
const progress=document.querySelector('.progress');
addEventListener('scroll',()=>{const h=document.documentElement;progress.style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+'%'},{passive:true});
