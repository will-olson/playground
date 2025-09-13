URL encoding reference for parameters
When you add query string parameters to a URL, such as to customize an embed or set control values in a URL, you must encode non-ASCII characters to make sure that your URL works correctly.

Internet addresses must be in ASCII character format. When you set control values or embed parameter values (such as email addresses) in a URL, any non-ASCII characters (such as an @) must be replaced with their UTF-8 encoded equivalent. UTF-8 is the default character set for HTML.

If you programmatically generate a URL with query string parameters, you can use a URL safe function to encode values of the parameters before adding them to the URL:

For JavaScript, use the JavaScript function encodeURIComponent.
For Python, use the Python method urllib.parse.urlencode().
If you do not use code to generate a URL, use this reference page of common percent encodings to manually construct a properly-formatted and encoded URL. If you want to encode a character not listed here, search for more details on the web.

Punctuation codes
This table lists the common punctuation symbols that you might need to encode in a URL:

Character	Name	URL encoding syntax
space	%20
#	pound sign, hashtag, octothorpe	%23
%	percent sign	%25
'	apostrophe	%27
-	hyphen	%2B
,	comma	%2C
.	period	%2E
:	colon	%3A
=	equals sign	%3D
?	question mark	%3F
@	at sign	%40
_	underscore	%5F
Currency
This table lists common currency symbols that you might need to encode in a URL:

Character	Name	URL encoding syntax
¢	cent	%C2%A2
$	Dollar	%24
€	Euro	%20%82%AC
£	Pound	%C2%A3
¥	Yen	%C2%A5
