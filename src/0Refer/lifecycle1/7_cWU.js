//componentWillUnmount ...before uM/remove

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state={show:true};
    }
    delHeader=()=>{
        this.setState({show:false});
    }
    render(){
        let myheader;
        if(this.state.show){
            myheader=<Child/>;
        };
        return(
            <div>
                {myheader}
                <button onClick={this.delHeader} >Delete Header</button>
            </div>
        )
    }
}

class Child extends React.Component{
    componentWillUnmount(){
        alert('unmounted')
    }
    render(){
        return(
            <h1>Hello World!</h1>
        )
    }
}