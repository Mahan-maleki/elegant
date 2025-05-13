import React, { useState } from 'react'
import { ArrowLeft, CircleUser, Menu, Search, ShoppingBag, TicketPercent, X } from 'lucide-react'
import { NavLink } from 'react-router'
import css from "./Header.module.css"

function Header() {

  const [menuStatus, setMenuStatus] = useState(false);

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
      <div className="container d-none d-lg-block">
        <div className={"row d-flex align-items-center " + css.header}>
          <div className="col-2 d-flex align-items-center">
            <NavLink to="/">
              <img src="/Logo.svg" alt="website logo" className={css.logo} />
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
      <div className="container d-block d-lg-none">
        <div className={"row " + css.mobileHeader}>
          {menuStatus == true && <div className={css.mobileMenu + ` d-${menuStatus == true ? "block" : "none"}`}><div className={css.offcanvas + " animate__animated animate__fadeInOut"}><div className="col-12"><div className="row"><div className="col-12 mb-2"><div className="row d-flex align-items-center justify-content-between"><div className="col-3"><img src="/Logo.svg" alt="website logo" width={70} /></div><div className="col-1"><X color='#6C7275' size={24} onClick={() => setMenuStatus(false)} /></div></div></div><div className="col-12 mt-4"><input type="text" className='form-control border-2' placeholder='جست و جو' /></div><div className="col-12 mt-4"><ul><li className={css.mobileMenuList}><NavLink to="/" className="text-decoration-none text-dark elegant-demibold" >خانه</NavLink></li><hr /><li className={css.mobileMenuList}><NavLink to="/shop" className="text-decoration-none text-dark elegant-demibold" >فروشگاه</NavLink></li><hr /><li className={css.mobileMenuList}><NavLink to="/contact" className="text-decoration-none text-dark elegant-demibold" >تماس باما</NavLink></li></ul></div><div className="col-12 d-flex justify-content-center"><button className='position-absolute bottom-0 mb-3 px-5 btn btn-dark btn-lg shadow-lg'><NavLink className="text-decoration-none text-white fs-6" to="/signin">ورود | ثبت نام</NavLink></button></div></div></div></div></div>}
          <div className="col-1">
            <Menu color='#000' size={24} onClick={() => setMenuStatus(true)} />
          </div>
          <div className="col-8">
            <img src="/Logo.svg" alt="website logo" className='me-2' width={70} />
          </div>
          <div className="col-3 d-flex align-items-center">
            <ShoppingBag color='#000' size={24} />
            <div className={css.mobileCartBadge + " me-2 rounded-circle d-flex justify-content-center align-items-center"}>
              <span className='text-white'>0</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header