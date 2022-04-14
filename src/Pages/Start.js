import { Col, Container, Row } from "react-bootstrap"
import NavBar from "../Components/NavBar"
import Posts from "../Components/Posts"
import Profile from "../Components/Profile"

export default function Start(){
    return(
        <div style={{backgroundImage:"url(https://www.freevector.com/uploads/vector/preview/30546/Pastel_Background_vector_5.jpg)",minHeight:"100vh"}}>
        <NavBar/>
        <Container className="text-center">
          <Row>
            <Col xs={3}>
              <Profile />
            </Col>
            <Col xs={9}>
              <Posts />
            </Col>
          </Row>
        </Container>
        
          
        </div>
    )
}