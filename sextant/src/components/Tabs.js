import React, { useState } from "react";
import "../style/Tabs.css";

export default function Tabs() {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);

  function clearTabs() {
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(false);
  }

  return (
    <div className="tab">
      <div className="tab-selector flex flex-vertical">
        <button
          onClick={(e) => {
            clearTabs();
            setTab1(true);
          }}
        >
          Comp 1
        </button>
        <button
          onClick={(e) => {
            clearTabs();
            setTab2(true);
          }}
        >
          Comp 2
        </button>
        <button
          onClick={(e) => {
            clearTabs();
            setTab3(true);
          }}
        >
          Comp 3
        </button>
        <button
          onClick={(e) => {
            clearTabs();
            setTab4(true);
          }}
        >
          Comp 4
        </button>
      </div>
      <div className="tab-view">
        {tab1 && <div>Component 1</div>}
        {tab2 && <div>Component 2</div>}
        {tab3 && <div>Component 3</div>}
        {tab4 && <div>Component 4</div>}
      </div>
    </div>
  );
}
