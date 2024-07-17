import React, { useState, useEffect, useContext } from "react";
import "../../styles/demo.css";
import CardContact from "../component/cardContact.jsx";
import { Context } from "../store/appContext.js";

const Contact = () => {

	const { actions, store } = useContext(Context)
	
	
	
	useEffect(() => {
		actions.obtenerContactosAgenda()
	}, [])

	console.log(store.contacts)
	return (

		<div className="container-fluid">
			{store.contacts.map((items) => (
				<CardContact
					key={items.id}
					name={items.name}
					email={items.email}
					phone={items.phone}
					id={items.id}
					address={items.address}
				/>

			))}
				
		</div>
	);
};
export default Contact;