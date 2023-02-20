import React, { useState } from "react";
import "../style/Tabs.css";
import Ipv4 from "./Tabs/Ipv4";
import Ipv6 from "./Tabs/Ipv6";
import Latency from "./Tabs/Latency";

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
          Ipv4
        </button>
        <button
          onClick={(e) => {
            clearTabs();
            setTab2(true);
          }}
        >
          Ipv6
        </button>
        <button
          onClick={(e) => {
            clearTabs();
            setTab3(true);
          }}
        >
          Latency
        </button>
      </div>
      <div className="tab-view">
        {tab1 && (
          <div>
            <Ipv4 />
          </div>
        )}
        {tab2 && (
          <div>
            <Ipv6 />
          </div>
        )}
        {tab3 && (
          <div>
            <Latency />
          </div>
        )}
      </div>
    </div>
  );
}
