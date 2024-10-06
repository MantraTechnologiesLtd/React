import { ChildComponentCallingParentBasic } from "./ChildComponentCallingParentBasic.js"
import { ChildComponentCallingParentPassingValue } from "./ChildComponentCallingParentPassingValue.js"

export const ParentComponent = () => {
    const greetParent = () => {
        alert('Hello Parent!')
    }

    const greetParentWithValue = (childName) => {
        alert(`Hello from ${childName}`)
    }

    return (
        <div>
            <ChildComponentCallingParentBasic greetHander= {greetParent}/>
            <ChildComponentCallingParentPassingValue greetHander= {greetParentWithValue}/>
        </div>
    ) 
}