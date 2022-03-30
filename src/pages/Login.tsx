import React, { useState } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';


const Login = () => {
    const navigate=useNavigate();
	interface myface{
		email:any,
		password:any
	}

	const url:any="https://uat.ordering-boafresh.ekbana.net/api/v4/auth/login";
	
	const [data,setData]=useState<myface>({
		email:"",
        password:"",
	})

// const client_id=process.env.client_id;
// console.log(client_id);
 
// function submit(e:React.FormEvent<EventTarget>){
// 		e.preventDefault();
//        axios.post(url, {
// 		client_id:"2",
// 		client_secret:"olzBb6we0po4B0PSJyDpNGhhSsnvZmeio8sRoASa",
// 		grant_type:"password", 
// 	  username:data.email,
// 	  password:data.password
//   }).then((res)=>{
// 	  console.log(res.data);
//   })
// }
 const client_id:number=2;
 const client_secret:string="olzBb6we0po4B0PSJyDpNGhhSsnvZmeio8sRoASa";
 const grant_type:any="password";
 
function submit(e:React.FormEvent<EventTarget>){
		e.preventDefault();
let result=fetch(url,{
    method: 'post',
    mode:'no-cors',
    // headers:{
    //     'Accept':"application.json",
    //     'Content-type':"application.json",
		
		
    // },
   body:JSON.stringify({
	client_id:client_id,
	client_secret:client_secret,
	grant_type:grant_type,
	username:data.email,
	password:data.password
   })
  }).then((rep)=>{
	  console.log(rep);
  });
}

	function handle(e:any){
        const newdata:any= {...data}
        newdata[e.target.id]=e.target.value
        setData(newdata);
        console.log(newdata);
    }

  return (
    <div>
        <Header/>
        <Navigation/>
        <div className="breadcrumbs">
		<div className="container">
			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
				<li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
				<li className="active">Login Page</li>
			</ol>
		</div>
	</div>
      <div className="login">
		<div className="container">
			
			<h2>Login Form</h2>
		
			<div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
				<form onSubmit={(e:React.FormEvent<EventTarget>)=>{submit(e)}}>
					<input type="email" placeholder="Email Address" onChange={(e:React.FormEvent<EventTarget>)=>handle(e)} id="email" value={data.email}   required   />
					<input type="password" placeholder="Password" onChange={(e:React.FormEvent<EventTarget>)=>handle(e)} id="password" value={data.password} required    />
					<div className="forgot">
						<a href="#">Forgot Password?</a>
					</div>
					<input type="submit" value="Login" />
				</form>
			</div>
			<h4>For New People</h4>
			<p><a  onClick={()=>{navigate("/createAccount")}}>Register Here</a> (Or) go back to <a onClick={()=>{navigate("/")}}>Home<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></p>
		</div>
	</div>
    <Footer/>
    </div>
  )
}

export default Login;
