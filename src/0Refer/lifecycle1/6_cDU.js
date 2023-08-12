//cDU after update/state change
class Update4 extends React.Component{
    constructor(props){
        super(props);
        this.state={favoritecolor:'red'};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoritecolor:'yellow'})
        },1000)
    }
    componentDidUpdate(){
        document.getElementById('mydiv').innerHTML=
        'The updated favorite is' + this.state.favoritecolor;
    }
    render(){
        return(
            <div>
                <h1>My Favorrite Color is 
                    {this.state.favoritecolor}
                </h1>
                <div id='mydiv' ></div>
            </div>
        )
    }
}

export default Update4