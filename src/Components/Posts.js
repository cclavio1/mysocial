import { useEffect, useState } from "react"


export default function Posts(props){
    let [posts,setPosts]=useState(<div className="text-center">
    <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"></img>
</div>)

useEffect(()=>{
    fetch('https://pacific-harbor-39764.herokuapp.com/api/posts')
    .then(result=>result.json())
    .then(result=>{
        setPosts(posts=result)
        console.log(result)
    })
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
