//2 marks
// function randomFunc(){
//     for(var i=0;i<2;i++){
//         setTimeout(()=>{console.log(i)},1000);
//     }
// }
// randomFunc();

// function randomFunc(){
//     for(let i=0;i<2;i++){
//         setTimeout(()=>console.log(i),1000)
//     }
// }
// randomFunc();

function randomFunc(){
    for(var i=0;i<2;i++){
        (function(i){
            setTimeout(()=>console.log(i),1000);
        })(i);
    }
}
randomFunc();
//Output
//0
//1