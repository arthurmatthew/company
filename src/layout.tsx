import "./layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <h1>
          <a href="/#title" className="highlight">
            Ballard Web Dev
          </a>
        </h1>
        <nav>
          <a className="highlight" href="/#about">
            About
          </a>
          <a className="highlight">Pricing</a>
          <a className="highlight">Get In Touch</a>
          <i
            className="bi-circle-fill"
            style={{ fontSize: "2px", padding: "0 1em" }}
          />
          <a className="highlight" href="/account">
            <i className="bi-person-circle" style={{ fontSize: "2em" }} />
          </a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Made by Web Dev Ballard</p>
      </footer>
    </>
  );
};

export default Layout;
