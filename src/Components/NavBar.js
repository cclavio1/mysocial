import { Tab, Tabs, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import {Modal,Button, Form} from 'react-bootstrap';
import logo from './../MySocialLogo.png'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  

  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function NavBar({setOpenLogin,openLogin,...next}){

    const handleClose = () =>setOpenLogin(false)
    const handleShow = () => setOpenLogin(true);
    const [username,setUsername]=useState('')
    const [pw,setPw]=useState('')

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

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
                    {
                        localStorage.getItem("username")==null?                                
                        <a className='mx-5 btn btn-outline-light' onClick={handleShow}>Login</a>
                        :<a className='mx-5 btn btn-outline-light'>Logout</a>
                    }
                </ol>
            </ul>

            <>
            <Modal show={openLogin} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                
                </Modal.Header>
                <Modal.Body className='text-center'>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} variant="fullWidth" onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab label="Login" {...a11yProps(0)} />
                        <Tab label="Register" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Form.Group>
                        <TextField id="margin-dense" label="Username" variant="outlined" onChange={(e)=>setUsername(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className='m-2'>
                        <TextField id="margin-dense" label="Password" variant="outlined" onChange={(e)=>setPw(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Button>Login</Button>
                    </Form.Group>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    On development...
                </TabPanel>
                </Modal.Body>
            </Modal>
        </>

        </div>
    )
}
