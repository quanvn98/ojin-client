import { Carousel } from 'antd'

export function Landing() {
  const slideItems = [require('./images/slide1.jpg'), require('./images/slide2.jpg'), require('./images/slide3.jpg'), require('./images/slide4.jpg'), require('./images/slide5.jpg')]

  const slide = slideItems.map((slide, index) => {
    return <img src={slide} alt={`slide ${index + 1}`} key={index + 1} />
  })

  return (
    <div>
      <div style={{ margin: '0 -50px 50px' }}>
        <Carousel autoplay>{slide}</Carousel>
      </div>
      <div>Index</div>
    </div>
  )
}
