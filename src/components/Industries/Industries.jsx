import "../../styles/industries.css";

const industries = [
  {
    icon: "🏥",
    title: "Healthcare",
    description:
      "Developing secure healthcare solutions, patient management systems, and digital health platforms.",
  },
  {
    icon: "🏦",
    title: "Finance",
    description:
      "Building reliable fintech applications, banking solutions, and secure payment platforms.",
  },
  {
    icon: "🛒",
    title: "Retail & E-Commerce",
    description:
      "Creating scalable e-commerce platforms, inventory management, and customer engagement solutions.",
  },
  {
    icon: "🏭",
    title: "Manufacturing",
    description:
      "Delivering smart manufacturing systems, automation solutions, and industrial software.",
  },
  {
    icon: "🎓",
    title: "Education",
    description:
      "Developing modern e-learning platforms, student portals, and academic management systems.",
  },
  {
    icon: "☁️",
    title: "Technology",
    description:
      "Helping businesses modernize with cloud-native applications, DevOps, AI, and enterprise software.",
  },
];

function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">Industries</span>

          <h2>Industries We Empower</h2>

          <p>
            We partner with organizations across diverse industries to deliver
            innovative digital solutions that drive growth, improve efficiency,
            and accelerate transformation.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => (
            <div className="industry-card" key={industry.title}>
              <div className="industry-icon">{industry.icon}</div>

              <h3>{industry.title}</h3>

              <p>{industry.description}</p>

              <button className="industry-btn">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;