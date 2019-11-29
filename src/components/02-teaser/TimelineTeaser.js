import React from 'react';

class TimelineTeaser extends React.Component {
    render () {
        return (
            <div className="responsive-img aspect-ratio">
                   <div className="w-full h-full absolute z-10 inset-0 p-8 flex flex-col justify-end">
                        <p className="text-white text-4xl font-bold">{this.props.date}</p>
                        <p className="text-white text-xl">{this.props.subHeading}</p>
                    </div>
                    <img alt="" className="rounded-lg" src={this.props.img}></img>
            </div>
        );
    }
}

export default TimelineTeaser;