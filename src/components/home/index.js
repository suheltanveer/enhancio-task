import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";

class Home extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { githubUsers } = this.props;
    console.dir(JSON.stringify(githubUsers, null, 2));

    return (
      <section>
        <ul>
          {githubUsers &&
            githubUsers.map(r => {
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
    githubUsers: state.githubUsers
  };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Home);
