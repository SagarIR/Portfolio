import React from "react";
import "swiper/css";
import "./Testimonials.css";
import "swiper/css/pagination";
import Data from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">My Clients Say</h2>
      <span className="section__subtitle">Testimonial</span>
      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{ clickable: true }}
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2, spaceBetween: 48 },
        }}
        className="testimonial__container"
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img className="testimonial__img" src={image} alt="" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;