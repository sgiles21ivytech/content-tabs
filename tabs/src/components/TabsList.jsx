import { useState } from "react";

const TabsList = ({ items, onTabSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    onTabSelect(items[index]); // Notify parent of the selected tab
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {items.map((item, index) => (
          <button
            key={index}
            className={`tab-button ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabsList;
