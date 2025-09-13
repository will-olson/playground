Manage access to a secure embed
To manage who can access your securely embedded content, do the following:

Choose how to manage users.
Create users in Sigma.
Create a team, then add users to the team.
Assign account types and permissions to the users.
Grant access to the workbook with embedded content.
To restrict access to the data used by your secure embed, such as with row-level security, see Restrict access to data in embedded content.

Choose how to manage users in your secure embed
You can manage users of your embed automatically or manually:

Automatic user management. Sigma automatically creates a user based on the email address they used to log in to the host application, called an embed user, when the user accesses your securely embedded content. Internal users granted access can also access your securely embedded content.
Manual user management. Manually provision users in Sigma, such as by using your identity provider (IdP). To manually create user accounts in Sigma, turn off automatic embed user creation.
Each option has different considerations, but choosing to automatically manage users can simplify the setup required and reduces maintenance of user access and permissions to your embedded content:

Automatically manage users	Manually manage users
Application functions as IdP	Reuse existing IdP or OAuth users
Manage users with JWT claims	Manage users in Sigma or your IdP
Users are auto-created from email claim	Users must exist in Sigma
🚧
JWT claims are specific to a user, not a session. Do not use user-specific claims (such as teams, account type, or user attribute values) to manage what a user in a given session can view in an embed. Instead, manage access on the user level. Each user must have their own account to access the embed with the correct access level and permissions. Use consistent claim values for the same embed user across different secure embeds.
Create users to manage access to a secure embed
Manage which users can access your secure embed by creating users in Sigma. Depending on how you choose to manage users in your secure embed, the steps you take to create users are different:

If you rely on the automatic creation of embed users, you do not need to create users before creating your secure embed. You must create a team and include a teams claim so that users can be created. See Create a team to manage access.

If you manually manage users that can access your embed, choose how to create users:

Provision users with your identity provider (IdP) that you use with Sigma to manage authentication.
Send invitations to users from the Create a member API endpoint.
Send invitations to users from the Sigma UI. See Invite new users to your organization.
When you manually create users, you can create embed users (cannot log in to Sigma) or internal users (that can log in to Sigma).

To manually create user accounts in Sigma, turn off automatic embed user creation.

Turn off automatic embed user creation
When you turn off automatic user management, Sigma does not create embed users for everyone that accesses your embedded content. Instead, only internal users can access your content and you must manually provision users in Sigma.

📘
You must be assigned the Admin account type to disable automatic embed user account provisioning.
To disable automatic embed user account provisioning and updates, follow these steps:

Go to Administration > Embeds.
Click Settings.
Turn off the Allow automatic embed user creation toggle.
🚩
If you manually manage user accounts in Sigma, ensure that any internal users who need access to the JWT-authenticated embedded content have logged in to Sigma at least once before attempting to access the embedded content.

If a user has been provisioned with a Sigma account but has never logged in, then attempts to access securely embedded content, they might see an error message: "You don't have permission to access this page. Automatic updating of users is disabled."

Assign users an account type
To manage which features users accessing your embed can access, assign account types to the users accessing your embed. The permissions enabled on an account type manage access to specific features, such as export functionality. You can use a default account type, or create and assign a custom account type.

For details about the default account types and associated feature permissions, see Account type and license overview.

Depending on how you manage access to your embedded content, assign users an account type in a different way:

If you rely on the automatic creation of embed users, anyone accessing the content is assigned to a specific account type defined by the account_type JWT claim. This claim can reference a default or custom account type. If the value assigned to the user in the claim changes, the user's account type is updated.

📘
Internal users accessing your embed use the account type assigned to them. Do not include an account_type claim for internal users.
If you manually manage users that can access your embed, assign account types to the users:

Assign account types to users in Sigma using the memberType option in the Create a member API endpoint, or by following the steps to assign account types in the Sigma UI.
Assign account types to users in your IdP. See Use custom account types with your IdP.
Create a team to manage access
Use one or more teams to manage access to embedded content more easily. Before you publish your securely embedded content, create a team.

Create a team to manage the users that will have access to the embedded content. You can create a team with the create a team API endpoint, or create a team in the Sigma UI.

After creating a team, assign users to the team:

If you rely on the automatic creation of embed users, Sigma automatically assigns embed users to a team that you specify in the teams JWT claim of your secure embed. If you change any team values passed to the teams claim, Sigma automatically overwrites the team assignments for users to the new team assignments.

📘
Internal users accessing your embed use the teams that they are assigned to in Sigma. Do not include a teams claim for internal users.
If you manually manage users that can access your embed, add internal users as members of the team or teams that you created.

After you create a team and add users to the team, make sure they can access the embedded content. See Grant users and teams access to embedded content.

Grant users and teams access to embedded content
When you embed Sigma content in a host application, the content must be published in a workbook within your Sigma organization. You can create a workbook specifically for the embedded content, or you can embed content in an existing workbook that serves other purposes. For step-by-step instructions, see Create a workbook and Draft and publish a workbook.

To make sure that users can access the embedded content, you must share the workbook with one or more teams. You can share the published version of a workbook, or a specific tagged version.

To grant users and teams access to embedded content, do the following:

💡
Simplify access management for your embedded content by using teams. Avoid sharing workspaces or embedded workbooks directly with users.

Collect workbooks with embedded content in one or more workspaces or folders.

Share the relevant workspaces with the relevant teams:

To share programmatically, use the Create or update a grant API endpoint.
To share from the Sigma UI, see Share a folder.
💡
You can grant different levels of access to restrict different interactions with the content in the host application. For example, you can grant one team of internal Sigma users Can explore access to the workbook, and the team of automatically created embed users Can view access.
Grant teams access to the data sources used by the embedded content.

To grant access programmatically, use the Create or update a grant API endpoint.
To use the Sigma UI, see Manage access to data or connections.