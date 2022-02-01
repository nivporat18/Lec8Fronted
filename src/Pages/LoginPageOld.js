// import React from "react";
// import Input from "../Components/Input";
// import ButtonWithProgress from "../Components/ButtonWithProgress"


// export class LoginPage extends React.Component {
//   //props
//   state = {
//     username: "",
//     password: "",
//     apiError: undefined,
//     pendingApiCall: false,
//   };

//   //actions
//   onChangeUserName = (event) => {
//     const value = event.target.value;
//     this.setState({ username: value, apiError: undefined });
//   };

//   onChangePassword = (event) => {
//     const value = event.target.value;
//     this.setState({ password: value, apiError: undefined });
//   };

//   onClickLogin = () => {
//     this.setState({ pendingApiCall: true });
//     const body = {
//       username: this.state.username,
//       password: this.state.password,
//     };
    
//     //axios expects {username: "Nivpo",password: ""}
//     this.props.actions
//       .postLogin(body)
//       .then((response) => {
//         this.setState({ pendingApiCall: false });
          
//       })
//       .catch((e) => {
//         if (e.response) {
//           this.setState({
//             apiError: e.response.data.message,
//             pendingApiCall: false,
//           });

//         }
//       });
//   };

//   render() {
//     //auto called when the state change
//     let disableSubmit = false;
//     if (this.state.username === "") {
//       disableSubmit = true;
//     }
//     if (this.state.password === "") {
//       disableSubmit = true;
//     }

//     return (
//       <div className="container">
//         <h1 className="text-center">Login</h1>

//         <div className="col-12 mb-3">
//           <Input
//             label="User Name"
//             placeholder="Your User Name"
//             value={this.state.username}
//             onChange={this.onChangeUserName}
//           />
//         </div>

//         <div className="col-12 mb-3">
//           <Input
//             label="Password"
//             placeholder="Your Password"
//             type="password"
//             value={this.state.password}
//             onChange={this.onChangePassword}
//           />
//         </div>

//         <div className="text-center">
//           {this.state.apiError && (
//             <div className="col-12 mb-3">
//               <div className="alert alert-danger">{this.state.apiError}</div>
//             </div>
//           )}
//           {/* <button
//             className="btn btn-primary"
//             onClick={this.onClickLogin}
//             disabled={disableSubmit}
//           >
//             Login
//           </button> */}
//           <ButtonWithProgress
//           showProgress ={this.state.pendingApiCall}
//           disabled = {disableSubmit || this.state.pendingApiCall}
//           text = "Login"
//           onClick = {this.onClickLogin}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// //when we show the component without passing an action -> we don't receive an error
// LoginPage.defaultProps = {
//   actions: {
//     postLogin: () => new Promise((resolve, reject) => resolve({})),
//   },
// };

// //export default usage:
// //import LoginPage from

// //export class usage:
// //import {LoginPage} from
