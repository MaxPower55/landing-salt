var hsliderLinks = Array.from(document.querySelectorAll('.hslider__link'));
var popupVideo = document.querySelector('.popup-video');
var popupBtnClose = document.querySelector('.popup-video-close');
var videoContent = document.querySelector('#videoContent');

hsliderLinks.forEach(function(item,i,hsliderLinks) {
    var hsliderWrapper = document.querySelector('.hslider');
    var hsliderBtns = document.querySelectorAll('.hslider__btn');
    var sliderHeight = window.getComputedStyle(document.querySelector('.hslider__wrapper')).height.replace(/[a-zа-яё]/gi, '');
    hsliderLinks[i].addEventListener('click', function(){
        hsliderWrapper.style.transform = 'translateY(' + (sliderHeight * i * -1) + 'px)';
        hsliderBtns.forEach(function(item,j,hsliderBtns) {
            hsliderBtns[j].classList.remove('hslider__btn-active');
        })
        hsliderBtns[i].classList.add('hslider__btn-active');
    });
});

window.addEventListener('click', function(e) {
    console.log(videoContent);
    if (e.target.classList == 'videoposter') {
        popupVideo.style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden';
        videoContent.play();
    } else if (e.target.classList == 'popup-video-close') {
        popupVideo.style.display = 'none';
        document.querySelector('body').style.overflow = 'inherit';
        videoContent.pause();
        videoContent.currentTime = 0;
    } else if (e.target.classList == 'mobilemenu__btn') {
        var headerNav = document.querySelector('.header__nav');
        var body = document.querySelector('.body');
        headerNav.classList.toggle('header__nav-active');
        body.classList.toggle('body__locked');
    };
}, false);