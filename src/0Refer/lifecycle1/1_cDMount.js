//3 marks
//Mounting:
//constructor ...Component is made/Real Obj creation
//getDerivedStateFromProps() ...right before render/state change
//render() ...output
//ComponentDidMount ...after mount/state change
//getDerivedStateFromError ...if Comp updated/state change
//sCU boolean return for rendering or not
//gSBU before update/snap of prev values
//cDU after update/state change
//componentWillUnmount ...before uM/remove

class Mount extends React.Component{
    constructor(props){
        super(props);
        this.state={favoritecolor:'red'};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoritecolor:'yellow'})
        },1000)
    }
    render(){
        return(
            <h1>My Favorite Color is 
                {this.state.favoritecolor}
            </h1>
        )
    }
}

export default Mount