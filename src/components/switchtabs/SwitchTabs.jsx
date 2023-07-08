import React, { useState } from 'react'
import './SwitchTabs.scss';

function SwitchTabs({data, onTabsChange}) {
    const [selectedTab, setSelectedTab] = useState(0)
    const [left, setLeft] = useState(0);

    const onSelected = (index, tab) => {
        setLeft(index * 100);
        setTimeout(() => setSelectedTab(index), 300);
        onTabsChange(tab)
    }

  return (
    <div className="switchingTabs">
        <div className="tabItems">
            {data.map((tab, index) => {
                return <span key={index} onClick={() => onSelected(index, tab)} className={`tabItem ${selectedTab === index ? "active" : ""}`}>{tab}</span>
            })}
            <span className="movingBg" style={{ left }} />
        </div>
    </div>
  )
}

export default SwitchTabs