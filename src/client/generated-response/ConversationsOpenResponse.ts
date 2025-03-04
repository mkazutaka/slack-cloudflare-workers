///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type ConversationsOpenResponse = SlackAPIResponse & {
  already_open?: boolean;
  channel?: Channel;
  error?: string;
  needed?: string;
  no_op?: boolean;
  ok: boolean;
  provided?: string;
};

export interface Channel {
  context_team_id?: string;
  created?: number;
  id?: string;
  is_archived?: boolean;
  is_im?: boolean;
  is_open?: boolean;
  is_org_shared?: boolean;
  last_read?: string;
  latest?: Latest;
  priority?: number;
  unread_count?: number;
  unread_count_display?: number;
  updated?: number;
  user?: string;
}

export interface Latest {
  blocks?: Block[];
  bot_id?: string;
  bot_profile?: BotProfile;
  client_msg_id?: string;
  subtype?: string;
  team?: string;
  text?: string;
  ts?: string;
  type?: string;
  user?: string;
}

export interface Block {
  accessory?: Accessory;
  alt_text?: string;
  api_decoration_available?: boolean;
  app_collaborators?: string[];
  app_id?: string;
  author_name?: string;
  block_id?: string;
  bot_user_id?: string;
  button_label?: string;
  call?: Call;
  call_id?: string;
  description?: Description;
  dispatch_action?: boolean;
  element?: Accessory;
  elements?: Accessory[];
  external_id?: string;
  fallback?: string;
  fields?: Description[];
  file?: File;
  file_id?: string;
  function_trigger_id?: string;
  hint?: Description;
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
  is_workflow_app?: boolean;
  label?: Description;
  optional?: boolean;
  provider_icon_url?: string;
  provider_name?: string;
  source?: string;
  text?: Description;
  thumbnail_url?: string;
  title?: Description;
  title_url?: string;
  type?: string;
  url?: string;
  video_url?: string;
}

export interface Accessory {
  accessibility_label?: string;
  action_id?: string;
  alt_text?: string;
  border?: number;
  confirm?: Confirm;
  default_to_current_conversation?: boolean;
  elements?: AccessoryElement[];
  fallback?: string;
  filter?: Filter;
  focus_on_load?: boolean;
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
  indent?: number;
  initial_channel?: string;
  initial_channels?: string[];
  initial_conversation?: string;
  initial_conversations?: string[];
  initial_date?: string;
  initial_date_time?: number;
  initial_option?: Option;
  initial_options?: Option[];
  initial_time?: string;
  initial_user?: string;
  initial_users?: string[];
  max_selected_items?: number;
  min_query_length?: number;
  offset?: number;
  option_groups?: OptionGroup[];
  options?: Option[];
  placeholder?: Description;
  response_url_enabled?: boolean;
  style?: string;
  text?: Description;
  timezone?: string;
  type?: string;
  url?: string;
  value?: string;
}

export interface Confirm {
  confirm?: Description;
  deny?: Description;
  style?: string;
  text?: Description;
  title?: Description;
}

export interface Description {
  emoji?: boolean;
  text?: string;
  type?: string;
  verbatim?: boolean;
}

export interface AccessoryElement {
  border?: number;
  elements?: PurpleElement[];
  indent?: number;
  offset?: number;
  style?: string;
  type?: string;
}

export interface PurpleElement {
  channel_id?: string;
  name?: string;
  range?: string;
  skin_tone?: number;
  style?: Style;
  team_id?: string;
  text?: string;
  timestamp?: string;
  type?: string;
  unicode?: string;
  url?: string;
  user_id?: string;
  usergroup_id?: string;
  value?: string;
}

export interface Style {
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  strike?: boolean;
}

export interface Filter {
  exclude_bot_users?: boolean;
  exclude_external_shared_channels?: boolean;
  include?: string[];
}

export interface Option {
  description?: Description;
  text?: Description;
  url?: string;
  value?: string;
}

export interface OptionGroup {
  label?: Description;
  options?: Option[];
}

export interface Call {
  media_backend_type?: string;
  v1?: V1;
}

export interface V1 {
  active_participants?: Participant[];
  all_participants?: Participant[];
  app_icon_urls?: AppIconUrls;
  app_id?: string;
  channels?: string[];
  created_by?: string;
  date_end?: number;
  date_start?: number;
  desktop_app_join_url?: string;
  display_id?: string;
  has_ended?: boolean;
  id?: string;
  is_dm_call?: boolean;
  join_url?: string;
  name?: string;
  was_accepted?: boolean;
  was_missed?: boolean;
  was_rejected?: boolean;
}

export interface Participant {
  avatar_url?: string;
  display_name?: string;
  external_id?: string;
  slack_id?: string;
}

