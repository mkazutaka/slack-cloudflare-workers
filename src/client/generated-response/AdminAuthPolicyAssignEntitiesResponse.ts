///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type AdminAuthPolicyAssignEntitiesResponse = SlackAPIResponse & {
  entity_total_count?: number;
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
};
