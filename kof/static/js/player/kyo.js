import { Player } from "/static/js/player/base.js";
import { GIF } from "/static/js/utils/gif.js"

export class kyo extends Player {
    constructor(root, info) {
        super(root, info);
        this.init_animations();
    }

    init_animations() {
        let outer = this;
        let offsets = [0, -22, -22, -140, 0, 0, 0];
        for (let i = 0; i < 7; i++) {
            let gif = GIF();
            gif.load(`/static/images/player/kyo/${i}.gif`);
            this.animations.set(i, {
                gif: gif,
                frame_cnt: 0, //总图片数
                frame_rate: 5, //每五帧过度一次
                offset_y: offsets[i], //y方向偏移量 不同图片大小不一样，行走时候人物会往下
                loaded: false, //是否被加载出来
                scale: 2,
            });

            gif.onload = function() {
                let obj = outer.animations.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true;
                if (i === 3) {
                    obj.frame_rate = 4;
                }
            }

        }


    }
}