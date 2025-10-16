import React from 'react'
import ABCPowder from '../ProTab/ABCPowder';
import HousReels from '../ProTab/HousReels';
import Detectors from '../ProTab/Detectors';
import Accessories from '../ProTab/Accessories';
import FireDoors from '../ProTab/FireDoors';
import HVWS from '../ProTab/HVWS';

const ProTeb = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const Tabs = [
    { title: "abc powder extinguishers", component: <ABCPowder /> },
    { title: "fire hydrant systems & Hous reels", component: <HousReels /> },
    { title: "smock & heat Detectors", component: <Detectors /> },
    { title: "fire doors", component: <FireDoors /> },
    { title: "HVWS systems", component: <HVWS /> },
    { title: "safety signages & Accessories", component: <Accessories /> },
  ];

  return (
    <section>
      <div>
        {/* Tabs */}
        <ul className="lg:flex flex-nowrap gap-6 overflow-x-auto mb-6 container justify-center list-none p-0 text-center">
          {Tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => setActiveTab(index)}
              className={`cursor-pointer whitespace-wrap lg:px-5 py-2 mr-4 text-2xl font-bold transition-colors duration-300 lg:border-b-[3px] border-primary-start uppercase
                ${
                  activeTab === index
                    ? "lg:bg-gradient-to-t from-primary-start/60 to-transparent text-whit border-b-[3px] border-primary-start text-white"
                    : "text-white"
                }`}
            >
              {tab.title}
            </li>
          ))}
        </ul>

        {/* Active Tab Content */}
        <div className="text-center text-primary text-8xl">
          {Tabs[activeTab].component}
        </div>
      </div>
    </section>
  );
};

export default ProTeb;
