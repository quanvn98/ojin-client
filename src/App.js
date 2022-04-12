import React from 'react'
// import logo from './logo.svg'
// import { Counter } from './features/counter/Counter'
import './App.css'
// import { Button } from 'antd'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { MyHeader } from './features/header/Header'
import { MyFooter } from './features/footer/Footer'
const { Header, Content, Footer } = Layout

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </a>
          <span>, </span>
          <a className="App-link" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
            Redux
          </a>
          <span>, </span>
          <a className="App-link" href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
            Redux Toolkit
          </a>
          <span>, and </span>
          <a className="App-link" href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
            React Redux
          </a>
        </span>
        <Button type="primary">Ant Button</Button>
      </header> */}
      <Layout className="layout" style={{ background: '#fff' }}>
        <Header style={{ background: '#fff', padding: 0 }}>
          <MyHeader />
        </Header>
        <Content>
          <div className="site-layout-content">
            <Outlet />
          </div>
        </Content>
        <Footer style={{ padding: 0, backgroundColor: '#000', color: '#fff' }}>
          <MyFooter />
        </Footer>
      </Layout>
    </div>
  )
}

export default App
