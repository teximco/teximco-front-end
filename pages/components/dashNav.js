import React from 'react';

const DashNav = () => {
    return (
        <div>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    

  <div className="avatar online placeholder lg:hidden">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
    <span className="text-xl">JO</span>
  </div>
</div>
    
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-xl">TeximcoBD</a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle md:hidden sm:hidden lg:block">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>

    <div className="avatar online placeholder md:hidden sm:hidden lg:block">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
    <span className="text-xl">JO</span>
  </div>
</div>
    <label htmlFor="my-drawer-2" className="drawer-button lg:hidden"> <img width={20}  src="https://i.ibb.co/SxWy7DG/menu.png" alt="" /></label>
  </div>
</div>
        </div>
    );
};

export default DashNav;