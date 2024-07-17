import React,{useContext,useState} from "react";
import { Context } from "../store/appContext";

const EditContact = ({closeModalWindow,name,email,phone,address,id}) => {
    const { actions } = useContext(Context);
    const [fullName, setName] = useState(name);
    const [emailC, setEmail] = useState(email);
    const [phoneC, setPhone] = useState(phone);
    const [addressC, setAddress] = useState(address);

    
    
    const submit = (e) => {
        e.preventDefault();
        actions.editarContacto(id,{name:fullName, email:emailC, phone:phoneC, address:addressC});
        closeModalWindow();
    };

    return (
        <div className="modal show" style={{ display: "block" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Contact</h5>
                        <button type="button" className="close" onClick={closeModalWindow}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" value={fullName} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" value={emailC} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="phone" value={phoneC} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" value={addressC} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditContact;