import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Navbar } from "react-bootstrap";
import SearchInput from "./Components/SearchInput";
import Main from "./Components/Main";
import List from "./Components/List";
import { useEffect, useState } from "react";
import youtube from "./api/youtube";
import '@fortawesome/fontawesome-free/css/all.min.css';
//import './App.css'; // Assuming you'll add custom styles here
//import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing the icons

const App = () => {
  const [videos, setvideos] = useState([]);
  const [Mainvideo, setMainvideo] = useState(null);

  async function getData(Searchterm) {
    // API Details and Key
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCC0pLN0TfsE-lOsJ3hNvVYbMBWeXcqFT8",
        q: Searchterm,
      },
    });
    setvideos(response.data.items);
    setMainvideo(response.data.items[0]);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* Header Section */}
      <Navbar bg="light" className="mb-3">
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img
              src="./yt_icon.svg"
              alt="YouTube Logo"
              width="30"
              height="30"
              className="me-2"
            />
            <span className="fw-bold">YouTube Theater</span>
          </Navbar.Brand>

          {/* Icons for GitHub and LinkedIn */}
          <div className="ms-auto">
          <a
    href="https://github.com/Nilakshi29"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon github"
  >
    <i className="fab fa-github" style={{ fontSize: '24px', color: 'black', marginRight: '10px' }}></i>
  </a>
  <a
    href="https://www.linkedin.com/in/Nilakshi-Shree"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon linkedin"
  >
    <i className="fab fa-linkedin-in" style={{ fontSize: '24px', color: 'black' }}></i>
  </a>
</div>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container>
        <SearchInput onSearch={getData} />

        <Row>
          <Col sm={8}>
            <Main video={Mainvideo} />
          </Col>
          <Col sm={4}>
            <List list={videos} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
