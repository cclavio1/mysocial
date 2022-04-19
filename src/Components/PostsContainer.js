import Posts from "./Posts"


export default function PostsContainer(){
    let [posts,setPosts]=useState(<div className="text-center">
        <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"></img>
    </div>)
    useEffect(()=>{
        fetch('https://pacific-harbor-39764.herokuapp.com/api/posts')
        .then(result=>result.json())
        .then(result=>{
            setPosts(result.map(post=>{
                <Posts key={post._id} props={result} />
            }))
        })
    },[])    

}