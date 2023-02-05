import piza from "../resources/images/piza.svg";
import searchicon from "../resources/images/searchicon.svg";
import bakery from '../resources/images/bakery.png'
import bakeryLogo from '../resources/images/bakeryLogo.svg'
const Products = ()=>{
    return (
        <div className="main flex justify-center w-full " style={{paddingLeft:'132px',paddingRight:'132px'}}>
        <div className="products-wrapper flex flex-wrap justify-center" style={{maxWidth:'1440px'}}>
        <div className="main-header w-full flex items-center" style={{fontSize:'47px',fontWeight:'700',paddingLeft:'132px',marginBottom:'104px',marginTop:'79px'}}><img src={piza} style={{height:'69px',width:'69px',marginRight:'17px'}}/> კვება</div>
          <div className="product-card bg-white" style={{width:'20.3rem',height:'32.4rem',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',borderRadius:'0px 20px 20px 20px',marginRight:'90px'}}> 
                <div className="card-img"><img src={bakery}/></div>
                <div className="card-logo flex justify-center" style={{marginTop:'22px'}}><img src={bakeryLogo}/></div>
                <div className='card-description flex flex-col items-center'>
                  <div className="description-header" style={{fontSize:'29px',fontWeight:'700',color:'black',marginTop:'23px'}}>30 % ფასდაკლება</div>
                  <div className="description-footer" style={{fontSize:'19px',fontWeight:'700',color:'#8B8B8B',marginTop:'9px'}}>ყველა სახის პროდუქტზე</div>
                </div>
          </div>
          <div className="product-card bg-white" style={{width:'20.3rem',height:'32.4rem',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',borderRadius:'0px 20px 20px 20px',marginRight:'90px'}}> 
                <div className="card-img"><img src={bakery}/></div>
                <div className="card-logo flex justify-center" style={{marginTop:'22px'}}><img src={bakeryLogo}/></div>
                <div className='card-description flex flex-col items-center'>
                  <div className="description-header" style={{fontSize:'29px',fontWeight:'700',color:'black',marginTop:'23px'}}>30 % ფასდაკლება</div>
                  <div className="description-footer" style={{fontSize:'19px',fontWeight:'700',color:'#8B8B8B',marginTop:'9px'}}>ყველა სახის პროდუქტზე</div>
                </div>
          </div>
          <div className="product-card bg-white" style={{width:'20.3rem',height:'32.4rem',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',borderRadius:'0px 20px 20px 20px',}}> 
                <div className="card-img"><img src={bakery}/></div>
                <div className="card-logo flex justify-center" style={{marginTop:'22px'}}><img src={bakeryLogo}/></div>
                <div className='card-description flex flex-col items-center'>
                  <div className="description-header" style={{fontSize:'29px',fontWeight:'700',color:'black',marginTop:'23px'}}>30 % ფასდაკლება</div>
                  <div className="description-footer" style={{fontSize:'19px',fontWeight:'700',color:'#8B8B8B',marginTop:'9px'}}>ყველა სახის პროდუქტზე</div>
                </div>
          </div>
          <div className="product-card bg-white" style={{width:'20.3rem',height:'32.4rem',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',borderRadius:'0px 20px 20px 20px', marginRight:'90px',marginTop:'18px'}}> 
                <div className="card-img"><img src={bakery}/></div>
                <div className="card-logo flex justify-center" style={{marginTop:'22px'}}><img src={bakeryLogo}/></div>
                <div className='card-description flex flex-col items-center'>
                  <div className="description-header" style={{fontSize:'29px',fontWeight:'700',color:'black',marginTop:'23px'}}>30 % ფასდაკლება</div>
                  <div className="description-footer" style={{fontSize:'19px',fontWeight:'700',color:'#8B8B8B',marginTop:'9px'}}>ყველა სახის პროდუქტზე</div>
                </div>
          </div>
          <div className="product-card bg-white" style={{width:'20.3rem',height:'32.4rem',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',borderRadius:'0px 20px 20px 20px', marginRight:'90px',marginTop:'18px'}}> 
                <div className="card-img"><img src={bakery}/></div>
                <div className="card-logo flex justify-center" style={{marginTop:'22px'}}><img src={bakeryLogo}/></div>
                <div className='card-description flex flex-col items-center'>
                  <div className="description-header" style={{fontSize:'29px',fontWeight:'700',color:'black',marginTop:'23px'}}>30 % ფასდაკლება</div>
                  <div className="description-footer" style={{fontSize:'19px',fontWeight:'700',color:'#8B8B8B',marginTop:'9px'}}>ყველა სახის პროდუქტზე</div>
                </div>
          </div>
          <div className="product-card bg-white" style={{width:'20.3rem',height:'32.4rem',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',borderRadius:'0px 20px 20px 20px',marginTop:'18px'}}> 
                <div className="card-img"><img src={bakery}/></div>
                <div className="card-logo flex justify-center" style={{marginTop:'22px'}}><img src={bakeryLogo}/></div>
                <div className='card-description flex flex-col items-center'>
                  <div className="description-header" style={{fontSize:'29px',fontWeight:'700',color:'black',marginTop:'23px'}}>30 % ფასდაკლება</div>
                  <div className="description-footer" style={{fontSize:'19px',fontWeight:'700',color:'#8B8B8B',marginTop:'9px'}}>ყველა სახის პროდუქტზე</div>
                </div>
          </div>
        </div>
        
      </div>
    )
}
export default Products