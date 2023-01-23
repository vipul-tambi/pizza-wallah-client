import React from "react";
import { Row, Col, Table, Container, Image } from "react-bootstrap";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Pizza Wallah Shop</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              enim dolorum rerum minus voluptatem dicta, in distinctio cumque,
              cupiditate adipisci reprehenderit sed? Quos voluptatum fuga et
              odit eos ipsum totam sunt maiores nam excepturi ad quam quisquam
              culpa harum quas asperiores tenetur, laboriosam voluptate
              necessitatibus ea ut dolores mollitia. Excepturi tenetur at
              corrupti nam voluptate fugit dicta ab, labore officiis debitis,
              laudantium alias. Velit laborum nemo fugit odit minima nulla
              similique doloribus cum. Error repudiandae minima laudantium iusto
              unde nulla recusandae, minus, repellendus eos quam delectus ipsa
              dignissimos blanditiis nobis porro autem saepe ad velit beatae
              quae aperiam, repellat deleniti quia veniam. Fuga, at fugiat! Ex
              non vitae quisquam consequatur ut maxime nesciunt rerum libero hic
              architecto consectetur ullam ipsum at, quod, alias error? Officiis
              eligendi nisi cumque quam perferendis, doloremque sapiente
              excepturi voluptatum reprehenderit. Quia ad excepturi, doloremque
              eveniet quas ex nobis? Molestiae eveniet nihil reprehenderit omnis
              atque est, veniam ducimus quisquam ipsum. Dolore dolorum dicta
              molestias debitis! Inventore sint mollitia laboriosam asperiores
              nobis cumque, labore esse earum aliquam dolores repudiandae,
              minima laborum blanditiis neque hic vel nisi suscipit? Repudiandae
              laborum, a vitae accusamus inventore cumque ipsum nostrum quis
              quod voluptate dolor omnis ex nemo illum minima porro obcaecati?
            </p>

            <Table
              striped
              bordered
              hover
              variant="dark"
              className="text-center"
            >
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={6}>
                    ---Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <BsFillTelephoneFill />
                  </td>
                  <td>Phone</td>
                  <td>0141-1234567</td>
                </tr>
                <tr>
                  <td>
                    <FaMobileAlt />
                  </td>
                  <td>Call</td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td>
                    <HiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>Help@pizzawallah.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/veggie_paradise.jpg"
              className="m-auto"
              style={{ height: "80%", width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
