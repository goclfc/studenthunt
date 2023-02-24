import sunglasses from "../resources/images/sunglasses.svg";
import entertain from "../resources/images/entertain.svg";
import sport from "../resources/images/sport.svg";
import technic from "../resources/images/technic.svg";
import trousers from "../resources/images/trousers.svg";
import piza from "../resources/images/piza.svg";
import { Link } from "react-router-dom";

const Categories = ()=>{
    return (
        <div className="categories bg-bg-dark w-full flex flex-col justify-center items-center text-white p-4">
        <div className="categories-wrapper m">
          <div
            className="categories-header mt-4"
            style={{ fontWeight: "700", fontSize: "18px", color: "#BFBFBF" }}
          >
            მოგესალმებით Student Hunt-ზე
          </div>
          <div
            className="categories-search mt-4"
            style={{ fontWeight: "700", fontSize: "28px", color: "white" }}
          >
            აღმოაჩინე კატეგორიები{" "}
            <input
              type="text"
              style={{
                height: "36px",
                borderRadius: "15px",
                fontSize: "18px",
                fontWeight: "350",
                color: "#BFBFBF",
                paddingLeft: "30px",
                marginLeft: "50px",
              }}
              placeholder="რას ეძებთ?"
            ></input>
          </div>
          <div className="categories-body flex">
            <Link to='accesories'>
            <div
              className="flex flex-col items-center"
              style={{ margin: "25px 25px 25px 0px " }}
            >
              <div
                style={{
                  width: "92px",
                  height: "92px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={sunglasses} />
              </div>
              <div style={{ fontSize: "14px", marginTop: "18px" }}>
                აქსესუარები
              </div>
            </div>
            </Link>
            <Link to='food'>
            <div
              className="flex flex-col items-center"
              style={{ margin: "25px" }}
            >
              <div
                style={{
                  width: "92px",
                  height: "92px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={piza} />
              </div>

              <div style={{ fontSize: "14px", marginTop: "18px" ,cursor:'pointer'}}>კვება</div>
            </div>
            </Link>
            <Link to='dress'>
            <div
              className="flex flex-col items-center"
              style={{ margin: "25px" }}
            >
              <div
                style={{
                  width: "92px",
                  height: "92px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={trousers} />
              </div>
              <div style={{ fontSize: "14px", marginTop: "18px" }}>
                ტანსაცმელი
              </div>
            </div>
            </Link>
            <Link to='sport'>
            <div
              className="flex flex-col items-center"
              style={{ margin: "25px" }}
            >
              <div
                style={{
                  width: "92px",
                  height: "92px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={sport} />
              </div>
              <div style={{ fontSize: "14px", marginTop: "18px" }}>სპორტი</div>
            </div>
            </Link>
            <Link to='entertainment'>
            <div
              className="flex flex-col items-center"
              style={{ margin: "25px" }}
            >
              <div
                style={{
                  width: "92px",
                  height: "92px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={entertain} />
              </div>
              <div style={{ fontSize: "14px", marginTop: "18px" }}>გართობა</div>
            </div>
            </Link>
            <Link to='technic'>
            <div
              className="flex flex-col items-center"
              style={{ margin: "25px" }}
            >
              <div
                style={{
                  width: "92px",
                  height: "92px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={technic} />
              </div>
              <div style={{ fontSize: "14px", marginTop: "18px" }}>ტექნიკა</div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    )
}
export default Categories