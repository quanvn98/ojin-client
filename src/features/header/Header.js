import { Button, Dropdown, Menu } from 'antd'
import logo from './images/logo.jpg'
import { DownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export function MyHeader() {
  const menuItems = [
    { text: 'trải nghiệm dịch vụ', link: '/trai-nghiem-dich-vu' },
    { text: 'hành trình tỏa sáng', link: '/hanh-trinh-toa-sang' },
    { text: 'khám phá kiểu tóc', link: '/kham-pha-kieu-toc' },
    { text: '30shine shop', link: '/30shine-shop' },
    { text: 'tìm 30shine gần nhất', link: '/tim-30shine-gan-nhat' },
    { text: 'tuyển dụng', link: '/tuyen-dung' },
  ]

  const menu = menuItems.map((menu, index) => {
    return (
      <Menu.Item key={index + 1}>
        <Link to={menu.link}>
          <b style={{ textTransform: 'uppercase' }}>{menu.text}</b>
        </Link>
      </Menu.Item>
    )
  })

  const dropdownItems = ['số dư', 'lịch sử tỏa sáng', 'bí kíp chăm sóc tóc', 'đăng xuất']

  const dropdown = dropdownItems.map((item, index) => {
    return <Menu.Item key={index + 1}>{item[0].toUpperCase() + item.slice(1)}</Menu.Item>
  })

  return (
    <div style={{ display: 'flex', alignItems: 'center' }} className="container">
      <Link to={'/'} style={{ display: 'flex' }}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <Menu theme="light" mode="horizontal" selectedKeys={[]} style={{ flexGrow: 1, minWidth: 0, justifyContent: 'flex-end' }}>
        {menu}
      </Menu>
      <Dropdown overlay={<Menu>{dropdown}</Menu>} placement="bottomRight" trigger={['click']}>
        <Button style={{ marginLeft: 24 }} type="primary">
          Quân <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  )
}
