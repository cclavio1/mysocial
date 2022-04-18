import { useState } from "react";
const { Modal,Button, Form } = require("react-bootstrap")

export default function CreatePost(props){

    const [show, setShow] = useState(false);
    const handleClose = () =>{ 
        setShow(false)
        fetch('https://pacific-harbor-39764.herokuapp.com/api/posts/',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                username:props.username,
                text:post,
                imgurl:""
            })
        }).then(result=>result.json())
        .then(result=>{
            
        })        
    };
    const handleShow = () => {
        if(props.username==null){
            alert('You need to log in first!')
        }else{
        setShow(true)
        }
    };
    const [post,setPost]= useState("")

    return(
        <>
           <Button variant="primary" onClick={handleShow}>
                Create a Post
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Create a post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control placeholder="What's on your mind?" onChange={(e)=>setPost(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Post
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

CreatePost.defaultProps={
    username:null
}