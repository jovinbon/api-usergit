import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Desafio Github API</h1>
      <p>Bootcamp Spring React - DevSuperior</p>
      <div className="start-button">
        <Link to="/usersearch">
          <button className="btn btn-primary btn-lg">Começar</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
