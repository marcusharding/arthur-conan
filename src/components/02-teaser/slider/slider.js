import React from 'react';

// =========================
// Slide
// =========================

class Slide extends React.Component {
    constructor(props) {
        super(props)
    
        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
        this.handleSlideClick = this.handleSlideClick.bind(this)
        this.imageLoaded = this.imageLoaded.bind(this)
        this.slide = React.createRef()

        this.state = { opacity: 0 }
      }

      handleMouseMove(event) {
        const el = this.slide.current
        const r = el.getBoundingClientRect()
    
        el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)))
        el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)))
      }

      handleMouseLeave(event) {    
        this.slide.current.style.setProperty('--x', 0)
        this.slide.current.style.setProperty('--y', 0)
      }
      
      handleSlideClick(event) {
        this.props.handleSlideClick(this.props.slide.index)
      }

      imageLoaded = () => {
        this.setState({ opacity: 0.3 })
      }
      
      render() {
        const { src, headline, date, index } = this.props.slide
        const current = this.props.current
        let classNames = 'slide'
        const slideMargin = {
          marginRight: '1%'
        }

        
        if (current === index) classNames += ' slide--current'
        else if (current - 1 === index) classNames += ' slide--previous'
        else if (current + 1 === index) classNames += ' slide--next'
          return (
            <li 
            ref={this.slide}
            className={classNames} 
            onClick={(e)=>{this.handleSlideClick(); current === index ? e.preventDefault(): this.props.handleTrackerUpdate();}}
            onMouseMove={this.handleMouseMove}
            onMouseLeave={this.handleMouseLeave}
            style={slideMargin}
            >
              <div className="slide__image-wrapper">
                <img
                    className="slide__image"
                    style={{opacity: this.state.opacity}}
                    alt={headline}
                    src={src}
                    onLoad={()=>{this.imageLoaded(); this.props.appOnLoad()}}
                />
              </div>
              <article className="slide__content">
                <h1 className="slide__date">{date}</h1>
                <h2 className="slide__headline text-white">{headline}</h2>
                <div onClick={this.props.onModalClick} className="slide__overlay">
                  <button className="font-bold text-2xl">Read More</button>
                </div>
              </article>
            </li>
          )
      }
}

// =========================
// Slider control
// =========================

const SliderControl = ({ type, title, handleClick, handleTrackerUpdate, current }) => {
    return (
      <button className={`btn btn--${type}`} title={title} onClick={()=>{handleClick(); handleTrackerUpdate();}}>
        <svg className="icon" viewBox="0 0 24 24">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </button>
    )
  }

// =========================
// Slider
// =========================

class Slider extends React.Component {
  
    render() {
      // const { current, direction } = this.props.current
      const { slides, heading } = this.props 
      const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
      const wrapperTransform = {
        'transform': `translateX(-${this.props.current * (100 / slides.length)}%)`
      }
      
      return (
        <div className='slider' aria-labelledby={headingId}>
          <ul className="slider__wrapper" style={wrapperTransform}>
            <h3 id={headingId} className="visuallyhidden">{heading}</h3>
            
            {slides.map(slide => {
              return (
                <Slide
                  key={slide.index}
                  slide={slide}
                  current={this.props.current}
                  handleSlideClick={this.props.handleSlideClick}
                  handleTrackerUpdate={this.props.handleTrackerNext}
                  onModalClick={this.props.onModalClick}
                  appOnLoad={this.props.appOnLoad}
                />
              )
            })}
          </ul>
          
          <div className="slider__controls">
            <SliderControl 
              type="previous"
              current={this.props.current}
              title="Go to previous slide"
              handleClick={this.props.handlePreviousClick}
              handleTrackerUpdate={this.props.handleTrackerPrev}
            />
            
            <SliderControl 
              type="next"
              current={this.props.current}
              title="Go to next slide"
              handleClick={this.props.handleNextClick}
              handleTrackerUpdate={this.props.handleTrackerNext}
            />
          </div>
        </div>
      )
    }
  }

  export default Slider;