import "./App.css";
import LineChartComp from "./LineChartComp.js";
import AreaChart from "./AreaChart.js";
import PieChart from "./PieChart.js";
import BarGraph from "./BarGraph.js";
import GuageChart from "./GuageChart.js";
import AreaChartImp from "./AreaChartImp.js";
function App() {
  return (
    <div className="App">
      <h1>Visualize Data</h1>
      <div id= "container">
        <AreaChartImp />
        <PieChart />
        <h1>Pie Chart</h1>
        <BarGraph />
        <h1>Bar Graph</h1>
        <GuageChart />
        <h1>Guage Chart</h1>
      </div>
    </div>
  );
}

export default App;
