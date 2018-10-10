## Intro
---------

- This module is pretty simple.  The purpose is to take a log file containing HTTP/HTTPS requests and match up the URL's with the sites that they belong to.
- This can be integrated into a front end dashboard in order to take a users browsing history and make it a little easier to understand.

- There are currently 4 different lists contained in this module.
1. adServers - A list of known ad servers.
2. userAgents - A list of known User Agent strings and the apps they are associated with.
3. sites - A list of URL's and a friendly/descriptive name of the site/service it belongs to.
4. bundleIds - A list of known Apple bundle ids and the apps they are associated with.


- Additionally you will notice that the script attempts to aggregate all of the data and assign counts.


## Reason
---------

I developed this module for one of my services because I could not find anything that would do what I needed to do.  This is a work in progress and suggestions are always welcome!
