import PropTypes from "prop-types";
import { useState } from "react";

export function TwitterFollowCard({ children, userName }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="shadow-lg">
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
            className="tw-followCard-avatar"
            src={`https://unavatar.io/${userName}`}
            alt="El avatar Pablo"
          />
          <div>
            <strong className="tw-followCard-info">{children}</strong>
            <span className="tw-followCard-infoUserName">@{userName}</span>
          </div>
        </header>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
        </button>
      </article>
    </div>
  );
}

TwitterFollowCard.propTypes = {
  userName: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
