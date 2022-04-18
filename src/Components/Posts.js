import { useEffect, useState } from "react"
import {Button } from "react-bootstrap"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { styled,Avatar,Card, CardHeader,CardContent,
     Typography, CardMedia, CardActions, IconButton, Collapse} from "@mui/material";
import { blue } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
export default function Posts(props){
    let [expanded,setExpanded] = useState(false)
    const handleExpandClick=()=> {
        setExpanded(expanded=!expanded)
        console.log(expanded)
    }

    let [posts,setPosts]=useState(<div className="text-center">
    <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"></img>
</div>)
useEffect(()=>{
    fetch('https://pacific-harbor-39764.herokuapp.com/api/posts')
    .then(result=>result.json())
    .then(result=>{
        
        setPosts(result.map(obj=>{
            return(
                <Card className="text-start m-3" key={obj._id}>
                <CardHeader 
                    avatar={<Avatar sx={{bgcolor:blue[500]}} alt="sample">{obj.username[0].toUpperCase()}</Avatar>}
                    title={obj.username}
                />  
                {
                obj.imgurl? 
                <CardMedia 
                    component="img"
                    height="194"
                    image={obj.imgurl}
                />:<br className="mx-3"></br>
            }
                <CardContent>
                    <Typography>
                    {obj.text}
                    </Typography>
                    <Typography>
                    {obj.likes}
                    </Typography>
                    <CardActions>
                     <Button className="bg-white"><ThumbUpIcon color="primary"/></Button>
                     <Typography>View Comments</Typography>
                     <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                    </ExpandMore>
                    </CardActions>

                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                     <CardContent>Sample</CardContent>

                    </Collapse>
                
                </CardContent>
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
