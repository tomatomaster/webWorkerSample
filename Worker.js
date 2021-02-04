//importScripts('./paper-full.js');
//paper.install(this);
//paper.setup([640, 480]);

var offscreenCanvas;
var context;

onmessage = event => {
    switch (event.data.type) {
        case 'init':
            init(event);
            break;
        case 'pointerdown':
            dragStart(event);
            break;
        case 'pointerup':
            dragEnd(event);        
            break;
        case 'pointermove':
            pointerMove(event);
            break;
        
    }
};

const lastPosition = { x: null, y: null };
let isDrag = false;
let currentColor = '#000000';

function dragStart(event) {
    context.beginPath();

    isDrag = true;
  }

  function dragEnd(event) {
    context.closePath();
    isDrag = false;
    lastPosition.x = null;
    lastPosition.y = null;
  }

function init(event) {
    offscreenCanvas = event.data.canvas;
    context = offscreenCanvas.getContext('2d');
    console.log('init');
}

function pointerMove(event) {
    draw(event.data.x, event.data.y);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function draw(x, y) {
    if(!isDrag) {
      return;
    }
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.lineWidth = 5;
    context.strokeStyle = currentColor;
    if (lastPosition.x === null || lastPosition.y === null) {
      context.moveTo(x, y);
    } else {
      context.moveTo(lastPosition.x, lastPosition.y);
    }
    context.lineTo(x, y);
    context.stroke();

    lastPosition.x = x;
    lastPosition.y = y;
}

