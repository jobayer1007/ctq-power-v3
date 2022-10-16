import React from 'react';

const Introduction = () => {
  return (
    <div id='intro' className='basic-1 bg-gray'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <h1>
              We help power industry with tailored solutions to meet the
              challenges and economic pressures
            </h1>
          </div>
          <div className='col-lg-6'>
            <div className='text-container'>
              <p>
                <strong>Planning</strong> for power systems is essentially a
                projection of how the system should grow over a specific period
                of time, given certain assumptions and judgment about the future
                loads and the size of investment in generating capacity
                additions and transmission facilities expansion and
                reinforcements.
              </p>
              <p>
                <strong>Designing</strong> solves challenges which are related
                to design and development to ensure that they are economical,
                safe and reliable. This also includes electrical layouts,
                lighting, earthing and voltage drop.
              </p>
              <p>
                <strong>Reliability Evaluation</strong> is one of the most
                important criteria which must be taken into consideration during
                all phases of power system planning, design and operation.
                Reliability criterion is required to establish target
                reliability levels and to consistently analyze and compare the
                future reliability levels with feasible alternative expansion
                plans. This need has resulted in the development of
                comprehensive reliability evaluation and modeling techniques.
              </p>
            </div>{' '}
            {/* end of text-container */}
          </div>{' '}
          {/* end of col */}
        </div>{' '}
        {/* end of row */}
      </div>{' '}
      {/* end of container */}
    </div>
  );
};

export default Introduction;
