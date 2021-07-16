import react from 'react';
import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import './LoginComponent.scss'
// // class LoginComponent extends react.Component {



// //     render() {

// //         return (
// //             <section className="section-login" >
// //                 <div className="row">
// //                     <div className="login">
// //                         <div className="login_form">
// //                             <form action="#" className="form">
// //                                 <h3 class="heading-secondary-login">Login Now to Enroll!!</h3>
// //                                 <div className="form_group">
// //                                     <input type="email" className="form_input" placeholder="Email" id="email" required></input>
// //                                     <label for="email" className="form_label">Email</label>
// //                                 </div>
// //                                 <div className="form_group">
// //                                     <input type="password" className="form_input" placeholder="Password" id="password" required></input>
// //                                     <label for="password" className="form_label">Password</label>
// //                                 </div>
// //                                 <div className="form_group">
// //                                     <button className="btn-submit">Log In</button>
// //                                 </div>
// //                             </form>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </section>
// //         )
// //     }

// // }

// function LoginComponent() {

//     const [registerPassword, setRegisterPassword] = useState('');
//     const [registerEmail, setRegisterEmail] = useState('');

//     const login = (e) => {
//         e.preventDefault();
//         const data ={
//           password: registerPassword,
//           email:registerEmail
//         }
//         fetch('http://localhost:9000/app/auth/signin', {
//             method: 'POST',
//             headers: {
//                 Accept:"application/json",
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//           })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 this.authenticate(data)
//             })
//             .catch(error => alert('Error posting data: ', error));
//       };

//     return (

//         <section className="section-login" >
//             <div className="row">
//                 <div className="login">
//                     <div className="login_form">
//                         <form action="#" className="form" onSubmit={login}>
//                             <h3 class="heading-secondary-login">Login Now to Enroll!!</h3>
//                             <div className="form_group">
//                                 <input type="email" className="form_input" placeholder="Email" id="email" required onChange={(e) => setRegisterEmail(e.target.value)} ></input>
//                                 <label for="email" className="form_label">Email</label>
//                             </div>
//                             <div className="form_group">
//                                 <input type="password" className="form_input" placeholder="Password" id="password" required onChange={(e) => setRegisterPassword(e.target.value)}></input>
//                                 <label for="password" className="form_label">Password</label>
//                             </div>
//                             <div className="form_group">
//                                 <button className="btn-submit">Log In</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }


// // class LoginComponent extends React.Component {

// //     constructor() {
// //         super();
// //         this.state = {
// //             email: "",
// //             password: "",
// //             error: "",
// //             redirectToReferer: false
// //         };
// //     }

// //     handleChange = name => event => {
// //         this.setState({ error: "" });
// //         this.setState({ [name]: event.target.value });
// //     }

// //     clickSubmit = event => {
// //         event.preventDefault();
// //         const { email, password } = this.state;
// //         const user = {
// //             email,
// //             password
// //         }
// //         this.signin(user).then(data => {
// //             if (data.error) {
// //                 this.setState({ error: data.error })
// //             }
// //             else {
// //                 //authenticate
// //                 //redirect
// //             }
// //         })

// //     }

// //     signin = user => {
// //         return fetch('http://localhost:9000/app/auth/signin', {
// //             method: 'POST',
// //             headers: {
// //                 Accept: "application/json",
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify(user),
// //         })
// //             .then(response => response.json())
// //             .catch(err => console.log(err))
// //     };

// //     signinForm = (name, email, password) => (
// //         <section className="section-login" >
// //             <div className="row">
// //                 <div className="login">
// //                     <div className="login_form">
// //                         <form action="#" className="form" onSubmit={this.clickSubmit}>
// //                             <h3 class="heading-secondary-login">Login Now to Enroll!!</h3>
// //                             <div className="form_group">
// //                                 <input type="email" className="form_input" placeholder="Email" id="email" required value ={email} onChange={this.handleChange} ></input>
// //                                 <label for="email" className="form_label">Email</label>
// //                             </div>
// //                             <div className="form_group">
// //                                 <input type="password" className="form_input" placeholder="Password" id="password" required onChange={this.handleChange}></input>
// //                                 <label for="password" className="form_label">Password</label>
// //                             </div>
// //                             <div className="form_group">
// //                                 <button className="btn-submit">Log In</button>
// //                             </div>
// //                         </form>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     )

// // }


class LoginComponent extends React.Component {

    constructor() {

        super();
        this.state = {
            email: "",
            password: "",
            error: "",
            redirectToReferer:false
        };
    }

    handleChange = name => event => {
        this.setState({ error: "" });
        this.setState({ [name]: event.target.value });
    };

    authenticate = (jwt, next) => {
        if(typeof window !== "undefined"){ 
            localStorage.setItem("jwt", JSON.stringify(jwt))
            next();
        }
    }

    clickSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        const user = {
        
            email,
            password
        };
        // console.log(user);
        this.signin(user)
        .then(data => {
            if(data.error){
                this.setState({error:data.error})
            } 
            else{
                this.authenticate(data, ()=>{
                    this.setState({redirectToReferer:true})
                })
            } 
          })
    };

    signin = user => {
        return fetch("http://localhost:9000/app/auth/signin", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    }

    render() {
        const { email, password, error, redirectToReferer } = this.state;

        if(redirectToReferer){
            return <Redirect to="/courses"></Redirect>
        }

        return (

            <section className="section-login">
                
                    <div className="login">
                        <div className="login_form">
                            <form action="#" className="form" onSubmit={this.clickSubmit} >
                                <h3 class="heading-secondary-login">
                                    Login now to enroll!!
                                </h3>
                                <div className="form_group">
                                    <div
                                        className="form_input"
                                        style={{ display: error ? "" : "none" }}
                                    >
                                        {error}
                                    </div>
                                    <br></br>
                                    
                                </div>
                                

                                <div className="form_group">
                                    <input
                                        type="email"
                                        className="form_input"
                                        placeholder="Email"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={this.handleChange("email")}
                                    ></input>
                                    <label for="email" className="form_label">
                                        Email
                    </label>
                                </div>
                                <div className="form_group">
                                    <input
                                        type="password"
                                        className="form_input"
                                        placeholder="Password"
                                        id="password"
                                        required
                                        value={password}
                                        onChange={this.handleChange("password")}
                                    ></input>
                                    <label for="password" className="form_label">
                                        Create Password
                    </label>
                                </div>
                                <div className="form_group">
                                    <button className="btn-submit">SignUp</button>
                                </div>
                            </form>
                        </div>
                    </div>
                
            </section>
        )
    }

}

export default LoginComponent;