import "../../styles/Home Styles/WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <div className="whoweare-container">
      <div className="whoweare-left">
        <img
          className="first-img"
          src="https://i.ibb.co/ZY7YfKs/5.png"
          alt="img"
        />
        <img
          className="second-img"
          src="https://i.ibb.co/R291r9t/6.png"
          alt="img"
        />
        <img
          className="third-img"
          src="https://i.ibb.co/55gRfRv/7.png"
          alt="img"
        />
        <img
          className="award"
          src="https://i.ibb.co/Ssypf8H/award-icon.png"
          alt="img"
        />
        <div className="reviews-container">
          <img
            className="fourth-img"
            src="https://i.ibb.co/52q6QYz/8.png"
            alt="img"
          />
          <img
            className="star"
            src="https://i.ibb.co/fXFzCXZ/star-icon.png"
            alt="img"
          />
        </div>
      </div>
      <div className="whowerare-right">
        <p className="right-p1">
          <span className="dot"></span>WHO WE ARE
        </p>
        <p className="right-p2">
          We are Offerring The Best <br />
          Real Estate Property for All
        </p>
        <p className="right-p3">
          Richard McClintock, a Latin professor at Hampden-Sydney <br /> College
          in Virginia, looked up one of the more
          <br /> obscure Latin words, consectetur, and going through the cites.
        </p>
        <img
          className="whoInfo"
          src="https://i.ibb.co/m4C8v02/xd.png"
          alt="img"
        />
        <div className="d-inline-flex justify-content-center mt-2">
          <button className="whoInfo-btn">Contact With Us</button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
