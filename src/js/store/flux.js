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
