import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';



class ApiMount extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[]
    };
  }

  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/posts/?_limit=10`)
    .then(res => {
        const posts = res.data;
        this.setState({posts});
    })
  }

  deleteRow(id,e){
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
        console.log(res);
        console.log(res.data);

        const posts = this.state.posts.filter(item => item.id !== id);
        this.setState({posts});
    })
  }

  

  render() {
    return (
      <div>
        <h1>React Api Using Component Mount</h1>

        <Table className='table table-bordered'>
            <thread>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Action</th>
                </tr>
            </thread>
            <tbody>
                {this.state.posts.map((post,index) => (
                    <tr key={index}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td>
                            <button className='btn btn-danger' onClick={(e) => this.deleteRow(post.id,e)}>Delete</button>
                        </td>
                    </tr>
                    ))}
            </tbody>
        </Table>
      </div>
    );
  }
}

export default ApiMount;