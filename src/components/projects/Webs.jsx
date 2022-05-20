import Caption from "../caption";
import Subtitle from "../subtitle";
import { motion } from "framer-motion";
import "../../styles/projects.scss";
import { webprojects } from "../data/web";

const Webs = () => {
  return (
    <>
      <div className="text-center"><Subtitle subtitle={`WEB`} /></div>
           

      <div className="container web">
        <div className="row">
          {webprojects.map((item, key) => {
            return (
              <motion.div
              animate="visible"
              initial="hidden"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 0.9,
                  opacity: 1,
                  transition: {
                    delay: item.delay,
                  },
                },
              }} className="col-md-12" key={key}>
                <h2 className="text-white mt-2" > {item.name}</h2>
                <p className="text-white mt-3">{item.description}</p>
                <motion.img
                  alt="..."
                  src={item.image}
                  className="img-fluid"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Webs;
