import React from 'react'
import { ArrowLeft, CircleUser, Search, ShoppingBag, TicketPercent } from 'lucide-react'
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
                <span className={css.discountTitle}>30% تخفیف بر روی تمامی محصولات | زمان محدود !</span>
              </div>
              <div className="col-1 d-none d-lg-block">
                <NavLink to="/shop" className={"text-decoration-none " + css.discountLink}>برو به فروشگاه <ArrowLeft color='#377DFF' size={15} /></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={"row d-flex align-items-center " + css.header}>
          <div className="col-2 d-flex align-items-center">
            <NavLink to="/">
              <img src="/Logo.svg" alt="logo" className={css.logo} />
            </NavLink>
          </div>
          <div className="col-8 d-flex align-items-center justify-content-center">
            <ul className='mb-0 d-flex'>
              <li className={css.menuList}><NavLink to="/" className="text-decoration-none text-dark fs-5 px-4">خانه</NavLink></li>
              <li className={css.menuList}><NavLink to="/shop" className="text-decoration-none text-dark fs-5 px-4">فروشگاه</NavLink></li>
              <li className={css.menuList}><NavLink to="/contact" className="text-decoration-none text-dark fs-5 px-4">تماس باما</NavLink></li>
            </ul>
          </div>
          <div className="col-2 d-flex align-items-center">
            <div className="row">
              <div className="col-3">
                  <Search color='#000' size={24} strokeWidth={1.5} />
              </div>
              <div className="col-3">
                <CircleUser color='#000' size={24} strokeWidth={1.5} />
              </div>
              <div className="col-5 d-flex align-items-center">
                <ShoppingBag color='#000' size={24} strokeWidth={1.5} />
                <div className={css.cartBadge + " me-2 rounded-circle d-flex justify-content-center align-items-center"}>
                  <span className='text-white'>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header