import "../scss/custom.scss";
import jQuery from 'jquery';
import Glide from '@glidejs/glide';

new Glide('.glide', {
type: 'carousel',
startAt: 1,
perView: 5,
gap: 15,
autoplay: false,
breakpoints: {
    1400: {
      perView: 4
    },
    1200: {
      perView: 4
    },
    990: {
      perView: 3
    },
    768: {
      perView: 2
    },
    600: {
      perView: 2
    },
    375: {
      perView: 1
    }
}
}).mount();

$(function() {
  setTimeout(
    function() 
    {
      //do something special
      $('.animation').attr('class','animplaceholder');
    }, 5100);

    // button for outfit widget
    $('.outfit_widget button').on('click',function(){
        window.open('styleboard_detail.html','_self');
    });

});