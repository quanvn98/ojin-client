import { RightOutlined } from '@ant-design/icons'
import { Col, Row, Typography } from 'antd'
import './landing.css'
import section1 from './images/section1.jpg'
import section2 from './images/section2.jpg'
import section5 from './images/section5.jpg'
import section7 from './images/section7.jpg'
import section10 from './images/section10.jpg'
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/swiper.scss'
import 'swiper/css'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

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

  const section2Items = [
    {
      image: require('./images/section2_1.jpg'),
      title: 'Thuốc uốn cao cấp nhất',
      description: 'Được sao Hàn tin dùng',
    },
    {
      image: require('./images/section2_2.jpg'),
      title: 'Stylist tay nghề cao',
      description: 'Công nghệ chuyển giao từ chuyên gia Hàn',
    },
    {
      image: require('./images/section2_3.jpg'),
      title: 'Đa dạng phong cách',
      description: 'Bao đẹp trai với mọi khuôn mặt',
    },
    {
      image: require('./images/section2_4.jpg'),
      title: 'Công nghệ hiện đại',
      description: 'Kết hợp nhiều thành phần dưỡng tóc',
    },
  ]

  const section3Items = [
    {
      image: require('./images/section3_1.jpg'),
      title: 'Nói gì với stylist để anh có kiểu tóc ưng ý',
      description: '',
    },
    {
      image: require('./images/section3_2.jpg'),
      title: 'Supporter thân thiện - Đón tiếp, lắng nghe và hỗ trợ bạn mọi lúc',
      description: '',
    },
    {
      image: require('./images/section3_3.jpg'),
      title: 'Những câu hỏi thường gặp',
      description: '',
    },
  ]

  const section4Items = [
    {
      image: require('./images/section4_1.jpg'),
      title: 'Thay đổi ngoại hình, chàng trai lạnh lùng, ít nói khiến cô hoa khôi rung động',
      description: '',
    },
    {
      image: require('./images/section4_2.jpg'),
      title: 'Can đảm thay đổi mái tóc 7 năm, nam sinh Kiến Trúc lột xác kiểu tóc mới cực đẹp',
      description: '',
    },
    {
      image: require('./images/section4_3.jpg'),
      title: 'Bạn sinh viên IT lột xác thành hot boy vạn người mê',
      description: '',
    },
    {
      image: require('./images/section4_4.jpg'),
      title: 'Phúc lột xác mái tóc để suốt bao năm giúp ngoại hình mới cực cuốn hút',
      description: '',
    },
  ]

  const section5Items = [
    {
      image: require('./images/section5_1.jpg'),
      title: 'Salon rộng lớn dễ tìm',
      description: 'Không gian mở & kết nối',
    },
    {
      image: require('./images/section5_2.jpg'),
      title: 'Trang thiết bị 30Shine SET',
      description: 'Nâng cấp trải nghiệm làm đẹp',
    },
    {
      image: require('./images/section5_3.jpg'),
      title: 'Làm chủ thời gian',
      description: 'Đặt lịch & các tiện ích 30Shine App',
    },
    {
      image: require('./images/section5_4.jpg'),
      title: 'Trải nghiệm âm nhạc',
      description: 'Năng lượng & Cảm xúc',
    },
  ]

  const section6Items = [
    {
      image: require('./images/section6_1.jpg'),
      title: 'Ca sĩ Lê Bảo Bình: Thay đổi để không phải "Bỏ lỡ một người"',
      description: '',
    },
    {
      image: require('./images/section6_2.jpg'),
      title: 'Kiểu tóc khiến LK Thoát ly chiếc mũ huyền thoại',
      description: '',
    },
    {
      image: require('./images/section6_3.jpg'),
      title: 'Hoàng Dũng: "Ngoại hình hết sức quan trọng, chỉ sau tài năng"',
      description: '',
    },
    {
      image: require('./images/section6_4.jpg'),
      title: 'Diễn viên Thanh Sơn "Cả Một Đời Ân Oán" tìm lại phong cách trẻ trung đúng tuổi thật',
      description: '',
    },
  ]

  const section7Items = [
    {
      image: require('./images/section7_1.png'),
      title: 'Khám phá kiểu tóc',
      description: 'Tìm cảm hứng đổi mới cho mái tóc',
    },
    {
      image: require('./images/section7_2.png'),
      title: 'Style Master',
      description: 'BXH các kiểu tóc hot trong tháng',
    },
  ]

  const section8Items = [
    {
      image: require('./images/section8_1.jpg'),
      title: 'Phòng chống Covid-19 - Vì sức khoẻ khách hàng, nhân viên và cộng đồng',
      description: '',
    },
    {
      image: require('./images/section8_2.jpg'),
      title: 'Mỹ phẩm & sản phẩm - Cam kết chất lượng - Đảm bảo xuất xứ',
      description: '',
    },
    {
      image: require('./images/section8_3.jpg'),
      title: 'Bảo quản xe cộ, đồ đạc',
      description: '',
    },
  ]

  const section9Items = [
    {
      image: require('./images/section9_1.jpg'),
      title: '',
      description: '',
    },
    {
      image: require('./images/section9_2.jpg'),
      title: '',
      description: '',
    },
    {
      image: require('./images/section9_3.jpg'),
      title: '',
      description: '',
    },
    {
      image: require('./images/section9_4.jpg'),
      title: '',
      description: '',
    },
    {
      image: require('./images/section9_5.jpg'),
      title: '',
      description: '',
    },
    {
      image: require('./images/section9_6.jpg'),
      title: '',
      description: '',
    },
    {
      image: require('./images/section9_7.jpg'),
      title: '',
      description: '',
    },
    {
      image: require('./images/section9_8.jpg'),
      title: '',
      description: '',
    },
    {
      image: require('./images/section9_9.jpg'),
      title: '',
      description: '',
    },
    {
      image: require('./images/section9_10.jpg'),
      title: '',
      description: '',
    },
  ]

  const section10Items = [
    {
      image: require('./images/section10_1.png'),
      title: '7 ngày',
      description: 'Chỉnh sửa tóc miễn phí',
    },
    {
      image: require('./images/section10_2.jpg'),
      title: '30 ngày',
      description: 'Đổi/trả hàng miễn phí',
    },
    {
      image: require('./images/section10_3.png'),
      title: '15 ngày',
      description: 'Bảo hành Uốn Nhuộm',
    },
    {
      image: require('./images/section10_4.png'),
      title: 'Giảm 20%',
      description: 'Nếu chờ đợi quá lâu',
    },
  ]

  const slide = slideItems.map((slide, index) => {
    return (
      <SwiperSlide key={index + 1}>
        <img src={slide} alt={`slide ${index + 1}`} style={{ width: '100%' }} />
      </SwiperSlide>
    )
  })

  const items1 = section1Items.map((item, index) => {
    return (
      <Col span={6} key={index}>
        <div className="section-item">
          <div className="section-item-image">
            <img src={item.image} alt={`section 1 item ${index + 1}`} />
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

  const items2 = section2Items.map((item, index) => {
    return (
      <Col span={6} key={index}>
        <div className="section-item">
          <div className="section-item-image">
            <img src={item.image} alt={`section 2 item ${index + 1}`} />
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

  const items3 = section3Items.map((item, index) => {
    return (
      <SwiperSlide key={index + 1}>
        <div>
          <div style={{ position: 'relative', overflow: 'hidden', height: 0, paddingBottom: '100%', marginBottom: '0.5rem', borderRadius: 10 }}>
            <img src={item.image} alt={`section 3 item ${index + 1}`} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <Typography.Title level={4} className="mb-0">
            {item.title}
          </Typography.Title>
        </div>
      </SwiperSlide>
    )
  })

  const items4 = section4Items.map((item, index) => {
    return (
      <SwiperSlide key={index + 1}>
        <div>
          <div style={{ position: 'relative', overflow: 'hidden', height: 0, paddingBottom: '50%', marginBottom: '0.5rem', borderRadius: 10 }}>
            <img src={item.image} alt={`section 4 item ${index + 1}`} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <Typography.Title level={4} className="mb-0">
            {item.title}
          </Typography.Title>
        </div>
      </SwiperSlide>
    )
  })

  const items5 = section5Items.map((item, index) => {
    return (
      <Col span={6} key={index}>
        <div className="section-item">
          <div className="section-item-image">
            <img src={item.image} alt={`section 5 item ${index + 1}`} />
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

  const items6 = section6Items.map((item, index) => {
    return (
      <SwiperSlide key={index + 1}>
        <div>
          <div style={{ position: 'relative', overflow: 'hidden', height: 0, paddingBottom: '50%', marginBottom: '0.5rem', borderRadius: 10 }}>
            <img src={item.image} alt={`section 6 item ${index + 1}`} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <Typography.Title level={4} className="mb-0">
            {item.title}
          </Typography.Title>
        </div>
      </SwiperSlide>
    )
  })

  const items7 = section7Items.map((item, index) => {
    return (
      <Col span={12} key={index}>
        <div className="section-item">
          <div className="section-item-image">
            <img src={item.image} alt={`section 7 item ${index + 1}`} />
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

  const items8 = section8Items.map((item, index) => {
    return (
      <SwiperSlide key={index + 1}>
        <div>
          <div style={{ position: 'relative', overflow: 'hidden', height: 0, paddingBottom: '100%', marginBottom: '0.5rem', borderRadius: 10 }}>
            <img src={item.image} alt={`section 8 item ${index + 1}`} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <Typography.Title level={4} className="mb-0">
            {item.title}
          </Typography.Title>
        </div>
      </SwiperSlide>
    )
  })

  const items9 = section9Items.map((item, index) => {
    return (
      <SwiperSlide key={index + 1}>
        <div>
          <div style={{ position: 'relative', overflow: 'hidden', height: 0, paddingBottom: '150%', borderRadius: 10 }}>
            <img src={item.image} alt={`section 9 item ${index + 1}`} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </SwiperSlide>
    )
  })

  const items10 = section10Items.map((item, index) => {
    return (
      <Col span={6} key={index}>
        <div className="section-item">
          <div className="section-item-image">
            <img src={item.image} alt={`section 10 item ${index + 1}`} />
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
        <Swiper modules={[Navigation, Autoplay]} navigation autoplay loop>
          {slide}
        </Swiper>
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
            <div className="section-image" style={{ paddingBottom: '34%' }}>
              <img src={section1} alt="section 1" />
            </div>
            <Row gutter={16}>{items1}</Row>
          </div>
        </div>

        <div className="landing-section">
          <div className="section-header">
            <div>
              <Typography.Title level={2} className="mb-0">
                TOP 1 dịch vụ được yêu thích nhất
              </Typography.Title>
              <Typography.Text type="secondary" className="d-inline-block">
                30Shine - Tự hào lan tỏa phong cách uốn tóc Hàn Quốc tới nam giới Việt
              </Typography.Text>
            </div>
            <Typography.Link href="#">
              Xem tất cả <RightOutlined />
            </Typography.Link>
          </div>
          <div className="section-body">
            <div className="section-image" style={{ paddingBottom: '33%' }}>
              <img src={section2} alt="section 2" />
            </div>
            <Row gutter={16}>{items2}</Row>
          </div>
        </div>

        <div className="landing-section">
          <div className="section-header">
            <div>
              <Typography.Title level={2} className="mb-0">
                Lắng nghe &amp; tận tâm
              </Typography.Title>
              <Typography.Text type="secondary" className="d-inline-block">
                Thấu hiểu nhu cầu, hỗ trợ nhiệt tình
              </Typography.Text>
            </div>
            <Typography.Link href="#">
              Xem tất cả <RightOutlined />
            </Typography.Link>
          </div>
          <div className="section-body">
            <Swiper modules={[Navigation]} navigation slidesPerView={3} spaceBetween={30}>
              {items3}
            </Swiper>
          </div>
        </div>

        <div className="landing-section">
          <div className="section-header">
            <div>
              <Typography.Title level={2} className="mb-0">
                Hành trình toả sáng
              </Typography.Title>
              <Typography.Text type="secondary" className="d-inline-block">
                Câu chuyện chân thực từ hàng chục ngàn khách hàng
              </Typography.Text>
            </div>
            <Typography.Link href="#">
              Xem tất cả <RightOutlined />
            </Typography.Link>
          </div>
          <div className="section-body">
            <Swiper modules={[Navigation]} navigation slidesPerView={2} spaceBetween={30}>
              {items4}
            </Swiper>
          </div>
        </div>

        <div className="landing-section">
          <div className="section-header">
            <div>
              <Typography.Title level={2} className="mb-0">
                Không gian &amp; thiết bị
              </Typography.Title>
              <Typography.Text type="secondary" className="d-inline-block">
                Nạp năng lượng với trải nghiệm không gian mở
              </Typography.Text>
            </div>
            <Typography.Link href="#">
              Xem tất cả <RightOutlined />
            </Typography.Link>
          </div>
          <div className="section-body">
            <div className="section-image" style={{ paddingBottom: '33%' }}>
              <img src={section5} alt="section 5" />
            </div>
            <Row gutter={16}>{items5}</Row>
          </div>
        </div>

        <div className="landing-section">
          <div className="section-header">
            <div>
              <Typography.Title level={2} className="mb-0">
                Người truyền cảm hứng và 30Shine
              </Typography.Title>
              <Typography.Text type="secondary" className="d-inline-block">
                Cùng lan tỏa thông điệp thay đổi để tỏa sáng
              </Typography.Text>
            </div>
            <Typography.Link href="#">
              Xem tất cả <RightOutlined />
            </Typography.Link>
          </div>
          <div className="section-body">
            <Swiper modules={[Navigation]} navigation slidesPerView={2} spaceBetween={30}>
              {items6}
            </Swiper>
          </div>
        </div>

        <div className="landing-section">
          <div className="section-header">
            <div>
              <Typography.Title level={2} className="mb-0">
                Khám phá kiểu tóc
              </Typography.Title>
              <Typography.Text type="secondary" className="d-inline-block">
                Nguồn cảm hứng cho kiểu tóc mới của bạn
              </Typography.Text>
            </div>
            <Typography.Link href="#">
              Xem tất cả <RightOutlined />
            </Typography.Link>
          </div>
          <div className="section-body">
            <div className="section-image" style={{ paddingBottom: '32%' }}>
              <img src={section7} alt="section 7" />
            </div>
            <Row gutter={16}>{items7}</Row>
          </div>
        </div>

        <div className="landing-section">
          <div className="section-header">
            <div>
              <Typography.Title level={2} className="mb-0">
                An tâm &amp; Tin tưởng
              </Typography.Title>
              <Typography.Text type="secondary" className="d-inline-block">
                Cam kết phòng dịch tối đa &amp; mỹ phẩm chính hãng
              </Typography.Text>
            </div>
            <Typography.Link href="#">
              Xem tất cả <RightOutlined />
            </Typography.Link>
          </div>
          <div className="section-body">
            <Swiper modules={[Navigation]} navigation slidesPerView={3} spaceBetween={30}>
              {items8}
            </Swiper>
          </div>
        </div>

        <div className="landing-section">
          <div className="section-header">
            <div>
              <Typography.Title level={2} className="mb-0">
                Shine Moment
              </Typography.Title>
              <Typography.Text type="secondary" className="d-inline-block">
                Cùng lan tỏa những phút giây tỏa sáng tại 30Shine
              </Typography.Text>
            </div>
            <Typography.Link href="#">
              Xem tất cả <RightOutlined />
            </Typography.Link>
          </div>
          <div className="section-body">
            <Swiper modules={[Navigation]} navigation slidesPerView={4} spaceBetween={30}>
              {items9}
            </Swiper>
          </div>
        </div>

        <div className="landing-section">
          <div className="section-header">
            <div>
              <Typography.Title level={2} className="mb-0">
                Cam kết 30shine Care
              </Typography.Title>
              <Typography.Text type="secondary" className="d-inline-block">
                Sự hài lòng của anh là ưu tiên hàng đầu của 30Shine
              </Typography.Text>
            </div>
            <Typography.Link href="#">
              Xem tất cả <RightOutlined />
            </Typography.Link>
          </div>
          <div className="section-body">
            <div className="section-image" style={{ paddingBottom: '30%' }}>
              <img src={section10} alt="section 10" />
            </div>
            <Row gutter={16}>{items10}</Row>
          </div>
        </div>
      </div>
    </div>
  )
}
