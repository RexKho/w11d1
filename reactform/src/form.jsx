import {useState} from 'react';

function Form(props) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        phoneType: '',
        staff: '',
        bio: '',
        sign: false
    })


    const handleChange = (incomingKey) => {
        return e => {
            console.log(e.target.value)
            const newObj = Object.assign({}, user, {[incomingKey]: e.target.value})
            setUser(newObj);
            console.log(user);
        }
    }

    const [errors, setErrors] = useState([]);

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(user);
        let errors = validate();
        if(errors.length){
            setErrors(errors);
        }else{
        //usually send to backend 
            setUser({
                name: '',
                email: '',
                phoneNumber: '',
                phoneType: '',
                staff: '',
                bio: '',
                sign: false
            })
        }
    }

    
    

    const validate =() => {
        let errors =[];
        if(!user.name.length){
            errors.push("Must have a Name please");
        }
        if(!user.email.includes('@')){
            errors.push("Email needs to be valid")
        }
        if(user.phoneNumber.length < 10){
            errors.push("Phone number needs to be a valid number")
        }
        if (!user.phoneType) {
            errors.push("Must select a phone type");
        }
        if (user.bio.length > 280) {
            errors.push("Bio must be less or equal to 280 characters");
        }
        return errors;
    }

    const showErrors =()=>{
        if(!errors.length) return null;
        return (
            <ul>
                {errors.map((error, i) => <li key={i}>{error}</li>)}
            </ul>
        )
    }

    return (
        <>
            <form onSubmit={handleSumbit}>
                <input type="text" placeholder='Name' onChange={handleChange('name')} value={user.name}/>
                <br />
                <input type="text" placeholder='Email' onChange={handleChange('email')} value={user.email} />
                <br />
                <input type="text" placeholder='phoneNumber' onChange={handleChange('phoneNumber')} value={user.phoneNumber}/>
                <br />
                <label> Phone Type
                    <select onChange={handleChange('phoneType')}>
                        <option value='home' >Home</option>
                        <option value='work' > Work</option>
                        <option value='mobile' >Mobile</option>

                    </select>
                </label>
                <br />
                <label> Instructor
                    <input type="radio" name='staff' onChange={handleChange('staff')} value='instructor'/>
                </label>
                <label> Student
                    <input type="radio" name='staff' onChange={handleChange('staff')}value='student'/>
                </label>
                <br />
                <textarea name="" id="" cols="30" rows="10" onChange={handleChange('bio')} value={user.bio} placeholder='Bio'></textarea>
                <br />
                <label>Sign Up for Email Notifications
                    <input type="checkbox" onChange={handleChange('sign')} value={user.sign === 'true' ? false : true}/>
                </label>
                <br />
                <button>Submit</button>
                {showErrors()}
            </form>
        
        </>
    )

}

export default Form;