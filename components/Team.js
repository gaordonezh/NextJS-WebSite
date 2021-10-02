const list = [
  {
    name: "Bruno Montenegro",
    photo: "https://www.autokims.com.mx/imagenes/profile3.png",
    rol: "Gerente General",
    contact: "@bruno",
  },
  {
    name: "German Ordoñez",
    photo: "https://www.autokims.com.mx/imagenes/profile3.png",
    rol: "Front-end Developer",
    contact: "@gaordonezh",
  },
  {
    name: "Moises Lazaro",
    photo: "https://www.autokims.com.mx/imagenes/profile3.png",
    rol: "Backend Developer",
    contact: "@mlazaro",
  },
  {
    name: "Stive Silva",
    photo: "https://www.autokims.com.mx/imagenes/profile3.png",
    rol: "Front-end Developer",
    contact: "@stivesilva",
  },
  {
    name: "Zaira Sanchez",
    photo: "https://www.autokims.com.mx/imagenes/profile3.png",
    rol: "UX - UI",
    contact: "@zaira",
  },
];

const Team = () => {
  return (
    <section className="testimonial section-margin">
      <div className="container">
        <div className="section-intro">
          <h4 className="section-intro__title">OUR Team</h4>
          <h2 className="section-intro__subtitle bottom-border">
            Nice to meet you
          </h2>
        </div>
        <div className="row">
          {list.map((el, index) => (
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-4" key={index}>
              <div className="media align-items-center overview__single team">
                <div className="row">
                  <img src={el.photo} alt={el.name} />
                  <div className="media-body">
                    <h4>{el.name}</h4>
                    <p>{el.rol}</p>
                    <p>{el.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
