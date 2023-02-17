import React, { useEffect, useState } from "react";

export default function Latency() {
  const [ms, setMs] = useState();
  const [userLatency, setUserLatency] = useState();
  let oldLatency = null;

  useEffect(() => {
    if (!oldLatency) {
      getLatency();
    }
    const interval = setInterval(() => {
      getLatency();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  function getLatency() {
    const ws = new WebSocket("ws://localhost:55455");

    ws.onmessage = function (event) {
      const json = JSON.parse(event.data);
      try {
        let newLatency = json - oldLatency;
        setUserLatency(newLatency);
        oldLatency = json;
      } catch (err) {
        console.log(err);
      }
    };
  }

  return (
    <div className="card-container flex-vertical ">
      <h2>Here is your Latency:</h2>
      <h2>{userLatency} ms</h2>
    </div>
  );
}
