import { UserProps } from "../types/user";

import { MdLocationPin } from "react-icons/md";

import { Link } from "react-router-dom";

import classes from "./User.module.css";

function User({
  login,
  avatar_url,
  followers,
  following,
  location,
  html_url,
  bio,
}: UserProps) {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <div className={classes.bio}>
        <span>{bio}</span>
      </div>
      {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={classes.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={classes.number}>{following}</p>
        </div>
      </div>
      <a href={html_url} target="_blank">
        <span>Visitar</span>
      </a>
      <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  );
}

export default User;
