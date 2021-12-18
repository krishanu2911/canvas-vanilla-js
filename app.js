const canvas = document.querySelector('#draw');
const strokeSize = document.querySelector('.stroke-size-input');
const strokeColor = document.querySelector('.stroke-color-input');
const rainbowBtn = document.querySelector('.rainbow');
rainbowBtn.addEventListener('click', rainbowClickHandler);

const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
ctx.strokeStyle = 'black';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
let isDrawing = false;
let lastX = 0;
let lastY = 0;
ctx.lineWidth = 10;
let hue = 0;
let rainBow = false;
function rainbowClickHandler(){
    if(!rainBow){
        rainBow = true;
    }else{
        rainBow = false;
    }
    
    // ctx.strokeStyle = `hsl(${hue}, 100% , 50%)`;
    // hue++;
    // console.log(hue);
}
function draw(e){
    if(!isDrawing) return;
    // console.log(e);
    if(rainBow){
    ctx.strokeStyle = `hsl(${hue}, 100% , 50%)`;
    hue++;
    }else{
        ctx.strokeStyle = 'black';
    }
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    
}
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown',(e)=> {
    isDrawing = true;
    [lastX , lastY] = [e.offsetX , e.offsetY]
});
canvas.addEventListener('mouseup',()=> isDrawing = false);
canvas.addEventListener('mouseout',()=> isDrawing = false);
strokeSize.addEventListener('change',strokeSizeHandler);
strokeColor.addEventListener('change',strokeColorHandler);
function strokeSizeHandler(){
    ctx.lineWidth = this.value;
    console.log(this.value);
}
function strokeColorHandler(){
    ctx.strokeStyle = `${this.value}`;
    console.log(this.value);
}