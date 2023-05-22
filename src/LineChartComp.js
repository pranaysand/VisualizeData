import React, { useState, useEffect } from "react";
import * as d3 from "d3";

function LineChartComp() {
  var triggerChart = () => {
    console.log("Test its");
    var svg = d3
      .select("#lineChartComp")
      .append("svg")
      .attr("width", "500")
      .attr("height", "500")
      .append("g")
      .attr("transform", `translate(80,20)`);
    d3.json("http://localhost:8081/annualIncome.json").then(function(data) {
      console.log("From worldPopulation");
      console.log(data);

      const x = d3
        .scaleLinear()
        .domain([1972, 2020])
        .range([0, 400]);

      const y = d3
        .scaleLinear()
        .domain([9696, 67521])
        .range([380, 0]);

      svg
        .append("g")
        .attr("transform", `translate(0, 380)`)
        .call(d3.axisBottom(x));

      svg.append("g").call(d3.axisLeft(y));
      svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          d3
            .line()
            .x(function(d) {
              return x(d[0]);
            })
            .y(function(d) {
              return y(d[1]);
            })
        );
    });
  };

  useEffect(() => {
    triggerChart();
  });

  return <div id="lineChartComp"></div>;
}
export default LineChartComp;
