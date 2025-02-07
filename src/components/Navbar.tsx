'use client'
import React, { useState } from "react";
import { Clock, Phone, Mail, Facebook, Instagram, Youtube, Linkedin, PhoneCallIcon, AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DetailsInfo, SocialIcon } from "../types";
import { NavItems } from "../app/constant";



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    // Contact Details
    const DetailsInfo: DetailsInfo[] = [
        {
            Icon: <Clock size={16} color="white" />,
            name: "Opening Hour",
            details: "Everyday, 8:00 - 6:00",
        },
        {
            Icon: <Phone size={16} color="white" />,
            name: "Call Us",
            details: "01-1534567 | 9808116740",
        },
        {
            Icon: <Mail size={16} color="white" />,
            name: "Email Us",
            details: "info@sonic.com",
        },
    ];

    // SocialMedia icon
    const SocialMediaIcon: SocialIcon[] = [
        {
            icon: <Facebook size={16} color="white" />,
            href: "/'"
        },
        {
            icon: <Instagram size={16} color="white" />,
            href: "/"
        },
        {
            icon: <Youtube size={16} color="white" />,
            href: "/"
        },
        {
            icon: <Linkedin size={16} color="white" />,
            href: "/"
        },
        {
            icon: <PhoneCallIcon size={16} color="white" />,
            href: "/"
        },
    ]


    return (
        <div className="relative shadow-custom-lg z-50">
            <nav className="max-w-7xl mx-auto px-5 md:px-8 lg:px-8">
                {/* Top Section - Logo & Contact Info */}
                <div className="flex justify-between  items-center py-4 gap-10">
                    {/* Logo */}
                    <div>
                        <Image
                            src="/img/a95a4eeaa13507e45be83dac9ee1b36b.png"
                            height={39}
                            width={91}
                            alt="logo"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="flex space-x-8">
                        {DetailsInfo.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                                <div className="hidden bg-blue-500 p-3  rounded-full md:flex items-center justify-center">
                                    {item.Icon}
                                </div>
                                <div>
                                    <h5 className="font-semibold text-[12px] md:text-[13px] lg:text-sm">{item.name}</h5>
                                    <p className="text-gray-600 text-[12px] md:text-[13px] lg:text-sm">{item.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="hidden md:flex">
                        {/* Empty div */}
                    </div>
                </div>

                <div className="py-[20px] md:py-[33px] lg:py-[33px] flex justify-between items-center max-w-[1107px] mx-auto">
                    {/* Nav Links */}
                    <div className="hidden md:flex space-x-[66px] text-lg">
                        {NavItems.map((item, idx) => (
                            <Link key={idx} href={item.href}>
                                <div className="relative text-[16px] before:absolute before:w-[20px] before:h-[1.59px] before:bg-[#0B0B0B] before:bottom-[-8px] before:left-0 before:transition-all before:duration-300 hover:before:w-full">
                                    {item.name}
                                </div>

                            </Link>
                        ))}
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden">
                        <button  onClick={() => setIsOpen(!isOpen)} >
                            {!isOpen ? (
                                <AlignJustify size={25} color="black" />
                            ) : (

                                <X size={25} color="black" />
                            )}
                        </button>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        {
                            SocialMediaIcon.map((item, idx) => (
                                <Link key={idx} href={item.href}>
                                    <div className="bg-black text-white p-[6px] md:p-2 lg:p-2 rounded-full">{item.icon}</div>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="absolute bg-white left-0 w-screen px-8 py-5">
              {NavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 my-2 text-black hover:text-gray-600 text-[16px]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}

            </nav>
        </div>            

    );
};

export default Navbar;
