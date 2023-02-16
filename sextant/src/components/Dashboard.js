import React, { useState } from "react";
import "../style/Dashboard.css";
import Tabs from "./Tabs";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome to the dashboard</h2>
      <div className="cards-container">
        <Tabs />
      </div>
    </div>
  );
}
