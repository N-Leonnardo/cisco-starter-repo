import React, { useEffect, useState } from "react";

export default function Ipv6() {
  const [ipv6, setIpv6] = useState(null);
  useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIpv6(data.ip));
  }, [ipv6]);

  return (
    <div>
      <h3>Your IPv6 is: {ipv6} </h3>
    </div>
  );
}
