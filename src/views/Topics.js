import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Topics from "../components/dashboard/Topics";
import Blog from "../components/dashboard/Blog";




const TopicsChart = () => {
  return (
    <div>
      <Row>
        
          <Topics />
        
      </Row>
    </div>
  );
};

export default TopicsChart;
