/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Friend_friend$ref: FragmentReference;
declare export opaque type Friend_friend$fragmentType: Friend_friend$ref;
export type Friend_friend = {|
  +id: string,
  +firstName: ?string,
  +lastName: ?string,
  +gender: ?string,
  +language: ?string,
  +email: ?string,
  +image: ?string,
  +$refType: Friend_friend$ref,
|};
export type Friend_friend$data = Friend_friend;
export type Friend_friend$key = {
  +$data?: Friend_friend$data,
  +$fragmentRefs: Friend_friend$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Friend_friend",
  "type": "Friend",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
};
// prettier-ignore
(node/*: any*/).hash = 'abdb9e2fb5925ca88a493e1345efbdee';
module.exports = node;
