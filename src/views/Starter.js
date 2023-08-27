import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import ProjectTables from "../components/dashboard/ProjectTable";
import Blog from "../components/dashboard/Blog";




const Starter = () => {
  return (
    <div>
      <Row>
        <Col>
          <SalesChart />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
