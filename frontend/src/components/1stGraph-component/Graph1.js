import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getAllMatches } from "../../Services";

function Graph1() {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    const AllMatches = async () => {
      const res = await getAllMatches();
      setMatches(res.payload);
    };
    AllMatches();
  }, []);
  const options = {
    series: [
      {
        name: "Profit",
        data: [100, 200, 30, 100, 50, 30],
      },
    ],
  };
  console.log(matches);
  return (
    <div className="container App">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
export default Graph1;
