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
  {"name":"Redbox", "identifier":"redbox.com"},
  {"name":"Instagram", "identifier":"instagram.com"},
  {"name":"Spotify", "identifier":"spotify.com"},
  {"name":"Spotify", "identifier":"scdn.co"},
  {"name":"Waze Navigation App", "identifier":"waze.com"},
  {"name":"Online Games", "identifier":"unity3d.com"},
  {"name":"Flixster By Fandango", "identifier":"flixsterstatic.s3-us-west-2.amazonaws.com"},
  {"name":"Uber - Ridesharing", "identifier":"uber.com"},
  {"name":"NCAA Sports Online", "identifier":"ncaa.com"},
  {"name":"Find My Friends", "identifier":"fmfmobile.icloud.com"},
  {"name":"Find My Friends", "identifier":"fmip.icloud.com"},
  {"name":"Apple Calendar App", "identifier":"caldav.icloud.com"},
  {"name":cdn, "identifier":"streamrail.com"},
  {"name":cdn, "identifier":"streamrail.net"},
  {"name":"Angry Birds Game", "identifier":"cloud.rovio.com/apdrive/2/apps/Abba"},
  {"name":"Angry Birds Game", "identifier":"cloudassets-a.akamaihd.net/apdrive/Abba"},
  {"name":gbs, "identifier":"mtalk.google.com"},
  {"name":gbs, "identifier":"play.google.com"},
  {"name":gbs, "identifier":"notifications.google.com"},
  {"name":gbs, "identifier":"hangouts.google.com"},
  {"name":abs, "identifier":"lcdn-locator.apple.com"},
  {"name":abs, "identifier":"push.apple.com"},
  {"name":abs, "identifier":"cl1.apple.com"},
  {"name":abs, "identifier":"cl2.apple.com"},
  {"name":abs, "identifier":"cl3.apple.com"},
  {"name":abs, "identifier":"cl4.apple.com"},
  {"name":abs, "identifier":"cl5.apple.com"},
  {"name":abs, "identifier":"iphonesubmissions.apple.com"},
  {"name":abs, "identifier":"iphone-ld.apple.com"},
  {"name":abs, "identifier":"valid.apple.com"},
  {"name":abs, "identifier":"gs-loc.apple.com"},
  {"name":abs, "identifier":"identity.ess.apple.com"},
  {"name":abs, "identifier":"17.167.195.92"},
  {"name":abs, "identifier":"17.167.193.57"},
  {"name":abs, "identifier":"mesu.apple.com"},
  {"name":abs, "identifier":"gsas.apple.com"},
  {"name":"Move.com - Online", "identifier":"rdcpix.com"},
  {"name":"Move.com - Online", "identifier":"move.com"},
  {"name":"McAfee Antivirus", "identifier":"mcafee.com"},
  {"name":"Better Business Bureau", "identifier":"bbb.org"},
  {"name":"AirBnB", "identifier":"airbnb.com"},
  {"name":"AirBnB", "identifier":"a0.muscache.com"},
  {"name":"AirBnB", "identifier":"a1.muscache.com"},
  {"name":"AirBnB", "identifier":"a2.muscache.com"},
  {"name":"AirBnB", "identifier":"t1.musthird.com"},
  {"name":"AirBnB", "identifier":"www.airbnb."},
  {"name":"UPS Online", "identifier":"ups.com"},
  {"name":"Vol Nation Online", "identifier":"volnation.com"},
  {"name":"Kayak.com", "identifier":"kayak.com"},
  {"name":"Kayak.com", "identifier":"www.kayak."},
  {"name":"PayPal", "identifier":"paypal.com"},
  {"name":"PayPal", "identifier":"paypalobjects.com"},
  {"name":"Meetup.com - Online community", "identifier":"meetup.com"},
  {"name":"Meetup.com - Online community", "identifier":"meetupstatic.com"},
  {"name":cdn, "identifier":"gravatar.com"},
  {"name":"Movie Pass", "identifier":"moviepass.com"},
  {"name":"Flex MLS", "identifier":"flexmls.com"},
  {"name":"Showings.com - Real Estate", "identifier":"showings.com"},
  {"name":"Discover Credit Card", "identifier":"discover.com"},
  {"name":cdn, "identifier":"jquery.com"},
  {"name":"Skype", "identifier":"skype.com"},
  {"name":"Ebay Online", "identifier":"ebay.com"},
  {"name":"Ebay Online", "identifier":"www.ebay."},
  {"name":"Ebay Online", "identifier":"ebayimg.com"},
  {"name":"Ebay Online", "identifier":""},
  {"name":"Ebay Online", "identifier":""},
  {"name":"Bradley County Schools", "identifier":"bradleyschools.org"},
  {"name":"Blundstone USA - Casual Boots", "identifier":"blundstone.com"},
  {"name":"Dicks Sporting Goods", "identifier":"bluesombrero.com"},
  {"name":"Amway Online", "identifier":"amway.com"},
  {"name":cdn, "identifier":"fontawesome.com"},
  {"name":cdn, "identifier":"typekit.net"},
  {"name":"Zedge.net - Free wallpapers and ringtones", "identifier":"zedge.net"},
  {"name":"Zedge.net - Free wallpapers and ringtones", "identifier":"zobj.net"},
  {"name":"T-Mobile Online", "identifier":"tmobile.com"},
  {"name":"Stripe - Online payments", "identifier":"stripe.com"},
  {"name":"Pornography", "identifier":"fapdep.com"},
  {"name":"New York Times Online", "identifier":"nytimes.com"},
  {"name":"Health Equity - Online HSA", "identifier":"healthequity.com"},
  {"name":"Maytag Appliances", "identifier":"maytag.com"},
  {"name":"Trivia Crack App", "identifier":"preguntados.com"},
  {"name":"USA Today Online", "identifier":"usatoday.com"},
  {"name":"USA Today Online", "identifier":"amp-usatoday-com.cdn.ampproject.org"},
  {"name":"Target Online", "identifier":"target.com"},
  {"name":"Target Online", "identifier":"scene7.targetimg1.com"},
  {"name":"Target Online", "identifier":"target.scene7.com"},
  {"name":cdn, "identifier":".woff2"},
  {"name":ads, "identifier":"/1.gif"},
  {"name":"Jack Box Games", "identifier":"jackboxgames.com"},
  {"name":"Jack Box Games", "identifier":"jackbox.tv"},
  {"name":"Home Depot Online", "identifier":"contentgrid.homedepot-static.com"},
  {"name":"Home Depot Online", "identifier":"homedepot.com"},
  {"name":"Credit Karma", "identifier":"creditkarmacdn-a.akamaihd.net"},
  {"name":"Credit Karma", "identifier":"creditkarma.com"},
  {"name":"Credit Karma", "identifier":"creditkarma.zendesk.com"},
  {"name":"Yeti Coolers", "identifier":"yeti.com"},
  {"name":"Yeti Coolers", "identifier":"emailyeticoolers.com"},
  {"name":"LLBean Online", "identifier":"llbean.com"},
  {"name":"Serious Eats Online", "identifier":"www-seriouseats-com.cdn.ampproject.org"},
  {"name":"Serious Eats Online", "identifier":"seriouseats.com"},
  {"name":"Microsoft One Note", "identifier":"onenote.com"},
  {"name":"United Airlines", "identifier":"united.com"},
  {"name":"Simple - Banking app", "identifier":"simple.com"},
  {"name":"Flipp Mobile App", "identifier":"flipp.com"},
  {"name":"Trello", "identifier":"trello.com"},
  {"name":"Simple Give - Online Giving", "identifier":"simplegive.com"},
  {"name":"My Utmost for His Highest Online", "identifier":"utmost.org"},
  {"name":"My Utmost for His Highest Online", "identifier":"d197n5kam3wa4q.cloudfront.net"},
  {"name":"Atlanta Journal Constitution", "identifier":"ajc.com"},
  {"name":"Atlanta Journal Constitution", "identifier":"d1lqe9temigv1p.cloudfront.net"},
  {"name":"Atlanta Journal Constitution", "identifier":"d29usylhdk1xyu.cloudfront.net"},
  {"name":"Two Dots - Puzzle Game", "identifier":"dots.co"},
  {"name":"Two Dots - Puzzle Game", "identifier":"d21cwiu5j1gnvv.cloudfront.net"},
  {"name":"Bleacher Report", "identifier":"bleacherreport.com"},
  {"name":"Bleacher Report", "identifier":"bleacherreport.net"},
  {"name":"Bleacher Report", "identifier":"bleacherreptrans-a.akamaihd.net"},
  {"name":"Netflix", "identifier":"nflxso.net"},
  {"name":"Netflix", "identifier":"netflix.com"},
  {"name":"Netflix", "identifier":"198.38.99.1"},
  {"name":"Netflix", "identifier":"66.18.33.6"},
  {"name":"Netflix", "identifier":"66.18.34.4"},
  {"name":"Netflix", "identifier":"nflxvideo.net"},
  {"name":"Wells Fargo - Online Banking", "identifier":"wellsfargo.com"},
  {"name":"Wells Fargo - Online Banking", "identifier":"wellsfargomedia.com"},
  {"name":"Planning Center Online", "identifier":"d1th6rei50eu1y.cloudfront.net"},
  {"name":"Planning Center Online", "identifier":"planningcenterassets.s3.amazonaws.com"},
  {"name":"Planning Center Online", "identifier":"planningcenteronline.com"},
  {"name":"Planning Center Online", "identifier":"pco.bz"},
  {"name":"Planning Center Online", "identifier":"planning.center"},
  {"name":"Sporting News Online", "identifier":"snimg.com"},
  {"name":"Sporting News Online", "identifier":"sportingnews.com"},
  {"name":"Sporting News Online", "identifier":"sporting-news.info"},
  {"name":"9 To 5 Mac.com", "identifier":"9to5maccom.disqus.com"},
  {"name":"9 To 5 Mac.com", "identifier":"9to5mac.files.wordpress.com"},
  {"name":"9 To 5 Mac.com", "identifier":"9to5mac.com"},
  {"name":ads, "identifier":"optimizely.com"},
  {"name":"Hulu", "identifier":"hulu.com"},
  {"name":"Hulu", "identifier":"hulustream.com"},
  {"name":"NBC Sports", "identifier":"sprtlive16.akamaized.net"},
  {"name":"NBC Sports", "identifier":"nbcsports.com"},
  {"name":"NBC Sports", "identifier":"nbcume.hb.omtrdc.net"},
  {"name":"Twitch Live Video Streaming", "identifier":"justin.tv"},
  {"name":"Twitch Live Video Streaming", "identifier":"video-edge-c2a3d4.atl01.hls.ttvnw.net"},
  {"name":gbs, "identifier":"myaccount.google.com"},
  {"name":"UTC Online", "identifier":"utc.edu"},
  {"name":"Online Podcasts", "identifier":"blubrry.com"},
  {"name":"Online Podcasts", "identifier":"pcr.apple.com"},
  {"name":"Tumblr - Online Blogs", "identifier":"tumblr.com"},
  {"name":"Blackboard Online Learning", "identifier":"blackboard.com"},
  {"name":"Blackboard Online Learning", "identifier":"d1e7kr0efngifs.cloudfront.net"},
  {"name":"Reddit Videos", "identifier":"v.redd.it"},
  {"name":"AOL Webmail", "identifier":"mail.aol.com"},
  {"name":"AOL Online", "identifier":"aol.com"},
  {"name":"AOL Online", "identifier":"aolcdn.com"},
  {"name":"Verizon Wireless", "identifier":"verizon.com"},
  {"name":"Verizon Wireless", "identifier":"verizonwireless.com"},
  {"name":"Mac Rumors - Apple News Site", "identifier":"macrumors.com"},
  {"name":"Aloha VPN Browser", "identifier":"di4y6ic2m2jmc.cloudfront.net"},
  {"name":"Aloha VPN Browser", "identifier":"f43d76c20358c312d1b5be2de6e5dc43ia.com"},
  {"name":"Aloha VPN Browser", "identifier":"alohabrowser.com"},
  {"name":"iCloud", "identifier":"icloud.com"},
  {"name":"iCloud", "identifier":"blobstore.apple.com"},
  {"name":"Musicians Friend.com", "identifier":"musiciansfriend.com"},
  {"name":"Fox News", "identifier":"fncstatic.com"},
  {"name":"Fox News", "identifier":"foxnews.com"},
  {"name":"Fox News", "identifier":"foxnews-com.cdn.ampproject.org"},
  {"name":"Tech Bargains.com", "identifier":"techbargains.com"},
  {"name":"Slashdot - Online News", "identifier":"fsdn.com"},
  {"name":"Slashdot - Online News", "identifier":"slashdot.org"},
  {"name":"Slashdot - Online News", "identifier":"d3tglifpd8whs6.cloudfront.net"},
  {"name":"Slashdot - Online News", "identifier":"slashdotmedia.com"},
  {"name":"Youtube", "identifier":"youtube.com"},
  {"name":"Youtube", "identifier":"ytimg.com"},
  {"name":"Youtube", "identifier":"googlevideo.com"},
  {"name":"Youtube", "identifier":"yt3.ggpht.com"},
  {"name":"Youtube", "identifier":"youtu.be"},
  {"name":"Youtube", "identifier":"youtubei.googleapis.com"},
  {"name":"Gmail", "identifier":"mail.google.com"},
  {"name":"Gmail", "identifier":"inbox.google.com"},
  {"name":"Gmail", "identifier":"ogs.google.com"},
  {"name":"Gmail", "identifier":"mtalk.google.com"},
  {"name":"Google Drive", "identifier":"drive.google.com"},
  {"name":"Google Maps", "identifier":"maps.google.com"},
  {"name":"Google Maps", "identifier":"geo0.ggpht.com"},
  {"name":"Google Maps", "identifier":"geo1.ggpht.com"},
  {"name":"Google Maps", "identifier":"geo2.ggpht.com"},
  {"name":"Google Maps", "identifier":"geo3.ggpht.com"},
  {"name":"Google Maps", "identifier":"google.com/maps"},
  {"name":"", "identifier":""},
  {"name":"", "identifier":""},

]



        // Remove this from results
        if (o.URL.includes('facebook.com') && o.URL.includes('domain%3D')) {
          o.URL = ads
        }

        if (o.URL.includes('clients') && o.URL.includes('google.com')) {
          o.URL = 'Google'
        }

        if (o.URL.includes('a.appbaqend.com') ||
          o.URL.includes('a.26f396e0b71780f057be4d4af8ebe55b.com') ||
           {
          o.URL = 'My Hurricane Tracker App'
        }

        if (o.URL.includes('api.')) {
          o.URL = o.URL.replace('api.', '')
        }
        if (o.URL.includes('marcopolo.me') ||
            o.URL.includes('hb-img.s3.amazonaws.com') ||
            o.URL.includes('onpolo.com') ||
            o.URL.includes('d1yalerk4ruah8.cloudfront.net') ||
            o.URL.includes('marco.feathr.co') ||
            o.URL.includes('speedys3-hb.s3.amazonaws.com')) {
          o.URL = 'Marco Polo App'
        }



        if (o.URL.includes('snapchat.com') ||
          o.URL.includes('sc-cdn.net') ||
          o.URL.includes('instalog-prod.sc-prod.net') ||
          o.URL.includes('am-prod.sc-jpl.com') ||
          o.URL.includes('sc-analytics.appspot.com')) {
          o.URL = 'Snapchat'
        }



        if (o.URL.includes('itunes.apple.com-a.akamaihd.net') ||
            o.URL.includes('itunes.com') ||
            o.URL.includes('itunes.apple.com')) {
          o.URL = 'Apple iTunes'
        }


        if (o.URL.includes('bible.com') ||
            o.URL.includes('youversion.com') ||
            o.URL.includes('youversioncom') ||
            o.URL.includes('d34xairzvf2fpg.cloudfront.net') ||
            o.URL.includes('youversionapi.com')) {
          o.URL = 'Youversion Bible App'
        }

        if (o.URL.includes('myfitnesspal.com')) {
          o.URL = 'My Fitness Pal app'
        }

        if (o.URL.includes('sndcdn.com') ||
            o.URL.includes('soundcloud.com')) {
          o.URL = 'Sound Cloud'
        }


        if (o.URL.includes('outlook.office365.com') ||
            o.URL.includes('login.microsoftonline.com') ||
            o.URL.includes('mobile.pipe.aria.microsoft.com') ||
            o.URL.includes('outlookmobile-office365-tas.msedge.net') ||
            o.URL.includes('outlook.office.com')) {
          o.URL = 'Microsoft Outlook'
        }



        if (o.URL.includes('groupme.com') ||
            o.URL.includes('powerups.s3.amazonaws.com ')) {
          o.URL = 'Groupme'
        }

            // This is a bad one, definately need to block.  When running the app it downloads a JSON file containing a list of known porn sites in the background.
            // https://f43d76c20358c312d1b5be2de6e5dc43ia.com/v1/unblockedvideo?countryCode=US&os=ios


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
