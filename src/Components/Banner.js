

export default function Banner (props){

    return(
        <p>{props.test}</p>
    )
}
Banner.defaultProps={
    test:"testing"
}