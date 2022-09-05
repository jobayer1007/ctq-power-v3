import React from 'react';

const Testimonials = () => {
  return (
    <div className='slider-1'>
      <img
        className='quotes-decoration'
        src='images/quotes.svg'
        alt='alternative'
      />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            {/* Card Slider */}
            <div className='slider-container'>
              <div className='swiper-container card-slider'>
                <div className='swiper-wrapper'>
                  {/* Slide */}
                  <div className='swiper-slide'>
                    <img
                      className='testimonial-image'
                      src='images/testimonial-1.jpg'
                      alt='alternative'
                    />
                    <p className='testimonial-text'>
                      “Expense bed any sister depend changer off piqued one.
                      Contented continued any happiness instantly objection yet
                      her allowance. Use correct day new brought tedious. By
                      come this been in. Kept easy or sons my it how about some
                      words here done”
                    </p>
                    <div className='testimonial-author'>Marlene Visconte</div>
                    <div className='testimonial-position'>
                      General Manager - Scouter
                    </div>
                  </div>
                  {/* end of swiper-slide */}
                  {/* end of slide */}
                  {/* Slide */}
                  {/* <div className='swiper-slide'>
                    <img
                      className='testimonial-image'
                      src='images/testimonial-2.jpg'
                      alt='alternative'
                    />
                    <p className='testimonial-text'>
                      “Expense bed any sister depend changer off piqued one.
                      Contented continued any happiness instantly objection yet
                      her allowance. Use correct day new brought tedious. By
                      come this been in. Kept easy or sons my it how about some
                      words here done”
                    </p>
                    <div className='testimonial-author'>John Spiker</div>
                    <div className='testimonial-position'>
                      Team Leader - Vanquish
                    </div>
                  </div> */}
                  {/* end of swiper-slide */}
                  {/* end of slide */}
                  {/* Slide */}
                  {/* <div className='swiper-slide'>
                    <img
                      className='testimonial-image'
                      src='images/testimonial-3.jpg'
                      alt='alternative'
                    />
                    <p className='testimonial-text'>
                      “Expense bed any sister depend changer off piqued one.
                      Contented continued any happiness instantly objection yet
                      her allowance. Use correct day new brought tedious. By
                      come this been in. Kept easy or sons my it how about some
                      words here done”
                    </p>
                    <div className='testimonial-author'>Stella Virtuoso</div>
                    <div className='testimonial-position'>
                      Design Chief - Bikegirl
                    </div>
                  </div> */}
                  {/* end of swiper-slide */}
                  {/* end of slide */}
                </div>{' '}
                {/* end of swiper-wrapper */}
                {/* Add Arrows */}
                <div className='swiper-button-next' />
                <div className='swiper-button-prev' />
                {/* end of add arrows */}
              </div>{' '}
              {/* end of swiper-container */}
            </div>{' '}
            {/* end of slider-container */}
            {/* end of card slider */}
          </div>{' '}
          {/* end of col */}
        </div>{' '}
        {/* end of row */}
      </div>{' '}
      {/* end of container */}
    </div>
  );
};

export default Testimonials;
