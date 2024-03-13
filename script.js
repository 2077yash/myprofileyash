burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.right-nav')



burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})


let ya = document.querySelectorAll('ya');
let navlinks = document.querySelectorAll('firstSection a');

window.onscroll = () =>{
    ya.forEach(ya => {
        let top = window.scrollY;
        let offset = ya.offsetTop -150;
        let height = ya.offsetHeight;
        let id = ya.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('firstSection a[href*='+ id +']').classList.add('active');
            });
        };
    });
};