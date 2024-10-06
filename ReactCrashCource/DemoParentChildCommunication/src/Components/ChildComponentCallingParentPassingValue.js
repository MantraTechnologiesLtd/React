export const ChildComponentCallingParentPassingValue = (props) => {
    return (
        <button onClick={() => props.greetHander('Child')} >Greet Parent by passing Value</button>
    )

}