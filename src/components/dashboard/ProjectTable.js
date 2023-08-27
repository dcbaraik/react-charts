import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { Jsondata } from "../../data/jdata";

const itemsPerPage = 5; // Number of items per page

const ProjectTables = () => {


  
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(Jsondata.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

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

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Project Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>
          <Table>
            <thead>
              <tr>
                <th>title</th>
                <th>intensity</th>
                <th>sector</th>
                <th>topic</th>
                <th>region</th>
                <th>Impact</th>
                <th>country</th>
                <th>relevance</th>
                <th>pestle</th>
                <th>source</th>
              </tr>
            </thead>
            <tbody>
              {Jsondata.slice(startIndex, endIndex).map((tdata, index) => (
                <tr key={startIndex + index} className="border-top">
                  <td>{tdata.title}</td>
                  <td>{tdata.intensity}</td>
                  <td>{tdata.sector}</td>
                  <td>{tdata.topic}</td>
                  <td>{tdata.region}</td>
                  <td>{tdata.impact}</td>
                  <td>{tdata.country}</td>
                  <td>{tdata.relevance}</td>
                  <td>{tdata.pestle}</td>
                  <td>{tdata.source}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div>
            <button className="btn btn-outline-info" onClick={handlePrevPage} disabled={currentPage === 0}>
              {'<<'}
            </button>
            <button className="btn mx-4 btn-outline-info"  onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
              {'>>'}
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
