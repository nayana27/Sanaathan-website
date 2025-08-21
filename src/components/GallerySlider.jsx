import React from "react";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
];

function GallerySlider() {
  return (
    <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((img, idx) => (
          <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
            <img src={img} className="d-block w-100" alt={`Slide ${idx + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default GallerySlider;
