import React from 'react';
import { useState, useRef, useEffect } from 'react'
import './knowledgeBase.css';
import data from './accordionData';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp  } from "react-icons/md";


const KnowledgeBase = () => {
    const [selected, setSelected] = useState(null);
    const [containerHeight, setContainerHeight] = useState(462);
    const answersRef = useRef([]);

    const toggle = i => {
        if (selected === i) {
           setSelected(null);
           setContainerHeight(462);
        } else {
            setSelected(i);
        }
    };

    useEffect(() => {
        // Calculate total height of expanded answers
        const expandedAnswersHeight = answersRef.current.reduce((totalHeight, answerRef, index) => {
            return selected === index ? totalHeight + answerRef.scrollHeight : totalHeight;
        }, 0);
        // Set container height to initial height plus total height of expanded answers
        setContainerHeight(462 + expandedAnswersHeight);
    }, [selected]);
  return (
    <div id='knowledge-base' className='knowledge__container' style={{ height: containerHeight }}>
        <div className="knowledge__header-container">
            <h4 className="knowledge-header">BAZA ZNANJA</h4>
            <div className="b1__main-straight-line"></div>
        </div>

        <div className="wrapper">
            <div className="accordion">
                {data.map((item, i) => (
                    <div className="item">
                        <div className="question__answer-container">
                        <div className="question" onClick={() => toggle(i)}>
                            <h4>{item.question}</h4>
                            <span>{selected === i ? <MdOutlineArrowDropUp className='dd-arrowUp'/> : <MdOutlineArrowDropDown className='dd-arrowDown'/>}</span>
                        </div>
                        <div ref={ref => answersRef.current[i] = ref} className={selected === i ? 'answer show' : 'answer'}>{item.answer}</div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default KnowledgeBase