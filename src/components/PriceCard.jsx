function PriceCard({ plan, price, content, notValid }) {
  return (
    <div className="col-sm-12 col-md-4 mb-4 mt-4">
      <div className="card bg-light p-3 my-border border-0 my-hover">
        <div className="text-center border-bottom border-secondary">
          <h6 className="text-secondary my-ltr">{plan}</h6>
          <h2 className="display-4 font-weight-bold">
            {price}
            <span className="my-fontSize">/month</span>
          </h2>
        </div>
        <div>
          {content.map((ele) => (
            <p className="pt-2 m-1">✔ {ele}</p>
          ))}
          {notValid &&
            notValid.map((ele) => <p className="pt-2 m-1 my-dull">✖ {ele}</p>)}
        </div>
        <button className="btn btn-primary my-btn my-padding mt-2">
          BUTTON
        </button>
      </div>
    </div>
  );
}
export default PriceCard;
