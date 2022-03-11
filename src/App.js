
import './App.css';

export default function App() {
  const pricecard=[{ title:"FREE", price:"$0", period:"/month", user:"Single User",data:"5 GB Storage",clas:"fas fa-times" ,i:"fas fa-times"},{title:"PLUS",price:"$9",period:"/month",user:"5 Users",data:"50GB Storage", i:"fas fa-times",clas:"fas fa-check"},{title:"PRO",price:"$49",period:"/month",user:"Unlimited Users",data:"150GB Storage",clas:"fas fa-check",pro:"Unlimited",i:"fas fa-check"}]
  return (
    <section className="pricing py-5">
  <div className="container">
     <div className="row">
       {pricecard.map((rate)=>(<Pricecard title={rate.title} price={rate.price} period={rate.period} user={rate.user} data={rate.data} clas={rate.clas} pro={rate.pro} i={rate.i}/>))}

       </div>
     </div>
   </section>
   ) }


  function Pricecard({title,price,period,user,data,clas,pro,i}){
    return (
     
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{title}</h5>
          <h6 className="card-title text-center">{price}<span className="period">{period}</span></h6>
          <hr></hr>
          <ul className="fa-ul">
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{user}</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{data}</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
            <li><span className="fa-li"><i className={clas}></i></span>Unlimited Privite Projects</li>
            <li><span className="fa-li"><i className={clas}></i></span>Dedicated Phone Support</li>
            <li><span className="fa-li"><i className={clas}></i></span><b>{pro}</b>Free Subdomain</li>
            <li><span className="fa-li"><i className={i} ></i></span>Monthly Status Reports</li>
            
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>

            </div>
      
          </div>
        </div>
      </div>
  ) }