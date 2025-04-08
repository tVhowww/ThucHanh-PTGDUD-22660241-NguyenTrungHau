import React, { useEffect, useState } from "react";
import OverviewItem from "../OverviewItem/OverviewItem";

function Overview() {
  const [overview, setOverview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await import("../../data/data.json");
        setOverview(res.default.overview);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-4 p-4">
        {overview.map((item, index) => (
          <OverviewItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Overview;
