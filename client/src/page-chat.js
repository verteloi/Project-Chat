import {registerCallbacks, sendMessage, signout, chatMessageLoop} from './chat-api';
import { Trail } from './Trail';

window.addEventListener("load", () => {
    document.querySelector("textarea").onkeyup = function (evt) {
        sendMessage(evt, this)
    };
    document.querySelector("#sign-out-btn").onclick = signout;
    registerCallbacks(newMessage, memberListUpdate);
    chatMessageLoop();
})

// Lorsqu'un nouveau message doit être affiché à l'écran, cette fonction est appelée
const newMessage = (fromUser, message, isPrivate) => {
    if (message == "a") { //delete system32
        fakeCrash("img/crash.png");
    }
    
    let newNode = document.createElement("li");
    let parentNode = document.querySelector("ul")
    newNode.classList.add("chat-text");
    newNode.textContent = "C:\\Users\\" + fromUser + "> " + message;
    parentNode.append(newNode);

    console.log(fromUser, message, isPrivate);
}

// À chaque 2-3 secondes, cette fonction est appelée. Il faudra donc mettre à jour la liste des membres
// connectés dans votre interface.
const memberListUpdate = members => {
    console.log(members);
}

const fakeCrash = (url) => {
    let newNode = document.createElement("img");
    newNode.classList.add("crash-screen");
    newNode.src = url
    document.body.append(newNode);

    setTimeout(() => {
        newNode.remove();
    }, 3000);
}

let spriteList = [];

window.onmousemove = e => {    
    spriteList.push(new Trail(e.x, e.y));
}

const tick = () => {
    for (let i = 0; i < spriteList.length; i++) {
        let alive = spriteList[i].tick();

        if (!alive) {
            spriteList.splice(i, 1);
            i--;
        }
    }

    window.requestAnimationFrame(tick);
}

tick();