import "../../styles/Home Styles/ApartmentsPlan.css";

const ApartmentsPlan = () => {
  return (
    <div>
      <p className="properties">apartment search</p>
      <p className="featured-list">Apartments Plan</p>
      <div className="d-flex justify-content-center">
        <ul className="apartments-list">
          <li>The Studio</li>
          <li>Deluxe Portion</li>
          <li>Penthouse</li>
          <li>Top Garden</li>
          <li>Double Height</li>
        </ul>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        <div className="d-flex flex-column deluxe-div">
          <h3 className="deluxe-h3">Deluxe Portion</h3>
          <p className="deluxe-p">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            Total Area
            .............................................................. 2800
            Sq. Ft
          </p>
          <p>
            {" "}
            Bedroom
            ............................................................... 150
            Sq. Ft
          </p>
          <p>
            Bathroom
            ............................................................... 45
            Sq. Ft
          </p>
          <p>
            {" "}
            Smoking/Pets .....................................................
            Allowed
          </p>
          <p>
            {" "}
            Lounge .....
            ............................................................. 650
            Sq. Ft
          </p>
        </div>
        <div className="deluxe-img">
          <img
            className="img m-5"
            height="380px"
            src="https://i.ibb.co/GxgQqq0/bg.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default ApartmentsPlan;
