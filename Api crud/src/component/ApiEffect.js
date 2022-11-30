import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ApiEffect() {
  const [posts, setPosts] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });

  useEffect(() => {
    const FetchPost = async () => {
      try {
        let response = await client.get("?_limit=10");
        setPosts(response.data);
      } catch (error) {
        console.log("Error from API", error);
      }
    };
    FetchPost();
  }, []);

  const UpdateApiData = (id) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/post/${id}`, { posts })
      .then((response) => {
        setPosts(response.data);
      });
  };

  const DeletePost = (id) => {
    client.delete(`${id}`);
    setPosts(
      posts.filter((posts) => {
        return posts.id !== id;
      })
    );
  };

  return (
    <div>
      <h1> React Api using UseEffect</h1>
      <Table className="table table-bordered">
        <thread>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thread>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <Button className="btn btn-success" onClick={handleShow}>
                  Edit
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit API</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Heading</Form.Label>
                        <Form.Control
                          type="text"
                          
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Body</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => DeletePost(post.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ApiEffect;
