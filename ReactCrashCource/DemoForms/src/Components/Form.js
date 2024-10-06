import {useState} from 'react'
export const Form = () => {
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [country, setCountry] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Form data is ${username}, ${description}, ${country}`)
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' value={username} onChange={(event)=> setUsername(event.target.value) } />
            <label>Description</label>
            <textarea  value={description} onChange={(event)=> setDescription(event.target.value) } ></textarea>
            <label>Country</label>
            <select  value={country} onChange={(event)=> setCountry(event.target.value) } >
                <option>India</option>
                <option>England</option>
                <option>US</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
    </form>

}