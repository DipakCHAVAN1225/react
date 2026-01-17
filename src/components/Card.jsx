import "./card.css";


const Card = (props) => {
  console.log(props)
  return (
    <div className="card">
      <div>
        <div className="logo">
          

          <img src={props.brand} alt="img"></img>
          <p className="savebtn">Save</p>
        </div>
        <div className="btn"></div>
      </div>
      <div className="cname">
        <h2>{props.cname} <span>{props.date}</span></h2>
      </div>
      <div className="title">
        <h1>{props.post}</h1>
      </div>
      <div className="tag">
        <button>{props.tag1}</button>
        <button>{props.tag2}</button>
      </div>
      <hr className="hr"></hr>
      <div className="price">
          <div>
            <h2>{props.pay}</h2>
            <p>{props.location}</p>
          </div>
        <button>Apply Now</button>
      </div>
  
    </div>
  );
};

export default Card;
