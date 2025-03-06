"use client";
import { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useSearchParams } from "next/navigation";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import Image from "next/image";
import SwiperSlider from "@/components/SwiperSlider";
import Footer from "@/components/Footer";
import LinkPost from "@/components/linkpost"; 


export default function Home() {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

  useEffect(() => {
    if (scrollTo) {
      scroller.scrollTo(scrollTo, { smooth: true, duration: 300 });
    }
  }, [scrollTo]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* home section */}
      <section id="home" className="relative h-screen flex justify-center items-center bg-white">
        {/* enlarged background image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }} 
          animate={{ opacity: 1, scale: 1 }} 
          whileHover={{ scale: 1.05, transition: { duration: 0.5 } }} // Hover effect
          transition={{ duration: 1.2 }}
          className="absolute w-[90%] h-[85vh] overflow-hidden rounded-xl"
        >
          <Image src="/rmit.jpg" fill className="object-cover opacity-85 rounded-xl" alt="RMIT"/>
            {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

        </motion.div>

        {/* welcome text & about us button */}
        <div className="relative z-10 text-white flex flex-col items-start px-10">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
            className="text-5xl font-thin mb-6"
          >
            Welcome to RMIT Shinsei Kendo Club
          </motion.h1> 

          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
          >
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:bg-orange-600 hover:text-gray-200"
          >
          About Us
          </ScrollLink>
          </motion.div>

        </div>
      </section>

      {/* about section */}
      <section id="about" className="flex items-center justify-center min-h-[75vh] bg-white">
        <SwiperSlider/>
      </section>


       {/* Facebook Posts Section */}
       <section id="facebook-posts" className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <LinkPost />
      </section>


      {/* Contact & FAQs Section */}
      {/*<section id="contact" className="min-h-screen flex flex-col md:flex-row justify-center items-start px-8 md:px-16 py-10 bg-white space-y-1 md:space-y-0 md:space-x-10">*/}
      {/* FAQs on mobile, on the left in desktop */}
      {/* Contact Form under mobile, on the right in desktop */}
 
      {/* Footer */}
      <section><Footer/></section>
    </div>
  );
}
