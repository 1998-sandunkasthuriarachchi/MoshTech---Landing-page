import Caption from "../components/caption";
import Contact from "../components/form/contact";
import Subtitle from "../components/subtitle";
import Title from "../components/title";
import "../styles/contact.scss";

import { motion } from "framer-motion";
import ScrollToTop from "react-scroll-to-top";
import Header from "../components/header";
import { useEffect } from "react";

const images=[
  {
    id:'1',
    path:'./assets/team/1.jpg'
  },
  {
    id:'1',
    path:'./assets/team/2.jpg'
  },
  {
    id:'1',
    path:'./assets/team/3.jpg'
  },
  {
    id:'1',
    path:'./assets/team/4.jpg'
  }
]

const Contact_us = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
     <ScrollToTop  smooth color="#6f00ff" />
     <Header title="REACH US" caption="Get in Touch with us, Send us your comments, feedback, questions and inquiries.." />
      <div className="container">
        <motion.div
          animate="visible"
          initial="hidden"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.6,
              },
            },
          }}
          className="row mt-5"
        >
          <div className="col">
            <Subtitle subtitle={`Who We are? `} />
            <p className="mt-5 paragraph">
              We are a team of motivated software designers, software
              architects, software engineers, product managers and software
              evangelists who are super passionate about technology. We love
              ‘tech talk’ and we get very excited when we talk, learn and
              discuss new technological concepts. We have great industry
              experience in working with some of the best companies in the
              world.We have designed, developed, tested, optimized and launched
              software products which are being used by millions of people all
              over the world.
              <br />
              <br /> We work for the best leading Financial, Accounting, Legal
              and General Digital Agency companies. Our software engineers are
              trained to work in a one on one environment. We have front-end
              developers who are working over nine years for one of the Largest
              eCommerce companies in USA.
              <br />
              <br /> We are also working with few medium size legal agencies and
              they all use our resources one to one with their Architects,
              Senior Engineers, Designers and Project Managers. We have narrowed
              the gap of all the differences in technical working between two
              countries and give high professional quality and value added
              services so that our clients always achieve their goal.
              <br />
              <br />
              Together our USA staff and Sri Lankan staff provide seamless
              technical advantages and financial advantages to the digital
              agencies and software companies in USA.
            </p>
          </div>
        </motion.div>
        <div className="row">
          {images.map((img,key)=>{
            return(
            <motion.div
            animate="visible"
            initial="hidden"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 1,
                },
              },
            }}
            key={key}
            className="col-md-3 mb-3"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={img.path}
              alt=""
              className="img-fluid"
            />{" "}
          </motion.div>

            );
          })}
          
        </div>
        <Contact />
      </div>
    </>
  );
};

export default Contact_us;
