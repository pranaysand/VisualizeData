import React, { useState, useEffect } from "react";
import * as d3 from "d3";

function AreaChartImp() {
  var triggerChart = () => {
    var svg = d3
      .select("#AreaChartImp")
      .append("svg")
      .attr("width", "500")
      .attr("height", "425")
      .append("g")
      .attr("transform", `translate(80,20)`);

    d3.json("http://localhost:8081/annualIncome.json").then(function(data) {
      const x = d3
        .scaleLinear()
        .domain([1972, 2020])
        .range([0, 400]);

      const y = d3
        .scaleLinear()
        .domain([9696, 91939])
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
        .attr("stroke", "blue")
        .attr("stroke-width", 5)
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

      svg
        .append("path")
        .datum(data)
        .attr("fill", "blue")
        .attr("opacity", "0.5")
        .attr(
          "d",
          d3
            .area()
            .x(function(d) {
              return x(d[0]);
            })
            .y0(380)
            .y1(function(d) {
              return y(d[1]);
            })
        );
    });

    d3.json("http://localhost:8081/annualIncomeSTEM.json").then(function(data) {
      const x = d3
        .scaleLinear()
        .domain([1972, 2020])
        .range([0, 400]);

      const y = d3
        .scaleLinear()
        .domain([9696, 91939])
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
        .attr("stroke", "green")
        .attr("stroke-width", 5)
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

      svg
        .append("path")
        .datum(data)
        .attr("fill", "green")
        .attr("opacity", "0.5")
        //.attr("stroke", "steelgreen")
        .attr("stroke-width", 3)
        .attr(
          "d",
          d3
            .area()
            .x(function(d) {
              return x(d[0]);
            })
            .y0(380)
            .y1(function(d) {
              return y(d[1]);
            })
        );
    });
  };
  useEffect(() => {
    triggerChart();
  }, []);

  return (
    <div>
      <div id="AreaChartImp"></div>
      <div id="AreaChartImpButtons">
        <span>
          <button style={{ "background-color": " #008CBA", "color":"white","border-radius": "12px"}}>
            General Annual Income
          </button>
          <button style={{ "background-color": "#4CAF50", "color":"white","border-radius": "12px"}}>STEM Annual Income</button>
          <button style={{ "background-color": " orange", "color":"white","border-radius": "12px"}}>Compare</button>
        </span>
        <h1>Line/Area Chart</h1>
      </div>
    </div>
  );
}
export default AreaChartImp;
