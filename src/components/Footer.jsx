import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter  className='text-center text-lg-start text-muted d-none d-lg-block'>
    
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-2'>
              <h6 className=' fw-bold mb-4 fw-bold fs-2 ' style={{color:'     rgb(15, 255, 80	)'}}>
               
               Fancovo
              </h6>
            
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-2'>
              <h6 className=' fw-bold mb-4'>How Fanco Works</h6>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-2'>
              <h6 className=' fw-bold mb-4'>
                Terms of Use
              </h6>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-2'>
              <h6 className=' fw-bold mb-2'>Contact Us</h6>
        
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        ©️ 2021    Foncovo
       
      </div>
    </MDBFooter>
  );
}