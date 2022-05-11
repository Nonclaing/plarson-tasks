"use strict";

onLoad().then(() => {
    alert("Страница загружена");
})

function onLoad() {
    return new Promise((resolve, reject) => {
        let timerId = setTimeout(function tick() {
            if (document.readyState == 'complete')
                return resolve();
            else
                timerId = setTimeout(tick);
        } );
    })
}