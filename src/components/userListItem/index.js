import React from "react";

const UserListItem = ({ avatar_url, info, login }) => {
  return (
    <li>
      <img src={avatar_url} alt={info.name} />
      <div>
        <div>
          <a href={avatar_url}>{login}</a>
          {info.name && <span>{info.name}</span>}
        </div>
        {info.bio && <div>{info.bio}</div>}
        <div>
          {info.location && <span>{info.location}</span>}
          {info.email && <span>{info.email}</span>}
        </div>
      </div>
    </li>
  );
};

export default UserListItem;
