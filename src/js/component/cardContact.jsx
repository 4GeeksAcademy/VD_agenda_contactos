import React from "react";

const CardContact = ({ name, phone, email, id, address }) => (
	<div className="card mb-3" style={{ maxWidth: "540px" }}>
		<div className="row g-0">
			<div className="col-md-4">
				<img src="https://picsum.photos/id/237/180/250" className="img-fluid rounded-circle" />
			</div>
			<div className=" col-md-8">
				<div className="card-body">

					<h5 className="card-title">{name}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{email}</h6>
					<p className="card-text">{address}</p>
					<p className="card-text">{phone}</p>

				</div>
			</div>
		</div>
	</div>
);


export default CardContact;