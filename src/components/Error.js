import React from 'react'
import Div100vh from 'react-div-100vh'
 
const Error = () => {
    return (
       <Div100vh>
         <div className="w-full flex justify-center items-center">
            <p className="text-white text-4xl">Error: Page does not exist!</p>
         </div>
       </Div100vh>
    );
}
 
export default Error;