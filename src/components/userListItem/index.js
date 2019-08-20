import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const UserInfo = styled.div`
  margin-left: 20px;
`;

const User = styled.h3`
  margin: 0 0 5px;
  font-weight: normal;
  font-size: 1em;
`;

const UserTag = styled.a`
  text-decoration: none;
`;

const UserName = styled.span`
  margin-left: 20px;
`;

const UserBio = styled.p`
  font-size: 0.9em;
  line-height: 1.5;
  margin: 0 0 5px;
`;

const UserOtherInfo = styled.div`
  font-size: 0.9em;
  color: #666;
`;

const UserLocation = styled.span`
  display: inline-flex;
  align-item: center;

  span {
    padding-left: 5px;
  }
`;
const UserEmail = styled.span`
  margin-left: 20px;
`;

const UserListItem = ({
  avatar_url,
  html_url,
  name,
  login,
  bio,
  location,
  email
}) => {
  return (
    <ListItem>
      <Img src={avatar_url} alt={name} />
      <UserInfo>
        <User>
          <UserTag href={html_url} rel="noopener noreferrer" target="_blank">
            {login}
          </UserTag>
          <UserName>{name}</UserName>
        </User>
        <UserBio>{bio}</UserBio>
        <UserOtherInfo>
          {location && (
            <UserLocation>
              <svg
                viewBox="0 0 12 16"
                version="1.1"
                width="12"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                />
              </svg>
              <span>{location}</span>
            </UserLocation>
          )}
          {email && (
            <UserEmail>
              <svg
                viewBox="0 0 14 16"
                version="1.1"
                width="14"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
                />
              </svg>
              <span>{email}</span>
            </UserEmail>
          )}
        </UserOtherInfo>
      </UserInfo>
    </ListItem>
  );
};

export default UserListItem;
