import "../styles/projects.scss";
import Caption from "./caption";
import Title from "./title";

const Header = ({title, caption}) => {
  return (
    <>
      <div className="title-background">
        <div className="container">
          <div
            className="row "
            style={{ marginTop: "100px", marginBottom: "20px" }}
          >
            <div className="col">
              <div className="d-flex justify-content-center">
                <Title title={title} />
              </div>
              <Caption
                caption={caption}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
