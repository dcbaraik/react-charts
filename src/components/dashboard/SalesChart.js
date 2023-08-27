import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";
import { intensityArray, end_yearArray } from "../../data/arraydata";

const SalesChart = () => {


  const chartoptions = {
    series: [
      {
        name: "Iphone 13",
        data: [0, 31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Oneplue 9",
        data: [0, 11, 32, 45, 32, 34, 52, 41],
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
        categories: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
        ],
      },
    },
  };
  return (
    <>
    <Card>
      <CardBody>
        <CardTitle tag="h5">About This Project</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit autem quam accusantium reprehenderit ipsam temporibus minus fugit dolorem molestiae repellat! Ut inventore accusamus error recusandae quidem repellendus dolores iste quam!
        </CardSubtitle>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio nihil quasi quibusdam iste nam repudiandae nemo amet dicta odit harum temporibus enim optio quo, quia, quis, ducimus porro sit. Veniam, assumenda nam. Laboriosam dolore temporibus blanditiis quaerat nemo corrupti possimus fugiat cupiditate ullam itaque! Tempora delectus sunt debitis magnam. Perspiciatis nulla nam quae similique sint excepturi ipsum, harum soluta officia ab dolor error ipsa aliquam neque tempora! Deleniti adipisci veritatis nihil explicabo eligendi cumque blanditiis consequuntur iusto iure, quae, rerum, cupiditate obcaecati. Delectus dignissimos praesentium voluptates mollitia corporis quia, animi rem sunt ex odio nam esse quae placeat rerum incidunt suscipit iusto nesciunt voluptate quidem doloremque beatae? Laborum at voluptatibus, dolorum esse sunt beatae veritatis, explicabo amet hic distinctio unde voluptatem ullam autem! Tenetur deserunt, dolores sint quibusdam impedit, vitae, harum ab tempore perspiciatis adipisci ratione! Accusamus corrupti ipsum nisi ad, repellendus quaerat, saepe officiis sint ducimus ut hic consequatur quo quam quibusdam aspernatur. Vel perspiciatis unde quas quod. Obcaecati et rerum autem accusantium rem soluta culpa! Cum quod aut modi quos facilis nemo tempora laudantium quo! Debitis incidunt, eos enim voluptas distinctio ex alias commodi cum totam autem dicta impedit officia reiciendis iste? Itaque mollitia reiciendis magni nobis?
         </p>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle tag="h5">User  Guides</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit autem quam accusantium reprehenderit ipsam temporibus minus fugit dolorem molestiae repellat! Ut inventore accusamus error recusandae quidem repellendus dolores iste quam!
        </CardSubtitle>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio nihil quasi quibusdam iste nam repudiandae nemo amet dicta odit harum temporibus enim optio quo, quia, quis, ducimus porro sit. Veniam, assumenda nam. Laboriosam dolore temporibus blanditiis quaerat nemo corrupti possimus fugiat cupiditate ullam itaque! Tempora delectus sunt debitis magnam. Perspiciatis nulla nam quae similique sint excepturi ipsum, harum soluta officia ab dolor error ipsa aliquam neque tempora! Deleniti adipisci veritatis nihil explicabo eligendi cumque blanditiis consequuntur iusto iure, quae, rerum, cupiditate obcaecati. Delectus dignissimos praesentium voluptates mollitia corporis quia, animi rem sunt ex odio nam esse quae placeat rerum incidunt suscipit iusto nesciunt voluptate quidem doloremque beatae? Laborum at voluptatibus, dolorum esse sunt beatae veritatis, explicabo amet hic distinctio unde voluptatem ullam autem! Tenetur deserunt, dolores sint quibusdam impedit, vitae, harum ab tempore perspiciatis adipisci ratione! Accusamus corrupti ipsum nisi ad, repellendus quaerat, saepe officiis sint ducimus ut hic consequatur quo quam quibusdam aspernatur. Vel perspiciatis unde quas quod. Obcaecati et rerum autem accusantium rem soluta culpa! Cum quod aut modi quos facilis nemo tempora laudantium quo! Debitis incidunt, eos enim voluptas distinctio ex alias commodi cum totam autem dicta impedit officia reiciendis iste? Itaque mollitia reiciendis magni nobis?
         </p>
      </CardBody>
    </Card>
    </>
  );
};

export default SalesChart;
