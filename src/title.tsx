import './title.css';
import Seb from "./images/profile_pic_seb.png";

function Title() {
  return (
    <>
      {/* Title */}
      <h1 className="title">Ballard Web Dev</h1>

      {/* Slogan */}
      <p className="slogan">
        Ignite Your Online Success with <span className="edge">Cutting-Edge</span> Development
      </p>

      {/* Description */}
      <div className="desc">
        <h1 className="center">About Us</h1>
        <p className="txt">
          Welcome to Web Dev Ballard, your premier web development company in Seattle's vibrant Ballard neighborhood! Our skilled team of developers, designers, and strategists is dedicated to crafting exceptional websites that align with your vision. From responsive design to seamless e-commerce integration, we offer comprehensive services to meet your needs. With a focus on client satisfaction, we prioritize open communication and collaboration. Let us transform your ideas into reality and unlock your online potential. Contact us today for exceptional web development solutions in Ballard and beyond.
        </p>
      </div>

      {/* People - Sebastien */}
      <div className="people S">
        <h1 className="center">
          Sebastien
        </h1>
        <p className="txt">
          I am Sebastien, a full stack web developer. With my expertise in a wide range of technologies and frameworks, I excel in creating robust and scalable web applications. I specialize in front-end development, and I am proficient in{' '}
          <a href="https://react.dev/">
            <img className="react one" src="https://clouddevs.com/wp-content/uploads/2018/08/react-logo-transparent-380x380.png" alt="React" />
          </a>{" "}
          React, utilizing its powerful features to build dynamic and intuitive user interfaces. Currently, I am expanding my skill set by diving into{" "}
          <a href="https://tailwindcss.com/">
            <img className="react two" src="https://th.bing.com/th/id/OIP.bZIWToswt8iVg8CwXzCgWAHaHa?pid=ImgDet&rs=1" alt="Tailwind CSS" />
          </a>{" "}
          Tailwind CSS, a utility-first framework that enables me to create efficient and visually appealing designs. Combining my passion for coding with a keen eye for detail, I strive to deliver elegant solutions that enhance the user experience. With a strong foundation in both front-end and back-end development, I am dedicated to crafting high-quality software that exceeds client expectations.
        </p>
      </div>

      {/* People - Mathew */}
      <div className='people M'>
        <h1 className='center'>Mathew</h1>
        <p className='txt'>I am a 🤓🤓🤓🤓🤓🤓</p>
      </div>

      {/* Contact */}
      <h1 className='center'>Contact Us</h1>
      <p className='center'>BallardWebDev@gmail.com</p> {/* you can fix this */}

      <br />

      {/* Footer */}
      <h3 className='center'>Made with 💖</h3>
    </>
  );
}

export default Title;
