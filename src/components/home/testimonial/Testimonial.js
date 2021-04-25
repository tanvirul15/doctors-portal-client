import React from "react";
import wilson from "../../../images/wilson.png";
import ema from "../../../images/ema.png";
import aliza from "../../../images/aliza.png";
import quoteLogo from "../../../images/quote.png";
import "./testimonial.css";
import TestimonialCard from "./TestimonialCard";

const testimonialData = [
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Wilson Harry",
    from: "California",
    img: wilson,
  },
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Ema Gomez",
    from: "California",
    img: ema,
  },
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Aliza Farari",
    from: "California",
    img: aliza,
  },
];
const Testimonial = () => {
  return (
    <div id='reviews' className='container my-5'>
      <div className='d-flex justify-content-between mb-4'>
        <div className='testimonial__titlebox'>
          <h5 className='text-brand'>TESTIMONIAL</h5>
          <h2>
            What's Out Patients <br /> Says
          </h2>
        </div>
        <img src={quoteLogo} className='testimonial__quote-img' alt='quote' />
      </div>
      <div className='row'>
        {testimonialData.map((item) => (
          <TestimonialCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
