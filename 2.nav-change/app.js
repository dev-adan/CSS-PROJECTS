const header = document.querySelector('header');
const sectionOne = document.querySelector('.home-intro');

const observer = new IntersectionObserver(entries => {

    // entries.forEach(entry => {
    //     console.log(entries)
    //     if(!entry.isIntersecting){
    //         header.classList.add('nav-scrolled')

    //     }else{
    //         header.classList.remove('nav-scrolled')
    //     }
    // })
    console.log('entries')

    if(!entries[0].isIntersecting){

        header.classList.add('nav-scrolled');
    }else{
        header.classList.remove('nav-scrolled')
    }

}, {
    rootMargin : '-100px 0px 0px 0px '
});


observer.observe(sectionOne);
