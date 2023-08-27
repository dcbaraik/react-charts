import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";
import { end_yearArray, start_yearArray, intensityArray, likelihoodArray, impactArray, relevanceArray } from "../../data/arraydata";
import { Col, Row } from "reactstrap";


const YearsChart = () => {


  const chartoptions1 = {
    series: [
      {
        name: "impact",
        data: impactArray,
      },
      {
        name: "relevance",
        data: relevanceArray,
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
      },

      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: start_yearArray,
        max: 8,
      },
      yaxis: {
        categories: end_yearArray,
        min: 0,
        max: 6

      },
    },
  };
  const chartoptions2 = {
    series: [
      {
        name: "intensity",
        data: intensityArray,
      },
      {
        name: "likelihood",
        data: likelihoodArray,
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
      },

      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: start_yearArray,
        max: 8,
      },
      yaxis: {
        categories: end_yearArray,
        min: 0,
        max: 6

      },
    },
  };
  return (
    <>
    <Row>
      <Card>
        <CardBody>
          <CardTitle tag="h5">YearsChart Summary</CardTitle>
          <CardSubtitle className="text-muted" tag="h6">
          YearsChart Impact relevance graph
          </CardSubtitle>
          <Chart
            type="area"
            width="100%"
            height="290"
            options={chartoptions1.options}
            series={chartoptions1.series}
          ></Chart>
        </CardBody>
      </Card>
    </Row>
    <Row>
      <Card>
        <CardBody>
          <CardTitle tag="h5">YearsChart Summary</CardTitle>
          <CardSubtitle className="text-muted" tag="h6">
            Yearly likelihood intensity graph
          </CardSubtitle>
          <Chart
            type="area"
            width="100%"
            height="290"
            options={chartoptions2.options}
            series={chartoptions2.series}
          ></Chart>
        </CardBody>
      </Card>
    </Row>
    </>
  );
};

export default YearsChart;
