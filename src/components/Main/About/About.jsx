import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Styles.css";

const About = () => {
  return (
    <div className="about-section">
      <Row className="d-flex justify-content-center pt-3">
        <span>
          <h4 className="text-white-50 category-title bokor-family text-center">
            ABOUT THIS PROJECT
          </h4>
        </span>
      </Row>
      <Row className="">
        <Col>
          <p className="text-white-50 category-title bokor-family">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            necessitatibus nostrum. Dicta illo hic laboriosam repellat! Quis
            voluptatibus voluptate omnis distinctio nobis. Odio soluta, cum
            earum laudantium explicabo tenetur voluptatem. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ratione tempore, sint provident
            nisi dignissimos, eum officiis reiciendis quas consequuntur
            laboriosam, quaerat maxime fugiat cum qui at et! Ipsa, ipsum enim.
          </p>
        </Col>
        <Col>
          <p className="text-white-50 category-title bokor-family">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            necessitatibus nostrum. Dicta illo hic laboriosam repellat! Quis
            voluptatibus voluptate omnis distinctio nobis. Odio soluta, cum
            earum laudantium explicabo tenetur voluptatem. lorem Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Illo impedit sed
            voluptas distinctio enim voluptates amet itaque exercitationem
            incidunt aperiam modi hic est quia ad consequuntur explicabo, totam
            doloribus quidem?
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
