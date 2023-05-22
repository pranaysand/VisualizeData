import React, { useState, useEffect } from "react";
import * as d3 from "d3";

function GuageChart() {
  var triggerChart = () => {
    var outerRadius = 160;
    var innerRadius = 120;

    d3.select("#GuageChart")
      .append("svg")
      .attr("width", "500")
      .attr("height", "500")
      //bla
      .append("path")
      .attr("transform", "translate(250,200)")
      .attr(
        "d",
        d3
          .arc()
          .outerRadius(150)
          .innerRadius(0)
          .startAngle(-Math.PI / 2)
          .endAngle(Math.PI / 2)
      )

      .attr("id", "guage-grad1");
  };

  useEffect(() => {
    triggerChart();
  },[]);

  return <div id="GuageChart"></div>;
}
export default GuageChart;
