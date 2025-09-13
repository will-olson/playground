Common embed error codes and messages
When a secure embed encounters an error, an outbound workbook:error event is emitted. You can configure your host application to listen for the workbook error events emitted and display one or more custom error messages depending on the error code.

This document lists possible error codes that might be emitted from a secure embed which you can use to troubleshoot the root cause of an error and add custom handling to your host application code.

📘
For error messages associated with secure embed URLs signed with client credentials, see Secure embed error code reference.
General error codes
These error codes can be emitted while a user interacts with the embedded content.

Error code	Description	Possible causes
EEXIST	Duplicate record detected.	User or team already exists.
EPERM	The requested operation is not permitted.	User does not exist in Sigma and automatic user creation is disabled.
ESTALE	Stale object.	The workbook page, or element might have been deleted or archived, or the connection used by the embedded content was archived.
ENOENT	Object does not exist.	Workbook is not found or the embed user is deactivated.
EACCES	Permission denied.	The embedded workbook is not shared or no longer shared with the user, or the user does not have a required permission enabled on their assigned account type.
EINVAL	Invalid argument.	The embed URL contains a URL parameter that doesn't exist, the format of the URL is incorrect, or the JWT is expired.
ETIMEDOUT	Request timed out.	A query sent to the warehouse timed out, including an export request. The warehouse is overloaded.
NETWORK	Unable to connect to Sigma.	Your local network is unavailable or a firewall or browser extension is preventing access to Sigma.
UNKNOWN	Default API error message for all other errors.	Some other error.
Other error messages
Some error messages do not return a code, but display a message to the user:

Error message

Cause

Next step

Session expired. Reload the page.

Session length has been exceeded.

To avoid this error, consider using a timer in your code to either display a refresh option or auto-refresh the embed for your users before the session length specified with the exp JWT claim is reached.

You don't have permission to access this page.

Invalid clientID, or other causes.

Validate that your client ID is passed to the embed correctly and is active.

Validate that the user or team is granted access to the embedded content in Sigma.

Validate that the user is active in Sigma.

You don't have permission to access this page. Cannot update account type for internal users.

Internal users can't update optional claims in the JWT URL.

Modify the client-side API generating your JWT URL to not pass optional claims, such as first_name, last_name, user_attributes, teams or account_type.

You don't have permission to access this page. Invalid sub field in payload.

The email address in the sub claim of the JWT is invalid.

Validate the email address entered in the claim is correct, and doesn't contain any white space or unsupported characters, such as underscores.