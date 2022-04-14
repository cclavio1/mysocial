import { useState } from "react";
const { Modal,Button, Form } = require("react-bootstrap")

export default function CreatePost(props){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <Form.Control placeholder="What's on your mind?"/>
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