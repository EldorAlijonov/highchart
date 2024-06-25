import React, { useRef } from "react";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import logo from "../../assets/login.svg";
import { renderToStaticMarkup } from "react-dom/server";
import CardStyle from "./style";

highchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

const Sales = () => {
  const chartComponentRef = useRef(null);

  const options = {
    chart: {
      type: "solidgauge",
      height: 220,
    },
    title: {
      text: null,
    },
    pane: {
      center: ["51.3%", "95%"],
      size: "168%",
      startAngle: -90,
      endAngle: 90,
      background: {
        borderWidth: 0,
        backgroundColor: "#fef7ec",
        innerRadius: "90%",
        outerRadius: "100%",
        shape: "arc",
      },
    },
    tooltip: {
      enabled: false,
    },
    yAxis: {
      stops: [[1, "#F5B544"]],
      min: 0,
      max: 100,
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      visible: null,
      title: {
        text: null,
      },
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: -110,
          borderWidth: 0,
          useHTML: true,
          formatter: function () {
            return renderToStaticMarkup(
              <div style={{ textAlign: "center" }}>
                <img
                  src={logo}
                  alt=""
                  width={40}
                  style={{ marginBottom: 20 }}
                />
                <h4 style={{ fontSize: "26px", lineHeight: "16px" }}>
                  {this.point.y}%
                </h4>
                <span style={{ fontSize: "12px", color: "#acacac" }}>
                  4,201/
                  <span style={{ color: "#d3d3d3" }}>4,800 target</span>
                </span>
              </div>
            );
          },
        },
        innerRadius: "90%",
        outerRadius: "100%",
      },
    },
    series: [
      {
        name: "Total",
        data: [68],
        tooltip: {
          valueSuffix: null,
        },
      },
    ],
    accessibility: {
      enabled: false,
    },
  };

  return (
    <CardStyle $cardHeight={"387px"}>
      <div className="card-content">
        <div className="top">
          <h4>Sales Target</h4>
          <HiOutlineDotsHorizontal className="icon" />
        </div>
        <span className="card-date">1 May-13 May, 2021</span>
        <div className="chart">
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            ref={chartComponentRef}
          />
        </div>
        <div className="card-bottom">
          You nearly reached your monthly target <br />
          Keep going! (4 days to go)
        </div>
      </div>
    </CardStyle>
  );
};

export default Sales;
