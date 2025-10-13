import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import FireExtinguishers from "./FireExtinguishers";
import FireHydrant from "./FireHydrant";
import FireAlarmDetection from "./FireAlarmDetection";
import AutomaticSprinkler from "./AutomaticSprinkler";
import FireSafetyAuditsTraining from "./FireSafetyAuditsTraining";
import AnnualMaintenanceContracts from "./AnnualMaintenanceContracts";

// Static tab configuration
const TABS = [
  { slug: "fire-hydrant-systems", title: "Fire Hydrant Service", Component: FireHydrant },
  { slug: "fire-extinguisher-services", title: "Fire Extinguishers Services", Component: FireExtinguishers },
  { slug: "fire-alarm-detection-systems", title: "Fire Alarm & Detection Systems", Component: FireAlarmDetection },
  { slug: "annual-maintenance-contracts-amc", title: "Annual Maintenance Contracts (AMC)", Component: AnnualMaintenanceContracts },
  { slug: "water-sprinkler-system", title: "Automatic Sprinkler System", Component: AutomaticSprinkler },
  { slug: "fire-safety-audits-training", title: "Fire Safety Audits & Training", Component: FireSafetyAuditsTraining },
];

const TabView = () => {
  const navigate = useNavigate();
  const { tabSlug } = useParams();

  const slugToIndex = React.useMemo(() => {
    const map = new Map();
    TABS.forEach((t, i) => map.set(t.slug, i));
    return map;
  }, []);

  const initialIndex = slugToIndex.get(tabSlug || "");
  const [activeTab, setActiveTab] = React.useState(typeof initialIndex === "number" ? initialIndex : 0);

  React.useEffect(() => {
    const idx = slugToIndex.get(tabSlug || "");
    setActiveTab(typeof idx === "number" ? idx : 0);
  }, [tabSlug, slugToIndex]);

  return (
    <section>
      <div className="">
        {/* Tabs */}
        <div className="lg:flex flex-auto  mb-6 container">
          {TABS.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                const next = TABS[index];
                navigate(`/services/${next.slug}`);
              }}
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
          {(() => {
            const ActiveComponent = TABS[activeTab].Component;
            return <ActiveComponent />;
          })()}
        </div>
      </div>
    </section>
  );
};

export default TabView;
