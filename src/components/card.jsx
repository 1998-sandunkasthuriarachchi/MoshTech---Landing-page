import { motion } from "framer-motion";
import '../styles/card.scss';
const Card = ({img,title,desc}) => {
  return (
    <>
      <div className="card" >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center"><span><img src={img} width="25px" height="25px" /></span>&nbsp;{title}</h5>
          <p className="card-text">{desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
