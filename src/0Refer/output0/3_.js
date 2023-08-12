//2 marks
//Code 1
function func1(){
    console.log(x)
    setTimeout(()=>{
        console.log(x,y);
    },1000)
    var x=2;
    let y=12;
}

func1();

//Output
//undefined (if y too -> err)
//2 12




