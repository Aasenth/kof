let AC_GAME_OBJECT = [];

class AcGameObject {
    constructor() {
        AC_GAME_OBJECT.push(this);

        this.timedelta = 0; //时间间隔
        this.has_call_start = false;
    }

    start() { //初始执行一次

    }

    update() {

    }

    destory() {
        for (let i in AC_GAME_OBJECT) {
            if (AC_GAME_OBJECT[i] === this) {
                AC_GAME_OBJECT.splice(i, 1);
            }
        }
    }


}


let last_timestamp;

let AC_GAME_OBJECT_FRAME = (timestamp) => { //当前函数执行的时刻
    for (let obj of AC_GAME_OBJECT) {
        if (!obj.has_call_start) {
            obj.start();
            obj.has_call_start = true;
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(AC_GAME_OBJECT_FRAME);

}
requestAnimationFrame(AC_GAME_OBJECT_FRAME);

export {
    AcGameObject,
}