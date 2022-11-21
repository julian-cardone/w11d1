import React, { useState } from 'react'

function Form (props) {

    const [ user, setUser ] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        staff: "",
        bio: "",
        signUp: ""
    })

    const [ errors, setErrors ] = useState([])

    const validate = () => {
        let errors = []

        if ( user.name.length === 0 ) {
            errors.push("Name can't be blank")
        }

        if ( user.email.length === 0 ) {
            errors.push("Email can't be blank")
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
            errors.push('Invalid email address')
        }

        if (!/"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gmi.test(user.phoneNumber)) {
            errors.push('Invalid phone number')
        }



        return errors
    }

    const handleChange = (field) => {
        return (e) => {
            console.log(e)
            const newObj = Object.assign({}, user, {[field]: e.target.value})
            setUser(newObj)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let errors = validate()

        console.log(user)

        if ( errors.length ) {
            setErrors(errors)
        }
    }

    const showErrors = () => {
        if ( !errors.length ) return null; 
        return (
            <ul>
                {errors.map(error => <li>{error}</li>)}
            </ul>
        )
    }

    return (
        <>
            {showErrors()}
            <form className='form' onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <input 
                    type="text" 
                    placeholder='Name'
                    value={user.name}
                    onChange={handleChange("name")}
                />
                <input 
                    type="text" 
                    placeholder='Email'
                    value={user.email}
                    onChange={handleChange("email")}
                />
                <input 
                    type="text" 
                    placeholder='Phone Number'
                    value={user.phoneNumber}
                    onChange={handleChange("phoneNumber")}
                />
                <select value={user.phoneType} onChange={handleChange("phoneType")}>
                    <option value="">--Please choose an option--</option>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Mobile">Mobile</option>
                </select>
                <button>Submit</button>
            </form>
            <h1>{user.firstName}</h1>
            <h2>{user.lastName}</h2>
        </>
    )
}

export default Form;