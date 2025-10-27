import React from "react";
import { useNavigate, useParams } from "react-router-dom";
// Components 
import FireExtinguishers from "./FireExtinguishers";
import FireHydrant from "./FireHydrant";
import FireAlarmDetection from "./FireAlarmDetection";
import AutomaticSprinkler from "./AutomaticSprinkler";
import FireSafetyAuditsTraining from "./FireSafetyAuditsTraining";
import AnnualMaintenanceContracts from "./AnnualMaintenanceContracts";

// Static tab configuration
const TABS = [
  { slug: "fire-hydrant-systems", title: <>Fire Hydrant <br className="hidden lg:block" /> Service</>, Component: FireHydrant },
  { slug: "fire-extinguisher-services", title: "Fire Extinguishers Services", Component: FireExtinguishers },
  { slug: "fire-alarm-detection-systems", title: <>Fire Alarm & <br className="hidden lg:block" />   Detection Systems</>, Component: FireAlarmDetection },
  { slug: "water-sprinkler-system", title: "Automatic Sprinkler System", Component: AutomaticSprinkler },
  { slug: "fire-safety-audits-training", title: "Fire Safety Audits & Training", Component: FireSafetyAuditsTraining },
  { slug: "annual-maintenance-contracts-amc", title: "Annual Maintenance Contracts (AMC)", Component: AnnualMaintenanceContracts },
];

const TabView = () => {
  // logic of tabs
  const navigate = useNavigate();
  const { tabSlug } = useParams();

  // Compute initial active tab index based on slug
  const slugToIndex = React.useMemo(() => {
    const map = new Map();
    TABS.forEach((t, i) => map.set(t.slug, i));
    console.log(map.size);
    
    return map;
  }, []);

  const initialIndex = slugToIndex.get(tabSlug || "") ?? 0;
  const [activeTab, setActiveTab] = React.useState(initialIndex);

  // Update tab when slug changes
  React.useEffect(() => {
    const idx = slugToIndex.get(tabSlug || "");
    console.log();
    
    setActiveTab(typeof idx === "number" ? idx : 0);
  }, [tabSlug, slugToIndex]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    navigate(`/services/${TABS[index].slug}`);
  };

  const ActiveComponent = TABS[activeTab].Component;

  return (
    <section>
      <div>
        {/* Tabs */}
        <ul role="tablist" className="lg:flex flex-auto mb-6 container">
          {TABS.map((tab, index) => (
            <button
              role="tab"
              aria-selected={activeTab === index}
              key={tab.slug}
              onClick={() => handleTabClick(index)}
              className={`whitespace-wrap w-full justify-start text-left lg:text-center items-start px-1 py-2 mr-4 text-2xl font-bold uppercase transition-colors duration-300 lg:border-b-[3px] border-primary-start text-white
              ${
                activeTab === index
                  ? "bg-gradient-to-t from-primary-start/60 to-transparent "
                  : ""
              }`}
            > 
              {tab.title}
            </button>
          ))}
        </ul>

        {/* Active Tab Content */}
        <div className="text-center text-primary text-8xl">
          <ActiveComponent />
        </div>
      </div>
    </section>
  );
};

export default TabView;
