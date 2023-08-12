//2 marks
//Code 2
function func2(){
    for(var i=0;i<3;i++){
        console.log(i)
        setTimeout(()=>console.log(i),2000)
    }
}

func2();

//Output
//0
//1
//2
//3
//3
//3