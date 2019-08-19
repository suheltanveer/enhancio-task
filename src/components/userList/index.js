import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { githubUsers } = this.props;
    const { users, loading, error } = githubUsers;
    console.log(users);

    if (error) {
      return <div>{error.message}</div>;
    }

    if (loading) {
      return <div>loading...</div>;
    }

    return (
      <section>
        <ul>
          {users.map(r => {
            return (
              <li key={r.id}>
                <img src={r.avatar_url} alt={r.login} />
                <div>
                  <div>{r.login}</div>
                </div>
              </li>
            );
          })}
        </ul>
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
  { fetchUsers }
)(UserList);
