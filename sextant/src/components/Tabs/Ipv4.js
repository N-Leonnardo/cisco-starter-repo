import React, { useEffect, useState } from "react";

export default function Ipv4() {
  const [ipv4, setIpv4] = useState(null);

  useEffect(() => {
    fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => setIpv4(data.ip));
  }, []);

  return (
    <div className="card-container">
      <h3>Your IPv4 is: {ipv4} </h3>
    </div>
  );
}
