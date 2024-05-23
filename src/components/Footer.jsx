import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { socialMedia, footerLinks } from "../constants";
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flow-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10 ">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-5 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] flex flex-row w-full justify-between flex-wrap md:mt-4 mt-10">
          {footerLinks.map((footerLink)=>(
            // console.log(link.key)
            <div key={footerLink.key} className="flex flex-col  ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-poppins font-medium text-[18px]  leading-[27px] text-white">
                  {footerLink.title}
                </h4>
                <ul className="mt-4 list-none">
                  {footerLink.links.map((link,index)=>(
                    <li key={link.key} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer  ${index!==footerLink.links.length-1?"mb-4":"mb-0"}`} >
{link.name}
                    </li>
                  ))}
                </ul>
            </div>
          ))}
      </div>
    </div>

    <div className="flex flex-1 w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
<p className="font-poppins font-normal text-center  leading-[27px] text-white">
Copyright 2021 HooBank. All Rights Reserved.
</p>
<div className="flex flex-row md:mt-0 mt-6">
{socialMedia.map((media ,index)=>(
  <div>
<img  key={media.id} src={media.icon} alt={media.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index!==socialMedia.length-1?"mr-6":"mr-0"}`} />
  </div>
))}
</div>
    </div>
  </section>
);

export default Footer;