export interface AppIconUrls {
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

export interface File {
  alt_txt?: string;
  app_id?: string;
  app_name?: string;
  bot_id?: string;
  cc?: Cc[];
  channel_actions_count?: number;
  channel_actions_ts?: string;
  channels?: string[];
  comments_count?: number;
  converted_pdf?: string;
  created?: number;
  deanimate?: string;
  deanimate_gif?: string;
  display_as_bot?: boolean;
  duration_ms?: number;
  edit_link?: string;
  editable?: boolean;
  editor?: string;
  external_id?: string;
  external_type?: string;
  external_url?: string;
  file_access?: string;
  filetype?: string;
  from?: Cc[];
  groups?: string[];
  has_more?: boolean;
  has_more_shares?: boolean;
  has_rich_preview?: boolean;
  headers?: Headers;
  hls?: string;
  hls_embed?: string;
  id?: string;
  image_exif_rotation?: number;
  ims?: string[];
  initial_comment?: InitialComment;
  is_external?: boolean;
  is_public?: boolean;
  is_starred?: boolean;
  last_editor?: string;
  lines?: number;
  lines_more?: number;
  media_display_type?: string;
  media_progress?: MediaProgress;
  mimetype?: string;
  mode?: string;
  mp4?: string;
  name?: string;
  non_owner_editable?: boolean;
  num_stars?: number;
  original_attachment_count?: number;
  original_h?: string;
  original_w?: string;
  permalink?: string;
  permalink_public?: string;
  pinned_to?: string[];
  pjpeg?: string;
  plain_text?: string;
  pretty_type?: string;
  preview?: string;
  preview_highlight?: string;
  preview_is_truncated?: boolean;
  preview_plain_text?: string;
  public_url_shared?: boolean;
  reactions?: Reaction[];
  saved?: Saved;
  sent_to_self?: boolean;
  shares?: Shares;
  simplified_html?: string;
  size?: number;
  source_team?: string;
  subject?: string;
  subtype?: string;
  thumb_1024?: string;
  thumb_1024_gif?: string;
  thumb_1024_h?: string;
  thumb_1024_w?: string;
  thumb_160?: string;
  thumb_160_gif?: string;
  thumb_160_h?: string;
  thumb_160_w?: string;
  thumb_360?: string;
  thumb_360_gif?: string;
  thumb_360_h?: string;
  thumb_360_w?: string;
  thumb_480?: string;
  thumb_480_gif?: string;
  thumb_480_h?: string;
  thumb_480_w?: string;
  thumb_64?: string;
  thumb_64_gif?: string;
  thumb_64_h?: string;
  thumb_64_w?: string;
  thumb_720?: string;
  thumb_720_gif?: string;
  thumb_720_h?: string;
  thumb_720_w?: string;
  thumb_80?: string;
  thumb_800?: string;
  thumb_800_gif?: string;
  thumb_800_h?: string;
  thumb_800_w?: string;
  thumb_80_gif?: string;
  thumb_80_h?: string;
  thumb_80_w?: string;
  thumb_960?: string;
  thumb_960_gif?: string;
  thumb_960_h?: string;
  thumb_960_w?: string;
  thumb_gif?: string;
  thumb_pdf?: string;
  thumb_pdf_h?: string;
  thumb_pdf_w?: string;
  thumb_tiny?: string;
  thumb_video?: string;
  thumb_video_h?: number;
  thumb_video_w?: number;
  timestamp?: number;
  title?: string;
  to?: Cc[];
  transcription?: Transcription;
  updated?: number;
  url_private?: string;
  url_private_download?: string;
  user?: string;
  user_team?: string;
  username?: string;
  vtt?: string;
}

export interface Cc {
  address?: string;
  name?: string;
  original?: string;
}

export interface Headers {
  date?: string;
  in_reply_to?: string;
  message_id?: string;
  reply_to?: string;
}

export interface InitialComment {
  channel?: string;
  comment?: string;
  created?: number;
  id?: string;
  is_intro?: boolean;
  timestamp?: number;
  user?: string;
}

export interface MediaProgress {
  duration_ms?: number;
  max_offset_ms?: number;
  offset_ms?: number;
}

export interface Reaction {
  count?: number;
  name?: string;
  url?: string;
  users?: string[];
}

export interface Saved {
  date_completed?: number;
  date_due?: number;
  is_archived?: boolean;
  state?: string;
}

export interface Shares {
  private?: { [key: string]: Private[] };
  public?: { [key: string]: Private[] };
}

export interface Private {
  channel_name?: string;
  latest_reply?: string;
  reply_count?: number;
  reply_users?: string[];
  reply_users_count?: number;
  share_user_id?: string;
  team_id?: string;
  thread_ts?: string;
  ts?: string;
}

export interface Transcription {
  locale?: string;
  status?: string;
}

export interface BotProfile {
  app_id?: string;
  deleted?: boolean;
  icons?: Icons;
  id?: string;
  name?: string;
  team_id?: string;
  updated?: number;
}

export interface Icons {
  image_36?: string;
  image_48?: string;
  image_72?: string;
}
