
import React from "react";
import * as d3 from "d3";
import { Col, Row, Card, Container } from "react-bootstrap";
const DisposableChart = () => {
  const chartRef = React.useRef(null);
  React.useEffect(() => {
    // Set the dimensions and margins of the chart
    const margin = { top: 20, right: 100, bottom: 100, left: 100 };
    const width = 800 - margin.left - margin.right;
    const height = 1000 - margin.top - margin.bottom;
    d3.select(chartRef.current).select('svg').remove();
    // Load the data
    var data = [
  { year: "1977", "Mean equivalised disposable income": 15246, "Median equivalised disposable income": 13682 },
  { year: "1978", "Mean equivalised disposable income": 16629, "Median equivalised disposable income": 15137 },
  { year: "1979", "Mean equivalised disposable income": 17397, "Median equivalised disposable income": 15722 },
  { year: "1980", "Mean equivalised disposable income": 18049, "Median equivalised disposable income": 16227 },
  { year: "1981", "Mean equivalised disposable income": 17540, "Median equivalised disposable income": 15407 },
  { year: "1982", "Mean equivalised disposable income": 17135, "Median equivalised disposable income": 15169 },
  { year: "1983", "Mean equivalised disposable income": 17586, "Median equivalised disposable income": 15328 },
  { year: "1984", "Mean equivalised disposable income": 17934, "Median equivalised disposable income": 15810 },
  { year: "1985", "Mean equivalised disposable income": 19138, "Median equivalised disposable income": 16505 },
  { year: "1986", "Mean equivalised disposable income": 19927, "Median equivalised disposable income": 17174 },
  { year: "1987", "Mean equivalised disposable income": 21248, "Median equivalised disposable income": 18047 },
  { year: "1988", "Mean equivalised disposable income": 22795, "Median equivalised disposable income": 19177 },
  { year: "1989", "Mean equivalised disposable income": 23088, "Median equivalised disposable income": 19674 },
  { year: "1990", "Mean equivalised disposable income": 24360, "Median equivalised disposable income": 20168 },
  { year: "1991", "Mean equivalised disposable income": 24643, "Median equivalised disposable income": 20765 },
  { year: "1992", "Mean equivalised disposable income": 23775, "Median equivalised disposable income": 20160 },
  { year: "1993", "Mean equivalised disposable income": 23509, "Median equivalised disposable income": 19613 },
  { year: "1994/95", "Mean equivalised disposable income": 23987, "Median equivalised disposable income": 20132 },
  { year: "1995/96", "Mean equivalised disposable income": 23840, "Median equivalised disposable income": 20190 },
  { year: "1996/97", "Mean equivalised disposable income": 25182, "Median equivalised disposable income": 21309 },
  { year: "1997/98", "Mean equivalised disposable income": 26318, "Median equivalised disposable income": 21853 },
  { year: "1998/99", "Mean equivalised disposable income": 26931, "Median equivalised disposable income": 22312 },
  { year: "1999/00", "Mean equivalised disposable income": 28581, "Median equivalised disposable income": 23740 },
  { year: "2000/01", "Mean equivalised disposable income": 29274, "Median equivalised disposable income": 24139 },
  { year: "2001/02", "Mean equivalised disposable income": 31582, "Median equivalised disposable income": 25677 },
  { year: "2002/03", "Mean equivalised disposable income": 32451, "Median equivalised disposable income": 26508 },
  { year: "2003/04", "Mean equivalised disposable income": 32840, "Median equivalised disposable income": 27004 },
  { year: "2004/05", "Mean equivalised disposable income": 34213, "Median equivalised disposable income": 27757 },
  { year: "2005/06", "Mean equivalised disposable income": 35333, "Median equivalised disposable income": 28072 },
  { year: "2006/07", "Mean equivalised disposable income": 36081, "Median equivalised disposable income": 28050 },
  { year: "2007/08", "Mean equivalised disposable income": 37310, "Median equivalised disposable income": 28472 },
  { year: "2008/09", "Mean equivalised disposable income": 35138, "Median equivalised disposable income": 28140 },
  { year: "2009/10", "Mean equivalised disposable income": 36363, "Median equivalised disposable income": 28178 },
  { year: "2010/11", "Mean equivalised disposable income": 34965, "Median equivalised disposable income": 28139 },
  { year: "2011/12", "Mean equivalised disposable income": 34175, "Median equivalised disposable income": 27479 },
  { year: "2012/13", "Mean equivalised disposable income": 33514, "Median equivalised disposable income": 26849 },
  { year: "2013/14", "Mean equivalised disposable income": 34881, "Median equivalised disposable income": 27540 },
  { year: "2014/15", "Mean equivalised disposable income": 35578, "Median equivalised disposable income": 28734 },
  { year: "2015/16", "Mean equivalised disposable income": 36738, "Median equivalised disposable income": 29237 },
  { year: "2016/17", "Mean equivalised disposable income": 36621, "Median equivalised disposable income": 30026 },
  { year: "2017/18", "Mean equivalised disposable income": 36017, "Median equivalised disposable income": 29308 },
  { year: "2018/19", "Mean equivalised disposable income": 36397, "Median equivalised disposable income": 29548 },
  { year: "2019/20", "Mean equivalised disposable income": 37839, "Median equivalised disposable income": 30762 },
  { year: "2020/21", "Mean equivalised disposable income": 37622, "Median equivalised disposable income": 31385 }
];
    // Append the SVG object to the chart ref
    const svg = d3
    .select(chartRef.current)
    .append("svg")
    .attr("class", "chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    // Create an array of years
var years = data.map(function (d) { return d.year; });
// Create a color scale
var color = d3.scaleOrdinal(d3.schemeSet2);
// Stack the data
var stackedData = d3.stack()
  .keys(["Mean equivalised disposable income", "Median equivalised disposable income"])
  .order(d3.stackOrderNone)
  .offset(d3.stackOffsetNone)
  (data);
// Set the X scale
var x = d3.scaleLinear()
  .domain([0, d3.max(stackedData, function (d) { return d3.max(d, function (d) { return d[1]; }); })])
  .range([0, width]);
// Set the Y scale
var y = d3.scaleBand()
  .domain(years)
  .range([0, height])
  .padding(0.2);
// Add X axis
svg.append("g")
  .attr("class", "axis-x")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));
// Add Y axis
svg.append("g")
  .attr("class", "axis-y")
  .call(d3.axisLeft(y));
// Add Y-axis label
svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left)
  .attr("x", 0 - (height / 2))
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .text("Years");
// Add X-axis label
svg.append("text")
  .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.top + 20) + ")")
  .style("text-anchor", "middle")
  .text("Equivalised Disposable Income (GBP)");
