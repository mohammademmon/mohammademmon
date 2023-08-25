import React from 'react'
import { FaRegCopyright } from 'react-icons/fa';
import { Roboto } from 'next/font/google';
import Sociallinks from '@/data/Sociallinks';
import Link from 'next/link';
import Socialicons from '../sociallinks/Socialicons';

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  return (
    <section id='footer_custom'>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="copyright">
              <p className={roboto.className}><span>mohamm_emmon</span> / <FaRegCopyright/> 2021-2023, All rights reserved.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <Socialicons/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer