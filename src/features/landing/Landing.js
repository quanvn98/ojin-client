import { RightOutlined } from '@ant-design/icons'
import { Carousel, Col, Row, Typography } from 'antd'
import './landing.css'
import section1 from './images/section1.jpg'

export function Landing() {
  const slideItems = [require('./images/slide1.jpg'), require('./images/slide2.jpg'), require('./images/slide3.jpg'), require('./images/slide4.jpg'), require('./images/slide5.jpg')]

  const section1Items = [
    {
      image: require('./images/section1_1.jpg'),
      title: 'Cắt gội massage',
      description: 'Bảng giá 2022',
    },
    {
      image: require('./images/section1_2.jpg'),
      title: 'Uốn nhập khẩu Hàn',
      description: 'Chỉ từ 287k',
    },
    {
      image: require('./images/section1_3.jpg'),
      title: 'Nhuộm nhập khẩu Ý',
      description: 'Chỉ từ 206k',
    },
    {
      image: require('./images/section1_4.jpg'),
      title: 'Dịch vụ khác',
      description: '4 dịch vụ',
    },
  ]

  const slide = slideItems.map((slide, index) => {
    return <img src={slide} alt={`slide ${index + 1}`} key={index + 1} />
  })

  const items1 = section1Items.map((item, index) => {
    return (
      <Col span={6} key={index}>
        <div className="section-item">
          <div className="section-item-image">
            <img src={item.image} alt="section 1 item 1" />
          </div>
          <div>
            <Typography.Title level={4} className="mb-0">
              {item.title}
            </Typography.Title>
            <Typography.Text type="secondary" className="d-inline-block">
              {item.description}
            </Typography.Text>
          </div>
        </div>
      </Col>
    )
  })

  return (
    <div>
      <div style={{ marginBottom: 50 }}>
        <Carousel autoplay>{slide}</Carousel>
      </div>
      <div className="container">
        <div className="landing-section">
          <div className="section-header">
            <div>
              <Typography.Title level={2} className="mb-0">
                Trải nghiệm dịch vụ
              </Typography.Title>
              <Typography.Text type="secondary" className="d-inline-block">
                Thư giãn 30 phút và bạn sẽ tỏa sáng
              </Typography.Text>
            </div>
            <Typography.Link href="#">
              Xem tất cả <RightOutlined />
            </Typography.Link>
          </div>
          <div className="section-body">
            <div className="section-image">
              <img src={section1} alt="section 1" />
            </div>
            <Row gutter={16}>{items1}</Row>
          </div>
        </div>
      </div>
    </div>
  )
}
