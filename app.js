const navSlide = () => {

    const burger = document.querySelector('.burguer');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {

        nav.classList.toggle('show');

        navlinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.2}s`;
            }
        });

        //burguer animation
        burger.classList.toggle("toggle");

    });

}

navSlide();


