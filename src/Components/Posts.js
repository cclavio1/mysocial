import { useEffect, useState } from "react"


export default function Posts(props){
    let [posts,setPosts]=useState(<div className="text-center">
    <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"></img>
</div>)

useEffect(()=>{
    //fetch posts here
},[])
    return(
        <div>
            <h1>Loading Posts</h1>
            {posts}
        </div>
    )
}


Posts.defaultProps = {
    posts:"empty"
}
