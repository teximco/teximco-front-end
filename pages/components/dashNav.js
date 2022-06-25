import Link from 'next/link';
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
  <div className="navbar-center btn btn-ghost">
    <Link href="/" className="btn btn-ghost normal-case text-xl">TeximcoBD</Link>
  </div>
  <div className="navbar-end">
  <div className="avatar avater2 online placeholder">
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