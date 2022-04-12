import './fixed.css'
import { ReactComponent as Phone } from './images/phone-call.svg'
import { ReactComponent as Messenger } from './images/messenger.svg'

export function Fixed() {
  return (
    <div className="fixed-container">
      <a href="tel:0123456789" className="fixed-button shadow mb-3" style={{ backgroundColor: '#ffa500' }}>
        <Phone style={{ width: 25, height: 25 }} />
      </a>
      <a href="https://www.messenger.com/" className="fixed-button shadow" style={{ backgroundColor: '#0084ff' }}>
        <Messenger style={{ width: 50, height: 50 }} />
      </a>
    </div>
  )
}
