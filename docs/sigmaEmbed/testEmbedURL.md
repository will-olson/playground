Test an embed URL in the embed sandbox
Sigma's embed sandbox environment allows you to test your embed before integrating the content into the host application. View the content from the embed user's perspective to verify security settings and other configurations.

This document explains how to access and use the embed sandbox to develop and test your secure embed.

System and user requirements
Secure embedding must be enabled for your organization.
You must be assigned the Admin account type or have been granted embedding credentials by an admin. See Generate embed client credentials for more information.
Access the embed sandbox
Open a workbook that contains the content you want to embed.

In the workbook header, click the caret () associated with the workbook’s name.

In the workbook menu, select Embedding.

In the Embed workbook modal, select the appropriate tab:

Select JWT if you are using JSON Web Tokens to sign your secure embed. See Create an embed API with JSON Web Tokens.
Select Secure if you are not using JSON web tokens to sign your secure embed, or if you are using application embedding (deprecated).
Locate the content you want to test, then click Test to open the embed sandbox.

Configure the embed in the embed sandbox
In the Embed Sandbox page, configure the embed details in the Configure embed panel.

The Embed path or Workbook path field is auto-populated based on the path referenced in Access the embed sandbox, step 5. To test a different embed, enter the preferred path.

In the Client credentials field, select the name of the applicable client credentials. See Generate embed client credentials.

Set the parameters in the Configuration section of the Configure embed panel:

[optional] In the Controls field, enter all control ID and value pairs to pass through to the embed. For example, to set a compass directional control with the control ID compass-control to the value North, enter the control ID and value pair compass-control=North.

[optional] In the Theme field, select any default or custom workbook theme saved to your organization.

[optional] In the Menu position field, select the position of the embed menu.

The Mode field is prefilled based on the selection you made in Access the embed sandbox, step 4. If supporting a deprecated embed environment, select the Application (Legacy) option.

Set the parameters in the Options for selected mode section of the Configure embed panel.

i. If your mode is set to Secure, configure these options:

In the Email field, enter the email address associated with the embed user's account.

In the Embed user teams field, select a saved Sigma team to inherit its permissions.

In the Account type field, select an available default or custom account type saved to your organization.

[optional] In the User attributes field, enter all user attributes and values to pass through to the embed.

[optional] For Hide folder navigation turn on the toggle to hide the folder navigation in the embed menu, or turn off the toggle to display it.

[optional] For Hide run as recipient turn on the toggle to hide the Run queries as recipient option in the Send Now and Schedule Exports modals , or turn off the toggle to to display it.

ii. If your mode is set to JWT, configure these options:

📘
These options only appear if you have the Admin account type. If you don’t have the Admin account type, you can only test the embed as yourself.
[optional] Email: Enter the email of the user that you want to use to log in to the embed. By default, this field is set with the email address you use to log into Sigma.

[optional] Assign new teams: Turn on the toggle if you want to assign the user to a team that has permission to see this workbook. This field is only applicable to external users.

[optional] Assign new account type: Turn on the toggle if you want to assign the user to an account type. This field is only applicable to external users.

[optional] Assign new user attributes: Enter all user attributes and values to pass through to the embed.

📘
Optional JWT claims, such as eval_connection_id, are not supported in the embed sandbox.
Set the parameters in the Advanced options section of the Configure embed panel:

[optional] In the Other parameters field, enter additional key-value pairs for additional parameters you want to configure in the embed.

In the Session length field, enter the duration (in seconds) of the embed URL's browser session validity.

In the External user ID field, enter the unique identifier of each individual to use the embed. This is only applicable if your mode is set to Secure.

[optional] In the Version tag field, enter the name of the version tag to use when rendering the embedded content.

[optional] For Hide tooltips, turn on the toggle to hide chart mark tooltips, or turn off the toggle to display them.

[optional] For Disable mobile view turn on the toggle to disable mobile view, or turn off the toggle to enable it.

Click Load embed to test the configured embed.

If necessary, adjust the configurations, then click Load embed again to render the changes.

💡
If the sandbox displays a message indicating you don't have permission to access the page, ensure the workbook is shared with the team selected in the Embed user teams or Assign new teams section.
Test the embed outside of Sigma
The embed sandbox can generate a URL for inspection and additional testing outside of Sigma.

After you load the embed, the Configure embed panel footer displays a View URL function. Click this option to generate the embed URL with the configured parameters.

To generate a one-time-use URL to test in a browser or application code, click Usable URL. The URL is automatically copied to your clipboard.