import logo from "./resources/images/Group.svg";
import name from "./resources/images/name.svg";
import sunglasses from "./resources/images/sunglasses.svg";
import entertain from "./resources/images/entertain.svg";
import sport from "./resources/images/sport.svg";
import technic from "./resources/images/technic.svg";
import trousers from "./resources/images/trousers.svg";
import piza from "./resources/images/piza.svg";
import searchicon from "./resources/images/searchicon.svg";
import bakery from './resources/images/bakery.png'

function App() {
  return (
    <div className="App bg-bg-white w-full h-auto pb-8">
      <div className="header flex items-center p-8">
        <div className="logo-place flex items-center" style={{}}>
          <img src={logo} />
          <img src={name} />
        </div>
        <div
          className="menu flex justify-end w-full"
          style={{
            fontFamily: "FiraGO",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "22px",
            color: "#000000",
          }}
        >
          <button className="mr-4">ჩვენს შესახებ</button>
          <button className="mr-4">როგორ მუშაობს?</button>
          <div className="mr-2">|</div>
          <button className="mr-4">Log in</button>
        </div>
      </div>
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
              <div style={{ fontSize: "14px", marginTop: "18px" }}>კვება</div>
            </div>
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
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main-header p-4">კვება</div>
        <div className="products-wrapper flex p-4">
          <div className="product-card bg-white" style={{width:'20.3rem',height:'32.4rem',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',borderRadius:'0px 20px 20px 20px'}}> 
                <div className="card-img"><img src={bakery}/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
