import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from './features/landing/Landing'
import { Service } from './features/service/Service'
import { Shine } from './features/shine/Shine'
import { Style } from './features/style/Style'
import { Shop } from './features/shop/Shop'
import { Facility } from './features/facility/Facility'
import { Recruit } from './features/recruit/Recruit'
import { NotFound } from './features/404/NotFound'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Landing />} />
            <Route path="trai-nghiem-dich-vu" element={<Service />} />
            <Route path="hanh-trinh-toa-sang" element={<Shine />} />
            <Route path="kham-pha-kieu-toc" element={<Style />} />
            <Route path="30shine-shop" element={<Shop />} />
            <Route path="tim-30shine-gan-nhat" element={<Facility />} />
            <Route path="tuyen-dung" element={<Recruit />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
