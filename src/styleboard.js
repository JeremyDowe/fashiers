// button for outfit widget
$('.outfit_widget button').on('click',function(){
    window.open('styleboard_detail.html','_self');
});

// glide
new Glide('#glide__tags', {
    type: 'carousel',
    startAt: 1,
    perView: 4,
    gap: 12,
    autoplay: false,
    }).mount();

