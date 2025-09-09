import React from 'react'
import ABCPowder from '../ProTab/ABCPowder';
import HousReels from '../ProTab/HousReels';
import Detectors from '../ProTab/Detectors';
import Accessories from '../ProTab/Accessories';

const ProTeb = () => {
    const [activeTab, setActiveTab] = React.useState(0);

    const Tabs =[
        {
            title: "abc powder extinguishers",
            component: <ABCPowder/>,
        },
        {
            title: "fire hydrant systems & Hous reels",
            component: <HousReels/>
        },
        {
            title: "smock & heat Detectors",
            component: <Detectors/>
        },
        {
            title: "safety signages & Accessories",
            component: <Accessories/>
        },
    ]
  return (
    <section>
      <div className="">
        {/* Tabs */}
        <div className="flex overflow-x-auto mb-6 container justify-center">
          {Tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`whitespace-wrap px-4 py-2 mr-4 text-2xl font-bold transition-colors duration-300 border-b-[3px] border-primary-start
              ${
                activeTab === index
                  ? "bg-gradient-to-t from-primary-start/60 to-transparent text-white"
                  : " text-white"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="text-center text-primary text-8xl">
          {Tabs[activeTab].component}
        </div>
      </div>
    </section>
  )
}

export default ProTeb
