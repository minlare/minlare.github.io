import $ from 'jquery';
import lazyload from 'jquery-lazyload';
import smoothscroll from 'jquery-smooth-scroll';

console.log('hello jQuery', $);
console.log(lazyload);
console.log(smoothscroll);

$('a.continue').smoothScroll();
$('img.lazy').lazyload();