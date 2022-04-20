import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import CreatePost from "../Components/CreatePost"
import NavBar from "../Components/NavBar"
import PostsContainer from "../Components/PostsContainer"
import Profile from "../Components/Profile"

export default function Start(){
    const [openLogin,setOpenLogin] = useState(false)

    return(
        <div style={{backgroundImage:"url(https://www.freevector.com/uploads/vector/preview/30546/Pastel_Background_vector_5.jpg)",minHeight:"100vh"}}>
        <NavBar setOpenLogin={setOpenLogin} openLogin={openLogin}/>
        <Container className="text-center container-fluid">
          <Row>
            <Col lg={3} className="d-none d-lg-block">
              <Profile/>
            </Col>
            <Col lg={9}xs={12}>
              <CreatePost loginPanelOpen={setOpenLogin}/>
              <PostsContainer />
            </Col>
          </Row>
        </Container>
        
          
        </div>
    )
}