import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CardContact from "../component/cardContact.jsx";

import { Context } from "../store/appContext.js";

const FormAddContact = () => {
	
const { actions} = useContext(Context)

const[fullName,setFullName]=useState("");
const[email,setEmail]=useState("");
const[phone,setPhone]=useState("");
const[address,setAddress]=useState("");

const captureFullName = (e) => {
	setFullName(e.target.value);
};	

const captureEmail = (e) => {
	setEmail(e.target.value);
};	

const capturePhone = (e) => {
	setPhone(e.target.value);
};	

const captureAddress = (e) => {
	setAddress(e.target.value);
};	
const submit = (e) => {
	e.preventDefault();	
	
	if((fullName !== "" && email !== "" && phone !== "" && address !== "")){
			actions.crearContactoAgenda(fullName,email,phone,address)
			setFullName("");
			setEmail ("");
			setPhone ("");
			setAddress("");
		}else{
			alert("Debe completar todos los campos...")
		}		
	};
	
	return (

		<form onSubmit={submit}>
			<div className="mb-3">
				<label htmlFor="fullName" className="form-label">FullName</label>
				<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="fullName"
				value={fullName} onChange={captureFullName}/>
				<div id="fullName" className="form-text">We'll never share your email with anyone else.</div>
			</div>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">Email</label>
				<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
				value={email} onChange={captureEmail}/>
				<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
			</div>

			<div className="mb-3">
				<label htmlFor="phone" className="form-label">Phone</label>
				<input type="number" className="form-control" id="number" 
				value={phone} onChange={capturePhone}/>
			</div>

			<div className="mb-3">
				<label htmlFor="address" className="form-label">Address</label>
				<input type="text" className="form-control" id="address" 
				value={address} onChange={captureAddress}/>
			</div>
			
			<button type="submit" className="btn btn-primary">Add Contact</button>
		</form>
	);
};
export default FormAddContact;