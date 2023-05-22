import React, { useState, useEffect } from "react";
import * as d3 from "d3";

function Bargraph() {
  var triggerChart = () => {
    var svg = d3
      .select("#BarGraph")
      .append("svg")
      .attr("width", "1000")
      .attr("height", "500")
      .append("g")
      .attr("transform", `translate(70,20)`);

    d3.json("http://localhost:8081/annualIncomeCut.json").then(function(data) {
      console.log(data);
      const x = d3
        .scaleBand()
        .domain(data.map(d => d[0]).reverse())
        .range([0, 800])
        .padding(0.4);

      const y = d3
        .scaleLinear()
        .domain([9696, 67521])
        .range([380, 0]);

      svg
        .append("g")
        .attr("transform", `translate(0, 380)`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

      svg.append("g").call(d3.axisLeft(y));

      svg
        .selectAll("mybar")
        .attr("transform", `translate(100, -100)`)
        .data(data)
        .join("rect")
        .attr("x", d => x(d[0]))
        .attr("y", d => y(d[1]))
        .attr("width", 10)
        .attr("height", d => 380 - y(d[1]))
        .attr("fill", "blue");
    });
  };

  useEffect(() => {
    triggerChart();
  },[]);

  return <div id="BarGraph"></div>;
}
export default Bargraph;
