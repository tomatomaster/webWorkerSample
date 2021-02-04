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
    console.log('Move');
    draw(event);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function draw(event) {
    ctx.fillRect(event.data.x/5, event.data.y/5, 3, 3);
}

