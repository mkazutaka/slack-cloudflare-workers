///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type ConversationsListConnectInvitesResponse = SlackAPIResponse & {
  arg?: string;
  error?: string;
  invites?: InviteElement[];
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
};

export interface InviteElement {
  acceptances?: Acceptance[];
  channel?: Channel;
  date_last_updated?: number;
  direction?: string;
  invite?: InviteInvite;
  invite_type?: string;
  status?: string;
}

export interface Acceptance {
  accepting_team?: IngTeam;
  accepting_user?: TingUser;
  approval_status?: string;
  date_accepted?: number;
  date_invalid?: number;
  date_last_updated?: number;
  reviews?: Review[];
}

export interface IngTeam {
  avatar_base_url?: string;
  date_created?: number;
  domain?: string;
  icon?: Icon;
  id?: string;
  is_verified?: boolean;
  name?: string;
}

export interface Icon {
  image_102?: string;
  image_132?: string;
  image_230?: string;
  image_34?: string;
  image_44?: string;
  image_68?: string;
  image_88?: string;
  image_default?: boolean;
  image_original?: string;
}

export interface TingUser {
  id?: string;
  name?: string;
  profile?: Profile;
  team_id?: string;
  updated?: number;
  who_can_share_contact_card?: string;
}

export interface Profile {
  avatar_hash?: string;
  display_name?: string;
  display_name_normalized?: string;
  email?: string;
  image_1024?: string;
  image_192?: string;
  image_24?: string;
  image_32?: string;
  image_48?: string;
  image_512?: string;
  image_72?: string;
  image_original?: string;
  is_custom_image?: boolean;
  real_name?: string;
  real_name_normalized?: string;
  team?: string;
}

export interface Review {
  date_review?: number;
  reviewing_team?: IngTeam;
  type?: string;
}

export interface Channel {
  id?: string;
  is_im?: boolean;
  is_private?: boolean;
  name?: string;
}

export interface InviteInvite {
  date_created?: number;
  date_invalid?: number;
  id?: string;
  inviting_team?: IngTeam;
  inviting_user?: TingUser;
  link?: string;
  recipient_email?: string;
  recipient_user_id?: string;
}

export interface ResponseMetadata {
  messages?: string[];
  next_cursor?: string;
}
