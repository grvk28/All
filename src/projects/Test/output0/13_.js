//2 marks
function bigFunc(element){
    let newArray= new Array(700).fill('*');
    return newArray[element];
    // return (element)=>newArray[element];
}

console.log(bigFunc(599)) //created
console.log(bigFunc(670))//again created

//let getElement: bigFunc();
//getElement(599)
//getElement(670)

//Output?