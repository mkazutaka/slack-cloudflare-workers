///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type UsersConversationsResponse = SlackAPIResponse & {
  channels?: Channel[];
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
};

export interface Channel {
  context_team_id?: string;
  conversation_host_id?: string;
  created?: number;
  creator?: string;
  enterprise_id?: string;
  id?: string;
  internal_team_ids?: string[];
  is_archived?: boolean;
  is_channel?: boolean;
  is_ext_shared?: boolean;
  is_general?: boolean;
  is_global_shared?: boolean;
  is_group?: boolean;
  is_im?: boolean;
  is_moved?: number;
  is_mpim?: boolean;
  is_open?: boolean;
  is_org_default?: boolean;
  is_org_mandatory?: boolean;
  is_org_shared?: boolean;
  is_pending_ext_shared?: boolean;
  is_private?: boolean;
  is_shared?: boolean;
  is_user_deleted?: boolean;
  last_read?: string;
  name?: string;
  name_normalized?: string;
  parent_conversation?: string;
  pending_connected_team_ids?: string[];
  pending_shared?: string[];
  previous_names?: string[];
  priority?: number;
  purpose?: Purpose;
  shared_team_ids?: string[];
  topic?: Purpose;
  unlinked?: number;
  updated?: number;
  user?: string;
}

export interface Purpose {
  creator?: string;
  last_set?: number;
  value?: string;
}

export interface ResponseMetadata {
  next_cursor?: string;
}
