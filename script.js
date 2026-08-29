const menu=document.querySelector(".menu"),nav=document.querySelector("nav");
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");nav.style.display=open?"flex":"none";nav.style.position="absolute";nav.style.top="68px";nav.style.left="0";nav.style.right="0";nav.style.padding="22px";nav.style.background="#fbf7f1";nav.style.flexDirection="column";});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");if(innerWidth<901)nav.style.display="none"}));
const progress=document.querySelector(".progress");addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/h*100)+"%"});
document.getElementById("year").textContent=new Date().getFullYear();