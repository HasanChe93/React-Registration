import React from 'react'
// import image1 from '../public/IMGs/1.jpg'
// import image2 from '../public/IMGs/j2_-_Copy.jpg'

function Header() {
  return (
   
    <div class="col-4 g-0">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="Imgs\1.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="Imgs\j2_-_Copy.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  )
}

export default Header