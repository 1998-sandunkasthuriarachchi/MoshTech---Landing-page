import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import Header from "../components/header";
import Apps from "../components/projects/App";
import Nfts from "../components/projects/Nfts";
import Webs from "../components/projects/Webs";
import "../styles/projects.scss";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
     <ScrollToTop smooth color="#6f00ff" />
      <Header title="CLIENTS & OUR WORK " caption="Our clients entrust us with their digital brands to deliver results and equip them with futuristic digital capabilities. We approach each project with a fresh and dynamic perspective, seeking ways to leverage all of the potent digital channels to set your brand apart from the rest." />
      <div className="container">
       
        <div className="row mt-5">
          <div className="col-md-12">
            <div>
              <ul
                className="nav nav-pills mb-3 justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="active pro"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    WEB
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="pro"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    APPS
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="pro"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    NFT
                  </button>
                </li>
              </ul>
              <div className="tab-content mt-5" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <Webs/>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <Apps/>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <Nfts/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
