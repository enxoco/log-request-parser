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
  {"name":"", "identifier":""},

]

if (o.URL.includes('icloud-content.com') ||
 o.userAgent.includes('cloudd')) {
  o.URL = 'iCloud content'
}

if (o.URL.includes('yummly.com') ||
    o.userAgent.includes('Yummly-iPhone')) {
      o.URL = 'Yummly - Personalized Recipes'
    }


    if (o.URL.includes('thepurpledaisypicniccafe.com')) {
      o.URL = 'The Purple Daisy Cafe'
    }

    if (o.URL.includes('bankofamerica.com')) {
      o.URL = 'Bank of America.com'
      o.desc = 'Bank of America online'
    }

    if (o.URL.includes('bankofcleveland.com')) {
      o.URL = 'Bank of Cleveland'
      o.desc = 'Bank of Cleveland online'
    }

    if (o.URL.includes('thenorthface.com')) {
      o.URL = 'The North Face.com'
      o.desc = 'North Face Clothing'
    }

    if (o.URL.includes('digitalocean.com')) {
      o.URL = 'Digital Ocean .com'
      o.desc = 'Cloud Servers'
    }

    if (o.URL.includes('publix.com') ||
      o.URL.includes('publix.org')) {
      o.URL = 'Publix'
    }

    if (o.URL.includes('amazon.com/gp') ||
      o.URL.includes('amazon.com.')) {
      o.URL = 'Amazon'
    }

    if (o.URL.includes('aafnation.com')) {
      o.URL = 'AAF Nation.com'
      o.desc = 'Patriotic shirts, posters, stickers and more'
    }

    if (o.URL.includes('economyhonda.com')) {
      o.URL = 'Economy Honda'
    }

    if (o.URL.includes('oopsrepair.com')) {
      o.URL = 'Oops Repair.com'
      o.desc = 'Apple Repair Store'
    }

    if (o.URL.includes('trulia.com')) {
      o.URL = 'Trulia'
      o.desc = 'Real Estate Listings'
    }

    if (o.URL.includes('bennett-lamb-trzh.squarespace.com') ||
      o.URL.includes('thechapelcleveland.com')) {
      o.URL = 'The Chapel Cleveland.com'
    }

        if (o.URL.includes('gismaps.hamiltontn.gov') ||
            o.URL.includes('mapsdev.hamiltontn.gov')) {
          o.URL = 'Hamilton County Maps'
        }

        if (o.URL.includes('hamiltontn.gov')) {
          o.URL = 'Hamilton County Online'
        }

        if (o.URL.includes('joinhoney.com')) {
          o.URL = 'Honey - Automatic Coupons'
        }

        if (o.URL.includes('priceline.com')) {
          o.URL = 'Priceline.com'
        }

        // if (o.URL.includes('epicgames.com')) {
        //   o.URL = 'Epic Games - Mobile Games'
        // }

        if (o.URL.includes('fbcdn.net')) {
          o.URL = cdn
        }

        if (o.URL.includes('usaa.com')) {
          o.URL = 'USAA.com'
        }
        if (o.URL.includes('vimeo.com') ||
            o.URL.includes('vimeo.akamaized.net') ||
            o.URL.includes('vimeocdn.com')) {
          o.URL = 'Vimeo - Online Videos'
        }

        if (o.URL.includes('right2know.timesfreepress.com')) {
          o.URL = 'Times Free Press - Mugshots'
        }

        if (o.URL.includes('timesfreepress.com')) {
          o.URL = 'Times Free Press'
        }

        if (o.URL.includes('audible.com')) {
          o.URL = 'Audible.com'
        }

        if (o.URL.includes('hollywoodstory.tv')) {
          o.URL = 'Hollywoodstory.tv - Celebrity News'
        }

        if (o.URL.includes('fingersoft.net') ||
            o.URL.includes('fingersoft.com')) {
          o.URL = 'Fingersoft - Mobile Games'
        }

        if (o.URL.includes('meetcircle.com')) {
          o.URL = 'Disney Circle'
        }

        if (o.URL.includes('mailchimp.com')) {
          o.URL = 'Mailchimp - Email Marketing'
        }

        if (o.URL.includes('imdb.com') ||
            o.URL.includes('fls-na.amazon.com')) {
          o.URL = 'IMDB.com'
        }

        if (o.URL.includes('letgo.com') ||
            o.URL.includes('letgo.onelink.me')) {
          o.URL = 'Letgo - Buy and Sell things'
        }

        if (o.URL.includes('churchstreaming.tv') ||
            o.URL.includes('yourstreamlive.com')) {
          o.URL = 'Churchstreaming.tv - Church services online streaming'
        }

        if (o.URL.includes('cc-api-storage.adobe.io')) {
          o.URL = 'Adobe Spark - Digital Marketing'
        }

        if (o.URL.includes('23andme.com')) {
          o.URL = '23 and Me Ancestry and DNA'
        }

        if (o.URL.includes('d1r55yzuc1b1bw.cloudfront.net')) {
          o.URL = 'VW Vortex - Volkswagen Enthusiasts'
        }

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
