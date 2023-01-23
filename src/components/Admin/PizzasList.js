import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPizzas, deletePizza } from "../../actions/pizzaAction";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Table from "react-bootstrap/Table";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const PizzasList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  useEffect(() => {
    // console.log("*******");
    // console.log(pizzas.length);
    // console.log(pizzastate);
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <Container>
        <Link to="/admin" style={{ fontWeight: "bold", fontSize: "20px" }}>
          Back to admin Panel
        </Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error>Error while fetching Pizzas {error}</Error>
        ) : (
          <Table striped bordered hover className="mt-2">
            <thead>
              <tr>
                <th>S/n</th>
                <th>Pizza Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pizzas &&
                pizzas.map((pizza) => (
                  <tr>
                    <td style={{ width: "200px" }}>
                      <img
                        style={{
                          width: "100%",
                          height: "100px",
                          border: "5px solid black",
                          boxSizing: "border-box",
                        }}
                        src={pizza.image}
                      />
                    </td>
                    <td>{pizza.name}</td>
                    <td>
                      Small : {pizza.prices[0]["small"]}
                      <br />
                      Medium : {pizza.prices[0]["medium"]}
                      <br />
                      Large : {pizza.prices[0]["large"]}
                    </td>
                    <td>{pizza.category}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <Link to={`/admin/editpizza/${pizza._id}`}>
                          <AiFillEdit
                            style={{
                              color: "green",
                              width: "100x",
                              height: "100px",
                              cursor: "pointer",
                            }}
                          />
                        </Link>

                        <AiFillDelete
                          style={{
                            color: "red",
                            width: "30px",
                            height: "30px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            dispatch(deletePizza(pizza._id));
                            window.location.reload();
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
};

export default PizzasList;
