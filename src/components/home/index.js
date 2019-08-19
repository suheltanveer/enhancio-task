import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRepos } from "../../actions";

class Home extends Component {
  componentDidMount() {
    this.props.fetchRepos();
  }

  render() {
    const { repos } = this.props;
    console.log(repos);

    return (
      <section>
        <ul>
          {repos &&
            repos.map(r => {
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
    repos: state.repos
  };
};

export default connect(
  mapStateToProps,
  { fetchRepos }
)(Home);
