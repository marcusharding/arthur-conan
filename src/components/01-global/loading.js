import React from "react";
import ReactLoading from "react-loading";
import Div100vh from "react-div-100vh";


export class Loading extends React.Component {

    render(){

        const loadedStyle = {
            display: 'none'
        }

        const loadingStyle = {
            display: 'flex'
        }


       return(
        <Div100vh>
            <div className="flex absolute z-2000 inset-0 bg-tertiary justify-center items-center" style={{...this.props.state === false ? loadingStyle : loadedStyle}}>
                <ReactLoading type={"bars"} color={"white"} />
            </div>
        </Div100vh>
       )
    }
 }