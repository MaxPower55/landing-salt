// var mobileMenuBtn = document.querySelector('.mobilemenu__btn');
// mobileMenuBtn.addEventListener('click', function() {
//     var headerNav = document.querySelector('.header__nav');
//     var body = document.querySelector('.body');
//     headerNav.classList.toggle('header__nav-active');
//     body.classList.toggle('body__locked');
// }, false);

var hsliderLinks = Array.from(document.querySelectorAll('.hslider__link'));

hsliderLinks.forEach(function(item,i,hsliderLinks) {
    var hsliderWrapper = document.querySelector('.hslider__wrapper');
    var hsliderBtns = document.querySelectorAll('.hslider__btn');
    var sliderHeight = window.getComputedStyle(document.querySelector('.hslider')).height.replace(/[a-zа-яё]/gi, '');
    hsliderLinks[i].addEventListener('click', function(){
        hsliderWrapper.style.transform = 'translateY(' + (sliderHeight * i * -1) + 'px)';
        hsliderBtns.forEach(function(item,j,hsliderBtns) {
            hsliderBtns[j].classList.remove('hslider__btn-active');
        })
        hsliderBtns[i].classList.add('hslider__btn-active');
    });
});


var popupVideo = document.querySelector('.popup-video');
var popupBtnClose = document.querySelector('.popup-video-close');
var videoContent = document.querySelector('#videoContent');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyIG1vYmlsZU1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlbWVudV9fYnRuJyk7XHJcbi8vIG1vYmlsZU1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIHZhciBoZWFkZXJOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYnKTtcclxuLy8gICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHknKTtcclxuLy8gICAgIGhlYWRlck5hdi5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX25hdi1hY3RpdmUnKTtcclxuLy8gICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYm9keV9fbG9ja2VkJyk7XHJcbi8vIH0sIGZhbHNlKTtcclxuXHJcbnZhciBoc2xpZGVyTGlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oc2xpZGVyX19saW5rJykpO1xyXG5cclxuaHNsaWRlckxpbmtzLmZvckVhY2goZnVuY3Rpb24oaXRlbSxpLGhzbGlkZXJMaW5rcykge1xyXG4gICAgdmFyIGhzbGlkZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhzbGlkZXJfX3dyYXBwZXInKTtcclxuICAgIHZhciBoc2xpZGVyQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oc2xpZGVyX19idG4nKTtcclxuICAgIHZhciBzbGlkZXJIZWlnaHQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHNsaWRlcicpKS5oZWlnaHQucmVwbGFjZSgvW2EtetCwLdGP0ZFdL2dpLCAnJyk7XHJcbiAgICBoc2xpZGVyTGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGhzbGlkZXJXcmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKCcgKyAoc2xpZGVySGVpZ2h0ICogaSAqIC0xKSArICdweCknO1xyXG4gICAgICAgIGhzbGlkZXJCdG5zLmZvckVhY2goZnVuY3Rpb24oaXRlbSxqLGhzbGlkZXJCdG5zKSB7XHJcbiAgICAgICAgICAgIGhzbGlkZXJCdG5zW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2hzbGlkZXJfX2J0bi1hY3RpdmUnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGhzbGlkZXJCdG5zW2ldLmNsYXNzTGlzdC5hZGQoJ2hzbGlkZXJfX2J0bi1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG52YXIgcG9wdXBWaWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC12aWRlbycpO1xyXG52YXIgcG9wdXBCdG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC12aWRlby1jbG9zZScpO1xyXG52YXIgdmlkZW9Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZGVvQ29udGVudCcpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgY29uc29sZS5sb2codmlkZW9Db250ZW50KTtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QgPT0gJ3ZpZGVvcG9zdGVyJykge1xyXG4gICAgICAgIHBvcHVwVmlkZW8uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgdmlkZW9Db250ZW50LnBsYXkoKTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0ID09ICdwb3B1cC12aWRlby1jbG9zZScpIHtcclxuICAgICAgICBwb3B1cFZpZGVvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93ID0gJ2luaGVyaXQnO1xyXG4gICAgICAgIHZpZGVvQ29udGVudC5wYXVzZSgpO1xyXG4gICAgICAgIHZpZGVvQ29udGVudC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdCA9PSAnbW9iaWxlbWVudV9fYnRuJykge1xyXG4gICAgICAgIHZhciBoZWFkZXJOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYnKTtcclxuICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5Jyk7XHJcbiAgICAgICAgaGVhZGVyTmF2LmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fbmF2LWFjdGl2ZScpO1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYm9keV9fbG9ja2VkJyk7XHJcbiAgICB9O1xyXG59LCBmYWxzZSk7Il0sImZpbGUiOiJzY3JpcHQuanMifQ==