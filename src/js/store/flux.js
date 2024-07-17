import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			crearAgenda: () => {
				fetch('https://playground.4geeks.com/contact/agendas/agenda2', {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					}
				})
					
					.then((response) => response.json())
					.then((data) => console.log(data))
					.catch((error) => console.log(error))
			},
			
			 obtenerContactosAgenda:() => {
				fetch('https://playground.4geeks.com/contact/agendas/agenda2', {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
			
				})
					.then((response) => {
						console.log(response.status)
						if (response.status == 404) {
							getActions().crearAgenda()
						}
						return response.json()
					})
			
					.then((data) => setStore({contacts:data.contacts}))
					.catch((error) => console.log(error))
				},
				
				// funcion para crear contacto agenda
				crearContactoAgenda: (fullName,email,phone,address) => {
					
					fetch('https://playground.4geeks.com/contact/agendas/agenda2/contacts', {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"name": fullName,
							"phone": phone,
							"email": email,
							"address": address
							
						})
						
					})
					.then((response) => {
						
						if (response.status === 201) {
							getActions().obtenerContactosAgenda();	
						} 
						return response.json();
					})
					.catch((error) => console.log(error));
				},
				//funcion para editar contacto,recibo por parametro el id del contacto a editar y recibo el objeto
				// items para pasar los nuevos valores del contacto
				editarContacto: (id, items) => {
					fetch('https://playground.4geeks.com/contact/agendas/agenda2/contacts/' + id, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"name": items.name,
							"phone": items.phone,
							"email": items.email,
							"address": items.address
						})
					})
						.then((response) => {
							if (response.status === 200) {
								getActions().obtenerContactosAgenda();
							}
							return response.json();
						})
						.then((data) => {
							console.log(data);
						})
						.catch((error) => console.log(error));
				},
				//funcion eliminar contacto agenda
				eliminarContactoAgenda: (id) => {
					
					fetch('https://playground.4geeks.com/contact/agendas/agenda2/contacts/' + id, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						},
					})
						.then((response) => {
							
							if (response.status == 200) {							
								console.log(response)
								getActions().obtenerContactosAgenda()
							}
							return response.json();	
						})			
						.then((data) => {
							console.log(data)
							
						})
						.catch((error) => console.log(error))
						
					},
				
				
				// funciones que trae el actions por defecto
				exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
