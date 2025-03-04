///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type OpenIDConnectTokenResponse = SlackAPIResponse & {
  access_token?: string;
  error?: string;
  expires_in?: number;
  id_token?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  refresh_token?: string;
  token_type?: string;
  warning?: string;
};
