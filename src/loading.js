import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
// import "bootstrap/dist/css/bootstrap.css";

export default class Loading extends React.Component {
    constructor(props){
       super(props)
       this.state = {
          done: false
       }
    }

    componentDidMount() {
        setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => this.setState({ done: true }));
        }, 2000);
        }

    render(){

        console.log(this.state.done)

        const loadedStyle = {
            display: 'none'
        }

        const loadingStyle = {
            display: 'flex'
        }

       return(
        <div className="h-screen absolute z-50 inset-0 bg-primary justify-center items-center" style={{...this.state.done === false ? loadingStyle: loadedStyle}}>
            <ReactLoading type={"bars"} color={"white"} />
        </div>
       )
    }
 }