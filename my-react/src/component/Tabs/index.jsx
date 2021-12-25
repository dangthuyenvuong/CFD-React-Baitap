import React, { useState } from 'react'
import './style.scss'

const Tabs = () => {

    const [isChoose, setIsChoose] = useState(1);

    const handleTabClick = (index) => {
        setIsChoose(index);
        console.log(index);
    }

    return (
        <>
            <div className="tab">
                <div className={`tab-select ${isChoose === 1 ? 'active' : ''}`}
                    onClick={() => handleTabClick(1)}>
                    Tab1</div>
                <div className={`tab-select ${isChoose === 2 ? 'active' : ''}`}
                    onClick={() => handleTabClick(2)}>
                    Tab2</div>
            </div>
            <div className={`tab-item ${isChoose === 1 ? 'active' : ''}`}>
                <h3>Tab 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quis earum saepe, id quidem rem totam consequuntur. Voluptatum omnis molestias laborum, amet doloremque eum recusandae, commodi dicta libero ea optio.</p>
            </div>
            <div className={`tab-item ${isChoose === 2 ? 'active' : ''}`}>
                <h3>Tab 2</h3>
                <p>Lorem ipsum dolor sioloremque eum recusandae, commodi dicta libero ea optio.</p>
            </div>

        </>
    )
}

export default Tabs
