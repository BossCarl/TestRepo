import React from 'react';
import '../css/slideshow_dashboard.css';

import "bootstrap/dist/css/bootstrap.min.css";

function CardCarousel () {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="cards-wrapper">
        <div className="card">
          <img src="/pics/return1.png" className="card-img-top" alt="..." />
          <div className="c_dashboard_cardbody card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src="/pics/return1.png" className="card-img-top" alt="..." />
          <div className="c_dashboard_cardbody card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card d-none d-md-block">
          <img src="/pics/return1.png" className="card-img-top" alt="..." />
          <div className="c_dashboard_cardbody card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        
        
      </div>
    </div>
</div>  
</div>
  );
}

export default CardCarousel;
