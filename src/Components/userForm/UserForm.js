import React,{useState} from 'react'
import ErrorModal from '../UI/ErrorModal';
import './UserForm.css'
function UserForm(props) {
    const [userName,setUserName] = useState('');
    const [age,setAge] = useState('')
    const [isValidName,setisValidName] = useState(true);
    const [isValidAge,setisValidAge] = useState(true);
    const [error,setError] = useState()
    function inputUserHandler(event){
        setisValidName(true)
        setUserName(event.target.value)
    }
    function inputAgeHandler(event){
        setisValidAge(true)
        setAge(event.target.value)
    }
    function onSubmitHandler(event){
        event.preventDefault();
        if (userName.trim().length === 0 || age.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
              });
        }
        const userDetails ={
            userName : {userName},
            age : {age}
        }
        props.setUserDetails(userDetails); 
    }
    const errorHandler = () => {
        setError(null);
    };
    return ( 
        <div>
            {
                error && 
                <ErrorModal 
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}/>
            }
            <form onSubmit={onSubmitHandler}>
                <div className='container'>
                    <div className={`form-control ${!isValidName && 'inValid'}`}>
                        <label>UserName</label>
                        <input type='text' onChange={inputUserHandler} ></input>
                    </div>
                    <div className={`form-control ${!isValidAge && 'inValid'}`}>
                        <label>Age</label>
                        <input type='number' onChange={inputAgeHandler}></input>
                    </div>
                    <div className='form-control'>
                        <button>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserForm;