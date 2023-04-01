///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type ConversationsInfoResponse = SlackAPIResponse & {
  channel?: Channel;
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export interface Channel {
  connected_limited_team_ids?: string[];
  connected_team_ids?: string[];
  context_team_id?: string;
  conversation_host_id?: string;
  created?: number;
  creator?: string;
  id?: string;
  internal_team_ids?: string[];
  is_archived?: boolean;
  is_channel?: boolean;
  is_ext_shared?: boolean;
  is_general?: boolean;
  is_global_shared?: boolean;
  is_group?: boolean;
  is_im?: boolean;
  is_member?: boolean;
  is_moved?: number;
  is_mpim?: boolean;
  is_non_threadable?: boolean;
  is_org_default?: boolean;
  is_org_mandatory?: boolean;
  is_org_shared?: boolean;
  is_pending_ext_shared?: boolean;
  is_private?: boolean;
  is_read_only?: boolean;
  is_shared?: boolean;
  is_thread_only?: boolean;
  last_read?: string;
  locale?: string;
  name?: string;
  name_normalized?: string;
  num_members?: number;
  pending_connected_team_ids?: string[];
  pending_shared?: string[];
  previous_names?: string[];
  purpose?: Purpose;
  shared_team_ids?: string[];
  topic?: Purpose;
  unlinked?: number;
  updated?: number;
}

export interface Purpose {
  creator?: string;
  last_set?: number;
  value?: string;
}
