import { useEffect, useState } from "react"
import { Card,Button } from "react-bootstrap"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export default function Posts(props){
    let [posts,setPosts]=useState(<div className="text-center">
    <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"></img>
</div>)

useEffect(()=>{
    fetch('https://pacific-harbor-39764.herokuapp.com/api/posts')
    .then(result=>result.json())
    .then(result=>{
        
        setPosts(result.map(obj=>{
            return(
                <Card className="text-start">
                <Card.Header>{obj.username}</Card.Header>
                <Card.Body>
                    <Card.Text>
                    {obj.text}
                    </Card.Text>
                    <Card.Text>
                    {obj.likes}
                    </Card.Text>
                    <Button className="bg-white"><ThumbUpIcon color="primary"/></Button>
                </Card.Body>
                </Card>
            )
        }))
    })
},[])
    return(
        <div>
            {posts}
        </div>
    )
}


Posts.defaultProps = {
    posts:"empty"
}
