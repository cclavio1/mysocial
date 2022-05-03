

export default  function Comments({comments}){
        console.log(comments)
        let render = comments.map(com=>{
            return(
                <div>{com.comment}</div>
            )
        })
    return(
        <div>{render}</div>
    )
}