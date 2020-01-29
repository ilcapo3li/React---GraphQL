/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Friend_friend$ref = any;
type Friend_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FriendsList_viewer$ref: FragmentReference;
declare export opaque type FriendsList_viewer$fragmentType: FriendsList_viewer$ref;
export type FriendsList_viewer = {|
  +friends: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: Friend_friend$ref,
      |}
    |}>
  |},
  +id: string,
  +$fragmentRefs: Friend_viewer$ref,
  +$refType: FriendsList_viewer$ref,
|};
export type FriendsList_viewer$data = FriendsList_viewer;
export type FriendsList_viewer$key = {
  +$data?: FriendsList_viewer$data,
  +$fragmentRefs: FriendsList_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "FriendsList_viewer",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
                  "kind": "FragmentSpread",
                  "name": "Friend_friend",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    },
    (v0/*: any*/),
    {
      "kind": "FragmentSpread",
      "name": "Friend_viewer",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '633a81b44918d1dd9a4b7d48420127fc';
module.exports = node;
