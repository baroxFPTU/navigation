const navLinks = document.querySelectorAll('.nav__link');

// Method 1

navLinks.forEach(navLink => {
    navLink.onclick = () => {
        // Remove all the active class from the other item.
        removeAllActiveClass(navLinks);

        navLink.classList.add('active');
    }
})

function removeAllActiveClass(arrayItems) {
    arrayItems.forEach(elm => elm.classList.remove('active'));
}