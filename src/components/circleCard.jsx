import "../styles/circle.scss";

const CircleCard = ({ icon, title, text }) => {
  return (
    <>
      <div className="round-align">
        <div>
          <i className={`${icon} fa-3x mt-4`} />
          <h5 className="mt-4">{title}</h5>
          <h5>{text}</h5>
        </div>
      </div>
    </>
  );
};

export default CircleCard;
