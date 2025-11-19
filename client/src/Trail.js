export class Trail {
    constructor(x, y) {
        this.node = document.createElement("div");
        this.node.textContent = Math.floor(Math.random() * 2);
        this.node.classList.add("trail");
        this.node.style.left = x + "px";
        this.node.style.top = y + "px";
        document.body.append(this.node);

        this.speed = -0.02;
        this.opacity = 1;
    }

    tick() {
        let alive = true;

        this.opacity = this.node.style.opacity;
        this.opacity += this.speed;
        this.node.style.opacity = this.opacity;

        if (this.opacity < 0) {
            alive = false;
            this.node.remove();
        }

        return alive;
    }
}