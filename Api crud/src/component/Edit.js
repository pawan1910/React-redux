// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import axios from 'axios';

// function Edit() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const UpdateApiData = (id) => {
//     axios
//       .put(`https://jsonplaceholder.typicode.com/post/${id}`, { posts })
//       .then((response) => {
//         setPosts(response.data);
//         setShow(true);
//       });
//   };

//   return (
//     <>
//       <Button className='btn btn-success' onClick={UpdateApiData}>
//         Edit
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit API</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Heading</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={posts.title}
//                 autoFocus
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>Body</Form.Label>
//               <Form.Control as="textarea" rows={3} value={posts.body}/>
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Edit;