import React from 'react'
import { NavLink } from 'react-router-dom'

export class About extends React.Component {
    render() {
        return(

            <div className="flex flex-col justify-center h-full lg:h-screen w-90 mx-auto py-12 lg:py-0">
                <h1 className="text-white text-4xl pb-8">About the Arthur Conan Doyle collection</h1>
                <p className="text-white text-2xl pb-24">
                The Arthur Conan Doyle collection is a world-class collection based in Portsmouth Central Library that brings together books, photographs, objects, documents and memorabilia chronicling the life of Conan Doyle, his most famous character, Sherlock Holmes, and beyond.
                <br/>
                <br/>
                There is also the Arthur Conan Doyle Collection (Lancelyn Green Bequest) located at the Portsmouth Museum . We welcome you to come and visit the exhibition, archive and city, and why not conduct your own investigation of the famous writer, his works, life and legacy, including the Portsmouth-born, world-famous detective, Sherlock Holmes. 
                </p>
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 text-white text-xl flex flex-col justify-between pb-12 lg:pb-0">
                        <div>
                            <h2 className="text-2xl pb-4">You can contact and find us at the following address:</h2>
                        </div>
                        <div className="pb-8">
                            <p>The Conan Doyle Collection</p>
                            <p>Central Library</p>
                            <p>Guildhall Walk</p>
                            <p>Portsmouth</p>
                            <p>PO1 2DX</p>
                        </div>
                        <div>
                            <a href="tel:02392 688043" className="btn btn--secondary mr-4 mb-4 lg:mb-0">Contact Us</a>
                            <a href="mailto: Sherlock.Holmes@portsmouthcc.gov.uk" className="btn btn--primary mr-4 mb-4 lg:mb-0">Email Us</a>
                            <a href="https://www.visitportsmouth.co.uk/conandoyle" rel="noopener noreferrer" target="_blank" className="btn btn--secondary">Visit our website</a>
                        </div>
                    </div>
                    <div className="lg:w-1/2 text-white text-xl flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl pb-4">Or discover the Museum collection at following address:</h2>
                        </div>
                        <div className="pb-8">
                            <p>A Study in Sherlock: Uncovering the Arthur Conan Doyle Collection</p>
                            <p>Portsmouth Museum</p>
                            <p>Museum Rd</p>
                            <p>Portsmouth </p>
                            <p>PO1 2LJ</p>
                        </div>
                        <div>
                            <a href="tel: 023 9283 4779" className="btn btn--primary mr-4">Contact</a>
                            <NavLink to="/map" className="btn btn--secondary">Find the museum</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}