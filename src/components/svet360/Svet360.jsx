import React from 'react'
import './svet360.css';

const Svet360 = () => {
  return (
    <div id='360' className='svet__container'>
        <div className="rep__header-container">
            <h4 className="svet-header">SVET 360° - NOVICE, NASVETI IN SPOZNANJA NA ENEM MESTU</h4>
            <div className="b1__main-straight-line"></div>
        </div>

        <div className="svet__content-container">
            <div className="svet__content">
                <p className="svet__date">10.3.2023 - NOVICA</p>
                <h4 className="svet__header">Strokovnost in trajnost združena v pridobitvi ISO 14001:2015</h4>
                <p className="svet__sub">Z veseljem vas obveščamo da smo v podjetju Fist d.o.o uspešno pridobili okolijski standard ISO 14001:2015...<br></br><span>več</span></p>
            </div>

            <div className="svet__content bordered">
                <p className="svet__date">10.3.2023 - Novica</p>
                <h4 className="svet__header">Naš partner SABIC s ponosom predstavlja novo trajnostno zmes LNP™ ELCRIN™ WF0051iQ.</h4>
                <p className="svet__sub">Ta zmes ne zagotavlja le visoke zmogljivosti za električne aplikacije, temveč prispeva tudi k stalnim okoljskim pobudam.<br></br><span>več</span></p>
            </div>

            <div className="svet__content">
                <p className="svet__date">10.3.2023 - Novica</p>
                <h4 className="svet__header">Strokovnost in trajnost združena v pridobitvi ISO 14001:2015</h4>
                <p className="svet__sub">Z veseljem vas obveščamo da smo v podjetju Fist d.o.o uspešno pridobili okolijski standard ISO 14001:2015...<br></br><span>več</span></p>
            </div>
        </div>

        <button className="svet__btn">Ves Svet 360°</button>
    </div>
  )
}

export default Svet360;