import React from "react";
import { Link } from "react-router-dom";

const doctors = [
  { name: "Dr. Rama Prasad", img: "/images/doctor1.jpg", spec: "Ayurvedic Specialist", bio: "20+ years experience in holistic health and Panchakarma." },
  { name: "Dr. Meera Devi", img: "/images/doctor2.jpg", spec: "Siddha Practitioner", bio: "Focuses on natural healing and herbal therapies." },
  { name: "Dr. Karthik Sharma", img: "/images/doctor3.jpg", spec: "Naturopath", bio: "Expert in diet, detox, and natural lifestyle practices." },
];

function DoctorsPage() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Meet Our Doctors</h1>
      <div className="row">
        {doctors.map((doc, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <img src={doc.img} className="card-img-top" alt={doc.name} />
              <div className="card-body">
                <h5 className="card-title">{doc.name}</h5>
                <p className="card-text">{doc.spec}</p>
                <p>{doc.bio}</p>
                <Link to="/appointment" className="btn btn-primary">Book Appointment</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsPage;
