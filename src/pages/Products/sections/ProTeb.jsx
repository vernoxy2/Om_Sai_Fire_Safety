import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// Components
import ABCPowder from '../ProTab/ABCPowder';
import HousReels from '../ProTab/HousReels';
import Detectors from '../ProTab/Detectors';
import Accessories from '../ProTab/Accessories';
import FireDoors from '../ProTab/FireDoors';
import HVWS from '../ProTab/HVWS';

// Static tab configuration
const TABS = [
    { title: <>abc powder <br className="hidden lg:block" /> extinguishers</>, slug: 'abc-powder', component: <ABCPowder /> },
    { title: <>fire hydrant systems & <br className="hidden lg:block" /> Hous reels</>, slug: 'hydrant-and-hose-reels', component: <HousReels /> },
    { title: <>smock & heat <br className="hidden lg:block" /> Detectors</>, slug: 'detectors', component: <Detectors /> },
    { title: <>fire <br className="hidden lg:block" /> doors</>, slug: 'fire-doors', component: <FireDoors /> },
    { title: <>HVWS <br className="hidden lg:block" /> systems</>, slug: 'hvws-systems', component: <HVWS /> },
    { title: <>safety signages & <br className="hidden lg:block" /> Accessories</>, slug: 'safety-accessories', component: <Accessories /> },
  ];

const ProTeb = () => {
  // logic of tabs
   const navigate = useNavigate();
    const { tabSlug } = useParams();
  
    // Compute initial active tab index based on slug
    const slugToIndex = React.useMemo(() => {
      const map = new Map();
      TABS.forEach((t, i) => map.set(t.slug, i));
      return map;
    }, []);
  
    const initialIndex = slugToIndex.get(tabSlug || "") ?? 0;
    const [activeTab, setActiveTab] = React.useState(initialIndex);
  
    // Update tab when slug changes
    React.useEffect(() => {
      const idx = slugToIndex.get(tabSlug || "");
      setActiveTab(typeof idx === "number" ? idx : 0);
    }, [tabSlug, slugToIndex]);
  
    const handleTabClick = (index) => {
      setActiveTab(index);
      navigate(`/products/${TABS[index].slug}`);
    };
  
    const ActiveComponent = TABS[activeTab].Component;

  return (
    <section>
      <div>
        {/* Tabs */}
        
        <ul className=" lg:flex flex-nowrap overflow-x-auto mb-6 container justify-between list-none  text-center">
          {TABS.map((tab, index) => (
            <li
              key={index}
              onClick={() => handleTabClick(index)}
              className={`cursor-pointer w-full whitespace-wrap lg:px-6 py-2 mr-4 text-2xl font-bold transition-colors duration-300 lg:border-b-[3px] border-primary-start uppercase text-white
                ${
                  activeTab === index
                    ? "bg-gradient-to-t from-primary-start/60 to-transparent "
                    : ""
                }`}
            >
              {tab.title}
            </li>
          ))}
        </ul>

        {/* Active Tab Content */}
        <div className="text-center text-primary text-8xl">
          {TABS[activeTab].component}
        </div>
      </div>
    </section>
  );
};

export default ProTeb;
