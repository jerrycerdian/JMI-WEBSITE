gsap.registerPlugin(ScrollTrigger);
const navbar=document.getElementById('navbar');
const burger=document.getElementById('burger');
const menu=document.getElementById('menu');
const toTop=document.getElementById('toTop');
const form=document.getElementById('contactForm');
const preloader=document.getElementById('preloader');

window.addEventListener('load',()=>{setTimeout(()=>preloader.classList.add('hide'),700)});
if (burger && menu) burger.addEventListener('click',()=>menu.classList.toggle('active'));
if (menu) menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('active')));
window.addEventListener('scroll',()=>{ if(navbar) navbar.classList.toggle('scrolled',window.scrollY>20); if(toTop) toTop.classList.toggle('show',window.scrollY>500);});
if (toTop) toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
if (form) form.addEventListener('submit',e=>{
  e.preventDefault();
  const fd=new FormData(form);
  const name=(fd.get('name')||'').toString();
  const email=(fd.get('email')||'').toString();
  const phone=(fd.get('phone')||'').toString();
  const service=(fd.get('service')||'').toString();
  const message=(fd.get('message')||'').toString();
  const text=`Halo NovaForge, saya ingin konsultasi project.%0A%0ANama: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ANomor: ${encodeURIComponent(phone)}%0ALayanan: ${encodeURIComponent(service)}%0APesan: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/6281234567890?text=${text}`,'_blank');
  form.reset();
});
if (window.gsap) {
  gsap.defaults({ease:'power2.out'});
  gsap.utils.toArray('.reveal').forEach((el)=>{ gsap.from(el,{scrollTrigger:{trigger:el,start:'top 88%'},opacity:0,y:34,duration:1.05}); });
  gsap.utils.toArray('.panel').forEach((panel)=>{ gsap.fromTo(panel,{y:50,opacity:0.7,scale:0.985},{scrollTrigger:{trigger:panel,start:'top 85%',end:'bottom 15%',scrub:1},y:0,opacity:1,scale:1}); });
  if (document.querySelector('.hero-copy')) gsap.timeline({defaults:{ease:'power2.out'}}).from('.hero-copy',{opacity:0,y:40,duration:.9}).from('.hero-visual',{opacity:0,y:50,duration:.9},'-=.55').from('.hero-proof div',{opacity:0,y:20,duration:.6,stagger:.06},'-=.45');
  gsap.to('.lux-card',{scrollTrigger:{trigger:'.showcase-panel',start:'top 80%',scrub:1},y:-20,stagger:.12});
}