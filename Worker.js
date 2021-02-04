//importScripts('./paper-full.js');
//paper.install(this);
//paper.setup([640, 480]);

var offscreenCanvas;
var ctx;

onmessage = event => {
    switch (event.data.type) {
        case 'init':
            init(event);
            break;
        case 'pointermove':
            pointerMove(event);
            break;
    }
};

function init(event) {
    offscreenCanvas = event.data.canvas;
    ctx = offscreenCanvas.getContext('2d');
    console.log('init');
}

function pointerMove(event) {
    draw(event);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function draw(event) {
    ctx.fillRect(event.data.x, event.data.y, 3, 3);
}

