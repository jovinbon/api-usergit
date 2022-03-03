import axios from 'axios';
import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

type FormData = {
  user: string;
  //test: string;
};

type Profile = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

const UserSearch = () => {
  'https://api.github.com/users/acenelio';

  const [profile, setProfile] = useState<Profile>();

  const [formData, setFormData] = useState<FormData>({
    user: '',
    //test: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setProfile(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
        console.log(error);
      });
  };

  return (
    <div className="home-container">
      <div className="content-container">
        <h1>Encontre com um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="user"
              value={formData.user}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {profile && (
        <>
          <div className="result-container">
            <img src={profile.avatar_url} alt={profile.avatar_url} />
            <div className="text-container">
              <div className="div-content">
                <h4>Informações</h4>
                <div className="info">
                  <h6>Perfil: </h6>
                  <h6><a href={profile.url}>{profile.url}</a></h6>
                </div>
                <div className="info">
                  <h6>Seguidores: </h6>
                  <h6>{profile.followers}</h6>
                </div>
                <div className="info">
                  <h6>Localidade: </h6>
                  <h6>{profile.location}</h6>
                </div>
                <div className="info">
                  <h6>Nome: </h6>
                  <h6>{profile.name}</h6>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserSearch;
