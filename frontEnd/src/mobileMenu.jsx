const mobileNav = () => {
    const menuBtn = document.querySelector('.mob_menu');
    const mobNav = document.querySelector('.mobile_nav');

    //State
    let isMobileNavOpen = false;

    menuBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;

        if(isMobileNavOpen === true) {
            mobNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            mobNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
        
    });
}

export default mobileNav