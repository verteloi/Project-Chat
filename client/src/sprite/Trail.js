// class Trail {
//     constructor(x, y) {
//         this.node = document.createElement("div");
//         this.node.textContent = Math.random() * 1 + 1;
//         this.node.classList.add("trail");
//         this.node.style.left = x + "px";
//         this.node.style.top = y + "px";
//         document.body.append(this.node);

//     }

//     tick() {
//         let alive = true;

//         this.node.style.opacity -= 0.02;

//         if (this.node.style.opacity < 0) {
//             alive = false;
//             this.node.remove();
//         }

//         return alive;
//     }
// }