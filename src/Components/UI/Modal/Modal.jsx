import { formatDate } from '../../../lib/helper';

const Modal = (props) => {
   const { closeModal, spaceData } = props;
   return (
      <div className="modal fade d-block opacity-100 backdrop" >
         <div className="modal-dialog modal-dialog-centered customModalWidth">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title fs-4">Rocket Details of <span className='text-uppercase'>{spaceData?.rocket?.rocket_name}</span></h5>
                  <button onClick={closeModal} type="button" className="btn-close"></button>
               </div>
               <div className="modal-body">
                  <div className="row px-lg-4">
                     <div className="col-lg-4 col-12 shadow-sm d-flex justify-content-center align-items-center">
                        <img src={spaceData?.links?.mission_patch_small} className='img-fluid' alt={spaceData?.rocket?.rocket_name} />
                     </div>
                     <div className="col-lg-8 col-12">
                        <div className='px-lg-4 mt-4 mt-lg-0'>
                           <h3>Mission Name: {spaceData?.mission_name}</h3>
                           <h4>Rocket Name: {spaceData?.rocket?.rocket_name}</h4>
                           <p>Rocket Type: {spaceData?.rocket?.rocket_type}</p>
                           <p>Launch Success: {spaceData?.launch_success ? 'Positive' : 'Negative'}</p>
                           <p>Lunch Date: {formatDate(spaceData?.launch_date_utc)}</p>
                           <p>Lunch Year: {spaceData?.launch_year}</p>
                           <p>Reused: {spaceData?.fairings ? 'Positive' : 'Negative'}</p>
                           <p>Launch site: {spaceData?.launch_site?.site_name}</p>
                           {spaceData?.launch_failure_details?.reason ?
                              <p>Failure Reason: {spaceData?.launch_failure_details?.reason}</p> : null}

                           <a className='d-block mb-1' href={`https://www.youtube.com/watch?v=${spaceData?.links?.youtube_id}`}>Youtube Link</a>
                           <a className='d-block mb-1' href={spaceData?.links.wikipedia}>WikiPedia Link</a>
                           <a className='d-block mb-1' href={spaceData?.links.article_link}>Article Link</a>
                        </div>
                     </div>
                  </div>
                  {spaceData.details ? <p className='mt-4'>Details: {spaceData.details}</p> : null}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Modal;
