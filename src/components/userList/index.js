import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../actions";
import styled from "styled-components";
import UserListItem from "../userListItem";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

class UserList extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { githubUsers } = this.props;
    const { users, loading, error } = githubUsers;

    if (error) {
      return <div>{error.message}</div>;
    }

    if (loading) {
      return <div>loading...</div>;
    }

    return (
      <section>
        <List>
          {users.map(user => {
            return <UserListItem key={user.id} {...user} />;
          })}
        </List>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    githubUsers: state.users
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(UserList);
