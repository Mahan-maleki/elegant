import React from 'react'
import { ArrowLeft, TicketPercent } from 'lucide-react'
import { NavLink } from 'react-router'
import css from "./Header.module.css"

function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={"col-12 " + css.discount}>
            <div className="row m-0 d-flex justify-content-center">
              <div className="col-1 d-flex justify-content-end">
                <TicketPercent color='#000' size={24} className='d-none d-lg-block' />
              </div>
              <div className="col-12 col-lg-3 d-flex d-lg-block justify-content-center">
                <span>30% تخفیف بر روی تمامی محصولات | زمان محدود !</span>
              </div>
              <div className="col-1 d-none d-lg-block">
                <NavLink to="/shop" className={"text-decoration-none " + css.discountLink}>برو به فروشگاه <ArrowLeft color='#377DFF' size={15} /></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header