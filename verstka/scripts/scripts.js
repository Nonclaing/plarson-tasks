'use strict'

document.addEventListener("DOMContentLoaded", (event) => {
    setAvatar('.avatar');
    activeBurger();
    setWrapperPadding();
});


async function getAvatar(index = 0) {
    return new Promise((resolve, reject) => {
        return resolve(`https://avatars.dicebear.com/api/avataaars/${Date.now() + index}.svg`);
    })
}

function setAvatar(idElement) {
    document.querySelectorAll(idElement).forEach((element, index) =>
        getAvatar(index).then((avatar) => element.src = avatar));
}

function activeBurger() {
    const burger =  document.querySelector('.header__burger');
    burger.addEventListener("click", () => {
        burger.classList.toggle('active');
        const headerSize = document.querySelector('.header').offsetHeight;
        const nav = document.querySelector('.header-body__nav');
        !!(nav.style.top) ? nav.style.cssText = null : nav.style.cssText = `top: ${headerSize}px`;
        document.querySelector('body').classList.toggle('lock');
    })
}

function setWrapperPadding() {
    const headerSize = document.querySelector('.header').offsetHeight;
    document.querySelector('.wrapper__content').style.cssText = `padding-top: ${headerSize}px`;
}

