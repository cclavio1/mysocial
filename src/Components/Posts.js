import { useEffect, useState } from "react"


export default function Posts(props){
    let [posts,setPosts]=useState(<div className="text-center">
    <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"></img>
</div>)
    return(
        <div>
            <h1>this will display posts</h1>
            {posts}
        </div>
    )
}


Posts.defaultProps = {
    posts:"empty"
}
