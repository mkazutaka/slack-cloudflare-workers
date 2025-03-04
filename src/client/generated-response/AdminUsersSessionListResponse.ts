///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type AdminUsersSessionListResponse = SlackAPIResponse & {
  active_sessions?: ActiveSession[];
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
};

export interface ActiveSession {
  created?: Created;
  recent?: Created;
  session_id?: number;
  team_id?: string;
  user_id?: string;
}

export interface Created {
  device_hardware?: string;
  ip?: string;
  os?: string;
  os_version?: string;
  slack_client_version?: string;
}

export interface ResponseMetadata {
  next_cursor?: string;
}
