import { Button, Col, Divider, Row, Typography } from 'antd'
import bocongthuong from './images/bocongthuong.png'
import dmca from './images/dmca.png'
import googleplay from './images/google-play.png'
import appstore from './images/app-store.png'
import { ReactComponent as Mastercard } from './images/mastercard.svg'
import { ReactComponent as Visa } from './images/visa.svg'
import { ReactComponent as Tiktok } from './images/tiktok.svg'
import { ReactComponent as Youtube } from './images/youtube.svg'
import './footer.css'
import { PhoneOutlined } from '@ant-design/icons'

export function MyFooter() {
  return (
    <div className="container footer-container">
      <div style={{ padding: '2rem 0' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Typography.Title level={5} className="m-0">
              CÔNG TY CỔ PHẦN TMDV 30SHINE
            </Typography.Title>
            <Typography.Text className="d-block">82 Trần Đại Nghĩa, P. Đồng Tâm, Q. Hai Bà Trưng, HN</Typography.Text>
            <Typography.Text className="d-block">Số giấy chứng nhận kinh doanh: 010.7467.693</Typography.Text>
            <Typography.Text className="d-block">Ngày cấp: 08/06/2016</Typography.Text>
            <Typography.Text className="d-block">Nơi cấp: Sở kế hoạch đầu tư TP Hà Nội</Typography.Text>
            <Typography.Title level={5} className="m-0">
              Chính sách bảo mật thông tin
            </Typography.Title>
            <Typography.Title level={5} className="m-0">
              Liên hệ quảng cáo 30Shine
            </Typography.Title>
            <div className="d-flex my-3">
              <img src={bocongthuong} alt="bo cong thuong" className="me-3" style={{ width: 150 }} />
              <img src={dmca} alt="DMCA" />
            </div>
            <Typography.Text className="d-block">Chấp nhận thanh toán</Typography.Text>
            <div className="d-flex">
              <Mastercard className="me-3" />
              <Visa />
            </div>
          </Col>
          <Col span={8}>
            <Typography.Title level={4} className="m-0">
              GIỜ PHỤC VỤ
            </Typography.Title>
            <Typography.Text className="d-block">Thứ 2 đến thứ 6: 8h00 - 21h00</Typography.Text>
            <Typography.Text className="d-block">Thứ 7, chủ nhật: 7h30 - 21h00</Typography.Text>
            <Button type="primary" size="large" block ghost icon={<PhoneOutlined />} className="mt-3">
              HOTLINE: 0123.456.789
            </Button>
          </Col>
          <Col span={8}>
            <Typography.Title level={4} className="m-0">
              TẢI ỨNG DỤNG CỦA 30SHINE
            </Typography.Title>
            <Typography.Text className="d-block">Trải nghiệm đặt lịch nhanh chóng và nhiều tiện ích khác với ứng dụng 30Shine.</Typography.Text>
            <div className="d-flex my-3">
              <img src={googleplay} alt="google play" className="me-3" style={{ width: 120 }} />
              <img src={appstore} alt="app store" style={{ width: 120 }} />
            </div>
            <Typography.Title level={4} className="m-0">
              THAM GIA CỘNG ĐỒNG
            </Typography.Title>
            <Typography.Text className="d-block">Cùng 2.5tr thành viên 30Shine</Typography.Text>
            <div className="d-flex mt-3">
              <Tiktok className="me-3" style={{ width: 40, height: 40 }} />
              <Youtube style={{ width: 40, height: 40 }} />
            </div>
          </Col>
        </Row>

        <Divider />

        <div className="d-flex align-items-center">
          <Typography.Text type="secondary" className="d-block me-auto">
            Copyright 2015 30Shine, Inc. All Rights Reserved
          </Typography.Text>
          <Typography.Text className="d-block me-3">Về 30Shine</Typography.Text>
          <Typography.Text className="d-block">Tuyển dụng</Typography.Text>
        </div>
      </div>
    </div>
  )
}
