import Caption from "../components/caption";
import Subtitle from "../components/subtitle";
import Title from "../components/title";
import "../styles/services.scss";
import { motion } from "framer-motion";
import ScrollToTop from "react-scroll-to-top";
import Header from "../components/header";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
     <ScrollToTop smooth color="#6f00ff" />
     <Header title="OUR SERVICES " caption="Our clients entrust us with their digital neeeds to deliver results and equip them with futuristic digital solutions." />
      <div className="container">
       
        <motion.div animate="visible" initial="hidden" variants={{
          hidden:{
            scale:.8,
            opacity:0
          },
          visible:{
            scale:1,
            opacity:1,
            transition:{
              delay:.4
            }
          }
        }} className="row mt-5">
          <div className="col-md-12">
            <Subtitle subtitle={`Mobile App Development`} />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} src="./assets/banner/urban-889.png" width="350px" alt="" /> 
            <p className="mt-5 paragraph">
              Mobile devices have revolutionized how customers interact with
              brands, their products and their offerings. Being available to
              your clients' 24/7 elevates your brand to a daring degree of
              personalization for user- brand experience.<br/><br/> We work closely with
              our clients to develop their concepts and ideas into lucrative and
              value-driven mobile applications. User-centric design and
              development, along with ongoing R&D allows us to create apps that
              are easy to use and have exceptional personal value for users.<br/><br/> We
              specialize in application design and development on the world’s
              leading platforms.
            </p>
          </div>
        </motion.div>
        <motion.div animate="visible" initial="hidden" variants={{
          hidden:{
            scale:.8,
            opacity:0
          },
          visible:{
            scale:1,
            opacity:1,
            transition:{
              delay:.5
            }
          }
        }} className="row mt-5">
          <div className="col">
            <Subtitle subtitle={`Web Designing & Development`} />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} src="./assets/banner/clip-1393.png" width="350px" alt="" /> 
            <p className="mt-5 paragraph">
              An effective web presence is a critical component of any company’s
              brand strategy. Customers form their first impressions about a
              brand by virtually interacting with the brand before they step
              into your premises or see your product on the shelves.<br/><br/> Our
              solutions are developed on tailor-made digital strategies based on
              the brand’s positioning, value proposition, audience insights,
              business goals and competitor analysis. An immersive and data
              driven approach to web development ensures that all of our web
              solutions are one of a kind, crafted with the brand’s style and
              user experience in mind.<br/><br/> We specialise in developing digital
              strategies for companies and translating those into web solutions
              on popular content management platforms including WordPress,
              Joomla and Magento (eCommerce platform).
            </p>
          </div>
        </motion.div>
        <motion.div animate="visible" initial="hidden" variants={{
          hidden:{
            scale:.8,
            opacity:0
          },
          visible:{
            scale:1,
            opacity:1,
            transition:{
              delay:.6
            }
          }
        }} className="row mt-5">
          <div className="col">
            <Subtitle subtitle={`Social Media Management`} />
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} src="./assets/banner/flame-teamwork.gif" className="img-fluid" alt="" /> 
            <p className="mt-2 paragraph">
              Social Media is an effective mechanism to reach and engage with
              targeted audiences. By developing strategies and creating content
              that catches the audience's attention, we are able to increase
              valuable social engagement for brands.<br/><br/> We are equipped to
              tactically handle any requirement to ensure your company makes the
              most out of its online presence. The solutions that we provide in
              order to manage Social Media in the most effective way will help
              generate the best results for your brand.
            </p>
          </div>
        </motion.div >
      </div>
    </>
  );
};

export default Services;
