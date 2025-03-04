///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type ConversationsMarkResponse = SlackAPIResponse & {
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
};
