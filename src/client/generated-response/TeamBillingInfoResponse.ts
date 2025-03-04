///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type TeamBillingInfoResponse = SlackAPIResponse & {
  error?: string;
  needed?: string;
  ok: boolean;
  plan?: string;
  provided?: string;
};
