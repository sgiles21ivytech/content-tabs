import './App.css'
import { useState } from 'react'
import TabsList from './components/TabsList'
import TabDataView from './components/TabDataView'


const App = () => {
  const tabsData = [
    { label: "Tab 1", content: "Tab 1 content is showing here." },
    { label: "Tab 2", content: "Tab 2 content is showing here." },
    { label: "Tab 3", content: "Tab 3 content is showing here." },
  ];

  const [selectedTab, setSelectedTab] = useState(tabsData[0]);

  return (
    <div className="App">
      <TabsList items={tabsData} onTabSelect={setSelectedTab} />
      <TabDataView content={selectedTab.content} />
    </div>
  );
};

export default App;
