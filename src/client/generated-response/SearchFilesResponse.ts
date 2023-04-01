///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type SearchFilesResponse = SlackAPIResponse & {
  error?: string;
  files?: Files;
  needed?: string;
  ok: boolean;
  provided?: string;
  query?: string;
};

export interface Files {
  matches?: Match[];
  pagination?: Pagination;
  paging?: Paging;
  total?: number;
}

export interface Match {
  channels?: string[];
  comments_count?: number;
  converted_pdf?: string;
  created?: number;
  display_as_bot?: boolean;
  edit_link?: string;
  editable?: boolean;
  external_id?: string;
  external_type?: string;
  external_url?: string;
  file_access?: string;
  filetype?: string;
  groups?: string[];
  has_more_shares?: boolean;
  has_rich_preview?: boolean;
  id?: string;
  image_exif_rotation?: number;
  ims?: string[];
  is_external?: boolean;
  is_public?: boolean;
  is_starred?: boolean;
  last_editor?: string;
  lines?: number;
  lines_more?: number;
  media_display_type?: string;
  mimetype?: string;
  mode?: string;
  name?: string;
  non_owner_editable?: boolean;
  original_h?: number;
  original_w?: number;
  permalink?: string;
  permalink_public?: string;
  pretty_type?: string;
  preview?: string;
  preview_highlight?: string;
  preview_is_truncated?: boolean;
  public_url_shared?: boolean;
  shares?: Shares;
  size?: number;
  thumb_1024?: string;
  thumb_1024_h?: number;
  thumb_1024_w?: number;
  thumb_160?: string;
  thumb_360?: string;
  thumb_360_h?: number;
  thumb_360_w?: number;
  thumb_480?: string;
  thumb_480_h?: number;
  thumb_480_w?: number;
  thumb_64?: string;
  thumb_720?: string;
  thumb_720_h?: number;
  thumb_720_w?: number;
  thumb_80?: string;
  thumb_800?: string;
  thumb_800_h?: number;
  thumb_800_w?: number;
  thumb_960?: string;
  thumb_960_h?: number;
  thumb_960_w?: number;
  thumb_pdf?: string;
  thumb_pdf_h?: number;
  thumb_pdf_w?: number;
  thumb_tiny?: string;
  thumb_video?: string;
  timestamp?: number;
  title?: string;
  updated?: number;
  url_private?: string;
  url_private_download?: string;
  user?: string;
  user_team?: string;
  username?: string;
}

export interface Shares {
  public?: { [key: string]: Public[] };
}

export interface Public {
  channel_name?: string;
  reply_count?: number;
  reply_users?: string[];
  reply_users_count?: number;
  share_user_id?: string;
  team_id?: string;
  ts?: string;
}

export interface Pagination {
  first?: number;
  last?: number;
  page?: number;
  page_count?: number;
  per_page?: number;
  total_count?: number;
}

export interface Paging {
  count?: number;
  page?: number;
  pages?: number;
  total?: number;
}
