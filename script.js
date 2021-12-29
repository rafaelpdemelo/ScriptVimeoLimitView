

<script src="https://player.vimeo.com/api/player.js"></script>

<script>

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getViews(id) {
  return Number(getCookie(id)) || 0;
}

function setViews(id, views) {
  if (views < 0) {
    views = 0;
  }
  setCookie(id, views.toString(), 365);
}

// FUNÇÃO QUE BUSCA A LOGO PARA VERIFICAR SE A CONEXÃO COM A INTERNET ESTÁ ATIVA
const checkOnlineStatus = async () => {
  try {
    let headers = new Headers();
    headers.append('pragma', 'no-cache');
    headers.append('cache-control', 'no-cache');
    let init = {
      method: 'GET',
      headers: headers,
    };
    const online = await fetch(new Request(document.querySelector('#navbar').querySelector('img').src), init);
    return online.status >= 200 && online.status < 300;
  } catch (err) {
    return false;
  }
};

document.addEventListener("turbo:load", function(){
let listaOriginal = document.querySelector('ul.mt-4');
var novaLista = document.createElement('li');
var novoA = document.createElement("a");
var novaDiv = document.createElement("div");
var novoSpan = document.createElement("div");
var novoI = document.createElement("i");
var novoTexto = document.querySelector('h6.mt-0');


listaOriginal.appendChild(novaLista);
novaLista.classList.add("mt-4", "nav-item-site");
novaLista.appendChild(novoA);
novoA.classList.add("nav-link");
novoA.href = "https://cursocarlosjapwwa.com.br"
novoSpan.textContent = 'Nosso site'
novoA.appendChild(novaDiv);
novoA.appendChild(novoSpan);
novoSpan.classList.add("ml-2.5");
novaDiv.classList.add("flex-none", "w-5", "h-5");
novaDiv.appendChild(novoI);
novoI.setAttribute('data-feather', 'monitor');
novoTexto.textContent = 'Área do Aluno';

if (document.querySelector('nav').innerText.toLowerCase().includes('opções avançadas')) {
if (document.querySelector('div.sticky').innerText.includes('Revisão Final 2021')){
    let listaOriginal2 = document.querySelector('div.sticky');
var otherA = document.createElement('a')
listaOriginal2.appendChild(otherA);
otherA.href = "https://www.notion.so/backst4gestudio/N-o-tem-nada-aqui-ainda-5192484951a44d63952bed80b4392c8b"
otherA.classList.add("btn", "btn-outline-primary", "border-2", "w-full", "mt-6", "text-base", "font-medium")
otherA.textContent = 'Construindo...'
}
}

if (document.querySelector('nav').innerText.toLowerCase().includes('opções avançadas')) {
if (document.querySelector('div.sticky').innerText.includes('Extensivo on-line 2021')){
    let listaOriginalEXTON = document.querySelector('div.sticky');
var otherAEXTON = document.createElement('a')
listaOriginalEXTON.appendChild(otherAEXTON);
otherAEXTON.href = "https://backst4gestudio.notion.site/Extensivo-Online-4b8a4cb510db42bc9224110fd409d4f1"
otherAEXTON.classList.add("btn", "btn-outline-primary", "border-2", "w-full", "mt-6", "text-base", "font-medium")
otherAEXTON.textContent = 'Materiais Complementares 🚀'
}
}

if (document.querySelector('nav').innerText.toLowerCase().includes('opções avançadas')) {
if (document.querySelector('div.sticky').innerText.includes('Intensivo on-line 2021')){
    let listaOriginalINTON = document.querySelector('div.sticky'); // TROCAR
var otherAINTON = document.createElement('a') //TROCAR
listaOriginalINTON.appendChild(otherAINTON); //TROCAR
otherAINTON.href = "https://www.notion.so/backst4gestudio/Intensivo-2ab1106025bd44fc93bb5a06d9fb9f81" // TROCAR
otherAINTON.classList.add("btn", "btn-outline-primary", "border-2", "w-full", "mt-6", "text-base", "font-medium") //TROCAR
otherAINTON.textContent = 'Materiais Complementares 🚀' //TROCAR
}
}

if (document.querySelector('nav').innerText.toLowerCase().includes('opções avançadas')) {
if (document.querySelector('div.sticky').innerText.includes('ENEM Avançado 2021')){
    let listaOriginalEAV = document.querySelector('div.sticky'); // TROCAR
var otherAEAV = document.createElement('a') //TROCAR
listaOriginalEAV.appendChild(otherAEAV); //TROCAR
otherAEAV.href = "https://www.notion.so/backst4gestudio/Enem-Avan-ado-244ab6d072c14b52ad9a4dca2ee84dcf" // TROCAR
otherAEAV.classList.add("btn", "btn-outline-primary", "border-2", "w-full", "mt-6", "text-base", "font-medium") //TROCAR
otherAEAV.textContent = 'Materiais Complementares 🚀' //TROCAR
}
}

// LIMITE DE VISUALIZAÇÕES POR VÍDEO
const views_limit = 3;

// DEIXA LIBERADO PRO ADMINISTRADOR
if (!document.querySelector('nav').innerText.toLowerCase().includes('opções avançadas')) {
  // VERIFICA O FORMATO DA URL PARA EXECUTAR APENAS NA PÁGINA DAS AULAS
  let url = window.location.href.split('/');
  if (3 in url) {
    if (!isNaN(url[3].split('-')[0])) {
      if (4 in url) {
        if (!isNaN(url[4].split('-')[0])) {
          let iframe_exists = setInterval(function() {
            let iframe = document.querySelector('iframe');
            if (iframe != null) {    
              clearInterval(iframe_exists);
              let id = iframe.parentElement.dataset.vimeoUidValue; // ID DO VÍDEO
              let views = getViews(id); // QUANTAS VEZES O USUÁRIO JÁ VISUALIZOU
              if (views >= views_limit) {
                alert('Limite de visualizações no vídeo atingido!');
                iframe.remove(); // REMOVE O VÍDEO
              } else {
                let player = new Vimeo.Player(iframe);
                let first_play = true;
                player.on('play', function() {   
                  if (first_play) {  
                    // SÓ FUNCIONA NA PRIMEIRA VEZ QUE DÁ O PLAY NO VÍDEO
                    setViews(id, views+1); // INCREMENTA UMA VISUALIZAÇÃO NO VÍDEO
                    first_play = false;
                  }
                });
                let ficou_offline = false;
                // VERIFICA SE HÁ CONEXÃO A CADA 5 SEGUNDOS
                setInterval(async () => {
                  const online = await checkOnlineStatus();
                  if (!first_play) {
                    if (online) {
                      if (ficou_offline) {
                        // ESTAVA OFFLINE E FICOU ON, READICIONA A VISUALIZAÇÃO
                        ficou_offline = false;
                        setViews(id, getViews(id)+1);
                      }
                    } else if (!ficou_offline) {
                      // FICOU OFFLINE, DESCONSIDERA A VISUALIZAÇÃO
                      ficou_offline = true;
                      setViews(id, getViews(id)-1);
                    }
                  }
                }, 5000);
              }
            }
          }, 100);
        }
      }
    }
  }
}

})

</script>

<script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
<script>
document.addEventListener("turbo:load", function(){
  feather.replace()
})
</script>
