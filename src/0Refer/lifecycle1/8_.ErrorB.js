//do by own, hint or typing import React from "react";
//gocl: getDSFError object cDCatch logETMS
import React from "react";

class ErrorB extends React.Component{
    constructor(props){
        super(props)
        this.state={
            here:'gaurav',
            there:'kumar'
        }
    }

    static getDerivedStateFromError(err){
        return { hasError: true};
    }

    componentDidCatch(err,errInfo){
 //       logErrorToMyService(err,errInfo);
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default ErrorB;