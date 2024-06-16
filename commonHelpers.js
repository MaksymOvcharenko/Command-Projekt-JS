import{a as g,i as q,S as M,A as T}from"./assets/vendor-9cc690ff.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".animation"),t=new IntersectionObserver(o=>{o.forEach(s=>{s.isIntersecting?s.target.classList.add("animate"):s.target.classList.remove("animate")})},{threshold:.1});e.forEach(o=>{t.observe(o)})});const I=async(e,t)=>{g.defaults.baseURL="https://portfolio-js.b.goit.study/api";try{return(await g.get("/reviews")).data}catch{e.innerHTML=t}},O=(e,t)=>{if(!e)return;const o=e.map(s=>`<li class="swiper-slide review-item" id="item">
                        <div>
                            <p>${s.review}</p>
                            <div class="review-container">
                                <img src="${s.avatar_url}"/>
                                <h3>${s.author}</h3>
                            </div>
                        </div>
                        
                    </li>`).join("");t.insertAdjacentHTML("beforeend",o)},A=e=>{e.style.display="inline-block"},B=e=>{e.style.display="none"},G=()=>{q.error({position:"bottomRight",id:"toast",message:"Reviews are not found. Try again!"})},i=e=>{const t=document.querySelector(".prev"),o=document.querySelector(".next"),s=e.currentBreakpoint||"default";let r;s==="1280"?r=4:r=5,e.activeIndex===0?(t.classList.add("swiper-button-disabled"),t.disabled=!0):(t.classList.remove("swiper-button-disabled"),t.disabled=!1),e.activeIndex===r?(o.classList.add("swiper-button-disabled"),o.disabled=!0):(o.classList.remove("swiper-button-disabled"),o.disabled=!1)},z=document.querySelector(".swiper-wrapper"),D=document.querySelector(".swiper"),H='<p class="error-message ">Not Found!</p>',V=document.querySelector(".review-section"),f=document.querySelector(".loader"),a=new M(".swiper",{slidesPerView:1,cssMode:!0,loop:!1,spaceBetween:10,navigation:{nextEl:".next",prevEl:".prev"},keyboard:{enabled:!0},breakpoints:{1280:{slidesPerView:2,spaceBetween:32}},on:{init:function(){i(this)},slideChange:function(){i(this)},breakpoint:function(){i(this)}}}),_=async()=>{A(f);try{const e=await I(D,H);O(e,z),a.update(),document.querySelector(".next").addEventListener("click",()=>a.slideNext()),document.querySelector(".prev").addEventListener("click",()=>a.slidePrev())}catch{G()}finally{B(f)}},F=new IntersectionObserver((e,t)=>{e.forEach(o=>{o.isIntersecting&&(_(),t.unobserve(o.target))})},{root:null,threshold:.1});F.observe(V);a.on("slideChange",function(){i(this)});const c=document.querySelector(".feedback-form");window.addEventListener("DOMContentLoaded",W);c.addEventListener("input",U);c.addEventListener("submit",Z);function U(e){e.target.name,e.target.value}function W(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e){const{email:t,message:o}=e;c.querySelector('[name="email"]').value=t,c.querySelector('[name="message"]').value=o}}function Z(e){e.preventDefault();const t=c.querySelector('[name="email"]').value,o=c.querySelector('[name="message"]').value;if(!t||!o){alert("Please fill in all fields");return}if(!K(t)){alert("Please enter a valid email address");return}console.log({email:t,message:o}),fetch("/url-for-post-request",{method:"POST",body:JSON.stringify({email:t,message:o}),headers:{"Content-Type":"application/json"}}).then(s=>{s.ok&&c.reset()}).catch(s=>{console.error("Error:",s)})}function K(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}(()=>{const e={openModalBtn:document.querySelector("[data-mobile-open]"),closeModalBtn:document.querySelector("[data-mobile-close]"),modal:document.querySelector("[data-mobile]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-open")}})();const Q=document.querySelector("#theme-toggle"),X=document.querySelector("#theme-toggle-mobile"),S=document.querySelector("#mobile-menus");function h(e){const t=localStorage.getItem("theme");t?(document.body.className=t,t==="dark-theme"?(e.checked=!0,v()):d()):d(),e.addEventListener("change",function(){e.checked?(document.body.className="dark-theme",v(),S.classList.add("dark-theme-mobile"),localStorage.setItem("theme","dark-theme")):(document.body.className="light-theme",d(),localStorage.setItem("theme","light-theme"),S.classList.remove("dark-theme-mobile"))})}function v(){console.log("Applying dark theme styles"),document.documentElement.style.setProperty("--accet-green","#14c57c"),document.documentElement.style.setProperty("--color-text","#f0f0f0"),document.documentElement.style.setProperty("--bg-color","#292929"),document.documentElement.style.setProperty("--light-grey","#2a2d32"),document.documentElement.style.setProperty("--bg-skills","#214136")}function d(){console.log("Applying light theme styles"),document.documentElement.style.setProperty("--accet-green","#00b068"),document.documentElement.style.setProperty("--color-text","#292929"),document.documentElement.style.setProperty("--bg-color","#f0f0f0"),document.documentElement.style.setProperty("--light-grey","#e4e5e6"),document.documentElement.style.setProperty("--bg-skills","#bcdfd1")}document.addEventListener("DOMContentLoaded",function(){console.log("Initializing theme switcher"),h(Q),h(X)});const y="/Command-Projekt-JS/assets/1-5810cc52.jpg",Y="/Command-Projekt-JS/assets/1-2x-379d8de8.jpg",b="/Command-Projekt-JS/assets/2-6eaa8875.jpg",ee="/Command-Projekt-JS/assets/2-2x-bec27449.jpg",j="/Command-Projekt-JS/assets/3-e0576bd7.jpg",te="/Command-Projekt-JS/assets/3-2x-fb79b545.jpg",w="/Command-Projekt-JS/assets/4-b8ef22f2.jpg",oe="/Command-Projekt-JS/assets/4-2x-b7c901f2.jpg",k="/Command-Projekt-JS/assets/5-676ecb00.jpg",se="/Command-Projekt-JS/assets/5-2x-c9d1ecc4.jpg",x="/Command-Projekt-JS/assets/6-21d18a69.jpg",re="/Command-Projekt-JS/assets/6-2x-72392c33.jpg",P="/Command-Projekt-JS/assets/7-37e7b7ff.jpg",ne="/Command-Projekt-JS/assets/7-2x-2485cf3c.jpg",L="/Command-Projekt-JS/assets/8-3c99fabe.jpg",ce="/Command-Projekt-JS/assets/8-2x-4ae4ee3e.jpg",E="/Command-Projekt-JS/assets/9-cadf2c0c.jpg",ie="/Command-Projekt-JS/assets/9-2x-aff37560.jpg",J="/Command-Projekt-JS/assets/10-1e5fb8ac.jpg",ae="/Command-Projekt-JS/assets/10-2x-73d6d9f4.jpg",$=[{imgSrc:y,imgSrcSet:`${y} 1x, ${Y} 2x`,alt:"power-pulse-webservice",tech:"React, JavaScript, Node JS, Git",description:"wallet webservice",link:"#"},{imgSrc:b,imgSrcSet:`${b} 1x, ${ee} 2x`,alt:"mimino-website",tech:"React, JavaScript, Node JS, Git",description:"green harvest online store",link:"https://boreddarkness.github.io/GreenHarvest/"},{imgSrc:j,imgSrcSet:`${j} 1x, ${te} 2x`,alt:"vyshyvanka",tech:"React, JavaScript, Node JS, Git",description:"English excellence webservice",link:"#"},{imgSrc:w,imgSrcSet:`${w} 1x, ${oe} 2x`,alt:"green-harvest-online-store",tech:"React, JavaScript, Node JS, Git",description:"mimino website",link:"#"},{imgSrc:k,imgSrcSet:`${k} 1x, ${se} 2x`,alt:"wallet-webservice",tech:"React, JavaScript, Node JS, Git",description:"power pulse webservice",link:"#"},{imgSrc:x,imgSrcSet:`${x} 1x, ${re} 2x`,alt:"chego-jewelry-website",tech:"React, JavaScript, Node JS, Git",description:"chego jewelry website",link:"#"},{imgSrc:P,imgSrcSet:`${P} 1x, ${ne} 2x`,alt:"energy-flow-webservice",tech:"React, JavaScript, Node JS, Git",description:"energy flow webservice",link:"#"},{imgSrc:L,imgSrcSet:`${L} 1x, ${ce} 2x`,alt:"fruitbox-online-store",tech:"React, JavaScript, Node JS, Git",description:"fruitbox online store",link:"#"},{imgSrc:E,imgSrcSet:`${E} 1x, ${ie} 2x`,alt:"English-excellence-webservice",tech:"React, JavaScript, Node JS, Git",description:"vyshyvanka vibes Landing Page",link:"#"},{imgSrc:J,imgSrcSet:`${J} 1x, ${ae} 2x`,alt:"starlight-studio-landing-page",tech:"React, JavaScript, Node JS, Git",description:"starlight studio landing page",link:"#"}],m=3;let p=0;const le=document.querySelector(".projects-ul"),C=document.querySelector(".btn-load-more");function R(){const e=p*m,t=e+m;$.slice(e,t).forEach(s=>{const r=document.createElement("li");r.classList.add("projects-li"),r.innerHTML=`
      <img
        class="projects-img"
        srcset="${s.imgSrcSet}"
        src="${s.imgSrc}"
        alt="${s.alt}"
        width="320"
      />
      <div class="div-projects-h-p">
        <h3 class="projects-sub">${s.tech}</h3>
        <p class="projects-p">${s.description}</p>
        <a href="${s.link}" class="visit-btn" target="_blank" rel="noopener noreferrer">
          VISIT
          <svg class="btn-visit-icon" width="14" height="14">
            <use href="./img/icons.svg#icon-Vector-Projects"></use>
          </svg>
        </a>
      </div>
    `,le.appendChild(r)}),p++,p*m>=$.length&&(C.style.display="none",q.info({title:"Info",message:"That's all for now",position:"topCenter",timeout:3e3}))}C.addEventListener("click",R);R();const de=Array.from(document.querySelectorAll(".accordion-container"));new T(de,{});const me=document.querySelector("#close-modal-btn"),u=document.querySelector(".backdrop");me.addEventListener("click",()=>{u.classList.remove("is-open")});window.addEventListener("click",e=>{if(e.target===u)return N()});window.addEventListener("keydown",e=>{if(e.code==="Escape")return N()});function N(){u.classList.remove("is-open")}
//# sourceMappingURL=commonHelpers.js.map