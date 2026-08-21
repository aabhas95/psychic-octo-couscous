const cover=document.getElementById("cover");
const card=document.getElementById("card");
const openBtn=document.getElementById("openBtn");
const yesBtn=document.getElementById("yesBtn");
const maybeBtn=document.getElementById("maybeBtn");
const success=document.getElementById("success");
const butterflyLayer=document.getElementById("butterflyLayer");
const music=document.getElementById("music");
const musicBtn=document.getElementById("musicBtn");

music.volume=0.35;

function startMusic(){
  music.play().then(()=>{
    musicBtn.classList.add("playing");
    musicBtn.textContent="Ⅱ";
  }).catch(()=>{});
}

openBtn.addEventListener("click",()=>{
  startMusic();
  openBtn.textContent="OPENING...";
  setTimeout(()=>cover.classList.add("exit"),350);
  setTimeout(()=>{
    cover.style.display="none";
    card.classList.remove("hidden");
    window.scrollTo({top:0,behavior:"instant"});
  },900);
});

musicBtn.addEventListener("click",()=>{
  if(music.paused){
    music.play();
    musicBtn.classList.add("playing");
    musicBtn.textContent="Ⅱ";
  }else{
    music.pause();
    musicBtn.classList.remove("playing");
    musicBtn.textContent="♫";
  }
});

yesBtn.addEventListener("click",()=>{
  success.classList.remove("hidden");
  yesBtn.textContent="IT'S A YES! ♥";
  yesBtn.disabled=true;
  maybeBtn.style.display="none";

  // The butterflies are deliberately staggered over ~5 seconds.
  launchButterflies(42);

  success.scrollIntoView({behavior:"smooth",block:"center"});
});

maybeBtn.addEventListener("click",()=>{
  const messages=[
    "Are you sure? 👀",
    "Think again... 😉",
    "I'll wait... ❤️",
    "Okay, but I'm hoping for a YES! 😄"
  ];
  maybeBtn.textContent=messages[Math.floor(Math.random()*messages.length)];
});

function launchButterflies(count){
  for(let i=0;i<count;i++){
    const b=document.createElement("div");
    b.className="butterfly";
    b.textContent="🦋";

    const side=(Math.random()<.5?-1:1);
    const x1=(Math.random()*22+8)*side;
    const x2=(Math.random()*42+15)*side;
    const x3=(Math.random()*58+20)*side;

    b.style.setProperty("--x1",`${x1}vw`);
    b.style.setProperty("--y1",`${-(Math.random()*18+8)}vh`);
    b.style.setProperty("--x2",`${x2}vw`);
    b.style.setProperty("--y2",`${-(Math.random()*42+22)}vh`);
    b.style.setProperty("--x3",`${x3}vw`);
    b.style.setProperty("--y3",`${-(Math.random()*65+35)}vh`);

    b.style.setProperty("--r1",`${(Math.random()-.5)*80}deg`);
    b.style.setProperty("--r2",`${(Math.random()-.5)*160}deg`);
    b.style.setProperty("--r3",`${(Math.random()-.5)*240}deg`);

    // Stagger each butterfly. The whole effect lasts roughly 5–7 seconds.
    b.style.setProperty("--delay",`${i*0.12+Math.random()*0.35}s`);
    b.style.setProperty("--duration",`${4.6+Math.random()*1.5}s`);
    b.style.fontSize=`${18+Math.random()*28}px`;

    butterflyLayer.appendChild(b);
    setTimeout(()=>b.remove(),7500);
  }
}