// Add stacked bars
var bars = svg.selectAll(".bar")
  .data(stackedData)
  .enter()
  .append("g")
  .attr("fill", function (d) { return color(d.key); });

bars.selectAll("rect")
.data(function (d) { return d; })
.enter()
.append("rect")
.attr("class", "bar")
.attr("x", function (d) { return x(d[0]); })
.attr("y", function (d) { return y(d.data.year); })
.attr("width", function (d) { return x(d[1]) - x(d[0]); })
.attr("height", y.bandwidth());
// Add text labels inside the bars
// Add text labels inside the bars
bars.selectAll(".bar-label")
  .data(function (d) { return d; })
  .enter()
  .append("text")
  .attr("class", "bar-label")
  .attr("x", function (d) { return x(d[1]) - 5; }) // Adjust the position to be at the right of the bar
  .attr("y", function (d) { return y(d.data.year) + y.bandwidth() / 2; })
  .attr("dy", "0.35em")
  .attr("text-anchor", "end") // Align the text to the end of the bar
  .attr("fill", "#fff") // Set the text color to white
  .style("font-size", "50%") // Set the font size to 50% of the default size
  .text(function (d) { return d3.format(".2f")(d[1] - d[0]); });

// Add color legends
var legend = svg.append("g")
  .attr("class", "legend")
  .attr("transform", "translate(" + (width - 200) + "," + 0 + ")");
var legendKeys = legend.selectAll(".legend-key")
.data(["Mean equivalised disposable income", "Median equivalised disposable income"])
  .enter()
  .append("g")
  .attr("class", "legend-key")
  .attr("transform", function (d, i) { return "translate(0," + (i * 20) + ")"; });
legendKeys.append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", 18)
  .attr("height", 18)
  .attr("fill", function (d) { return color(d); });
legendKeys.append("text")
  .attr("x", 24)
  .attr("y", 9)
  .attr("dy", "0.35em")
  .text(function (d) { return d; });
  return () => {
    // Cleanup if needed
  };
}, []);
return (
  <div style={{ background: "#191a1b" }} className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
    <Container>
      <br />
      <br />
      <br />
      <br />
      <Card style={{ background: "#5c3f9e", borderRadius: "40px" }}>
        <Row className="align-items-center viewport-height">
          <Col md={7}>
            <div ref={chartRef}></div>
          </Col>
          <Col md={5}>
            <h4 style={{ color: "#e7c06b", padding: "0.5em" }} className="fw-light text-break">
              The stacked bars represent the two variables, "Mean equivalised disposable income" (in green) and "Median equivalised disposable income" (in orange). The height of each bar indicates the value of the respective variable for a specific year. The bars are stacked horizontally, showing the combined contribution of both variables.
              <br /><br />
              The graph helps visualize the variation of mean and median equivalised disposable income over different years and income categories. It allows comparisons between the income categories within each year and enables tracking trends and changes in income distribution over time.
            </h4>
          </Col>
        </Row>
      </Card>
    </Container>
  </div>
);
};
export default DisposableChart;