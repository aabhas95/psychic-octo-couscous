const screens=[...document.querySelectorAll(".screen")];
let current=0;
let moving=false;

const music=document.getElementById("music");
const musicBtn=document.getElementById("musicBtn");
music.volume=.35;

function startMusic(){
  music.play().then(()=>{
    musicBtn.classList.add("playing");
    musicBtn.textContent="Ⅱ";
  }).catch(()=>{});
}

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

function showScreen(next){
  if(moving || next<0 || next>=screens.length)return;
  moving=true;

  const old=screens[current];
  const target=screens[next];

  old.classList.remove("active");
  old.classList.add("leaving");

  target.classList.remove("leaving","enterFromLeft","enterFromRight");
  target.classList.add(next>current?"enterFromRight":"enterFromLeft");

  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      target.classList.add("active");
      target.classList.remove("enterFromRight","enterFromLeft");
    });
  });

  setTimeout(()=>{
    old.classList.remove("leaving");
    current=next;
    moving=false;
  },750);
}

document.querySelectorAll("[data-next]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    startMusic();
    showScreen(current+1);
  });
});

document.getElementById("yayBtn").addEventListener("click",()=>{
  startMusic();
  launchButterflies(48);
  setTimeout(()=>showScreen(13),8300);
});

document.getElementById("maybeBtn")?.addEventListener("click",()=>{});

function launchButterflies(count){
  const layer=document.getElementById("butterflies");

  for(let i=0;i<count;i++){
    const b=document.createElement("span");
    b.className="butterfly";

    const side=Math.random()<.5?-1:1;
    b.style.setProperty("--x1",`${(Math.random()*22+8)*side}vw`);
    b.style.setProperty("--y1",`${-(Math.random()*18+8)}vh`);
    b.style.setProperty("--x2",`${(Math.random()*45+12)*side}vw`);
    b.style.setProperty("--y2",`${-(Math.random()*42+20)}vh`);
    b.style.setProperty("--x3",`${(Math.random()*70+15)*side}vw`);
    b.style.setProperty("--y3",`${-(Math.random()*70+30)}vh`);
    b.style.setProperty("--r1",`${(Math.random()-.5)*90}deg`);
    b.style.setProperty("--r2",`${(Math.random()-.5)*180}deg`);
    b.style.setProperty("--r3",`${(Math.random()-.5)*280}deg`);
    b.style.setProperty("--delay",`${i*.09+Math.random()*.35}s`);
    b.style.setProperty("--duration",`${4.8+Math.random()*1.7}s`);
    b.style.setProperty("--size",`${18+Math.random()*20}px`);

    const left=b.appendChild(document.createElement("i"));
    const right=b.appendChild(document.createElement("i"));
    const body=b.appendChild(document.createElement("b"));
    left.className="wing leftWing";
    right.className="wing rightWing";
    body.className="butterflyBody";

    layer.appendChild(b);
    setTimeout(()=>b.remove(),8000);
  }
}
