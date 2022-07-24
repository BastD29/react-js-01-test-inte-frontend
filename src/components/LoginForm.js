import React, { useState } from 'react'

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({fname: "", lname:"", email: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Connectez-vous</h2>
                {(error !== "") ? (<div className='error'>{error}</div>) : ""}
                <div className='form-group'>
                    <label htmlFor='name'>Nom</label>
                    <input 
                        type="text" 
                        name="lname" 
                        id="lname" 
                        onChange={e => setDetails({...details, lname: e.target.value})}
                        value={details.lname}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='name'>Prénom</label>
                    <input 
                        type="text" 
                        name="fname" 
                        id="fname" 
                        onChange={e => setDetails({...details, fname: e.target.value})}
                        value={details.fname}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        onChange={e => setDetails({...details, email: e.target.value})}
                        value={details.email}
                    />
                </div>
                <input type="submit" value="Se connecter" className='connect'/>
            </div>
        </form>
    )
}

export default LoginForm