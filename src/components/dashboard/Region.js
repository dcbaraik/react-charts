import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";
import { regionArray, intensityArray, likelihoodArray, impactArray, relevanceArray } from "../../data/arraydata";
import { Col, Row } from "reactstrap";


const Region = () => {


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
        categories: regionArray,
        max: 9,
      },
      yaxis: {
        min: 0,
        max: 10

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
        type: "bar",
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
        categories: regionArray,
        max: 15
      },
      yaxis: {
        min: 0,
        max: 10

      },
    },
  };
  return (
    <>
      <Row>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Region Summary</CardTitle>
            <CardSubtitle className="text-muted" tag="h6">
            Region Impact relevance graph
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
            <CardTitle tag="h5">Region Summary</CardTitle>
            <CardSubtitle className="text-muted" tag="h6">
            Region likelihood intensity graph
            </CardSubtitle>
            <Chart
              type="bar"
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

export default Region;
