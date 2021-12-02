//tippy
import '../scss/tippy/tippy.css'; // optional for styling
import '../scss/tippy/themes/light.css';

//zoom action
$('a.zoom').zoom({on:'grab'});

// glide
new Glide('#glide__tags', {
    type: 'carousel',
    startAt: 1,
    perView: 4,
    gap: 12,
    autoplay: false,
    }).mount();

// tooltip tippy
const marker1 = document.getElementById('marker_1');

tippy('#marker_1', {
    placement: 'auto',
    content: marker1.innerHTML,
    allowHTML: true,
    interactive: true,
    hideOnClick: 'toggle',
    trigger: 'mouseenter',
    theme: 'light',
    arrow: false
});

const marker2 = document.getElementById('marker_2');
tippy('#marker_2', {
    placement: 'auto',
    content: marker2.innerHTML,
    allowHTML: true,
    interactive: true,
    hideOnClick: 'toggle',
    trigger: 'mouseenter',
    theme: 'light',
    arrow: false 
});

const marker3 = document.getElementById('marker_3');
tippy('#marker_3', {
    placement: 'left-start',
    content: marker3.innerHTML,
    allowHTML: true,
    interactive: true,
    hideOnClick: 'toggle',
    trigger: 'mouseenter',
    theme: 'light',
    arrow: false
});

const marker4 = document.getElementById('marker_4');
tippy('#marker_4', {
    placement: 'left-end',
    content: marker4.innerHTML,
    allowHTML: true,
    interactive: true,
    hideOnClick: 'toggle',
    trigger: 'mouseenter',
    theme: 'light',
    arrow: false    
});

const marker5 = document.getElementById('marker_5');
tippy('#marker_5', {
    placement: 'left-end',
    content: marker5.innerHTML,
    allowHTML: true,
    interactive: true,
    hideOnClick: 'toggle',
    trigger: 'mouseenter',
    theme: 'light',
    arrow: false   
});

const marker6 = document.getElementById('marker_6');
tippy('#marker_6', {
    placement: 'bottom-end',
    content: marker6.innerHTML,
    allowHTML: true,
    interactive: true,
    hideOnClick: 'toggle',
    trigger: 'mouseenter',
    theme: 'light',
    arrow: false    
});

const marker7 = document.getElementById('marker_7');
tippy('#marker_7', {
    placement: 'bottom-end',
    content: marker7.innerHTML,
    allowHTML: true,
    interactive: true,
    hideOnClick: 'toggle',
    trigger: 'mouseenter',
    theme: 'light',
    arrow: false    
});

const marker8 = document.getElementById('marker_8');
tippy('#marker_8', {
    placement: 'top',
    content: marker8.innerHTML,
    allowHTML: true,
    interactive: true,
    hideOnClick: 'toggle',
    trigger: 'mouseenter',
    theme: 'light',
    arrow: false 
});