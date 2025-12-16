const DATA = [
  {name:"Erlangen", type:["bavaria"], portal:"https://erlangen.de/en", transport:"https://www.vgn.de/en/getting-around/local-traffics/erlangen/"},
  {name:"Nürnberg", type:["bavaria","major"], portal:"https://www.nuernberg.de/internet/stadtportal/index.html", transport:"https://www.vgn.de/en/"},
  {name:"Munich", type:["bavaria","major"], portal:"https://www.muenchen.de/en/home", transport:"https://www.mvv-muenchen.de/en/index.html"},
  {name:"Berlin", type:["major"], portal:"https://www.berlin.de/en/", transport:"https://www.bvg.de/en"},
  {name:"Hamburg", type:["major"], portal:"https://www.hamburg.com/", transport:"https://www.hvv.de/en"},
  {name:"Frankfurt", type:["major"], portal:"https://frankfurt.de/english", transport:"https://www.rmv.de/c/en/homepage"},
  {name:"Cologne", type:["major"], portal:"https://www.stadt-koeln.de/index.html", transport:"https://www.kvb.koeln/en"},
  {name:"Stuttgart", type:["major"], portal:"https://www.stuttgart.de/en/", transport:"https://www.vvs.de/en/"},
  {name:"Dresden", type:["major"], portal:"https://www.dresden.de/en/tourism/tourism.php", transport:"https://www.dvb.de/en-GB/"},
];

const sel = document.getElementById("citySelect");
const typ = document.getElementById("cityType");
const act = document.getElementById("cityAction");
const card = document.getElementById("cityCard");
const openBtn = document.getElementById("openCity");

function filtered(){
  const t = typ.value;
  if(t==="all") return DATA;
  if(t==="major") return DATA.filter(x=>x.type.includes("major"));
  if(t==="bavaria") return DATA.filter(x=>x.type.includes("bavaria"));
  return DATA;
}
function renderSelect(){
  const list = filtered();
  sel.innerHTML = list.map(x=>`<option value="${x.name}">${x.name}</option>`).join("");
  renderCard();
}
function current(){
  const list = filtered();
  return list.find(x=>x.name===sel.value) || list[0];
}
function renderCard(){
  const c = current();
  if(!c){ card.innerHTML=""; return; }
  card.innerHTML = `
    <div class="featureGrid" style="grid-template-columns:1fr 1fr; margin-top:0">
      <a class="feature" href="${c.portal}" target="_blank" rel="noreferrer">
        <b>${c.name} official portal</b>
        <span>${c.portal}</span>
      </a>
      <a class="feature" href="${c.transport}" target="_blank" rel="noreferrer">
        <b>${c.name} public transport</b>
        <span>${c.transport}</span>
      </a>
    </div>
  `;
}
typ.addEventListener("change", renderSelect);
sel.addEventListener("change", renderCard);

openBtn.addEventListener("click", () => {
  const c = current();
  if(!c) return;
  const url = (act.value==="transport") ? c.transport : c.portal;
  window.open(url, "_blank", "noopener,noreferrer");
});

renderSelect();
