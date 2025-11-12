import {register} from './chat-api';

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return register(this, (message) => {
            // L'enregistrement est complétée (la requête)
        });
    }
})
