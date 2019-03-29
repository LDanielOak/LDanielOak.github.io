var banners = ["img/destaque-home.png", "img/destaque-home2.png"]
var bannerAtual = 0;

function trocarBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.banner-destaque img').src = banners[bannerAtual];
}

setInterval(trocaBanner, 2000);