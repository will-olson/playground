JSON web token claims reference
When creating a secure embed, use these claims in the construction of the JWT to pass information in your embed URL.

🚧
JWT claims are specific to a user, not a session. Do not use user-specific claims (such as teams, account type, or user attribute values) to manage what a user in a given session can view in an embed. Instead, manage access on the user level. Each user must have their own account to access the embed with the correct access level and permissions. Use consistent claim values for the same embed user across different secure embeds.
Refer to the following table of claims:

Claim name

Required?

Claim description

Type

sub

Required

The email address of the user logging in. Email addresses must be RFC-1035 compliant, and not include white space or unsupported characters, such as underscores.

string

jti

Required

JWT ID. A unique ID associated with the session.

string

iat

Required

Issued at time, as number of seconds from epoch.

number

exp

Required

Expired at time, as number of seconds from epoch. Cannot exceed 30 days.

number

alg

Optional

Must be HS256. Must be in the header, if included.

string

kid

Required

The embed client ID. Must be in the header.

string

iss

Optional

The issuer key. Enter the embed client ID.

string

oauth_token

Optional

Can only be used with ver: "1.1".

The OAuth token to use when using organization-level OAuth connections. This token must be encrypted with the embed secret.

See Sigma Node.js Embed SDK . This package provides information on how to encrypt your OAuth tokens so that they are compatible with the embed API.

string

connection_oauth_tokens

Optional

Can only be used with ver: "1.1".

Keys are the desired connection IDs and values are encrypted OAuth tokens that the embed user will use to access data for that connection.

See Sigma Node.js Embed SDK . This package provides information on how to encrypt your OAuth tokens so that they are compatible with the embed API.

Record<string,string>

eval_connection_id

Optional

The connection to use instead of the connection that the workbook is associated with.

Connection switching is not applicable when using write-back features.

You can use an ID returned from the list connections API or the connection listed in the URL. See Indentify unique IDs in Sigma for more information.

string

first_name

Optional, affects embed users only.

First name for the embed user.

string

last_name

Optional, affects embed users only.

Last name for the embed user.

string

user_attributes

Optional, affects embed users only.

User attributes for the embed user. Pass multiple attributes in this format: {"attribute1":"value1","attribute2":"value2"}.

Record<string,string>

account_type

Optional, affects embed users only.

Account type for the embed user. When you don't specify an account type, Sigma defaults to the highest account type when assigning values to embed users created through secure embeds.

Internal users accessing your embed use the account type assigned to them. Do not include an account_type claim for internal users.

string

teams

Optional, affects embed users only.

Teams that the embed user is a part of. Pass multiple teams in this format:
["team1", "team2"]

Internal users accessing your embed use the teams that they are assigned to in Sigma. Do not include a teams claim for internal users.

string[]

ver

Optional

JWT version number. The only accepted values are "1.0" or "1.1". If nothing is provided "1.0" is assumed.

string

aud

Optional for ver: "1.0", Required for ver: "1.1"

The audience claim. Must be sigmacomputing if using ver: "1.1". Is ignored if using ver: "1.0"

string