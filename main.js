/*==============Show scrolltop============*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop)

/*=======Image shift index.html===========*/
var image = document.getElementById("img");
image.addEventListener('mouseover', function(){
  image.src = "images/me.jpg"
})
image.addEventListener('mouseout', function(){
    image.src = "images/bio.jpg"
})



