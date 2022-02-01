import React, { useState } from "react";
import Input from "../Components/Input";
import ButtonWithProgress from "../Components/ButtonWithProgress"


 const LoginPage = (props) =>{
  const[username,setUsername] = useState('')
  const[password,setPassword] = useState('')
  const[apiError,setApiError] = useState(undefined)
  const[pendingApiCalls,setPendingApiCall] = useState(false)


  //actions
 const onChangeUserName = (event) => {
   const value = event.target.value
   setUsername(value)
   setApiError(undefined)
  };

  const onChangePassword = (event) => {
  const value = event.target.value
  setPassword(value)
  setApiError(undefined)
  };

  const onClickLogin = () => {
    setPendingApiCall(true)
    const body = {
        username, password
    }

    props.actions.postLogin(body)
        .then(response => {
            setPendingApiCall(false)
            //navigate to "/"
        })
        .catch(e => {
            if (e.response) {
                setApiError(e.response.data.message)
                setPendingApiCall(false)
            }
        })
}

 
    //auto called when the state change
    let disableSubmit = username === '' || password === '';


    return (
      <div className="container">
        <h1 className="text-center">Login</h1>

        <div className="col-12 mb-3">
          <Input
            label="User Name"
            placeholder="Your User Name"
            value={username}
            onChange={onChangeUserName}
          />
        </div>

        <div className="col-12 mb-3">
          <Input
            label="Password"
            placeholder="Your Password"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
        </div>

        <div className="text-center">
          {apiError && (
            <div className="col-12 mb-3">
              <div className="alert alert-danger">{apiError}</div>
            </div>
          )}
          {/* <button
            className="btn btn-primary"
            onClick={this.onClickLogin}
            disabled={disableSubmit}
          >
            Login
          </button> */}
          <ButtonWithProgress
          showProgress ={pendingApiCalls}
          disabled = {disableSubmit || pendingApiCalls}
          text = "Login"
          onClick = {onClickLogin}
          />
        </div>
      </div>
    );
  }

  export default LoginPage