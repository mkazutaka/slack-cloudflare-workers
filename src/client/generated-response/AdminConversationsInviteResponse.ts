///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type AdminConversationsInviteResponse = SlackAPIResponse & {
  error?: string;
  failed_user_ids?: FailedUserids;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export interface FailedUserids {
  U00000000?: string;
  U00000001?: string;
}
