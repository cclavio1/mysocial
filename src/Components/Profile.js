import { Card } from "react-bootstrap"



export default function Profile(props){
    return(
        <Card>
            <Card.Header>{props.username?props.username:"Guest"}</Card.Header>
            <Card.Body><img className="img-fluid" src={props.imgurl}/></Card.Body>
        </Card>
    )
}


Profile.defaultProps = {
    username:null,
    imgurl:"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
}
