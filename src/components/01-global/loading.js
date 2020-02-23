import React from "react";
import ReactLoading from "react-loading";


export class Loading extends React.Component {

    render(){

        const loadedStyle = {
            display: 'none'
        }

        const loadingStyle = {
            display: 'flex'
        }


       return(
        <div className="h-screen flex absolute z-40 inset-0 bg-tertiary justify-center items-center" style={{...this.props.state === false ? loadingStyle : loadedStyle}}>
            <ReactLoading type={"bars"} color={"white"} />
        </div>
       )
    }
 }