export const  Greet = (props) => {
    return <div> <h1>Welcome {props.name}! you are {props.hero}</h1>
        {props.children}
    </div>
}

//export default Greet;
