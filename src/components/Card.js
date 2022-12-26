import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";


function OurCard() {

    let [posts,SetPosts]=useState("")

    //use effect

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res)=>{
            setTimeout(()=>{
                SetPosts(res.data)
            },3000)

        }).catch((error)=>{

        })
        }

    )
    console.log(posts)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{posts.title}</Card.Title>
        <Card.Text>
        {posts.body}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default OurCard;