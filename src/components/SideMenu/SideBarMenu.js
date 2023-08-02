import React from 'react';

const SideBarMenu = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='bg-dark col-auto col-md-3 min-vh-100'>
                <a className='text-decoration-none text-white d-flex align-itemcenter mt-3'>
                    <i className='fs-4 bi bi-mailbox'></i>
                    <span className='ms-1 fs-4'>Mail Box</span>
                </a>
            </div>
        </div>
      
    </div>
  )
}

export default SideBarMenu;
