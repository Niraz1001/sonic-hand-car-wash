'use client'
import React, { useState } from "react";
import { Clock, Phone, Mail, Facebook, Instagram, Youtube, Linkedin, PhoneCallIcon, AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DetailsInfo, SocialIcon } from "../types";
import { NavItems } from "../app/constant";
import { usePathname } from "next/navigation";
import { BsTiktok } from "react-icons/bs";



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Contact Details
    const DetailsInfo: DetailsInfo[] = [
        {
            Icon: <Clock size={16} className="text-[#4B5563] lg:text-white" />,
            name: "Opening Hour:",
            details: "Everyday,  9am-5pm",
        },
        {
            Icon: <Phone size={16} className="text-[#4B5563] lg:text-white" />,
            name: "Call Us:",
            details: "0451536520",
        },
        {
            Icon: <Mail size={16} className="text-[#4B5563] lg:text-white" />,
            name: "Email Us:",
            details: "admin@sonichandcarwash.com",
        },
    ];

    // SocialMedia icon
    const SocialMediaIcon: SocialIcon[] = [
        {
            icon: <Facebook size={16} color="white" />,
            href: "https://www.facebook.com/profile.php?id=61571553969247"
        },
        {
            icon: <Instagram size={16} color="white" />,
            href: "https://www.instagram.com/sonichandcarwash"
        },
        {
            icon: <BsTiktok size={16} color="white" />,
            href: "https://www.tiktok.com/@sonichandcarwash"
        },
        {
            icon: <PhoneCallIcon size={16} color="white" />,
            href: "https://wa.me/61451536520"
        },
    ]


    return (
        <div className="relative shadow-custom z-50">
            <nav className="max-w-7xl mx-auto px-5 md:px-8 lg:px-8">
                {/* Top Section - Logo & Contact Info */}
                <div className="flex justify-between items-center  py-4 gap-2 lg:gap-10">
                    {/* Logo */}
                    <div>
                        <Image
                            src="/img/a95a4eeaa13507e45be83dac9ee1b36b.png"
                            height={39}
                            width={91}
                            alt="logo"
                            className="w-[64px] h-[27px] md:w-full md:h-full"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="hidden md:flex space-x-1 lg:space-x-8 ">
                        {DetailsInfo.map((item, idx) => (
                            <div key={idx} className="flex items-start lg:items-center space-x-3 ">
                                <div className="hidden bg-blue-500 p-3  rounded-full md:flex items-center justify-center">
                                    {item.Icon}
                                </div>
                                <div>
                                    <h5 className="font-semibold text-[11px] md:text-[13px] lg:text-sm">{item.name}</h5>
                                    <p className="text-gray-600 text-[11px] md:text-[13px] lg:text-sm">{item.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="hidden md:flex">
                        {/* Empty div */}
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} >
                            {!isOpen ? (
                                <AlignJustify size={25} color="black" />
                            ) : (

                                <X size={25} color="white" className="absolute z-50 right-5 top-4" />
                            )}
                        </button>
                    </div>

                </div>

                <div className="pt-[5px] pb-[40px] md:py-[33px] lg:py-[33px] flex justify-between items-center max-w-[1107px] mx-auto">
                    {/* Nav Links */}
                    <div className="hidden md:flex md:space-x-[30px] text-lg lg:space-x-[66px]">
                        {NavItems.map((item, idx) => (
                            <Link key={idx} href={item.href}>
                                <div className={`relative text-[16px] before:absolute before:w-[20px] before:h-[1.59px] before:bg-[#0B0B0B] before:bottom-[-8px] before:left-0 before:transition-all before:duration-300 ${pathname === item.href ? `before:w-full` :  `before:w-[20px] hover:before:w-full`}`}>
                                    {item.name}
                                </div>

                            </Link>
                        ))}
                    </div>

                    {/* Social Media Icons */}
                    <div className="hidden md:flex space-x-4">
                        {
                            SocialMediaIcon.map((item, idx) => (
                                <Link key={idx} href={item.href}>
                                    <div className="bg-black text-white p-[6px] md:p-2 lg:p-2 rounded-full">{item.icon}</div>
                                </Link>
                            ))
                        }
                    </div>

                    {/* mobile Contact Info */}
                    <div className="md:hidden lg:hidden w-full">
                        {DetailsInfo.map((item, idx) => (
                            <div key={idx} className="flex justify-between mb-1">

                                <div className="flex gap-2 items-center">
                                    <div>{item.Icon}</div>
                                    <h5 className="text-[#4B5563] text-[14px]">{item.name}</h5>
                                </div>

                                <div>
                                    <p className="text-[#1F2937] text-[14px]">{item.details}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

                {/* Mobile Navigation Menu */}
                <div className={`fixed inset-0 bg-black bg-opacity-50 z-10 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} transition-opacity duration-300`} onClick={() => setIsOpen(false)}>
                    <div
                        className={`absolute right-0 top-0 w-4/5 max-w-[300px] h-screen bg-[#0B0B0B] py-16 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        {NavItems.map((item) => (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    className="block px-3 my-2 text-white hover:text-gray-600 text-[16px] mt-5 pl-10"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                                <hr className="border-[#1A222C]" />
                            </div>
                        ))}
                    </div>
                </div>

            </nav>
        </div>

    );
};

export default Navbar;
