/**
 * @flow
 * @relayHash 11b2c8bda6bc26c0c64a98820de7d1e5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Friends_viewer$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Friends_viewer$ref
  |}
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  viewer {
    ...Friends_viewer
    id
  }
}

fragment Friend_friend on Friend {
  id
  firstName
  lastName
  gender
  language
  email
  image
}

fragment Friend_viewer on User {
  id
}

fragment FriendsList_viewer on User {
  friends {
    edges {
      node {
        id
        ...Friend_friend
      }
    }
  }
  id
  ...Friend_viewer
}

fragment Friends_viewer on User {
  id
  ...FriendsList_viewer
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Friends_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "friends",
            "storageKey": null,
            "args": null,
            "concreteType": "FriendConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "FriendEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Friend",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "firstName",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "lastName",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "gender",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "language",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "email",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "image",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  viewer {\n    ...Friends_viewer\n    id\n  }\n}\n\nfragment Friend_friend on Friend {\n  id\n  firstName\n  lastName\n  gender\n  language\n  email\n  image\n}\n\nfragment Friend_viewer on User {\n  id\n}\n\nfragment FriendsList_viewer on User {\n  friends {\n    edges {\n      node {\n        id\n        ...Friend_friend\n      }\n    }\n  }\n  id\n  ...Friend_viewer\n}\n\nfragment Friends_viewer on User {\n  id\n  ...FriendsList_viewer\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '488b709bc556da80a66a9c96cbd6dc38';
module.exports = node;
