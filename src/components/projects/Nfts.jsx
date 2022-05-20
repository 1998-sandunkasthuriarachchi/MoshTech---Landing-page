import Subtitle from "../subtitle";
import Card from "../card";
import { Card_data } from "../data/card";
const Nfts = () => {
    return ( 
        <>
        <div className="text-center"><Subtitle subtitle={`NFT`} /></div>
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-md-12">
            <div className="row mt-2">
              {Card_data.map((item) => {
                return (
                  <div className="col-md-3 mb-3">
                    <Card img={item.img} title={item.title} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        </>
     );
}
 
export default Nfts;