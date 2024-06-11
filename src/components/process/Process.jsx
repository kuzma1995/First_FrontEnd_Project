import React from 'react';
import './process.css';
import process from '../assets/process.svg';

const Process = () => {

  return (
    <div className='process__container'>
        <div className="process__header">
            <h4 className="process__header-text">NAŠ PROCES</h4>
            <div className="b1__main-straight-line"></div>
        </div>

        <div className="process__main-container">
                <img src={process} alt="process" />
                <div className="process__desc nakup">
                    <div className="process__vertical-line"></div>
                    <div className="process__description desc-nakup">Nakup</div>
                </div>

                <div className="process__desc ponudba">
                    <div className="process__vertical-line"></div>
                    <div className="process__description desc-nakup">Ponudba</div>
                </div>

                <div className="process__desc nabor">
                    <div className="process__vertical-line"></div>
                    <div className="process__description desc-nabor desc-nabor-main">Predstavljen nabor materialov</div>
                </div>

                <div className="process__desc povprasevanje">
                    <div className="process__vertical-line"></div>
                    <div className="process__description desc-nabor desc-pocprasevanje-main">Povpraševanje</div>
                </div>

                <div className="process__desc proces">
                    <div className="process__vertical-line"></div>
                    <div className="process__description desc-nabor desc-proces-main">Proces svetovanja</div>
                </div>

                <div className="process__desc analiza">
                    <div className="process__vertical-line"></div>
                    <div className="process__description desc-nabor desc-proces-main">Analiza potreb</div>
                </div>

                <div className="process__desc pregled">
                    <div className="process__vertical-line"></div>
                    <div className="process__description desc-nabor desc-proces-main">Pregled obstoječih možnosti</div>
                </div>

                <div className="process__desc dobava">
                    <div className="process__vertical-line"></div>
                    <div className="process__description desc-nabor desc-proces-main-sm">Dobava vzorčne količine</div>
                </div>

                <div className="process__desc testiranje">
                    <div className="process__vertical-line"></div>
                    <div className="process__description desc-nabor desc-proces-main">Testiranje</div>
                </div>

                <div className="process__desc nakup-2">
                    <div className="process__vertical-line"></div>
                    <div className="process__description desc-nabor desc-proces-main">Nakup</div>
                </div>

                <div className="process__desc podpora">
                    <div className="process__vertical-line"></div>
                    <div className="process__description desc-nabor">Spremljanje/<br></br>Podpora</div>
                </div>
        </div>

        <div className="process__sub">
            <p className='process__sub-text'>Ukvarjamo se z distribucijo plastičnih granulatov sit amet consectetur. Aliquet mauris amet morbi tincidunt orci vitae commodo. Eget tempor cras curabitur nec pellentesque scelerisque et in. Id turpis dictum egestas id enim at aliquam. Rhoncus. Aliquet mauris amet morbi tincidunt orci vitae commodo. Eget tempor cras curabitur nec pellentesque scelerisque et in. Id turpis dictum egestas id enim at aliquam. Rhoncus.</p>
        </div>
    </div>
  )
}

export default Process