//3 marks
const b={
    name:'Vivek',
    f:function(){
        var self=this;
        console.log(this.name);
        (function(){
            console.log(this.name);
            console.log(self.name);
        })();
    }
}

b.f();

//Output
//Vivek
//undefined
//Vivek