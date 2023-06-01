import './title.css';
import Seb from "./images/profile_pic_seb.png"

function Title() {
  return (
    <>
      <h1 className="title">Ballard Web Dev</h1>
      <p className="slogan">
        Ignite Your Online Success with <span className="edge">Cutting-Edge</span> Development
      </p>
      <div className="desc">
        <h1 className="center">About Us</h1>
        <p className="txt">
          Welcome to Web Dev Ballard, your premier web development company in Seattle's vibrant Ballard neighborhood! Our skilled team of developers, designers, and strategists is dedicated to crafting exceptional websites that align with your vision. From responsive design to seamless e-commerce integration, we offer comprehensive services to meet your needs. With a focus on client satisfaction, we prioritize open communication and collaboration. Let us transform your ideas into reality and unlock your online potential. Contact us today for exceptional web development solutions in Ballard and beyond.
        </p>
      </div>
      <div className="people S">
        <h1 className="center">
          Sebastien
          <a>
            <div className="discord">
              <img className="prof" src={Seb} alt="Seb" />
              <div className="inline">
                <span className="name">Seb</span>
                <br /> {/* Add a line break here */}
                <span className="distxt">Sebastien#2065</span>
              </div>
            </div>
          </a>
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
      <br/>
    </>
  );
}

export default Title;
