//sCU boolean return for rendering or not
class Update2 extends React.Component{
    constructor(props){
        super(props);
        this.state={favoritecolor:'red'};
    }
    shouldComponentUpdate(){
        return false;
    }
    changeColor=()=>{
        this.setState({favoritecolor:'blue'});
    }
    render(){
        return(
            <div>
                <h1>My Favorite Color is
                    {this.state.favoritecolor} </h1>
                <button onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}
export default Update2;