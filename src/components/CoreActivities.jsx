import React from "react";

const activities = [
  { title: "Gosala", img: "/images/gosala.jpg", desc: "Cow care and protection." },
  { title: "Free Medicine", img: "/images/medicine.jpg", desc: "Providing free medical services." },
  { title: "Community Food Service", img: "/images/food.jpg", desc: "Serving healthy community meals." },
  { title: "Health Camps", img: "/images/health.jpg", desc: "Free health camps and checkups." },
  { title: "Cow-Based Medicine", img: "/images/cow_medicine.jpg", desc: "Manufacturing cow-based medicine." },
  { title: "Palm Leaf Manuscripts", img: "/images/manuscripts.heic", desc: "Digitising ancient palm leaf texts." },
  { title: "Organic Agriculture Training", img: "/images/agriculture.jpg", desc: "Hereditary organic farming classes." },
];

function CoreActivities() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Our Core Activities</h2>
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
    </section>
  );
}

export default CoreActivities;
