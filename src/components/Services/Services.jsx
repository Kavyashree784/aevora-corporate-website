import { services } from "../../data/services";

function Services() {
  return (
    <section className="services">

      <div className="section-title">

        <h2>Our Services</h2>

        <p>
          Engineering innovative technology solutions
          for modern enterprises.
        </p>

      </div>

      <div className="service-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;