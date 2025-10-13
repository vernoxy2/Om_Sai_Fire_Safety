import React from "react";
import FireExtinguishers from "./FireExtinguishers";
import FireHydrant from "./FireHydrant";
import FireAlarmDetection from "./FireAlarmDetection";
import AutomaticSprinkler from "./AutomaticSprinkler";
import FireSafetyAuditsTraining from "./FireSafetyAuditsTraining";
import AnnualMaintenanceContracts from "./AnnualMaintenanceContracts";

const TabView = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const Tabs = [
    { title: "Fire Hydrant Service", component: <FireHydrant /> },
    { title: "Fire Extinguishers Services", component: <FireExtinguishers /> },
    {
      title: "Fire Alarm & Detection Systems",
      component: <FireAlarmDetection />,
    },
    {
      title: "Annual Maintenance Contracts (AMC)",
      component: <AnnualMaintenanceContracts />,
    },
    { title: "Automatic Sprinkler System", component: <AutomaticSprinkler /> },
    {
      title: "Fire Safety Audits & Training",
      component: <FireSafetyAuditsTraining />,
    },
    
  ];

  return (
    <section>
      <div className="">
        {/* Tabs */}
        <div className="md:flex flex-auto  mb-6 container">
          {Tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`whitespace-wrap px-4 py-2 mr-4 text-2xl font-bold uppercase transition-colors duration-300 border-b-[3px] border-primary-start
              ${
                activeTab === index
                  ? "bg-gradient-to-t from-primary-start/60 to-transparent text-white "
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
  );
};

export default TabView;
