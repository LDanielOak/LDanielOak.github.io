var banners = ["_imagens\_Times/Mascote Atletico-MG.png",
"_imagens/_Times/Mascote Atletico-PR.png", "_imagens/_Times/Mascote Avaí.png", 
"_imagens/_Times/Mascote Bahia.png", "_imagens/_Times/Mascote Botafogo.png",
"_imagens/_Times/Mascote Ceará.png", "_imagens/_Times/Mascote Chapecoense.png",
"_imagens/_Times/Mascote Corinthians.png", "_imagens/_Times/Mascote Cruzeiro.png",
"_imagens/_Times/Mascote CSA.png", "_imagens/_Times/Mascote Fortaleza.png",
"_imagens/_Times/Mascote Goiás.png", "_imagens/_Times/Mascote Grêmio.png",
"_imagens/_Times/Mascote Internacional.png", "_imagens/_Times/Mascote Palmeiras.png",
"_imagens/_Times/Mascote Santos.png", "_imagens/_Times/Mascote Vasco.png",
"_imagens/_Times/Mascote Flamengo.png", "_imagens/_Times/Mascote Fluminense.png",
"_imagens/_Times/Mascote Sao Paulo.png"]
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = bannerAtual + 1;
    document.querySelector('.mascotes img').src = banners[bannerAtual];
    if (bannerAtual == 20) {
        bannerAtual = 0;
    }
}

setInterval(trocaBanner, 1000);