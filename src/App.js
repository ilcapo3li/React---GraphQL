import React from "react";
import ReactDOM from "react-dom";
import Friends from "./components/Friends";
import { QueryRenderer, graphql } from "react-relay";
import { Environment, Network, RecordSource, Store } from "relay-runtime";

// function fetchQuery(operation, variables) {
//   return fetch("/graphql", {
//     method
//   });
// }

const mountNode = document.getElementById("root");

ReactDOM.render(
  <QueryRenderer
    environment={modernEnvironment}
    query={qraphql`
                  query AppQuery{
                        viewer {
                              ...Friends_viewer
                        }
                  }
            `}
    variables={{}}
    render={({ error, props }) => {
      if (props) {
        return <Friends viewer={props.viewer} />;
      } else {
        return <div>Loading.......</div>;
      }
    }}
  />,
  mountNode
);
