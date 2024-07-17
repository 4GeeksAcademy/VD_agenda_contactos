import React,{useContext, useState} from "react";
import { Context } from "../store/appContext";
import EditContact from "../component/editContact.jsx";


const CardContact = ({ name, phone, email, id, address }) => {

const [showModal,setShowModal]= useState(false);	
const { actions} = useContext(Context)

const modalEdit= () =>{
	 setShowModal(true);
}
const closeModal= () =>{
	setShowModal(false);
}
const contactDelete = ()=>{
		actions.eliminarContactoAgenda(id);
	};
	
	return(
	<div className="card mb-3" style={{ maxWidth: "540px" }}>
		<div className="row g-0">
			<div className="col-md-4">
				<img src="https://picsum.photos/id/237/180/250" className="img-fluid rounded-circle" />
			</div>
			<div className=" col-md-8">
				<div className="card-body">
				<div className="d-flex justify-content-between align-items-center">
					<h5 className="card-title">{name}</h5>
					<div className="ms-auto">
                        <button className="btn btn-link p-0 me-2" onClick={modalEdit}>
                            <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button className="btn btn-link p-0" onClick={contactDelete}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
						</div>	
					</div>
					<h6 className="card-subtitle mb-2 text-muted">{email}</h6>
					<p className="card-text">{address}</p>
					<p className="card-text">{phone}</p>

				</div>
			</div>
		</div>
		{showModal && (
			<EditContact 
						 closeModalWindow={closeModal} 
						 name={name}
						 email={email}
						 phone={phone}
						 address={address}
						 id={id}/>
		)}		
	</div>
	
);
};

export default CardContact;