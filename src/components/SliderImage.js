import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
export default class SliderImage extends Component {
    render() {
        return (
            <div  className="conatair">
             <div  id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div id='containerimage' class="carousel-inner">
              <div  class="carousel-item active">
                <img src="images/home-1.png" class="d-block w-100" alt="..." />
                <div className="descImage">
                <h1>Boku no Hero Academia 5th Season</h1>
                <span>الحلقة 24</span>
                </div>
                <div  className="overlay"></div>
              </div>
              <div class="carousel-item">
                <img src="images/home-2.png" class="d-block w-100" alt="..." />
                <div className="descImage">
                <h1>One Piece</h1>
                <span>الحلقة 992</span>
                </div>
                <div  className="overlay"></div>
              
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
            </div>
           
        )
    }
}
