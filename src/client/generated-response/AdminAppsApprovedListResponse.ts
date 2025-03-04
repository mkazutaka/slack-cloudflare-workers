///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type AdminAppsApprovedListResponse = SlackAPIResponse & {
  approved_apps?: ApprovedApp[];
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
  warning?: string;
};

export interface ApprovedApp {
  app?: App;
  date_updated?: number;
  last_resolved_by?: LastResolvedBy;
  scopes?: Scope[];
}

export interface App {
  additional_info?: string;
  app_directory_url?: string;
  app_homepage_url?: string;
  description?: string;
  help_url?: string;
  icons?: Icons;
  id?: string;
  is_app_directory_approved?: boolean;
  is_internal?: boolean;
  name?: string;
  privacy_policy_url?: string;
}

export interface Icons {
  image_1024?: string;
  image_128?: string;
  image_192?: string;
  image_32?: string;
  image_36?: string;
  image_48?: string;
  image_512?: string;
  image_64?: string;
  image_72?: string;
  image_96?: string;
  image_original?: string;
}

export interface LastResolvedBy {
  actor_id?: string;
  actor_type?: string;
}

export interface Scope {
  description?: string;
  is_sensitive?: boolean;
  name?: string;
  token_type?: string;
}

export interface ResponseMetadata {
  messages?: string[];
  next_cursor?: string;
  warnings?: string[];
}
