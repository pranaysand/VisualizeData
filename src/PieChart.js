import React, { useState, useEffect } from "react";
import * as d3 from "d3";

function PieChart() {
  var triggerChart = () => {
    var data = [54, 48, 44, 23, 14, 12];
    var countries = [
      "Africa",
      "Asia",
      "Europe",
      "North America",
      "Australia/Oceania",
      "South America"
    ];
    var svg = d3
      .select("#PieChart")
      .append("svg")
      .attr("width", "500")
      .attr("height", "500")
      .append("g")
      .attr("transform", `translate(200,150)`);

    let g = svg.append("g");
    var pie = d3.pie();
    var arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(150);

    var arcs = g
      .selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g");

    // Appending path
    arcs
      .append("path")
      .attr("fill", (data, i) => {
        let value = data.data;
        return d3.schemeCategory10[i];
      })
      .attr("d", arc);

    arcs
      .append("text")
      .attr("transform", d => {
        return "translate(" + arc.centroid(d) + ")";
      })
      .text(function(d) {
        console.log(d);
        return countries[d.index];
      });
  };

  useEffect(() => {
    triggerChart();
  });
  return <div id="PieChart">PieChart</div>;
}
export default PieChart;
