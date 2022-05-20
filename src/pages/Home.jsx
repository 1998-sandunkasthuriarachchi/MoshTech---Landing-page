import React, { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import Carousel from "../components/carousel";
import "../styles/home.scss";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Title from "../components/title";
import Card from "../components/card";
import { Card_data } from "../components/data/card";
import { Section } from "../components/data/section";
import Contact from "../components/form/contact";
import Caption from "../components/caption";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  return (
    <>
      <Carousel />
      <div className="container mt-5">
        {/* Scroll to top button */}
        <ScrollToTop smooth color="#6f00ff" />
        <div className="row mt-5">
          <motion.div
            className="col-md-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src="/assets/banner/business-3d-casual-life-3d-searching-8.png"
              className="img-fluid"
              alt="..."
            />
          </motion.div>
          <div className="col-md-6">
            <Title
              title={`How would you like to transform your business into a productive &
              profitable business ?`}
            />
            {Section.map((item, key) => {
              return <p className="section-1">{item.text}</p>;
            })}
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <h2 className="text-white title-1">
              Discover a universe of <span className="nft-text">NFTs</span>{" "}
              <br />
              You can trade
              <br /> and collect
            </h2>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="col-md-6"
          >
            <img
              src="/assets/banner/nft1.png"
              className="img-fluid"
              alt="..."
            />
          </motion.div>
        </div>
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-md-12">
            <div className="d-flex justify-content-center">
              <Title title={`NFT Projects`} />
            </div>
            <div className="row mt-5">
              {Card_data.map((item, key) => {
                return (
                  <div className="col-md-3 mb-3">
                    <Card img={item.img} title={item.title} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-md-12">
            <div className="d-flex justify-content-center">
              <Title title={`Digital Marketing Projects`} />
            </div>
            <div className="row mt-5">
              {Card_data.map((item, key) => {
                return (
                  <div className="col-md-3 mb-3">
                    <Card img={item.img} title={item.title} />
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}

        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col-md-12">
            <div className="d-flex justify-content-center">
              <Title title={`Contact`} />
            </div>
            <Caption
              caption={`Get in Touch with us, Send us your comments, feedback, questions and inquiries..`}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <motion.div
              className="d-flex justify-content-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src="/assets/banner/business-3d-casual-life-3d-notifications.png"
                className="img-fluid"
                width="70%"
                alt="..."
              />
            </motion.div>
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default Home;
