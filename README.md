# Chrome Extension : Require IE
Chrome extension to enforce usage of Internet Explorer for certain legacy website not supporting Chrome.

This extension displays a message to request employees to open the website with Internet Explorer.
If the "IE protocol" has been created, the extension automatically will open Internet Explorer.

IE Protocol
------------
To create the "IE Protocol" you need to create following registry keys :
<pre><code>[HKEY_CURRENT_USER\Software\Classes\ie]
"URL Protocol"="\"\""
@="\"URL:IE Protocol\""

[HKEY_CURRENT_USER\Software\Classes\ie\DefaultIcon]
@="\"explorer.exe,1\""

[HKEY_CURRENT_USER\Software\Classes\ie\shell]

[HKEY_CURRENT_USER\Software\Classes\ie\shell\open]

[HKEY_CURRENT_USER\Software\Classes\ie\shell\open\command]
@="cmd /C set myvar="%1" & call set myvar=%%myvar:ie:=%% & call start /separate iexplore %%myvar%% & exit"
</code></pre>
*source : [https://stackoverflow.com/questions/40531374/open-internet-explorer-from-chrome-using-a-protocol-handler-ieurl](https://stackoverflow.com/questions/40531374/open-internet-explorer-from-chrome-using-a-protocol-handler-ieurl)*