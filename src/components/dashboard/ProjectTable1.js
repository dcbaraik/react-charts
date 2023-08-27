import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { Jsondata } from "../../data/jdata";
import { intensityArray , sectorArray,topicArray, insightArray ,regionArray, countryArray,pestleArray} from "../../data/arraydata";

const itemsPerPage = 5; // Number of items per page

const ProjectTables = () => {
  const [currentPage, setCurrentPage] = useState(0);


  const [filters, setFilters] = useState({
    intensity: '',
    sector: "",
    topic: "",
    insight: "",
    region : "",
    country : "",
    pestle: ""
  });

  const handleClearFilters = () => {
    setFilters({
      intensity: '',
      sector: '',
      topic: '',
      insight: '',
      region: '',
      country: ''
    });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const filteredData = Jsondata.filter(item => {
    return (
      (filters.intensity === "" || item.intensity === parseInt(filters.intensity)) &&
      (filters.sector === "" || item.sector === filters.sector) &&
      (filters.topic === "" || item.topic === filters.topic)&&
      (filters.insight === "" || item.insight === filters.insight)&&
      (filters.region === "" || item.region === filters.region)&&
      (filters.country === "" || item.country === filters.country)&&
      (filters.pestle === "" || item.pestle === filters.pestle)
    );
  });
  

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const uniqueIntensities = [...new Set(Jsondata.map(item => item.intensity))];

const selectsyle ={
  padding:'6px',
  margin: '6px',
  borderColor: '#ddd'
}
  return (
    <div>
      <Card>
        <div style={{margin:'12px'}}>
          <select style={selectsyle}
            value={filters.sector}
            onChange={e => setFilters({ ...filters, sector: e.target.value })}
          >
            <option value="">All Sectors</option>
            {sectorArray.map(intensity => (
              <option key={intensity} value={intensity}>
                {intensity}
              </option>
            ))}
          </select>
          <select style={selectsyle}
            value={filters.topic}
            onChange={e => setFilters({ ...filters, topic: e.target.value })}
          >
            <option value="">All Topics</option>
            {topicArray.map(intensity => (
              <option key={intensity} value={intensity}>
                {intensity}
              </option>
            ))}
          </select>
          <select style={selectsyle}
            value={filters.region}
            onChange={e => setFilters({ ...filters, region: e.target.value })}
          >
            <option value="">All region</option>
            {regionArray.map(intensity => (
              <option key={intensity} value={intensity}>
                {intensity}
              </option>
            ))}
          </select>
          <select style={selectsyle}
            value={filters.country}
            onChange={e => setFilters({ ...filters, country: e.target.value })}
          >
            <option value="">All country</option>
            {countryArray.map(intensity => (
              <option key={intensity} value={intensity}>
                {intensity}
              </option>
            ))}
          </select>
          <select style={selectsyle}
            value={filters.pestle}
            onChange={e => setFilters({ ...filters, pestle: e.target.value })}
          >
            <option value="">All pestle</option>
            {pestleArray.map(intensity => (
              <option key={intensity} value={intensity}>
                {intensity}
              </option>
            ))}
          </select>
        </div>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Project Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Intensity</th>
                <th>Sector</th>
                <th>Topic</th>
                <th>insight</th>
                <th>region</th>
                <th>published</th>
                <th>country</th>
                <th>relevance</th>
                <th>pestle</th>
                <th>likelihood</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.slice(startIndex, endIndex).map((tdata, index) => (
                <tr key={startIndex + index} className="border-top">
                  <td>{tdata.title}</td>
                  <td>{tdata.intensity}</td>
                  <td>{tdata.sector}</td>
                  <td>{tdata.topic}</td>
                  <td>{tdata.insight}</td>
                  <td>{tdata.region}</td>
                  <td>{tdata.published}</td>
                  <td>{tdata.country}</td>
                  <td>{tdata.relevance}</td>
                  <td>{tdata.pestle}</td>
                  <td>{tdata.likelihood}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div>
            <button
              className="btn btn-outline-info"
              onClick={handlePrevPage}
              disabled={currentPage === 0}
            >
              {"<<"}
            </button>
            <button
              className="btn mx-4 btn-outline-info"
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
            >
              {">>"}
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
