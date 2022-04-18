import { Col, Container, Row } from "react-bootstrap"
import CreatePost from "../Components/CreatePost"
import NavBar from "../Components/NavBar"
import Posts from "../Components/Posts"
import Profile from "../Components/Profile"

export default function Start(){
    return(
        <div style={{backgroundImage:"url(https://www.freevector.com/uploads/vector/preview/30546/Pastel_Background_vector_5.jpg)",minHeight:"100vh"}}>
        <NavBar/>
        <Container className="text-center container-fluid">
          <Row>
            <Col md={3} className="d-none d-md-block align-items-center">
              <Profile />
            </Col>
            <Col md={9}xs={12}>
              <CreatePost/>
              <Posts />
            </Col>
          </Row>
        </Container>
        
          
        </div>
    )
}