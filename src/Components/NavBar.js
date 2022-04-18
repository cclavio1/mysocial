import { TextField } from '@mui/material';
import { useState } from 'react';
import {Modal,Button, Form} from 'react-bootstrap';
import logo from './../MySocialLogo.png'


export default function NavBar(){
    const [show, setShow] = useState(false);
    const handleClose = () =>setShow(false)
    const handleShow = () => setShow(true);
    const [username,setUsername]=useState('')
    const [pw,setPw]=useState('')

    return(
        <div className='sticky-top' style={{
            background: "rgb(8,0,143)",
            background: "linear-gradient(90deg, rgba(8,0,143,1) 0%, rgba(0,153,184,1) 25%, rgba(68,68,209,0.8244485294117647) 50%)",
            color:"white"
        }}>
            <ul className='d-flex justify-content-end align-items-center'>
                <img src={logo} className="img-fluid rounded-circle" style={{ width:"75px"
            }}></img> <h1>Social</h1>
                <ol className='mx-auto'>
                    <a className='mx-5 btn btn-outline-light' onClick={handleShow}>Login</a>
                    <a className='mx-5 btn btn-outline-light'>Sample Links2</a>
                </ol>
            </ul>

            <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <Form.Group>
                    <TextField id="margin-dense" label="Username" variant="outlined" onChange={(e)=>setUsername(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className='m-2'>
                    <TextField id="margin-dense" label="Password" variant="outlined" onChange={(e)=>setPw(e.target.value)}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Login
                </Button>
                </Modal.Footer>
            </Modal>
        </>

        </div>
    )
}
