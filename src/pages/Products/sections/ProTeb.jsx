import React from 'react'
import ABCPowder from '../ProTab/ABCPowder';
import HousReels from '../ProTab/HousReels';
import Detectors from '../ProTab/Detectors';
import Accessories from '../ProTab/Accessories';
import FireDoors from '../ProTab/FireDoors';
import HVWS from '../ProTab/HVWS';

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
          title: "fire doors",
          component: <FireDoors/>
        },
        {
          title: "HVWS systems",
          component: <HVWS/>
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
        <div className="lg:flex flex-nowrap gap-6 overflow-x-auto mb-6 container justify-center">
          {Tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`whitespace-wrap lg:px-10 py-2 mr-4 text-2xl font-bold transition-colors duration-300 border-b-[3px] border-primary-start uppercase
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
