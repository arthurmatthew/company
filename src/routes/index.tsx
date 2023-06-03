import "./index.css";
import Ballard from "../assets/ballard-locks.jpg";

const Index = () => {
  return (
    <>
      <section id="title">
        <img src={Ballard} />
        <h1>
          Ballard's <i>finest</i> web wizards.
        </h1>
      </section>
      <section id="about" className="content">
        <h1>About Us</h1>
        <p>
          Ever tried to visit a local website, and seen an error page? Or maybe
          you saw an ancient relic from the 2000's. At Web Dev Ballard, we're
          tired of outdated websites and service outages. If you leave a website
          to rot- it will. That's why we'll keep your website updated for as
          long as you want.
        </p>
        <h1>Our Proposal</h1>
        <p>
          Web Dev Ballard follows a subscription model. Basically, every month
          you'll pay us to keep your website up to date and running. As long as
          you're subscribed, you can shoot us a text and we'll make the changes
          you want.
        </p>
      </section>
      <section id="join" className="content">
        <button>Join Us, Right Now</button>
        <a href="/account">Already Subscribed?</a>
      </section>
    </>
  );
};

export default Index;
