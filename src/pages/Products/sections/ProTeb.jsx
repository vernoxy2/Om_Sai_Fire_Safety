import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ABCPowder from '../ProTab/ABCPowder';
import HousReels from '../ProTab/HousReels';
import Detectors from '../ProTab/Detectors';
import Accessories from '../ProTab/Accessories';
import FireDoors from '../ProTab/FireDoors';
import HVWS from '../ProTab/HVWS';

const ProTeb = () => {
  const navigate = useNavigate();
  const { tabSlug } = useParams();
  const [activeTab, setActiveTab] = React.useState(0);

  const Tabs = [
    { title: "abc powder extinguishers", slug: 'abc-powder', component: <ABCPowder /> },
    { title: "fire hydrant systems & Hous reels", slug: 'hydrant-and-hose-reels', component: <HousReels /> },
    { title: "smock & heat Detectors", slug: 'detectors', component: <Detectors /> },
    { title: "fire doors", slug: 'fire-doors', component: <FireDoors /> },
    { title: "HVWS systems", slug: 'hvws-systems', component: <HVWS /> },
    { title: "safety signages & Accessories", slug: 'safety-accessories', component: <Accessories /> },
  ];

  // Whenever the route includes a tab slug, set the active tab accordingly
  useEffect(() => {
    if (!tabSlug) return;
    const indexFromSlug = Tabs.findIndex(t => t.slug === tabSlug);
    if (indexFromSlug !== -1 && indexFromSlug !== activeTab) {
      setActiveTab(indexFromSlug);
    }
  }, [tabSlug]);

  // When the active tab changes (via click), push the slug to the URL
  useEffect(() => {
    const desiredSlug = Tabs[activeTab]?.slug;
    if (!desiredSlug) return;
    // Only navigate if current slug differs to avoid history spam
    if (tabSlug !== desiredSlug) {
      navigate(`/products/${desiredSlug}`, { replace: true });
    }
  }, [activeTab]);  

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
