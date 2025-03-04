///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type AdminAppsRequestsListResponse = SlackAPIResponse & {
  app_requests?: AppRequest[];
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
  warning?: string;
};

export interface AppRequest {
  app?: App;
  date_created?: number;
  id?: string;
  is_user_app_collaborator?: boolean;
  message?: string;
  previous_resolution?: PreviousResolution;
  scopes?: any[];
  team?: Team;
  user?: User;
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

export interface PreviousResolution {
  scopes?: any[];
  status?: string;
}

export interface Team {
  domain?: string;
  id?: string;
  name?: string;
}

export interface User {
  email?: string;
  id?: string;
  name?: string;
}

export interface ResponseMetadata {
  messages?: string[];
  next_cursor?: string;
  warnings?: string[];
}
