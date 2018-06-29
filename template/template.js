let result = `
    /* 你好，我是 Sam Pig，今天天气不错哦！ */
    /* 一起用CSS来画一只鸟吧！ */
    /* 先做一些预处理 */
    html{
        perspective: 1000px;
        color: #fff;
    }
    .code{
        border: 1px solid #fff;
    }
    /* 给我们的画布上色 */
    .preview{
        background-color: #4bb8e2;
    }
    /* 好的画家在落笔前，要先在心中构想鸟儿的位置 */
    .wrapper{
        width: 100%;
        height: 200px;
        position: relative;
        overflow: hidden;
    }
    /* 酝酿鸟儿 */
    .bird {
        width: 100px;
        height: 100px;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transform: scale(1.8);
    }

    /* ----------开始画了！ -------------*/

    /* 先画个大嘴巴 */
    .bird__head {
        position: relative;
        width: 40px;
        height: 40px;
        background: #F7A820;
        border-radius: 80% 0 0 10%;
        box-shadow: inset black 0 0 0 5px;
        border: 0;
    }
    /* 再画个圆脑袋 */
    .bird__head:after {
        content: '';
        position: absolute;
        right: -20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #eee;
        box-shadow: inset black 0 0 0 5px;
    }
    /* 加上一道羽冠 */
    .bird__head:before {
        content: '';
        position: absolute;
        width: 30px;
        height: 15px;
        right: -35px;
        border-radius: 0 20px 10px 0;
        background: black;
        transform: rotate(-7deg);
    }
    /* 画个黑眼睛 */
    .bird__eyes {
        width: 20px;
        height: 20px;
        position: absolute;
        background: black;
        border-radius: 50%;
        top: 5px;
        right: 0;
        z-index: 1;
    } 
    /* 画鸟点睛 */
    .bird__eyes:after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 50%;
        top: 2px;
        left: 5px;
    }
    /* 开始画身体 */
    .bird__body {
        width: 40px;
        height: 40px;
        border: black 5px solid;
        border-radius: 100% 0;
        transform: rotate(70deg);
        transform-origin: 0 0;
        background: #eee;
        left: 80px;
        top: -20px;
        position: relative;
    }     
    /* 添一双腿 */
    .bird__body:after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border: black 5px solid;
        top: 7px;
        left: 25px;
        transform: skew(-20deg);
    }
    /* 补齐双脚 */
    .bird__body:before {
        content: '';
        position: absolute;
        top: 30px;
        right: -20px;
        background: black;
        width: 30px;
        height: 5px;
        transform: rotate(-70deg);
    }
    /* 好了，我们的鸟画完了，希望你喜欢！ */

    

`
let duration = 50;
$('.speed').on('click','button',function(e){
     let speed = $(e.currentTarget).attr('data-speed');
     $(e.currentTarget).addClass('active').siblings('.active').removeClass('active');
     switch(speed){
         case 'slow':
         duration = 100;
         break;
         case 'medium':
         duration = 50;
         break;
         case 'fast':
         duration = 25;
         break;
         case 'rapid':
         duration = 1;
     }
 })
writeCode('',result,()=>{
    console.log('完成');
})
function writeCode(preCode,code,fn){
    let domCode = document.querySelector('#code');
    let styleTag = document.querySelector('#styleTag');
    let n = 0;
    let time = setTimeout(function run(){
       n = n + 1;
       domCode.innerHTML = Prism.highlight(preCode + code.substring(0,n) , Prism.languages.css);
       styleTag.innerHTML = preCode + code.substring(0,n);
       domCode.scrollTop = domCode.scrollHeight;
       if(n >= code.length){
           fn && fn.call();
       }else{
           setTimeout(run,duration);
       }
    },duration)
 }