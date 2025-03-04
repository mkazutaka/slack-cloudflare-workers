///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type OpenIDConnectUserInfoResponse = SlackAPIResponse & {
  date_email_verified?: number;
  email?: string;
  email_verified?: boolean;
  error?: string;
  family_name?: string;
  given_name?: string;
  "https://slack.com/enterprise_domain"?: string;
  "https://slack.com/enterprise_id"?: string;
  "https://slack.com/enterprise_name"?: string;
  "https://slack.com/team_domain"?: string;
  "https://slack.com/team_id"?: string;
  "https://slack.com/team_image_102"?: string;
  "https://slack.com/team_image_132"?: string;
  "https://slack.com/team_image_230"?: string;
  "https://slack.com/team_image_34"?: string;
  "https://slack.com/team_image_44"?: string;
  "https://slack.com/team_image_68"?: string;
  "https://slack.com/team_image_88"?: string;
  "https://slack.com/team_name"?: string;
  "https://slack.com/user_id"?: string;
  "https://slack.com/user_image_1024"?: string;
  "https://slack.com/user_image_192"?: string;
  "https://slack.com/user_image_24"?: string;
  "https://slack.com/user_image_32"?: string;
  "https://slack.com/user_image_48"?: string;
  "https://slack.com/user_image_512"?: string;
  "https://slack.com/user_image_72"?: string;
  locale?: string;
  name?: string;
  needed?: string;
  ok: boolean;
  picture?: string;
  provided?: string;
  sub?: string;
  warning?: string;
};
