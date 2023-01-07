import React from 'react';
import UserForm from './Components/userForm/UserForm';


function App() {
  function setUserDetails(userDetails){
    const user=userDetails;
    console.log(user);
  }
  return (
    <div>
      <UserForm setUserDetails={setUserDetails} />
    </div>
  );
}

export default App;
