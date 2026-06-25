    // ══════════════════════════════════════
    //  CONFIG — sirf yeh 2 change karein
    // ══════════════════════════════════════
    const WA_NUMBER    = "919328766897";
    const SHEET_API_URL = "https://script.google.com/macros/s/AKfycbztFMnmJKaSD-thk9NocqwC5WjkcQpqLQ0vSXaEog3CklRkRQ8QGuWBy3adXMMaCoLr/exec";

    // ─── WA SVG ───
    const WA_SVG = `<svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`;

    // ─── DEMO DATA ───
    const DEMO_PRODUCTS = [
      {name:"Rice Face Wash",category:"Face Wash",price:"129",oldPrice:"152",discount:"15% OFF",description:"Infused with rice extracts for brightening and gentle cleansing. Leaves skin fresh and glowing.",emoji:"🌾",image:"",rating:"4.8",ratingCount:"34",tags:"glow,brightening,normal,combo"},
      {name:"Himalayan Bath Salts",category:"Bath Salts",price:"89",oldPrice:"111",discount:"20% OFF",description:"A soothing blend of Himalayan minerals to detox and relax. Perfect for a spa-like bath.",emoji:"🧂",image:"",rating:"4.6",ratingCount:"21",tags:"hydration,relaxing,dry,normal"},
      {name:"Coffee Soap",category:"Soap",price:"89",oldPrice:"111",discount:"20% OFF",description:"Infused with real coffee grounds for gentle exfoliation and de-puffing. Energises your skin!",emoji:"☕",image:"",rating:"4.7",ratingCount:"28",tags:"exfoliation,tan,oily,combo"},
      {name:"Kesar Goti Soap",category:"Soap",price:"89",oldPrice:"111",discount:"20% OFF",description:"Handcrafted with pure saffron (kesar) for a royal skin-brightening experience.",emoji:"🌸",image:"",rating:"4.9",ratingCount:"47",tags:"glow,brightening,tan,dry,normal"},
      {name:"Charcoal Soap",category:"Soap",price:"89",oldPrice:"111",discount:"20% OFF",description:"Activated charcoal deep-cleansing soap. Draws out pore-clogging impurities, controls oil.",emoji:"🖤",image:"",rating:"4.8",ratingCount:"52",tags:"acne,oily,combo,deep cleanse"},
      {name:"Body Wash",category:"Body Wash",price:"129",oldPrice:"152",discount:"15% OFF",description:"A gentle herbal body wash for soft, nourished skin all day long.",emoji:"🚿",image:"",rating:"4.5",ratingCount:"19",tags:"hydration,soft,dry,normal"},
    ];
    const DEMO_COMBOS = [
      {name:"Rice Detox & Wash",description:"Transform your skin with this powerful rice-based detox combo",items:"Rice Face Wash,Himalayan Bath Salts",price:"249",oldPrice:"349",save:"Save ₹100",icon:"🧡",image:""},
      {name:"Charcoal Complete Kit",description:"Complete face care bundle for clear, glowing skin every day",items:"Charcoal Soap,Rice Face Wash",price:"399",oldPrice:"549",save:"Save ₹150",icon:"🌿",image:""}
    ];
    const DEMO_FAQ = [
      {question:"Are These Products 100% Natural?",answer:"Yes. All Turab Herbal Products are Made From 100% Natural Herbs. We do Not Use Harmful Chemicals, Synthetic Fragrances, or Artificial Preservatives."},
      {question:"How Long Does Delivery Take?",answer:"Delivery Usually Takes 1–2 Days within Gujarat and 3–5 Business Days Across The Rest of India. You Can Also Get Order Updates Through WhatsApp."},
      {question:"What is The Return Policy?",answer:"If The Product is Damaged or Delivered Incorrectly, Please Contact us Within 7 Days via WhatsApp — We Will Replace or Refund it. Customer Satisfaction is Our Guarantee."},
      {question:"What is The Minimum Order Amount?",answer:"There is No Minimum Order. You Can Order a Single Product."},
      {question:"How Can I Make Payments?",answer:"You Can Pay Via UPI (GPay, PhonePe, Paytm), Bank Transfer, or Cash on Delivery — All Options are Available."},
      {question:"Are The Products Safe for Skin?",answer:"Yes, They are Completely Safe. If You Have an Allergy to Any Specific Ingredient, Please Check With us First via WhatsApp."},
    ];

    let allProducts = [], activeCat = "all", searchQuery = "";
    let quizAnswers = {skinType:"",concern:"",budget:""};
    let currentStep = 0;
    const quizKeys = ["skinType","concern","budget"];

    // ─── WA HELPERS ───
    const waMsg   = (n,p) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hello Turab Herbal 🌿\n\nI would like to order *"${n}"* (₹${p}).\n\nKindly share availability and delivery details. Thank you!`)}`;
    const waGeneral = ()  => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hello Turab Herbal 🌿\n\nI'm interested in your herbal products. Please share more details. Thank you!`)}`;
    const waQuiz  = (ps)  => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hello Turab Herbal 🌿\n\nI completed your Skin Quiz.\n\nRecommended: ${ps.map(p=>`*${p.name}* (₹${p.price})`).join(", ")}\n\nPlease confirm the order. Thank you!`)}`;

    function updateWaLinks() {
      const url = waGeneral();
      ['navWaLink','heroWaLink','ctaWaLink','footerWaLink','floatingWa','mobWaLink'].forEach(id=>{
        const el = document.getElementById(id); if(el) el.href = url;
      });
    }

    // ─── MOBILE NAV ───
    function closeMobileNav() { document.getElementById('mobileNav').classList.remove('open'); }
    // Close on backdrop tap
    document.getElementById('mobileNav').addEventListener('click', function(e){
      if(e.target === this) closeMobileNav();
    });

    // ─── IMAGE FIX ───
    function fixImg(url) {
      if(!url) return "";
      let m;
      if((m=url.match(/^https?:\/\/ibb\.co\/([a-zA-Z0-9_-]+)\/?$/))) return `https://i.ibb.co/${m[1]}/img.png`;
      if((m=url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/))) return `https://drive.google.com/uc?export=view&id=${m[1]}`;
      if((m=url.match(/[?&]id=([a-zA-Z0-9_-]+)/))) return `https://drive.google.com/uc?export=view&id=${m[1]}`;
      return url;
    }

    // ─── LIGHTBOX ───
    function openLightbox(src) {
      const lb=document.getElementById("imageLightbox"),img=document.getElementById("lightboxImg");
      if(lb&&img){img.src=src;lb.classList.add("show");}
    }
    function closeLightbox() { document.getElementById("imageLightbox")?.classList.remove("show"); }
    document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeLightbox(); });

    // ─── TOGGLE DESCRIPTION ───
    function toggleDescription(btn) {
      const desc=btn.nextElementSibling;
      const shown=desc.classList.toggle('show');
      btn.innerHTML=shown
        ? `Hide <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(180deg)"><polyline points="6 9 12 15 18 9"></polyline></svg>`
        : `Details <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
    }

    // ─── STARS ───
    function renderStars(r) {
      const f=Math.floor(parseFloat(r)||0), h=(parseFloat(r)||0)-f>=.5;
      return "★".repeat(f)+(h?"½":"");
    }

    // ─── PRODUCT CARD ───
    function renderCard(p,i) {
      const img=fixImg(p.image), fb=p.emoji||"🌿";
      const imgHtml=img
        ? `<img src="${img}" alt="${p.name}" loading="lazy" onclick="openLightbox('${img}')" onerror="this.parentElement.innerHTML='<div class=\\'product-img-placeholder\\'>${fb}</div>'">`
        : `<div class="product-img-placeholder">${fb}</div>`;
      const op=p.oldPrice||p.oldprice||"";
      const rHtml=p.rating
        ? `<div class="product-rating"><span class="stars-display">${renderStars(p.rating)}</span><span class="rating-count">${p.rating} (${p.ratingCount||p.ratingcount||0})</span></div>` : "";
      const dHtml=p.description
        ? `<button class="desc-toggle-btn" onclick="toggleDescription(this)">Details <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div class="product-desc">${p.description}</div>` : "";
      return `<div class="product-card" style="animation:cardIn .5s ease ${i*.06}s both">
  ${p.discount?`<span class="product-badge">${p.discount}</span>`:""}
  <div class="product-img-wrap">${imgHtml}</div>
  <div class="product-body">
    <div class="product-category">${p.category}</div>
    <div class="product-name">${p.name}</div>
    ${rHtml}${dHtml}
    <div class="product-footer">
      <div class="price-block">
        ${op?`<div class="price-old">₹${op}</div>`:""}
        <div class="price-row">
          <div class="product-price">₹${p.price}<sub>/pc</sub></div>
          ${p.discount?`<span class="price-discount">${p.discount}</span>`:""}
        </div>
      </div>
      <a class="wa-btn" href="${waMsg(p.name,p.price)}" target="_blank">${WA_SVG} Order</a>
    </div>
  </div>
</div>`;
    }

    // ─── FILTERS ───
    function applyFilters() {
      const grid=document.getElementById("productsGrid"), cntEl=document.getElementById("searchCount");
      if(!grid) return;
      let list=activeCat==="all"?allProducts:allProducts.filter(p=>p.category===activeCat);
      if(searchQuery.trim()){
        const q=searchQuery.toLowerCase();
        list=list.filter(p=>(p.name||"").toLowerCase().includes(q)||(p.category||"").toLowerCase().includes(q)||(p.description||"").toLowerCase().includes(q)||(p.tags||"").toLowerCase().includes(q));
      }
      if(cntEl) cntEl.textContent=searchQuery?`${list.length} product${list.length!==1?"s":""} found for "${searchQuery}"`:"";
      grid.style.opacity="0";
      setTimeout(()=>{
        grid.innerHTML=list.length?list.map((p,i)=>renderCard(p,i)).join(""):
          `<div class="grid-msg"><span class="big">🔍</span><h3>No products found</h3><p>Try different keywords or clear the search.</p></div>`;
        grid.style.transition="opacity .4s ease"; grid.style.opacity="1";
      },180);
    }

    function buildFilters(products) {
      const bar=document.getElementById("filterBar"); if(!bar) return;
      const cats=["all",...new Set(products.map(p=>p.category))];
      bar.innerHTML=cats.map(c=>`<button class="fpill${c===activeCat?" active":""}" data-cat="${c}">${c==="all"?"All Products":c}</button>`).join("");
      bar.querySelectorAll(".fpill").forEach(btn=>{
        btn.addEventListener("click",()=>{
          activeCat=btn.dataset.cat;
          bar.querySelectorAll(".fpill").forEach(b=>b.classList.remove("active"));
          btn.classList.add("active"); applyFilters();
        });
      });
    }

    // ─── COMBOS ───
    function renderCombos(combos) {
      const grid=document.getElementById("combosGrid"); if(!grid) return;
      if(!combos?.length){grid.innerHTML="";return;}
      grid.innerHTML=combos.map((c,i)=>{
        const img=fixImg(c.image||""),icon=c.icon||"🎁";
        const topHtml=img
          ? `<img src="${img}" alt="${c.name}" loading="lazy" onclick="openLightbox('${img}')" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="combo-top-icon" style="display:none">${icon}</div>`
          : `<div class="combo-top-icon">${icon}</div>`;
        const items=c.items?c.items.split(",").map(it=>`<div class="combo-item-tag">🌿 ${it.trim()}</div>`).join(""):"";
        const wac=`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hello Turab Herbal 🌿\n\nI want to order the *${c.name}* combo.\n\nPlease share details. Thank you!`)}`;
        const dHtml=c.description?`<button class="desc-toggle-btn" onclick="toggleDescription(this)">Details <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div class="combo-desc">${c.description}</div>`:"";
        return `<div class="combo-card reveal">
  <div class="combo-top">
    <div class="combo-ribbon">Combo Deal</div>
    ${c.save?`<span class="combo-save">${c.save}</span>`:""}
    ${topHtml}
  </div>
  <div class="combo-body">
    <h3>${c.name}</h3>${dHtml}
    <div class="combo-items">${items}</div>
    <div class="combo-foot">
      <div>${c.oldPrice?`<div class="combo-mrp">MRP ₹${c.oldPrice}</div>`:""}
      <div class="combo-price">₹${c.price}<span>/combo</span></div></div>
      <a href="${wac}" target="_blank" class="combo-wa-btn">${WA_SVG} Order Combo</a>
    </div>
  </div>
</div>`;
      }).join("");
      grid.querySelectorAll(".reveal").forEach(el=>revObs.observe(el));
    }

    // ─── RATINGS ───
    function renderRatings(products,reviews) {
      const grid=document.getElementById("ratingsGrid"); if(!grid) return;
      const rp=products.filter(p=>p.rating&&parseFloat(p.rating)>0).slice(0,6);
      if(!rp.length){grid.innerHTML="";document.getElementById("ratings").style.display="none";return;}
      grid.innerHTML=rp.map(p=>{
        const avg=parseFloat(p.rating)||0;
        const total=parseInt(p.ratingCount||p.ratingcount||0);
        const pr=(reviews||[]).filter(r=>(r.product||"").toLowerCase()===p.name.toLowerCase());
        const dist=[5,4,3,2,1].map(star=>{
          const cnt=pr.filter(r=>parseInt(r.rating)===star).length||(star===5?Math.round(total*.7):star===4?Math.round(total*.2):Math.round(total*.03));
          return{star,cnt,pct:total?Math.round((cnt/total)*100):0};
        });
        const revHtml=pr.length?pr.map(r=>`<div class="rating-review-item"><strong>${r.reviewer||"Customer"} — ${"★".repeat(parseInt(r.rating)||5)}</strong>${r.text||""}</div>`).join(""):"";
        return `<div class="rating-card reveal">
  <div class="rating-card-header">
    <div class="rating-product-name">${p.name}</div>
    <div class="rating-stars-big">${renderStars(avg)}</div>
  </div>
  <div style="display:flex;gap:14px;align-items:center;margin-bottom:12px">
    <div><div class="rating-avg">${avg}</div><div class="rating-total">${total} reviews</div></div>
    <div class="rating-bar-wrap" style="flex:1">
      ${dist.map(d=>`<div class="rating-bar-row"><span>${d.star}</span><div class="rating-bar-track"><div class="rating-bar-fill" style="width:${d.pct}%"></div></div><span>${d.pct}%</span></div>`).join("")}
    </div>
  </div>
  ${revHtml?`<div class="rating-reviews-list">${revHtml}</div>`:""}
</div>`;
      }).join("");
      grid.querySelectorAll(".reveal").forEach(el=>revObs.observe(el));
    }

    // ─── TESTIMONIALS ───
    function renderTestimonials(reviews) {
      if(!reviews?.length) return;
      const track=document.getElementById("testimonialsTrack"); if(!track) return;
      track.innerHTML=reviews.map(r=>{
        const init=(r.reviewer||r.name||"C").charAt(0).toUpperCase();
        const stars="★".repeat(parseInt(r.rating)||5);
        return `<div class="testimonial-card">
  <div class="stars">${stars}</div>
  <p class="testimonial-text">${r.text||r.review||""}</p>
  <div class="testi-author">
    <div class="author-av">${init}</div>
    <div><div class="author-name">${r.reviewer||r.name||"Customer"}</div><div class="author-loc">${r.location||r.loc||"India"}</div></div>
  </div>
</div>`;
      }).join("");
    }

    // ─── FAQ ───
    function renderFaq(faqData) {
      const list=document.getElementById("faqList"); if(!list) return;
      const items=faqData?.length?faqData:DEMO_FAQ;
      list.innerHTML=items.map((f,i)=>`<div class="faq-item" id="faq${i}">
  <div class="faq-q" onclick="toggleFaq(${i})"><span>${f.question}</span><div class="faq-icon">+</div></div>
  <div class="faq-a"><div class="faq-a-inner">${f.answer}</div></div>
</div>`).join("");
    }
    function toggleFaq(i) {
      const item=document.getElementById("faq"+i);
      const isOpen=item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(el=>el.classList.remove("open"));
      if(!isOpen) item.classList.add("open");
    }

    // ─── SETTINGS ───
    function applySettings(s) {
      if(!s) return;
      if(s.announcement){
        const bar=document.getElementById("announcementBar"),txt=document.getElementById("announcementText");
        if(bar&&txt){txt.textContent=s.announcement;bar.classList.add("show");}
      }
    }

    // ─── QUIZ ───
    function selectOpt(el,step,value) {
      el.closest(".quiz-options").querySelectorAll(".quiz-opt").forEach(o=>o.classList.remove("selected"));
      el.classList.add("selected");
      quizAnswers[quizKeys[step]]=value;
    }
    function nextStep(step) {
      document.getElementById("qs"+currentStep)?.classList.remove("active");
      // hide result step if going back
      document.getElementById("qsResult")?.classList.remove("active");
      currentStep=step;
      document.getElementById("qs"+step)?.classList.add("active");
      for(let i=0;i<3;i++) document.getElementById("qd"+i)?.classList.toggle("done",i<=step);
    }
    function showQuizResult() {
      const {skinType,concern,budget}=quizAnswers;
      let rec=allProducts.filter(p=>{
        const tags=(p.tags||"").toLowerCase();
        const ms=!skinType||tags.includes(skinType)||tags.includes("all");
        const mc=!concern||tags.includes(concern);
        const mb=!budget||budget==="any"||(budget==="low"&&parseInt(p.price)<=100)||(budget==="mid"&&parseInt(p.price)<=200);
        return ms&&mc&&mb;
      }).slice(0,3);
      if(!rec.length) rec=allProducts.slice(0,3);
      document.getElementById("quizRecommended").innerHTML=rec.map(p=>`<div class="quiz-rec-card">
  <span class="quiz-rec-icon">${p.emoji||"🌿"}</span>
  <div class="quiz-rec-name">${p.name}</div>
  <div class="quiz-rec-price">₹${p.price}</div>
</div>`).join("");
      const tipMap={oily:"For oily skin, charcoal and clay-based products work best.",dry:"For dry skin, moisturizing herbal products are recommended.",combo:"For combination skin, gentle balancing products are ideal.",normal:"For normal skin, glow-boosting products are perfect."};
      document.getElementById("quizResultDesc").textContent=tipMap[skinType]||"These products are best suited for your skin:";
      const waLink=document.getElementById("quizWaBtn");
      if(waLink) waLink.href=waQuiz(rec);
      document.querySelectorAll(".quiz-step").forEach(s=>s.classList.remove("active"));
      document.getElementById("qsResult")?.classList.add("active");
    }
    function resetQuiz() {
      quizAnswers={skinType:"",concern:"",budget:""};
      currentStep=0;
      document.querySelectorAll(".quiz-step").forEach(s=>s.classList.remove("active"));
      document.querySelectorAll(".quiz-opt").forEach(o=>o.classList.remove("selected"));
      document.getElementById("qs0")?.classList.add("active");
      for(let i=0;i<3;i++) document.getElementById("qd"+i)?.classList.toggle("done",i===0);
    }

    // ─── LOAD DATA ───
    async function loadData() {
      try {
        const res=await fetch(SHEET_API_URL);
        if(!res.ok) throw new Error("HTTP "+res.status);
        const data=await res.json();
        allProducts=data?.products?.length?data.products:DEMO_PRODUCTS;
        renderCombos(data?.combos?.length?data.combos:DEMO_COMBOS);
        renderFaq(data?.faq);
        renderRatings(allProducts,data?.reviews||[]);
        renderTestimonials(data?.reviews||[]);
        applySettings(data?.settings);
      } catch(e) {
        console.warn("Sheet load failed, using demo data:",e.message);
        allProducts=DEMO_PRODUCTS;
        renderCombos(DEMO_COMBOS);
        renderFaq(null);
        renderRatings(allProducts,[]);
        document.getElementById("announcementBar")?.classList.add("show");
      }
      fillReviewDropdown(allProducts);
      buildFilters(allProducts);
      applyFilters();
    }

    // ─── PARTICLES ───
    function initParticles() {
      const canvas=document.getElementById("particle-canvas"); if(!canvas) return;
      const ctx=canvas.getContext("2d");
      let W,H,particles=[];
      const resize=()=>{W=canvas.width=innerWidth;H=canvas.height=innerHeight;};
      resize(); window.addEventListener("resize",resize,{passive:true});
      // Skip on very low-end or reduced motion
      if(window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
      const mkP=()=>({x:Math.random()*W,y:H+5,size:Math.random()*2+.5,sx:(Math.random()-.5)*.4,sy:-(Math.random()*.6+.1),op:Math.random()*.4+.1,life:0,max:250+Math.random()*300});
      particles=Array.from({length:60},()=>{const p=mkP();p.y=Math.random()*H;return p;});
      function draw(){
        ctx.clearRect(0,0,W,H);
        particles.forEach((p,i)=>{
          p.x+=p.sx;p.y+=p.sy;p.life++;
          if(p.life>p.max||p.y<-10){particles[i]=mkP();return;}
          const fade=Math.min(p.life/30,(p.max-p.life)/30,1);
          ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
          ctx.fillStyle=`rgba(201,168,76,${p.op*fade})`;ctx.fill();
        });
        requestAnimationFrame(draw);
      }
      draw();
    }

    // ─── SCROLL ───
    window.addEventListener("scroll",()=>{
      const h=document.documentElement;
      const pct=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
      const bar=document.getElementById("scrollProgress");if(bar)bar.style.width=pct+"%";
      document.getElementById("navbar")?.classList.toggle("scrolled",scrollY>50);
      document.getElementById("scrollTopBtn")?.classList.toggle("show",scrollY>400);
    },{passive:true});

    // ─── REVEAL ───
    const revObs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");revObs.unobserve(e.target);}});
    },{threshold:.1});
    document.querySelectorAll(".reveal").forEach(el=>revObs.observe(el));

    // ─── COUNTER ───
    function animCount(el){
      const target=+el.dataset.count,start=performance.now(),dur=1800;
      const tick=now=>{
        const p=Math.min((now-start)/dur,1),e=1-Math.pow(1-p,3);
        el.textContent=Math.floor(e*target)+(p>=1?"":"+");
        if(p<1)requestAnimationFrame(tick);else el.textContent=target+"+";
      };
      requestAnimationFrame(tick);
    }
    const cntObs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll("[data-count]").forEach(animCount);cntObs.unobserve(e.target);}});
    },{threshold:.3});
    const sb=document.querySelector(".stats-bar");if(sb)cntObs.observe(sb);

    // ─── CARD ANIMATION ───
    const st=document.createElement("style");
    st.textContent=`@keyframes cardIn{from{opacity:0;transform:translateY(24px) scale(.97)}to{opacity:1;transform:none}}`;
    document.head.appendChild(st);

    // ─── SEARCH ───
    document.getElementById("searchInput")?.addEventListener("input",function(){
      searchQuery=this.value; applyFilters();
    });

    // ─── REVIEW DROPDOWN ───
    function fillReviewDropdown(products){
      const sel=document.getElementById("rf-product");
      if(!sel||!products?.length) return;
      sel.innerHTML=`<option value="">-- Select Product --</option>`+products.map(p=>`<option value="${p.name}">${p.name}</option>`).join("");
    }

    // ─── REVIEW SUBMIT ───
    async function submitReview(){
      const btn=document.getElementById("reviewSubmitBtn"),msg=document.getElementById("formMsg");
      const product=document.getElementById("rf-product").value.trim();
      const reviewer=document.getElementById("rf-name").value.trim();
      const location=document.getElementById("rf-location").value.trim();
      const text=document.getElementById("rf-text").value.trim();
      const ratingEl=document.querySelector('input[name="rating"]:checked');
      const rating=ratingEl?ratingEl.value:"";
      msg.className="form-msg";msg.textContent="";
      if(!product) return showMsg("error","⚠️ Please select a product");
      if(!reviewer) return showMsg("error","⚠️ Please enter your name");
      if(!rating) return showMsg("error","⚠️ Please give a rating");
      if(text.length<10) return showMsg("error","⚠️ Please write a longer review (min 10 characters)");
      btn.disabled=true;btn.textContent="⏳ Submitting...";
      try{
        const params=new URLSearchParams({product,reviewer,rating,text,location,action:"submitReview"});
        const res=await fetch(SHEET_API_URL+"?"+params.toString());
        const data=await res.json();
        if(data.success){
          showMsg("success","✅ Review Submitted Successfully! Thank you 🌿");
          document.getElementById("rf-product").value="";
          document.getElementById("rf-name").value="";
          document.getElementById("rf-location").value="";
          document.getElementById("rf-text").value="";
          document.querySelectorAll('input[name="rating"]').forEach(r=>r.checked=false);
          setTimeout(()=>location.reload(),3000);
        } else {
          showMsg("error","❌ "+(data.error||"Something went wrong, please try again"));
        }
      }catch(err){
        showMsg("error","❌ Network error — please check your connection");
      }finally{
        btn.disabled=false;btn.textContent="✦ Submit Review";
      }
    }
    function showMsg(type,text){
      const msg=document.getElementById("formMsg");
      msg.className="form-msg "+type;msg.textContent=text;
      msg.scrollIntoView({behavior:"smooth",block:"nearest"});
    }

    // ─── INIT ───
    window.addEventListener("load",()=>{
      setTimeout(()=>document.getElementById("loader")?.classList.add("hidden"),2400);
      initParticles();
      updateWaLinks();
      loadData();
    });