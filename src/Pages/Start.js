import { Col, Container, Row } from "react-bootstrap"
import NavBar from "../Components/NavBar"
import Posts from "../Components/Posts"

export default function Start(){
    return(
        <div style={{backgroundImage:"url(https://www.freevector.com/uploads/vector/preview/30546/Pastel_Background_vector_5.jpg)",minHeight:"100vh"}}>
        <NavBar/>
        <Container>
          <Row>
            <Col xs={6}>
              <Posts />
            </Col>
            <Col xs={6}>
              <Posts />
            </Col>
          </Row>
        </Container>
        
          
        </div>
    )
}