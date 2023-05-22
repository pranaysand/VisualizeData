import React, { useState, useEffect } from "react";
import * as d3 from "d3";

function AreaChart() {
  var triggerChart = () => {
    var svg = d3
      .select("#AreaChart")
      .append("svg")
      .attr("width", "500")
      .attr("height", "500")
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
        .attr("stroke", "steelblue")
        .attr("stroke-width", 3)
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
        .attr("stroke-width", 3)
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

  return <div id="AreaChart"></div>;
}
export default AreaChart;
