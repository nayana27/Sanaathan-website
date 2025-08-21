import React from "react";

const activities = [
  { title: "Gosala", img: "/images/gosala.jpg", desc: "Our sacred Gosala shelters and protects native cows with utmost care and love." },
  { title: "Free Medicine", img: "/images/medicine.jpg", desc: "Free medical services and wellness consultations for the underprivileged." },
  { title: "Community Food Service", img: "/images/food.jpg", desc: "Nutritious community meals served to all, ensuring no one sleeps hungry." },
  { title: "Health Camps", img: "/images/health.jpg", desc: "Regular health camps and awareness drives for rural communities." },
  { title: "Cow-Based Medicine", img: "/images/cow_medicine.jpg", desc: "Research & manufacturing of traditional cow-based Ayurvedic remedies." },
  { title: "Palm Leaf Manuscripts", img: "/images/manuscript.jpg", desc: "Digitisation of rare palm leaf manuscripts preserving ancient knowledge." },
  { title: "Organic Agriculture", img: "/images/agriculture.jpg", desc: "Training farmers in hereditary organic agriculture practices." },
];

function ActivitiesPage() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Our Activities</h1>
      <div className="row">
        {activities.map((act, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <img src={act.img} className="card-img-top" alt={act.title} />
              <div className="card-body">
                <h5 className="card-title">{act.title}</h5>
                <p className="card-text">{act.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivitiesPage;
