var sites = [
  {"name":"Cleveland Utilites", "identifier":"ccspresentweb.totalccs.com"},
  {"name":"Cleveland Utilites", "identifier":"clevelandutilities.com"},
  {"name":"ESV - Online Bible", "identifier":"esv.org"},
  {"name":"Livestrong", "identifier":"livestrong.com"},
  {"name":"Livestrong", "identifier":"livestrongcdn.com"},
  {"name":"Dell computers", "identifier":"dell.com"},
  {"name":"Hotels .com", "identifier":"hotels.com"},
  {"name":"Blogging Basics 101", "identifier":"bloggingbasics101.com"},
  {"name":"Blogging Basics 101", "identifier":"1pwuq82w8fex3688f429axe1-wpengine.netdna-ssl.com"},
  {"name":"Google Search Autosuggestions", "identifier":"google.com/complete/search"},
  {"name":"Blogger.com - Free Online Blogs", "identifier":"blogger.com"},
  {"name":"Grammarly - Free writing assistant", "identifier":"grammarly.io"},
  {"name":"Tinder Online Dating", "identifier":"gotinder.com"},
  {"name":"Tinder Online Dating", "identifier":"tindersparks.com"},
  {"name":"Tinder Online Dating", "identifier":"tinder.app.link"},
  {"name":"Tinder Online Dating", "identifier":"tinder.zendesk.com"},
  {"name":"Calvary Chapel Chattanooga Online", "identifier":"calvarychatt.imgix.net"},
  {"name":"Calvary Chapel Chattanooga Online", "identifier":"calvarychatt.com"},
  {"name":"Xfinity Online", "identifier":"xfinity.com"},
  {"name":"Comcast", "identifier":"comcast.com"},
  {"name":"Reddit", "identifier":"reddit.com"},
  {"name":"Reddit", "identifier":"redditmedia.com"},
  {"name":"Reddit", "identifier":"redditstatic.com"},
  {"name":"Reddit", "identifier":"www-redditstatic-com.cdn.ampproject.org"},
  {"name":"Imgur", "identifier":"imgur.com"},
  {"name":"Pandora", "identifier":"pandora.com"},
  {"name":"Pandora", "identifier":"p-cdn.us"},
  {"name":"Pandora", "identifier":"p-cdn.com"},
  {"name":"Pandora", "identifier":"pandoramedia-mkt-prod1-t.campaign.adobe.com"},
  {"name":"Pandora", "identifier":"pandoramedia.sc.omtrdc.net"},
  {"name":"Yelp", "identifier":"yelpcdn.com"},
  {"name":"Yelp", "identifier":"yelp.com"},
  {"name":"Papa Johns", "identifier":"papajohns-specials.com"},
  {"name":"Papa Johns", "identifier":"papajohns.com"},
  {"name":"ESPN", "identifier":"espncdn.com"},
  {"name":"ESPN", "identifier":"espn.com"},
  {"name":"ESPN", "identifier":"cto.fn-pz.com"},
  {"name":"ESPN", "identifier":"cdn.registerdisney.go.com"},
  {"name":"ESPN", "identifier":"espn.hb.omtrdc.net"},
  {"name":"Walmart Online", "identifier":"walmartimages.com"},
  {"name":"Walmart Online", "identifier":"walmart.com"},
  {"name":"Walmart Online", "identifier":"wal.co"},
  {"name":"Amazon", "identifier":"images-amazon.com"},
  {"name":"Amazon", "identifier":"unagi-na.amazon.com"},
  {"name":"Lowes Online", "identifier":"lowes.com"},
  {"name":"Lowes Online", "identifier":"lowes.tt.omtrdc.net"},
  {"name":"Best Buy Online", "identifier":"bestbuy.com"},
  {"name":"Best Buy Online", "identifier":"bbystatic.com"},
  {"name":"Strava Running App", "identifier":"strava.com"},
  {"name":"Smart News App", "identifier":"smartnews.com"},
  {"name":"LuLu Lemon", "identifier":"lululemon.com"},
  {"name":"Ikea Online", "identifier":"ikea.com"},
  {"name":"Sams Club", "identifier":"samsclub.com"},
  {"name":"All Recipes", "identifier":"allrecipes.com"},
  {"name":"1 Password App", "identifier":"1password.com"},
  {"name":"Spectrum Online", "identifier":"spectrum.com"},
  {"name":"Mile IQ", "identifier":"mileiq.com"},
  {"name":"Mile IQ", "identifier":"mileiq.netdna-cdn.com"},
  {"name":"AT&T Online", "identifier":"att.com"},
  {"name":"AT&T Online", "identifier":"attservicesinc.tt.omtrdc.net"},
  {"name":"Blue Letter Bible", "identifier":"blb.org"},
  {"name":"Blue Letter Bible", "identifier":"blueletterbible.org"},
  {"name":"Blue Letter Bible", "identifier":""},
  {"name":"LinkedIn", "identifier":"licdn.com"},
  {"name":"LinkedIn", "identifier":"linkedin.com"},
  {"name":"All Trails App", "identifier":"alltrails.com"},
  {"name":"iHeart Radio", "identifier":"ihrhls.com"},
  {"name":"iHeart Radio", "identifier":"iheart.com"},
  {"name":"Map My Run App", "identifier":"api.ua.com"},
  {"name":"Map My Run App", "identifier":"mapmyrun.com"},
  {"name":"Apple News App", "identifier":"apple.news"},
  {"name":"HQ Trivia App", "identifier":"d2xu1hdomh3nrx.cloudfront.net"},
  {"name":"Epix Movies", "identifier":"epix.com"},
  {"name":"Epix Movies", "identifier":"epixhls-a.akamaihd.net"},
  {"name":"Dropbox", "identifier":"dropbox.com"},
  {"name":"Dropbox", "identifier":"dropboxstatic.com"},
  {"name":"The Knot - Wedding Planning", "identifier":"xoedge.com"},
  {"name":"The Knot - Wedding Planning", "identifier":"theknot.com"},
  {"name":"The Knot - Wedding Planning", "identifier":"xogroupinc.com"},
  {"name":"The Knot - Wedding Planning", "identifier":"xogrp.com"},
  {"name":"Church Community Builder", "identifier":"ccbhq.com"},
  {"name":"Church Community Builder", "identifier":"churchcommunitybuilder.com"},
  {"name":"Church Community Builder", "identifier":"churchcommunitybuilder.my.salesforce.com"},
  {"name":"Bed Bath and Beyond","identifier","bedbathbeyond.com"},
  {"name":"Plenty of Fish - Online Dating","identifier","pof.com"},
  {"name":"Plenty of Fish - Online Dating","identifier","plentyoffish.com"},
  {"name":"UGA Wire","identifier","ugawire.files.wordpress.com"},
  {"name":"UGA Wire","identifier","ugawire.com"},
  {"name":"Inspired By Charm","identifier","28wd582ik70pn4qof1ukh902-wpengine.netdna-ssl.com"},
  {"name":"Inspired By Charm","identifier","inspiredbycharm.com"},
  {"name":"Craigslist - Apartments for rent","identifier","craigslist.org/apa"},
  {"name":"Craigslist","identifier","craigslist.org"},
  {"name":"ESPN radio", "identifier":"espn.edge-1.cis.abacast.net"},
  {"name":"ABC News", "identifier":"abcnews.com"},
  {"name":"ABC News", "identifier":"s-abcnews-com.cdn.ampproject.org"},
  {"name":"Fox Sport", "identifier":"foxsports.com"},
  {"name":"Fox Sport", "identifier":"www-foxsports-com.cdn.ampproject.org"},
  {"name":"USMagazine.com", "identifier":"d2x3bkdslnxkuj.cloudfront.net"},
  {"name":"Carmax", "identifier":"carmax.com"},
  {"name":"Delta Airlines", "identifier":"delta.com"},
  {"name":"Bible App", "identifier":"d233bqaih2ivzn.cloudfront.net"},
  {"name":"BibleGateway.com", "identifier":"d2focgxak1cn74.cloudfront.net"},
  {"name":"Twitch Live Video streaming", "identifier":"jtvnw.net"},
  {"name":"Wayfair.com", "identifier":"wayfair.com"},
  {"name":"Wayfair.com", "identifier":"wfcdn.com"},
  {"name":"WebMD", "identifier":"webmd.com"},
  {"name":"WebMD", "identifier":"c-6rtwjumjzx7877x24fix2eitzgqjhqnhpx2esjy.g00.webmd"},
  {"name":"Tenneessee Valley Credit Union", "identifier":"tvfcu.com"},
  {"name":"Rivals.com", "identifier":"rivals.com"},
  {"name":"The Weather Channel", "identifier":"s.w-x.co"},
  {"name":"The Weather Channel", "identifier":"wfxtriggers.com"},
  {"name":"The Weather Channel", "identifier":"weather.com"},
  {"name":"OpenDNS", "identifier":"d15ni2z53ptwz9.cloudfront.net"},
  {"name":"OpenDNS", "identifier":"opendns.com"},
  {"name":"iCloud", "identifier":"icloud.com"},
  {"name":"BuzzFeed", "identifier":"buzzfeed.com"},
  {"name":"Google Calendar", "identifier":"calendar.google.com"},
  {"name":"Secure Screening", "identifier":"securescreening.net"},
  {"name":"Coker Tire", "identifier":"coker.com"},
  {"name":"WikiMedia", "identifier":"wikimedia.org"},
  {"name":"WikiPedia", "identifier":"wikipedia.org"},
  {"name":"HooplaDigital.com", "identifier":"d2snwnmzyr8jue.cloudfront.net"},
  {"name":"HooplaDigital.com", "identifier":"hoopladigital.com"},
  {"name":"Health and Human Services", "identifier":"hhs.gov"},
  {"name":"Healthcare.gov", "identifier":"healthcare.gov"},
  {"name":"Walgreens Online", "identifier":"walgreens.com"},
  {"name":"Apple iTunes Store", "identifier":"xp.apple.com"},
  {"name":"Apple iTunes Store", "identifier":"updates-http.cdn-apple.com"},
  {"name":"Siri", "identifier":"siri.apple.com"},
  {"name":"Slack - Business Chat", "identifier":"slack.com"},
  {"name":"Slack - Business Chat", "identifier":"slack-msgs.com"},
  {"name":"Nike Online", "identifier":"nike.com"},
  {"name":"Guitar Center", "identifier":"guitarcenter.com"},
  {"name":"Guitar Center", "identifier":"guitarcenter.tt.omtrdc.net"},
  {"name":"CVS Pharmacy", "identifier":"cvs.com"},
  {"name":"CVS Pharmacy", "identifier":"cvshealth.com"},
  {"name":"Helix Jump for iPhone and iPad", "identifier":"com.h8games.falldown"},
  {"name":"Accuweather", "identifier":"accuweather.com"},
  {"name":"Accuweather", "identifier":"config.88-f.net"},
  {"name":"Accuweather", "identifier":"ec.c.ooyala.com"},
  {"name":"EPB", "identifier":"epb.com"},
  {"name":"EPB Online Account services", "identifier":"epbfi.com"},
  {"name":"NBA Online", "identifier":"nba.com"},
  {"name":"NFL Online", "identifier":"nfl.com"},
  {"name":"247Sports", "identifier":"247sports.com"},
  {"name":"AARP online", "identifier":"aarp.org"},
  {"name":"Home Depot Online", "identifier":"homedepot.com"},
  {"name":"Home Depot Online", "identifier":"homedepotemail.com"},
  {"name":"Bungie.net - Video Games", "identifier":"bungie.net"},
  {"name":"Windows Updates", "identifier":"WindowsCortanaPane"},
  {"name":ads, "identifier":"youtube.com/embed"},
  {"name":"Facebook Messenger", "identifier":"w.me"},
  {"name":"Facebook Messenger", "identifier":"m.me"},
  {"name":"Facebook Messenger", "identifier":"edge-chat.facebook.com"},
  {"name":"Facebook Messenger", "identifier":"messenger.com"},
  {"name":ads, "identifier":"facebook.com/tr"},
  {"name":ads, "identifier":"facebook.com/rsrc.php"},
  {"name":ads, "identifier":"graph.facebook.com"},
  {"name":ads, "identifier":"connect.facebook.com"},
  {"name":ads, "identifier":"connect.facebook.net"},
  {"name":ads, "identifier":"facebook.com/impression.php"},
  {"name":"Google", "identifier":"gstatic.com"},
  {"name":"Google Services", "identifier":"apis.google.com"},
  {"name":"Google Docs", "identifier":"docs.google.com"},
  {"name":"Groupon", "identifier":"grouponcdn.com"},
  {"name":"Groupon", "identifier":"www.groupon."},
  {"name":"Hobby Lobby", "identifier":"hobbylobby.com"},
  {"name":"Hobby Lobby", "identifier":"hobbylobby.evergage.com"},
  {"name":"Wunderlist", "identifier":"wunderlist.com"},
  {"name":"Wunderlist", "identifier":"wunderlist.io"},
  {"name":abs, "identifier":"gsa.apple.com"},
  {"name":abs, "identifier":"panacake.apple.com"},
  {"name":abs, "identifier":"init.ess.apple.com"},
  {"name":abs, "identifier":"init-p01md.apple.com"},
  {"name":cdn, "identifier":"cdn.ampproject.org"},
  {"name":"Credit Karma", "identifier":"ck-assets.imgix.net"},
  {"name":"Credit Karma", "identifier":"ck-content.imgix.net"},
  {"name":"Credit Karma", "identifier":"creditkarmacdn-a.akamaihd.net"},
  {"name":"Credit Karma", "identifier":"creditkarma.onelink.me"},
  {"name":"Credit Karma", "identifier":"creditkarma.zendesk.com"},
  {"name":"Credit Karma", "identifier":"creditkarmacdn-a.akamaihd.net"},
  {"name":"Credit Karma", "identifier":"ckapis.com"},
  {"name":"Credit Karma", "identifier":"ckfiles.imgix.net"},
  {"name":"Shopify", "identifier":"cdn.shopify.com"},
  {"name":gbs, "identifier":"0.client-channel.google.com"},
  {"name":gbs, "identifier":"beacons.gcp.gvt2.com"},
  {"name":gbs, "identifier":"beacons2.gvt2.com"},
  {"name":gbs, "identifier":"beacons3.gvt2.com"},
  {"name":gbs, "identifier":"beacons4.gvt2.com"},
  {"name":gbs, "identifier":"beacons5.gvt2.com"},
  {"name":gbs, "identifier":"beacons5.gvt3.com"},
  {"name":gbs, "identifier":"beacons6.gvt3.com"},
  {"name":gbs, "identifier":"google.com/_/chrome/"},
  {"name":"Evernote Online", "identifier":"evernote.com"},
  {"name":"Answers .com", "identifier":"answcdn.com"},
  {"name":"Answers .com", "identifier":"ansers.com"},
  {"name":"Volkswagen Online", "identifier":"vw.com"},
  {"name":"Etsy", "identifier":"esty.com"},
  {"name":"Etsy", "identifier":"estystatic.com"},
  {"name":"US Postal Service", "identifier":"usps.com"},
  {"name":"Google Earth", "identifier":"kh.google.com"},
  {"name":"Trip Advisor", "identifier":"tripadvisor.com"},
  {"name":ads, "identifier":"tr.snapchat.com"},
  {"name":ads, "identifier":"facebook.com/tr"},
  {"name":"August Smart Lock", "identifier":"august.com"},
  {"name":"August Smart Lock", "identifier":"res.cloudinary.com/august-com"},
  {"name":"Autotrader Online", "identifier":"autotrader.com"},
  {"name":"The Score.com - Sports News", "identifier":"thescore.com"},
  {"name":"Poshmark - Online Fashion", "identifier":"poshmark.com"},
  {"name":"Amazon Online", "identifier":"amazon."},
  {"name":abs, "identifier":"smoot.apple.com"},
  {"name":"Amazon Prime Photos", "identifier":"cdws.us-east-1.amazonaws.com"},
  {"name":"Urban Outfitters", "identifier":"urbanoutfitters.com"},
  {"name":"Google Calendar", "identifier":"google.com/calendar"},
  {"name":"Vivint - Home Security Monitoring", "identifier":"vivintsky.com"},
  {"name":"Vivint - Home Security Monitoring", "identifier":"vivint.com"},
  {"name":"Vivint - Home Security Monitoring", "identifier":"spacemonkey.com"},
  {"name":"Vivint - Home Security Monitoring", "identifier":"vivintclips.s3.amazonaws.com"},
  {"name":"Vivint - Home Security Monitoring", "identifier":""},
  {"name":"Microsoft Outlook", "identifier":"outlook.com"},
  {"name":"Yahoo Mail Calendar", "identifier":"calendar.yahoo.com"},
  {"name":"Yahoo Mail Calendar", "identifier":"address.yahoo.com"},
  {"name":"REI Outdoor Gear", "identifier":"rei.com"},
  {"name":"Shellshock.io - Online Games", "identifier":"shellshock.io"},
  {"name":"Titotu.io - Online Games", "identifier":"titotu.io"},
  {"name":"iOGames.space - Online games", "identifier":"iogames.space"},
  {"name":"Duolingo", "identifier":"s3.amazonaws.com/duolingo-explanations"},
  {"name":"Duolingo", "identifier":"duolingo-images.s3.amazonaws.com"},
  {"name":"Duolingo", "identifier":"d1vq87e9lcf771.cloudfront.net"},
  {"name":"Duolingo", "identifier":"d2pur3iezf4d1j.cloudfront.net"},
  {"name":"Duolingo", "identifier":"d3kwyfyztuo0xs.cloudfront.net"},
  {"name":"Duolingo", "identifier":"d9np3dj86nsu2.cloudfront.net"},
  {"name":"iCloud Calendar", "identifier":"ical.mac.com"},
  {"name":"iCloud Calendar", "identifier":"files.apple.com/calendars"},
  {"name":"Podcasts", "identifier":"libsyn.com"},
  {"name":"Basecamp Project Management", "identifier":"basecamp.com"},
  {"name":"Basecamp Project Management", "identifier":"37signals.com"},
  {"name":"Basecamp Project Management", "identifier":"basecamp-static.com"},
  {"name":"Straight Talk Wireless", "identifier":"straighttalk.com"},
  {"name":"Redbubble - Awesome Products Designed By Independent Artists", "identifier":"redbubble.com"},
  {"name":"Redbubble - Awesome Products Designed By Independent Artists", "identifier":"redbubble.net"},
  {"name":"Wordpress.com", "identifier":"i0.wp.com"},
  {"name":"Wordpress.com", "identifier":"i2.wp.com"},
  {"name":"One Year Bible Online", "identifier":"oneyearbibleonline.com"},
  {"name":"The Purple Daisy Cafe", "identifier":"thepurpledaisypicniccafe.com"},
  {"name":"Bank of America Online", "identifier":"bankofamerica.com"},
  {"name":"Bank of Cleveland Online", "identifier":"bankofcleveland.com"},
  {"name":"North Face Clothing", "identifier":"thenorthface.com"},
  {"name":"Digital Ocean - Cloud services", "identifier":"digitalocean.com"},
  {"name":"Publix", "identifier":"publix.com"},
  {"name":"Publix", "identifier":"publix.org"},
  {"name":"Amazon Online", "identifier":"amazon.com."},
  {"name":"Amazon Online", "identifier":"amazon.com/gp"},
  {"name":"AAF Nation", "identifier":"affnation.com"},
  {"name":"Economy Honda", "identifier":"economyhonda.com"},
  {"name":"Oops Repair", "identifier":"oopsrepair.com"},
  {"name":"Trulia.com - Real Estate Listing", "identifier":"trulia.com"},
  {"name":"iCloud Content", "identifier":"icloud-content.com"},
  {"name":"Yummly - Personalized Recipes", "identifier":"yummly.com"},
  {"name":"The Chapel", "identifier":"bennett-lamb-trzh.squarespace.com"},
  {"name":"The Chapel", "identifier":"thechapelcleveland.com"},
  {"name":"Hamilton County Maps", "identifier":"gismaps.hamiltontn.gov"},
  {"name":"Hamilton County Maps", "identifier":"mapsdev.hamiltontn.gov"},
  {"name":"Hamilton County Online", "identifier":"hamiltontn.gov"},
  {"name":"Honey - Automatic Coupons", "identifier":"joinhoney.com"},
  {"name":"Priceline", "identifier":"priceline.com"},
  {"name":cdn, "identifier":"fbcdn.net"},
  {"name":"USAA Online", "identifier":"usaa.com"},
  {"name":"Vimeo - Online Videos", "identifier":"vimeo.com"},
  {"name":"Vimeo - Online Videos", "identifier":"vimeo.akamaized.net"},
  {"name":"Vimeo - Online Videos", "identifier":"vimeocdn.com"},
  {"name":"Mugshots - Times Free Press", "identifier":"right2know.timesfreepress.com"},
  {"name":"Times Free Press", "identifier":"timesfreepress.com"},
  {"name":"Audible", "identifier":"audible.com"},
  {"name":"Hollywoodstory.tv - Celebrity News", "identifier":"hollywoodstory.tv"},
  {"name":"Fingersoft - Mobile Games", "identifier":"fingersoft.net"},
  {"name":"Fingersoft - Mobile Games", "identifier":"fingersoft.com"},
  {"name":"Disney Circle", "identifier":"meetcircle.com"},
  {"name":"Mailchimp - Email Marketing", "identifier":"mailchimp.com"},
  {"name":"IMDB Online", "identifier":"imdb.com"},
  {"name":"Letgo - Buy and Sell things", "identifier":"letgo.com"},
  {"name":"Letgo - Buy and Sell things", "identifier":"letgo.onelink.me"},
  {"name":"Churchstreaming.tv - Church services online streaming", "identifier":"churchstreaming.tv"},
  {"name":"Churchstreaming.tv - Church services online streaming", "identifier":"yourstreamlive.com"},
  {"name":"Adobe Spark - Digital Marketing", "identifier":"cc-api-storage.adobe.io"},
  {"name":"23 and Me Ancestry and DNA", "identifier":"23andme.com"},
  {"name":"VW Vortex - Volkswagen Enthusiasts", "identifier":"d1r55yzuc1b1bw.cloudfront.net"},
  {"name":"", "identifier":""},

]

        // Remove this from results
        if (o.URL.includes('facebook.com') && o.URL.includes('domain%3D')) {
          o.URL = ads
        }

        if (o.URL.includes('clients') && o.URL.includes('google.com')) {
          o.URL = 'Google'
        }
        if (o.URL.includes('redbox.com')) {
          o.URL = 'Redbox'
        }

        if (o.URL.includes('instagram.com')) {
          o.URL = 'Instagram'
        }

        if (o.URL.includes('spotify.com') ||
            o.URL.includes('scdn.co')) {
          o.URL = 'Spotify'
        }

        if (o.URL.includes('waze.com')) {
          o.URL = 'Waze Navigation App'
        }
        if (o.URL.includes('unity3d.com')) {
          o.URL = 'Online Games'
        }

        if (o.URL.includes('flixsterstatic.s3-us-west-2.amazonaws.com')) {
          o.URL = 'Flixster By Fandango'
        }

        if (o.URL.includes('uber.com')) {
          o.URL = 'Uber'
        }

        if (o.URL.includes('ncaa.com')) {
          o.URL = 'NCAA Sports'
        }

        if (o.URL.includes('fmfmobile.icloud.com') ||
            o.URL.includes('fmip.icloud.com')) {
          o.URL = 'Find My Friends'
        }

        if (o.URL.includes('caldav.icloud.com')) {
          o.URL = 'Apple Calendar App'
        }

        if (o.URL.includes('streamrail.net') ||
            o.URL.includes('streamrail.com')) {
          o.URL = 'Content Delivery Network'
        }

        if (o.URL.includes('cloud.rovio.com/apdrive/2/apps/Abba') ||
            o.URL.includes('cloudassets-a.akamaihd.net/apdrive/Abba')) {
          o.URL = 'Angry Birds Game'
        }

        if (o.URL.includes('mtalk.google.com') ||
            o.URL.includes('play.google.com') ||
            o.URL.includes('notifications.google.com') ||
            o.URL.includes('hangouts.google.com')) {
          o.URL = 'Google Background Services'
        }

        if (o.URL.includes('mcafee.com')) {
          o.URL = 'McAfee Antivirus'
        }

        // cl1 = CommCenterMobileHelper, cl2/cl3/cl4=locationd
        if (o.URL.includes('lcdn-locator.apple.com') ||
            o.URL.includes('push.apple.com') ||
            o.URL.includes('cl1.apple.com') ||
            o.URL.includes('cl2.apple.com') ||
            o.URL.includes('cl3.apple.com') ||
            o.URL.includes('cl4.apple.com') ||
            o.URL.includes('cl5.apple.com') ||
            o.URL.includes('iphonesubmissions.apple.com') ||
            o.URL.includes('iphone-ld.apple.com') ||
            o.URL.includes('valid.apple.com') ||
            o.URL.includes('gs-loc.apple.com') ||
            o.URL.includes('identity.ess.apple.com') ||
            o.URL.includes('17.167.195.92') ||
            o.URL.includes('17.167.193.57') ||
            o.URL.includes('mesu.apple.com') ||
            o.URL.includes('gsas.apple.com')) {
          o.URL = abs
        }

        if (o.URL.includes('move.com') ||
            o.URL.includes('rdcpix.com')) {
          o.URL = 'Move.com'
        }

        if (o.URL.includes('1h23on8hs5s44c2iqm9tze2x.wpengine.netdna-cdn.com') ||
            o.URL.includes('visitmysmokies.com')) {
          o.URL = 'Visit My Smokies.com'
        }

        if (o.URL.includes('bbb.org')) {
          o.URL = 'Better Business Bureau'
        }

        if (o.URL.includes('airbnb.com') ||
            o.URL.includes('a0.muscache.com') ||
            o.URL.includes('a1.muscache.com') ||
            o.URL.includes('a2.muscache.com') ||
            o.URL.includes('t1.musthird.com') ||
            o.URL.includes('www.airbnb.')) {
          o.URL = 'AirBnB'
        }

        if (o.URL.includes('volnation.com')) {
          o.URL = 'Volnation.com'
        }

        if (o.URL.includes('ups.com')) {
          o.URL = 'UPS'
        }

        if (o.URL.includes('kayak.com') ||
            o.URL.includes('www.kayak.')) {
          o.URL = 'Kayak.com'
        }

        if (o.URL.includes('paypal.com') ||
            o.URL.includes('paypalobjects.com')) {
          o.URL = 'Paypal'
        }

        if (o.URL.includes('meetup.com') ||
            o.URL.includes('meetupstatic.com')) {
          o.URL = 'Meetup.com - Online community'
        }

        if (o.URL.includes('largecabinrentals.com')) {
          o.URL = 'Large Cabin Rentals.com'
        }

        if (o.URL.includes('gravatar.com')) {
          o.URL = 'Gravatar Content Delivery Network'
        }

        if (o.URL.includes('1z47agptxli27tiku3dc533qfa.wpengine.netdna-cdn.com') ||
            o.URL.includes('hiddenmountain.com')) {
          o.URL = 'Hidden Mountain Resort'
        }

        if (o.URL.includes('moviepass.com')) {
          o.URL = 'Movie Pass'
        }

        if (o.URL.includes('flexmls.com')) {
          o.URL = 'Flex MLS'
        }

        if (o.URL.includes('showings.com')) {
          o.URL = 'Showings.com - Real Estate'
        }

        if (o.URL.includes('discover.com')) {
          o.URL.includes('Discover Credit Card')
        }

        if (o.URL.includes('jquery.com')) {
          o.URL = 'jQuery - Online Assets'
        }

        if (o.URL.includes('skype.com')) {
          o.URL = 'Skype'
        }

        if (o.URL.includes('ebay.com.') ||
            o.URL.includes('www.ebay.') ||
            o.URL.includes('ebayimg.com') ||
            o.URL.includes('ebay.com')) {
          o.URL = 'Ebay'
        }

        if (o.URL.includes('bradleyschools.org')) {
          o.URL = 'Bradley County Schools'
        }

        if (o.URL.includes('blundstone.com')) {
          o.URL = 'Blundstone Boots'
        }

        if (o.URL.includes('bluesombrero.com')) {
          o.URL = 'Dicks Sporting Goods'
        }

        if (o.URL.includes('amway.com')) {
          o.URL = 'Amway Online'
        }

        if (o.URL.includes('fontawesome.com') ||
            o.URL.includes('use.typekit.net')) {
          o.URL = 'Online Assets - Fonts'
        }

        if (o.URL.includes('tdeconline.tn.gov')) {
          o.URL = 'Tenneessee Online'
        }

        if (o.URL.includes('zedge.net') ||
            o.URL.includes('zobj.net')) {
          o.URL = 'Zedge.net - Free wallpapers and ringtones'
        }

        if (o.URL.includes('tmobile.com')) {
          o.URL = 'T-Mobile'
        }

        if (o.URL.includes('stripe.com')) {
          o.URL = 'Stripe Online Payments'
        }

        if (o.URL.includes('fapdep.com')) {
          o.URL = 'FapDep Pornography'
        }

        if (o.URL.includes('nytimes.com')) {
          o.URL = 'New York Times Online'
        }

        if (o.URL.includes('healthequity.com')) {
          o.URL = 'Health Equity.com'
        }

        if (o.URL.includes('maytag.com')) {
          o.URL = 'Maytag Appliances'
        }

        if (o.URL.includes('preguntados.com')) {
          o.URL = 'Trivia Crack App'
        }

        if (o.URL.includes('amp-usatoday-com.cdn.ampproject.org') ||
            o.URL.includes('usatoday.com')) {
          o.URL = 'USA Today.com'
        }

        if (o.URL.includes('target.com') ||
            o.URL.includes('scene7.targetimg1.com') ||
            o.URL.includes('target.scene7.com')) {
          o.URL = 'Target'
        }

        if (o.URL.includes('/1.gif?')) {
          o.URL = 'Tracking Cookie'
        }

        if (o.URL.includes('.woff2')) {
          o.URL = 'Font Resources'
        }

        if (o.URL.includes('jackboxgames.com') ||
            o.URL.includes('jackbox.tv')) {
          o.URL = 'Jack Box Games'
        }

        if (o.URL.includes('contentgrid.homedepot-static.com') ||
            o.URL.includes('homedepot.com')) {
          o.URL = 'Home Depot'
        }

        if (o.URL.includes('creditkarmacdn-a.akamaihd.net') ||
            o.URL.includes('creditkarma.com') ||
            o.URL.includes('creditkarma.zendesk.com')) {
          o.URL = 'Credit Karma'
        }

        if (o.URL.includes('yeti.com') ||
            o.URL.includes('image.emailyeticoolers.com')) {
          o.URL = 'Yeti Coolers'
        }

        if (o.URL.includes('llbean.com')) {
          o.URL = 'LL Bean'
        }

        if (o.URL.includes('seriouseats.com') ||
            o.URL.includes('www-seriouseats-com.cdn.ampproject.org')) {
          o.URL = 'Serious Eats'
        }



        if (o.URL.includes('onenote.com')) {
          o.URL = 'Microsoft One Note'
        }

        if (o.URL.includes('united.com')) {
          o.URL = 'United Airlines'
        }

        if (o.URL.includes('yourstreamlive.com')) {

        }

        if (o.URL.includes('simple.com')) {
          o.URL = 'Simple Banking app'
        }

        if (o.URL.includes('flipp.com')) {
          o.URL = 'Flipp Mobile App'
        }

        if (o.URL.includes('trello.com')) {
          o.URL = 'Trello'
        }

        if (o.URL.includes('simplegive.com')) {
          o.URL = 'Simple Give - Online Giving'
        }

            if (o.URL.includes('utmost.org') ||
                o.URL.includes('d197n5kam3wa4q.cloudfront.net')) {
              o.URL = 'My Utmost for His Highest'
            }

            if (o.URL.includes('d1lqe9temigv1p.cloudfront.net') ||
                o.URL.includes('d29usylhdk1xyu.cloudfront.net') ||
                o.URL.includes('ajc.com')) {
              o.URL = 'Atlanta Journal-Constitution - Newpaper'
            }

            if (o.URL.includes('d21cwiu5j1gnvv.cloudfront.net') ||
                o.URL.includes('dots.co')) {
              o.URL = 'Two Dots - Puzzle Game'
            }

            if (o.URL.includes('bleacherreport.com') ||
                o.URL.includes('bleacherreport.net') ||
                o.URL.includes('bleacherreptrans-a.akamaihd.net')) {
              o.URL = 'Bleacher Report'
            }

            if (o.URL.includes('nflxso.net') ||
                o.URL.includes('netflix.com') ||
                o.URL.includes('198.38.99.1') ||
                o.URL.includes('66.18.33.6') ||
                o.URL.includes('66.18.34.4') ||
                o.URL.includes('nflxvideo.net')) {
              o.URL = 'Netflix'
            }


            if (o.URL.includes('wellsfargomedia.com') ||
                o.URL.includes('wellsfargo.com')) {
              o.URL = 'Wells Fargo'
            }

            if (o.URL.includes('d1th6rei50eu1y.cloudfront.net') ||
                o.URL.includes('planningcenterassets.s3.amazonaws.com') ||
                o.URL.includes('planningcenteronline.com') ||
                o.URL.includes('pco.bz') ||
                o.URL.includes('planning.center')) {
              o.URL = 'Planning Center'
            }

            if (o.URL.includes('snimg.com') ||
                o.URL.includes('sportingnews.com') ||
                o.URL.includes('sporting-news.info')) {
              o.URL = 'Sporting News'
            }

            if (o.URL.includes('optimizely.com')) {
              o.URL = 'Optimizely'
            }

            if (o.URL.includes('9to5maccom.disqus.com') ||
                o.URL.includes('9to5mac.com') ||
                o.URL.includes('9to5mac.files.wordpress.com')) {
              o.URL = '9 To 5 Mac'
            }

            if (o.URL.includes('hulu.com') ||
                o.URL.includes('hulustream.com')) {
              o.URL = 'Hulu'
            }
            if (o.URL.includes('sprtlive16.akamaized.net') ||
                o.URL.includes('nbcsports.com') ||
                o.URL.includes('nbcume.hb.omtrdc.net"')) {
              o.URL = 'NBC Sports'
            }

            if (o.URL.includes('justin.tv') ||
                o.URL.includes('video-edge-c2a3d4.atl01.hls.ttvnw.net"')) {
              o.URL = 'Twitch Live streaming'
            }

            if (o.URL.includes('myaccount.google.com')) {
              o.URL = 'Gmail account settings'
            }

            if (o.URL.includes('utc.edu')) {
              o.URL = 'UTC Online'
            }

            if (o.URL.includes('blubrry.com') ||
                o.URL.includes('pcr.apple.com')) {
              o.URL = 'Online Podcasts'
            }

            if (o.URL.includes('tumblr.com')) {
              o.URL = 'Tumblr Online Blogs'
            }

            if (o.URL.includes('d1e7kr0efngifs.cloudfront.net') ||
                o.URL.includes('blackboard.com')) {
              o.URL = 'Blackboard Online Learning'
            }

            if (o.URL.includes('v.redd.it')) {
              o.URL = 'Reddit Videos'
            }

            if (o.URL.includes('mail.aol.com')) {
              o.URL = 'AOL WebMail'
            }

            if (o.URL.includes('aol.com') ||
                o.URL.includes('aolcdn.com')) {
              o.URL = 'AOL.COM'
            }

            if (o.URL.includes('nimblebit.com')) {
              o.URL = 'Nimblebit Games'
            }

            if (o.URL.includes('verizon.com') ||
                o.URL.includes('verizonwireless.com')) {
              o.URL = 'Verizon Wireless'
            }

            if (o.URL.includes('macrumors.com')) {
              o.URL = 'Mac Rumors - Apple News'
            }

            // This is a bad one, definately need to block.  When running the app it downloads a JSON file containing a list of known porn sites in the background.
            // https://f43d76c20358c312d1b5be2de6e5dc43ia.com/v1/unblockedvideo?countryCode=US&os=ios
            if (o.URL.includes('di4y6ic2m2jmc.cloudfront.net') ||
                o.URL.includes('f43d76c20358c312d1b5be2de6e5dc43ia.com') ||
                o.URL.includes('alohabrowser.com')) {
              o.URL = 'Aloha VPN browser'
            }

            if (o.URL.includes('clashroyaleapp.com') ||
                o.URL.includes('1681.engine.mobileapptracking.com') ||
                o.URL.includes('clashroyale.com') ||
                o.URL.includes('cr.clan-play.com')) {
              o.URL = 'Clash Royale Games'
            }

            if (o.URL.includes('iforgot.apple.com')) {
              o.URL = 'Apple Account settings'
            }

            if (o.URL.includes('gc.apple.com')) {
              o.URL = 'iCloud Game Center'
            }

            if (o.URL.includes('b343.playfabapi.com')) {
              o.URL = 'Idle Miner Tycoon - Game'
            }

            if (o.URL.includes('c845.playfabapi.com') ||
                o.URL.includes('c845.playfabapi.com')) {
              o.URL = 'Roller Coaster Tycoon - Game'
            }

            if (o.URL.includes('milb.com')) {
              o.URL = 'Minor League Baseball'
            }

            if (o.URL.includes('zillow.com') ||
                o.URL.includes('collector-pxhyx10rg3.perimeterx.net') ||
                o.URL.includes('zillowstatic.com')) {
              o.URL = 'Zillow'
            }
            if (o.URL.includes('icloud.com') ||
                o.URL.includes('blobstore.apple.com')) {
              o.URL = 'iCloud'
            }

            if (o.URL.includes('musiciansfriend.com')) {
              o.URL = 'Musicians Friend.com'
            }

            if (o.URL.includes('fncstatic.com') ||
                o.URL.includes('foxnews.com') ||
                o.URL.includes('foxnews-com.cdn.ampproject.org')) {
              o.URL = 'Fox News'
            }

            if (o.URL.includes('techbargains.com')) {
              o.URL = 'Tech Bargains'
            }

            if (o.URL.includes('fsdn.com') ||
                o.URL.includes('slashdot.org') ||
                o.URL.includes('d3tglifpd8whs6.cloudfront.net') ||
                o.URL.includes('slashdotmedia.com')) { // fsdn.com is used to serve assets for slashdot
              o.URL = 'Slashdot Nerd News'
            }
