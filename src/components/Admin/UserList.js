import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../actions/userAction";
import Table from "react-bootstrap/Table";
import Loader from "./../Loader";
import Error from "./../Error";
import { AiFillDelete } from "react-icons/ai";

const UserList = () => {
  const userState = useSelector((state) => state.getAllUsersReducer);
  const { loading, error, users } = userState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <>
      <h1>User List</h1>
      {loading && <Loader />}
      {error && <Error error="Error While Fetching Users" />}
      <Table style={{ backgroundColor: "#daf542" }} striped bordered hover>
        <thead>
          <tr style={{ backgroundColor: "#b9ff17" }}>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <AiFillDelete
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => {
                      dispatch(deleteUser(user._id));
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserList;
