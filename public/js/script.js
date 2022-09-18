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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGhzbGlkZXJMaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhzbGlkZXJfX2xpbmsnKSk7XHJcbnZhciBwb3B1cFZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXZpZGVvJyk7XHJcbnZhciBwb3B1cEJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXZpZGVvLWNsb3NlJyk7XHJcbnZhciB2aWRlb0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlkZW9Db250ZW50Jyk7XHJcblxyXG5oc2xpZGVyTGlua3MuZm9yRWFjaChmdW5jdGlvbihpdGVtLGksaHNsaWRlckxpbmtzKSB7XHJcbiAgICB2YXIgaHNsaWRlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHNsaWRlcicpO1xyXG4gICAgdmFyIGhzbGlkZXJCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhzbGlkZXJfX2J0bicpO1xyXG4gICAgdmFyIHNsaWRlckhlaWdodCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oc2xpZGVyX193cmFwcGVyJykpLmhlaWdodC5yZXBsYWNlKC9bYS160LAt0Y/RkV0vZ2ksICcnKTtcclxuICAgIGhzbGlkZXJMaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaHNsaWRlcldyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoJyArIChzbGlkZXJIZWlnaHQgKiBpICogLTEpICsgJ3B4KSc7XHJcbiAgICAgICAgaHNsaWRlckJ0bnMuZm9yRWFjaChmdW5jdGlvbihpdGVtLGosaHNsaWRlckJ0bnMpIHtcclxuICAgICAgICAgICAgaHNsaWRlckJ0bnNbal0uY2xhc3NMaXN0LnJlbW92ZSgnaHNsaWRlcl9fYnRuLWFjdGl2ZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaHNsaWRlckJ0bnNbaV0uY2xhc3NMaXN0LmFkZCgnaHNsaWRlcl9fYnRuLWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgY29uc29sZS5sb2codmlkZW9Db250ZW50KTtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QgPT0gJ3ZpZGVvcG9zdGVyJykge1xyXG4gICAgICAgIHBvcHVwVmlkZW8uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgdmlkZW9Db250ZW50LnBsYXkoKTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0ID09ICdwb3B1cC12aWRlby1jbG9zZScpIHtcclxuICAgICAgICBwb3B1cFZpZGVvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93ID0gJ2luaGVyaXQnO1xyXG4gICAgICAgIHZpZGVvQ29udGVudC5wYXVzZSgpO1xyXG4gICAgICAgIHZpZGVvQ29udGVudC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdCA9PSAnbW9iaWxlbWVudV9fYnRuJykge1xyXG4gICAgICAgIHZhciBoZWFkZXJOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYnKTtcclxuICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5Jyk7XHJcbiAgICAgICAgaGVhZGVyTmF2LmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fbmF2LWFjdGl2ZScpO1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYm9keV9fbG9ja2VkJyk7XHJcbiAgICB9O1xyXG59LCBmYWxzZSk7Il0sImZpbGUiOiJzY3JpcHQuanMifQ==