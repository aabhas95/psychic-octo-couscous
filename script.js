const cover=document.getElementById("cover");
const card=document.getElementById("card");
const openBtn=document.getElementById("openBtn");
const yesBtn=document.getElementById("yesBtn");
const maybeBtn=document.getElementById("maybeBtn");
const response=document.getElementById("response");

openBtn.addEventListener("click",()=>{
  openBtn.textContent="OPENING...";
  setTimeout(()=>cover.classList.add("exit"),350);
  setTimeout(()=>{
    cover.style.display="none";
    card.classList.remove("hidden");
    window.scrollTo({top:0,behavior:"instant"});
  },900);
});

yesBtn.addEventListener("click",()=>{
  response.classList.remove("hidden");
  yesBtn.textContent="IT'S A YES! ♥";
  yesBtn.disabled=true;
  maybeBtn.style.display="none";
  response.scrollIntoView({behavior:"smooth",block:"center"});
});

maybeBtn.addEventListener("click",()=>{
  const messages=["Are you sure? 👀","Think again... 😉","I'll wait... ❤️","Okay, but I'm hoping for a YES! 😄"];
  maybeBtn.textContent=messages[Math.floor(Math.random()*messages.length)];
});
