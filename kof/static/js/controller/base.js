export class Controller {
    constructor($canvas) {
        this.$canvas = $canvas;
        this.pressed_keys = new Set();
        this.start();
    }

    start() {
        let outer = this;
        //按下时候存入，松开时候弹出，set存储正在按的键
        this.$canvas.keydown(function(e) {
            outer.pressed_keys.add(e.key);
            // console.log(e.key);
        })

        this.$canvas.keyup(function(e) {
            outer.pressed_keys.delete(e.key);
        })
    }
}