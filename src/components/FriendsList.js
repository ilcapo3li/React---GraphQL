import React, { Component } from "react";
import ReactDOM from "react-dom";
import Friend from './Friend';
import { createFragmentContainer, graphql } from "react-relay";

class FriendsList extends Component {
      renderFriends() { 
            return this.props.viewer.frinds.edges.map(edge =>
                  <friend
                        key={edge.node.id}
                        friend={edge.node}
                        viewer={this.props.viewer}
                  />
                        );
      }
  render() {
    return (
      <div>
        <div className="row">
                      <ul>
                            {this.renderFriends()}
          </ul>
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(FriendsList, {
  viewer: graphql`
      fragment FriendsList_viewer on User{
            friends {
                  
            }
            id,
            ....Friend_viewer,
      }
      `
});
