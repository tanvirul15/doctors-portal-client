import React from "react";
import featuredCustomerImg from "../../../images/patient-treatment.png";
const FeaturesService = () => {
  return (
    <div id='about' className='container'>
      <div className='row'>
        <div className='col-md-5'>
          <img src={featuredCustomerImg} alt='' className='img-fluid' />
        </div>
        <div className='col-md-6'>
          <div className='d-flex flex-column justify-content-center h-100 align-items-start'>
            <h2 className='mb-5'>
              Exceptional Dental <br /> Care, on Your Terms
            </h2>
            <p className='text-secondary mb-5'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, quas. In itaque eligendi consectetur excepturi autem error molestiae ab odio fugit praesentium ipsum commodi ex quod quaerat culpa, eveniet atque fuga. Ullam obcaecati officiis cumque dignissimos, aut, cum accusamus quisquam a ab et tempora accusantium consequuntur vitae omnis minima eveniet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores non pariatur, minima quod repellendus est vitae aliquid
              dicta repudiandae, fugiat quasi cumque quidem esse nemo nisi ullam minus amet? Dolore eius corrupti amet ex temporibus debitis, quo reprehenderit vero adipisci.
            </p>
            <button className='btn-brand'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesService;
