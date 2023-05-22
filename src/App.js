import "./App.css";
import LineChartComp from "./LineChartComp.js";
import AreaChart from "./AreaChart.js";
import PieChart from "./PieChart.js";
import BarGraph from "./BarGraph.js";
function App() {
  return (
    <div className="App">
      Test
      <h1>Line Chart</h1>
      <LineChartComp />
      <h1>Area Chart</h1>
      <AreaChart />
      <h1>Pie Chart</h1>
      <PieChart />
      <h1>Bar Graph</h1>
      <BarGraph />
    </div>
  );
}

export default App;
