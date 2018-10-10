exports.parser = function (obj) {

  const result = [...obj.reduce((mp, o) => {

    var adServers = [
      "netmng.com",
      "flashtalking.com",
      "smaato.net",
      "criteo.com",
      "rlcdn.com",
      "adsrvr.org",
      "smartadserver.com",
      "2mdn.net",
      "boomtrain.com",
      "ads-twitter.com",
      "analytics.twitter.com",
      "adjust.com",
      "amplitude.com",
      "disqusads.com",
      "appboy.com",
      "braze.com",
      "tr.snapchat.com",
      "outbrain.com",
      "fyber.com",
      "ads.yahoo.com",
      "ads.yieldmo.com",
      "criteo.net",
      "flurry.com",
      "appsflyer.com",
      "googletagmanager.com",
      "googletagservices.com",
      "mparticle.com",
      "googlesyndication.com",
      "exelator.com",
      "taboola.com",
      "adcolony.com",
      "heyzap.com",
      "applovin.com",
      "vungle.com",
      "supersonicads-a.akamaihd.net",
      "ads.pennnet.com",
      "doubleclick.net",
      "adnxs.com",
      "dotomi.com",
      "mopub.com",
      "scorecardresearch.com",
      "yldbt.com",
      "yieldbot.update",
      "amazon-adsystem.com",
      "comscoreresearch.com",
      "google-analytics.com",
      "leanplum.com",
      "iadsdk.apple.com",
      "hotjar.com",
      "vrvm.com",
      "adservice.google.com",
      "pixel.quantserve.com",
      "moatads.com",
      "supersonicads.com",
      "lkqd.net",
      "jsrdn.com",
      "mixpanel.com",
      "cedexis.com",
      "advertising.com",
      "p.typekit.net",
      "contextweb.com",
      "demdex.net",
      "omtrdc.net",
      "mathtag.com",
      "pixel.wp.com",
      "bluekai.com",
      "jetpack.wordpress.com",
      "localytics.com",
      "krxd.net",
      "kampyle.com",
      "bazaarvoice.com",
      "adsymptotic.com",
      "googleadservices.com",
      "imrworldwide.com",
      "googleapis.com",
      "urbanairship.com",
      "gigya.com",
      "tapjoy.com",
      "app-measurement.com",
      "ping.taplytics.com",
      "gameanalytics.com",
      "quantcount.com",
      "quantcast.com",
      "tenjin.io",
      "facebook.com/plugins",
      "appriss.com",
      "crwdcntrl.net",
      "newrelic.com",
      "supersonic.com",
      "gate.hockeyapp.net",
      "owneriq.net",
    ]
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
      {"name":"", "identifier":""},
      {"name":"", "identifier":""},




    ]
    var bundleIds = [
      {"name":"Avatar Nutrition","identifier":"com.avatarnutrition.mobileapp"},
      {"name":"Joss & Main","identifier":"com.jossandmain.JossAndMain"},
      {"name":"Bible for Kids","identifier":"tv.lifechurch.bible.kids"},
      {"name":"Ting","identifier":"com.ting.dashboard"},
      {"name":"UltiPro","identifier":"com.ultimatesoftware.ultipromobile"},
      {"name":"RightNow Media","identifier":"org.rightnow.rightnowmedia"},
      {"name":"Dictionary","identifier":"com.reference.dictionary.dictionary"},
      {"name":"NIV Bible*","identifier":"com.just1word.nvibible"},
      {"name":"Rules of Survival","identifier":"com.netease.chiji"},
      {"name":"Conduit Fill Tracker","identifier":"com.summit.conduitfilltracker"},
      {"name":"MailChimp","identifier":"com.theRocketScienceGroup.mailChimp"},
      {"name":"PlayMemories Mobile","identifier":"jp.co.sony.playmemoriesmobile"},
      {"name":"Wallet","identifier":"com.capitalone.wallet"},
      {"name":"Manheim","identifier":"com.developmentnow.manheimapp"},
      {"name":"Rummikub","identifier":"com.rummikubfree"},
      {"name":"Livestream","identifier":"com.livestream.new"},
      {"name":"Ocean","identifier":"com.gomarcopolo.oceanmp"},
      {"name":"SkyView Lite","identifier":"com.t11.celestefree"},
      {"name":"WTForecast","identifier":"com.williamking.offensiveweather"},
      {"name":"Fly Delta","identifier":"com.delta.iphone.ver1"},
      {"name":"Disney World","identifier":"com.disney.MyDisneyExperience"},
      {"name":"Shadowmatic","identifier":"com.triadastudio.Shadowmatic"},
      {"name":"Hill Climb 2","identifier":"com.fingersoft.hillclimbracing2"},
      {"name":"Webex Meet","identifier":"com.webex.meeting"},
      {"name":"Fallout Shelter","identifier":"com.bethsoft.falloutshelter"},
      {"name":"CVS","identifier":"com.cvs.cvspharmacy"},
      {"name":"TTR Pocket","identifier":"com.daysofwonder.TicketToRideiPhone"},
      {"name":"Amazon Music","identifier":"com.amazon.mp3.AmazonCloudPlayer"},
      {"name":"wordreference","identifier":"com.wordreference.WordReferenceDictionary"},
      {"name":"FreshBooks","identifier":"com.freshbooks.freshbooks2"},
      {"name":"Pixel Gun 3D","identifier":"zombiegun3d"},
      {"name":"OneDrive","identifier":"com.microsoft.skydrive"},
      {"name":"myAT&T","identifier":"com.att.osd.myWireless"},
      {"name":"Fantasy","identifier":"com.espn.fantasyFootball"},
      {"name":"Build","identifier":"com.build.BuildApp"},
      {"name":"NBA JAM","identifier":"com.ea.nbajam.inc"},
      {"name":"Rhea","identifier":"com.lancealbrite.Rhea"},
      {"name":"Sling Drift","identifier":"com.rubygames.slingdrift"},
      {"name":"Core Bank","identifier":"com.fis.279SUB"},
      {"name":"Flick Golf","identifier":"com.full-fat.flickgolf"},
      {"name":"Mr.B","identifier":"Raymond-Cordero-Vargas.Mr-B"},
      {"name":"SAP Concur","identifier":"com.concur.concurmobile"},
      {"name":"MasterClass","identifier":"com.masterclass.production"},
      {"name":"Angry Birds","identifier":"com.clickgamer.AngryBirds"},
      {"name":"Reddit","identifier":"com.reddit.Reddit"},
      {"name":"Plugged In","identifier":"com.Brushfire.PluggedIn"},
      {"name":"Xbox","identifier":"com.microsoft.smartglass"},
      {"name":"Nike Training","identifier":"com.nike.niketrainingclub"},
      {"name":"Periscope","identifier":"com.bountylabs.periscope"},
      {"name":"Esurance","identifier":"com.esurance.app"},
      {"name":"Hello Stars","identifier":"com.fortune.sim.game.hellostars"},
      {"name":"LastPass","identifier":"com.lastpass.ilastpass"},
      {"name":"Cam Remote","identifier":"com.fujifilmdsc.app.CameraRemote"},
      {"name":"Ustream","identifier":"tv.ustream.player"},
      {"name":"United","identifier":"com.united.UnitedCustomerFacingIPhone"},
      {"name":"Barclays US","identifier":"com.barclaycardus.iphonesvc"},
      {"name":"Relax Melodies","identifier":"com.ilbsoft.irelax"},
      {"name":"Podcast App","identifier":"com.evolve.podcast"},
      {"name":"PopKey","identifier":"WorkshopX.PopKey"},
      {"name":"DCC","identifier":"com.puzzlesocial.DailyCelebrityCrossword"},
      {"name":"Red Hands - Fun 2 Player Games","identifier":"com.redhands.twoplayergames"},
      {"name":"Discover","identifier":"com.discoverfinancial.mobile"},
      {"name":"SpanCalc","identifier":"org.awc.spancalc"},
      {"name":"Photofy","identifier":"com.photofy.ios.photofy"},
      {"name":"Best Buy","identifier":"com.bestbuy.buyphone"},
      {"name":"Octave RTA","identifier":"com.onyx3.rta"},
      {"name":"HGTV","identifier":"com.hgtviphone"},
      {"name":"FaxFile","identifier":"com.actualsoftware.faxfile"},
      {"name":"Pinkberry","identifier":"com.pinkberry.Pinkberry"},
      {"name":"InstaSize","identifier":"InstaSize"},
      {"name":"Sierra Trading Post","identifier":"com.sierratradingpost.ios.shop"},
      {"name":"Sun Seeker","identifier":"com.yourcompany.SunSeeker"},
      {"name":"Run Tracker","identifier":"com.heavydutyapps.Running"},
      {"name":"HP Smart","identifier":"com.hp.printer.control"},
      {"name":"Snapseed","identifier":"com.niksoftware.snapseedforipad"},
      {"name":"Fresh Start","identifier":"com.goodbarber.freshstartapp"},
      {"name":"Headcounts","identifier":"com.ministrycentered.headcounts"},
      {"name":"iMyFone iOS System Recovery","identifier":"MF.iMyfone iOS System Recovery"},
      {"name":"CircuitColors","identifier":"circuitColors"},
      {"name":"OpenTable","identifier":"com.contextoptional.OpenTable"},
      {"name":"Snake VS Block","identifier":"com.bentostudio.ballsvsblocks"},
      {"name":"DT Parents","identifier":"org.pbskids.danieltigerforparents"},
      {"name":"GIPHY","identifier":"com.giphy.giphyformessenger"},
      {"name":"Wells Fargo","identifier":"com.wf.mobilebanking"},
      {"name":"Facetune","identifier":"com.lightricks.Facetune"},
      {"name":"Amazon","identifier":"com.amazon.Amazon"},
      {"name":"RemoteLink","identifier":"com.onstar.mylink"},
      {"name":"Watch Videos","identifier":"org.pbskids.ipadplayer"},
      {"name":"Checkers","identifier":"R6WLZBVJLW.CheckersFree"},
      {"name":"Tempo Adv.","identifier":"com.frozenape.tempo2"},
      {"name":"AGT","identifier":"com.nbcuni.nbc.agt"},
      {"name":"Adobe Fill & Sign","identifier":"com.adobe.FillAndSign"},
      {"name":"Scanner Pro","identifier":"com.readdle.Scanner"},
      {"name":"At Bat","identifier":"com.mlb.AtBatUniversal"},
      {"name":"ChattyWagon","identifier":"com.vistabit.chattywagon"},
      {"name":"Chattanooga PD","identifier":"gov.chattanooga.pd.mobilepd"},
      {"name":"AccorHotels","identifier":"fr.accor.push"},
      {"name":"WPChatt","identifier":"com.subsplashconsulting.HPKFDN"},
      {"name":"Facebook Page","identifier":"com.facebook.PageAdminApp"},
      {"name":"QuickVoice Pro","identifier":"com.nfinity.QuickVoicePro"},
      {"name":"Enterprise","identifier":"com.enterprise.eracmobile"},
      {"name":"Norton Mobile","identifier":"com.symantec.nms"},
      {"name":"Natural Cycles","identifier":"com.naturalcycles.cordova"},
      {"name":"Jesus Calling","identifier":"com.thomasnelson.jesuscalling"},
      {"name":"Traductor,\"iOS"},
      {"name":"Shazam","identifier":"com.shazam.Shazam"},
      {"name":"LEAD.","identifier":"com.churchcommunitybuilder.groupapp"},
      {"name":"MyRadar","identifier":"com.fboweb.MyRadar"},
      {"name":"WSOP","identifier":"com.playtika.wsop"},
      {"name":"Secret Free","identifier":"com.sepiasoftware.secretmenufree"},
      {"name":"Bible Hub","identifier":"com.biblehub.BibleHubApp"},
      {"name":"TENKYU","identifier":"com.keepgamesimple.rollingsphere"},
      {"name":"NYTimes","identifier":"com.nytimes.NYTimes"},
      {"name":"Breakaway","identifier":"com.subsplashconsulting.KFBKGD"},
      {"name":"Great Clips","identifier":"com.greatclips.greatclipsapp"},
      {"name":"Fidelity","identifier":"com.fidelity.watchlist"},
      {"name":"EveryDollar","identifier":"com.everydollar.EveryDollar"},
      {"name":"LINE","identifier":"jp.naver.line"},
      {"name":"TapeACall Pro","identifier":"com.epicenterprises.tapeacall.pro"},
      {"name":"CBDReader","identifier":"com.cbdreader"},
      {"name":"Carcassonne","identifier":"de.codingmonkeys.Carcassonne"},
      {"name":"Costco","identifier":"com.costco.costco"},
      {"name":"DIRECTV","identifier":"com.directv.DTViPhone"},
      {"name":"Buffer","identifier":"com.buffer.buffer"},
      {"name":"Road Trip","identifier":"com.sagosago.RoadTrip"},
      {"name":"Tabata","identifier":"com.parabolicriver.Tabata-Stopwatch-Pro-Free"},
      {"name":"Raw Juce","identifier":"com.rawjuce.rawjuce.ios"},
      {"name":"Lowe's","identifier":"com.lowes.mobile.consumer.iphone.lowes"},
      {"name":"TWFT","identifier":"com.subsplashconsulting.F378VS"},
      {"name":"Point of Sale","identifier":"com.squareup.square"},
      {"name":"Bible Study","identifier":"com.olivetree.BR-Free"},
      {"name":"My Account","identifier":"com.tracfone.Straight-Talk-Wireless-My-Account"},
      {"name":"ADP Mobile","identifier":"com.adp.adpmobile"},
      {"name":"Searchlight","identifier":"com.searchlightapp.searchlight"},
      {"name":"Nike Run Club","identifier":"com.nike.nikeplus-gps"},
      {"name":"Agent","identifier":"com.air-watch.agent"},
      {"name":"Pipe N Wire","identifier":"com.ciscoalcala.Pipe-N-Wire"},
      {"name":"IMDb","identifier":"com.imdb.imdb"},
      {"name":"23andMe","identifier":"com.23andme.core"},
      {"name":"Upwork","identifier":"com.odesk.odeskmessenger"},
      {"name":"Verses","identifier":"com.verses.Verses"},
      {"name":"Kindle","identifier":"com.amazon.Lassen"},
      {"name":"Bank of Dade","identifier":"com.fdc.zbodtgsub"},
      {"name":"Griddy Pro","identifier":"com.keangdavid.GriddyPro"},
      {"name":"Flipboard","identifier":"com.flipboard.flipboard-ipad"},
      {"name":"Bible","identifier":"tv.lifechurch.bible"},
      {"name":"RockMyRun","identifier":"com.rockmyrun.RockMyRunb"},
      {"name":"Fitbit","identifier":"com.fitbit.FitbitMobile"},
      {"name":"Whole Foods","identifier":"com.wholefoods.WholeFoods"},
      {"name":"Benefits","identifier":"com.netacceleration.lh1"},
      {"name":"Hopper","identifier":"com.hopper.flights"},
      {"name":"CamCard","identifier":"com.intsig.camcard.lite"},
      {"name":"Hilton Honors","identifier":"com.hilton.hhonors"},
      {"name":"Spades+","identifier":"com.astarsoftware.spadeslite"},
      {"name":"Hospitality","identifier":"com.gladtohaveyou.hospitality"},
      {"name":"Lightroom CC","identifier":"com.adobe.lrmobilephone"},
      {"name":"GoPro","identifier":"com.gopro.GoPro"},
      {"name":"Motiv Audio","identifier":"com.shure.plus.motiv"},
      {"name":"Life.Church","identifier":"church.life.app"},
      {"name":"White Tiles 4","identifier":"com.brighthouse.whitetiles4"},
      {"name":"Portrait Blur","identifier":"com.inlovewith.PortraitBlur"},
      {"name":"genie","identifier":"com.netgear.GenieiPhoneiPod"},
      {"name":"People","identifier":"com.ministrycentered.People"},
      {"name":"Shutterfly","identifier":"com.shutterfly.ShutterflyUploader"},
      {"name":"Simple","identifier":"com.simple.Simple"},
      {"name":"Dictation","identifier":"com.nuance.Dictation"},
      {"name":"TextMe","identifier":"com.textmeinc.textme2"},
      {"name":"You and Me","identifier":"org.crazylove.YAMF"},
      {"name":"Adobe Draw","identifier":"com.adobe.draw.ios"},
      {"name":"Lyft","identifier":"com.zimride.instant"},
      {"name":"NOAA Weather Radar","identifier":"com.apalonapps.radarfree"},
      {"name":"Prime Video","identifier":"com.amazon.aiv.AIVApp"},
      {"name":"HUJI","identifier":"com.jbinary.hujicam"},
      {"name":"SmartWOD","identifier":"net.smartwod.timer"},
      {"name":"Bible Gateway","identifier":"com.zonervan.biblegateway"},
      {"name":"PAC-MAN Premium","identifier":"com.namconetworks.pacman"},
      {"name":"ThinkingAhead","identifier":"com.bf.app9dcd79"},
      {"name":"Nuestro Pan Diario","identifier":"org.odb.reader"},
      {"name":"Basecamp","identifier":"com.basecamp.bc3-ios"},
      {"name":"Excel","identifier":"com.microsoft.Office.Excel"},
      {"name":"Stash","identifier":"com.stash.stash-invest"},
      {"name":"Alchemists","identifier":"com.czechgames.alchemyLab"},
      {"name":"Litely","identifier":"com.litely.litely"},
      {"name":"FirstTn Biz","identifier":"com.firsttennessee.bbol.phone"},
      {"name":"Zillow","identifier":"com.zillow.Postlets"},
      {"name":"Finding Dory","identifier":"com.disneydigitalbooks.findingdory"},
      {"name":"Ticketmaster","identifier":"com.ticketmaster.ios.TicketmasterApp"},
      {"name":"Murphy Drive","identifier":"com.murphy.driverewards"},
      {"name":"Two Dots","identifier":"com.weplaydots.twodots"},
      {"name":"Fused","identifier":"com.easytigerapps.fused"},
      {"name":"Bitstamp","identifier":"net.bitstamp.bitstamp-ios"},
      {"name":"InfiniTime Atlas Mobile Employee Module","identifier":"com.LoneWolfSoftware.InfinitimeAtlasMobileApple"},
      {"name":"Echo","identifier":"com.cloversites.Echo"},
      {"name":"Business","identifier":"com.microsoft.lync2013.iphone"},
      {"name":"Instagram","identifier":"com.burbn.instagram"},
      {"name":"GOAT","identifier":"com.airgoat.goat.ios"},
      {"name":"ADSelfService Plus","identifier":"com.manageengine.adssp"},
      {"name":"Contour","identifier":"com.cox.contour"},
      {"name":"Google Earth","identifier":"com.google.b612"},
      {"name":"Office Lens","identifier":"com.microsoft.officelens"},
      {"name":"hocus","identifier":"com.gamebrain.hocus"},
      {"name":"OVGuide","identifier":"com.ovguide.app.ipad"},
      {"name":"Complete Reference for 5e","identifier":"com.personaltechnologies.Complete-Reference"},
      {"name":"NIV Bible","identifier":"NIV-BR"},
      {"name":"Motion Stills","identifier":"com.google.MotionStills"},
      {"name":"SIZE","identifier":"com.bodybuilding.jimstoppani"},
      {"name":"Dollywood","identifier":"com.dollywood.parkguide"},
      {"name":"Faithlife Ebooks","identifier":"com.logos.vyrso"},
      {"name":"o k a y ?","identifier":"de.kamibox.pop"},
      {"name":"HQ","identifier":"co.intermedialabs.hq"},
      {"name":"Yelp","identifier":"com.yelp.yelpiphone"},
      {"name":"Apple Store","identifier":"com.apple.store.Jolly"},
      {"name":"Remote","identifier":"com.apple.TVRemote"},
      {"name":"Madness 2","identifier":"com.limbic.tm2-ios"},
      {"name":"Bible Memory","identifier":"com.bgolson.scripturetyper"},
      {"name":"Meme Pack","identifier":"tech-with-matthew.Meme-Pack-Offical"},
      {"name":"Airbnb","identifier":"com.airbnb.app"},
      {"name":"Soulcon","identifier":"com.partner-auto-5070.Soulcon"},
      {"name":"RPG Scribe","identifier":"com.rlyehindustry.rpgscribe35"},
      {"name":"BTS","identifier":"com.mlbam.BTS"},
      {"name":"MergePlane","identifier":"com.mergeplaneapp.92lao4"},
      {"name":"Quests","identifier":"com.mindvalley.quests"},
      {"name":"My Macros+","identifier":"com.jloewy.mymacros"},
      {"name":"Blaze Pizza","identifier":"com.relevantmobile.blazepizza"},
      {"name":"White Noise","identifier":"com.tmsoft.WhiteNoise"},
      {"name":"Norton Family parental control","identifier":"com.symantec.nfchild"},
      {"name":"CN","identifier":"com.turner.cnvideoapp"},
      {"name":"Sandbox","identifier":"art.sandbox.app"},
      {"name":"Voice Recorder","identifier":"com.TapMediaLtd.VoiceRecorderFREE"},
      {"name":"Sleep Cycle","identifier":"com.lexwarelabs.goodmorning"},
      {"name":"Verizon Cloud","identifier":"com.verizon.cloud"},
      {"name":"Osmos","identifier":"com.hemispheregames.osmos"},
      {"name":"UPS","identifier":"com.ups.m.iphone"},
      {"name":"ManheimHD","identifier":"com.borusanmanheim.ipad"},
      {"name":"Medly","identifier":"com.medlylabs.medly"},
      {"name":"Havenly","identifier":"com.havenly.ios"},
      {"name":"DBMeter","identifier":"com.alexstart.dbmeter-paid"},
      {"name":"The Weather","identifier":"com.weather.TWC"},
      {"name":"CutStory","identifier":"com.highglossy.cutStory"},
      {"name":"Regions","identifier":"com.regions.mbanking"},
      {"name":"Artists","identifier":"com.spotify.s4a"},
      {"name":"SoBi","identifier":"com.socialbicycles.app"},
      {"name":"BTN2Go","identifier":"com.foxdm.BTN2GO"},
      {"name":"DH 2018","identifier":"com.glu.deerhunt16"},
      {"name":"Letterpress","identifier":"com.atebits.ios.Letterpress"},
      {"name":"Token","identifier":"com.rsa.securid.iphone.SecurID"},
      {"name":"My Sprint","identifier":"com.sprint.psd.zone"},
      {"name":"Realtor.com","identifier":"com.move.Realtor"},
      {"name":"FlyWise","identifier":"com.flyboxfishing.flywise"},
      {"name":"KAYAK","identifier":"com.kayak.travel"},
      {"name":"FNB Omaha","identifier":"FNB.FNB-Omaha"},
      {"name":"Voxer","identifier":"com.rebelvox.voxer-lite"},
      {"name":"Travelocity","identifier":"com.sabre.travelocity"},
      {"name":"Trello","identifier":"com.fogcreek.trello"},
      {"name":"Group Fitness","identifier":"com.lifetimefitness.interests.groupfitness"},
      {"name":"Brushstroke","identifier":"com.codeorgana.brushstroke"},
      {"name":"Amazon Alexa","identifier":"com.amazon.echo"},
      {"name":"Nextdoor","identifier":"com.nextdoor.nextdoor"},
      {"name":"GasBuddy","identifier":"com.gasbuddymobile.gasbuddy"},
      {"name":"ABC","identifier":"com.abcdigital.abc.videoplayer"},
      {"name":"Circle","identifier":"com.circlemedia.CircleHome"},
      {"name":"Photo Lab","identifier":"com.photo"},
      {"name":"Sleep Pillow","identifier":"com.heavydutyapps.sleeppillowfree"},
      {"name":"Cake Maker","identifier":"com.pazugames.cakeshopnew"},
      {"name":"SoundCloud","identifier":"com.soundcloud.TouchApp"},
      {"name":"Falling Ballz","identifier":"com.ketchapp.fallingballz"},
      {"name":"Study Bible","identifier":"com.logos.faithlifestudybible"},
      {"name":"North Point","identifier":"com.subsplashconsulting.4FQ6VC"},
      {"name":"Fiverr","identifier":"com.fiverr.fiverr"},
      {"name":"TNT","identifier":"com.turner.TNT"},
      {"name":"CNN","identifier":"com.cnn.iphone"},
      {"name":"iBabyCare","identifier":"com.iBabylabs.iBabyViewM6"},
      {"name":"Outlook","identifier":"com.microsoft.Office.Outlook"},
      {"name":"American","identifier":"com.aa.AmericanAirlines"},
      {"name":"Cubor","identifier":"com.devm.cubor"},
      {"name":"Safe Connect","identifier":"com.mcafee.safeconnect"},
      {"name":"Hoopla","identifier":"com.hoopladigital.hoopla"},
      {"name":"Goodbudget","identifier":"com.eebacanhelp.ios"},
      {"name":"Gun Search","identifier":"com.maranathatech.gunsearch"},
      {"name":"HISTORY","identifier":"com.aetn.history.ios.watch"},
      {"name":"Plex","identifier":"com.plexapp.plex"},
      {"name":"Preview","identifier":"com.sensio.instapreview"},
      {"name":"WordSwag","identifier":"com.oringe.wordswag"},
      {"name":"CBS","identifier":"com.cbsvideo.app"},
      {"name":"Alo Moves","identifier":"com.pejman.Cody"},
      {"name":"Central","identifier":"com.subsplashconsulting.centralchurch"},
      {"name":"GoodRx","identifier":"com.goodrx.iphone"},
      {"name":"Strava","identifier":"com.strava.stravaride"},
      {"name":"SWcapture","identifier":"com.southwestern.capture"},
      {"name":"Lime","identifier":"com.limebike"},
      {"name":"Vero","identifier":"co.vero.app"},
      {"name":"Photo Print","identifier":"com.pictarine.Photo-Print"},
      {"name":"Digit","identifier":"co.digit.digit"},
      {"name":"Playback","identifier":"com.multitracks.custommixplayer"},
      {"name":"Ameritrade","identifier":"com.tdameritrade.ism"},
      {"name":"Fly Fishing","identifier":"com.greenmountain.flyfishing"},
      {"name":"SPG","identifier":"com.starwoodhotels.spg"},
      {"name":"myWOD","identifier":"com.domainname.myWOD"},
      {"name":"VHS Cam","identifier":"com.shadiosta.vhsEditor.pro"},
      {"name":"HBO NOW","identifier":"com.hbo.hbonow"},
      {"name":"Home Depot","identifier":"com.thehomedepot.homedepot"},
      {"name":"Weber® Grills","identifier":"com.weberstephen.freeapp"},
      {"name":"Overcast","identifier":"fm.overcast.overcast"},
      {"name":"McAfee Security","identifier":"com.mcafee.mms"},
      {"name":"Google Calendar","identifier":"com.google.calendar"},
      {"name":"Logic Remote","identifier":"com.apple.musicapps.remote"},
      {"name":"Hollar","identifier":"com.hollar.ios"},
      {"name":"Skype","identifier":"com.skype.skype"},
      {"name":"SPL Meter","identifier":"com.studiosix.SPLMeter"},
      {"name":"Sports","identifier":"com.softacular.Sportacular"},
      {"name":"Life Time Health","identifier":"com.lifetimefitness.interests.lthealth"},
      {"name":"Rich Dad World","identifier":"com.thepei.app.richdadworld"},
      {"name":"Health Mate","identifier":"com.withings.wiScaleNG"},
      {"name":"Things","identifier":"com.culturedcode.ThingsiPhone"},
      {"name":"FACE IT","identifier":"com.garmin.picasso"},
      {"name":"Fantastical","identifier":"com.flexibits.fantastical2.ipad"},
      {"name":"myEPB","identifier":"com.epb.mobile"},
      {"name":"DoorDash","identifier":"doordash.DoorDashConsumer"},
      {"name":"Genius Scan","identifier":"com.geniussoftware.GeniusScan"},
      {"name":"Tempo","identifier":"com.frozenape.tempo"},
      {"name":"Tumblr","identifier":"com.tumblr.tumblr"},
      {"name":"Fantastical","identifier":"com.flexibits.fantastical2.iphone"},
      {"name":"Madbarz","identifier":"com.madbarz.madbarzApp"},
      {"name":"Word","identifier":"com.microsoft.Office.Word"},
      {"name":"LiveCollage","identifier":"com.click2mobile.collagegrameFree"},
      {"name":"thredUP","identifier":"com.thredup.thredup"},
      {"name":"Fox News","identifier":"com.foxnews.foxnews"},
      {"name":"Tetris Blitz","identifier":"com.ea.tetrisblitz.inc"},
      {"name":"PayPal","identifier":"com.yourcompany.PPClient"},
      {"name":"Waterdeep","identifier":"com.playdekgames.waterdeep"},
      {"name":"MapMyRun","identifier":"Q5AWL8WCY6.iMapMyRun"},
      {"name":"Medium","identifier":"com.medium.reader"},
      {"name":"Couple","identifier":"com.tenthbit.Juliet"},
      {"name":"Words","identifier":"com.newtoyinc.NewWordsWithFriendsFree"},
      {"name":"Resources","identifier":"com.ministrycentered.resources"},
      {"name":"Adobe Scan","identifier":"com.adobe.scan.ios"},
      {"name":"Chrome","identifier":"com.google.chrome.ios"},
      {"name":"Ballz","identifier":"com.ketchapp.ballz"},
      {"name":"WatchESPN","identifier":"com.espn.WatchESPN"},
      {"name":"Tech Expert","identifier":"com.sprint.solutoHome"},
      {"name":"Monument 2","identifier":"com.ustwo.monumentvalley2"},
      {"name":"SignNow","identifier":"com.signnow.signnow"},
      {"name":"Vivint","identifier":"com.vivint.panelcontrol.VivintNextGen"},
      {"name":"Alarmy","identifier":"droom.sleepIfUCanFree"},
      {"name":"BoxBreathing","identifier":"com.daviddesouza.boxbreathing"},
      {"name":"Canva","identifier":"com.canva.canvaeditor"},
      {"name":"Dark Sky","identifier":"com.jackadam.darksky"},
      {"name":"MemeCreator","identifier":"com.shabzco.memecreator"},
      {"name":"Walmart","identifier":"com.walmart.electronics"},
      {"name":"RhinoFit","identifier":"com.travis.rhinofit.RhinoFit"},
      {"name":"Fantasy","identifier":"com.yahoo.ffootball2009"},
      {"name":"Coast Hills","identifier":"io.echurch.coasthillschurch"},
      {"name":"Spaceteam","identifier":"com.sleepingbeastgames.spaceteam"},
      {"name":"Amazon Drive","identifier":"com.amazon.Drive"},
      {"name":"Vimeo","identifier":"com.vimeo"},
      {"name":"Love Church","identifier":"com.DeFalco.calvarychapelwestoma"},
      {"name":"Elevation","identifier":"com.subsplashconsulting.Elevation-Church"},
      {"name":"Paper","identifier":"com.fiftythree.paper"},
      {"name":"Fortify","identifier":"com.impact.fortify"},
      {"name":"MovieDiary","identifier":"com.moviediary"},
      {"name":"Wordscapes","identifier":"com.peoplefun.wordcross"},
      {"name":"Access Online","identifier":"com.usbank.AccessOnline"},
      {"name":"Relive","identifier":"cc.relive.reliveapp"},
      {"name":"Penultimate","identifier":"com.cocoabox.penultimate"},
      {"name":"Kickstarter","identifier":"com.kickstarter.kickstarter"},
      {"name":"RCT Classic","identifier":"com.atari.mobile.rctclassic"},
      {"name":"PushUps","identifier":"com.runtastic.iphone.pushup.lite"},
      {"name":"Covenant Eyes","identifier":"com.yourcompany.CEBrowser"},
      {"name":"Expedia","identifier":"com.expedia.booking"},
      {"name":"Spending","identifier":"com.mhriley.SpendingTracker"},
      {"name":"TVFCU","identifier":"com.tvfcu.mobile"},
      {"name":"Street View","identifier":"com.google.LightCycle"},
      {"name":"Verses For Life","identifier":"life.verses"},
      {"name":"Dictionary","identifier":"com.dictionary.dictionaryipad"},
      {"name":"Express","identifier":"com.google.ShoppingExpress"},
      {"name":"Asana","identifier":"com.asana.Asana"},
      {"name":"Firefox","identifier":"org.mozilla.ios.Firefox"},
      {"name":"Inbox","identifier":"com.air-watch.awemail"},
      {"name":"YT Studio","identifier":"com.google.ios.ytcreator"},
      {"name":"CPlus for Craigslist","identifier":"YanFlex.CPlus.Craigslist"},
      {"name":"HeReadsTruth","identifier":"com.shereadstruth.hereadstruth"},
      {"name":"WRCB Weather","identifier":"com.wrcb.WRCB-Radar"},
      {"name":"ParkOmaha","identifier":"com.passportparking.mobile.omaha"},
      {"name":"BADLAND","identifier":"com.frogmindgames.dodge"},
      {"name":"GM28","identifier":"com.livingwaters.gm28"},
      {"name":"Buildertrend","identifier":"com.builderTREND.btMobileApp"},
      {"name":"eBay","identifier":"com.ebay.iphone"},
      {"name":"Adblock Plus","identifier":"org.adblockplus.AdblockPlusSafari"},
      {"name":"Asana Rebel","identifier":"com.asanayoga.asanarebel"},
      {"name":"Symphonies","identifier":"com.dreampocket.BeethovenSymphoniesFree"},
      {"name":"OneNote","identifier":"com.microsoft.onenote"},
      {"name":"TAGG","identifier":"com.agilx.tagg"},
      {"name":"Content","identifier":"com.air-watch.content.locker"},
      {"name":"GoodNotes","identifier":"com.goodnotesapp.goodnotes"},
      {"name":"When I Work","identifier":"com.thisclicks.wheniwork"},
      {"name":"Compassion","identifier":"53E9UN3B28.COMPMOB"},
      {"name":"TestFlight","identifier":"com.apple.TestFlight"},
      {"name":"Cleartune","identifier":"com.bitcount.cleartune"},
      {"name":"Indeed Jobs","identifier":"com.indeed.JobSearch"},
      {"name":"Solitaire","identifier":"com.mobilityware.SolitaireFree"},
      {"name":"Prime Ruler","identifier":"com.grymala.ruler"},
      {"name":"Uber Eats","identifier":"com.ubercab.UberEats"},
      {"name":"Tabs","identifier":"com.ultimateguitar.tabs100"},
      {"name":"HomeAway","identifier":"com.homeaway.HAMobile"},
      {"name":"LinkedIn","identifier":"com.linkedin.LinkedIn"},
      {"name":"Ally Mobile","identifier":"com.ally.MobileBanking"},
      {"name":"Design Home","identifier":"com.crowdstar.covetHome"},
      {"name":"Kitchen","identifier":"com.objectifiedapps.kitchen"},
      {"name":"Classifieds 2.0","identifier":"com.orgmentis.buyandsell"},
      {"name":"GarageBand","identifier":"com.apple.mobilegarageband"},
      {"name":"Gboard","identifier":"com.google.keyboard"},
      {"name":"Wodify","identifier":"com.conigent.wodifyMobile"},
      {"name":"Messages Smileys","identifier":"com.apple.messages.faces"},
      {"name":"Progressive","identifier":"com.progressive.ProgressiveApp"},
      {"name":"WMU","identifier":"com.nikon-image.WirelessMobileAdapterUtility"},
      {"name":"Pinterest","identifier":"pinterest"},
      {"name":"Photo Vault","identifier":"com.enchantedcloud.photovault"},
      {"name":"Cash","identifier":"com.squareup.cash"},
      {"name":"YouTube","identifier":"com.google.ios.youtube"},
      {"name":"Robinhood","identifier":"com.robinhood.release.Robinhood"},
      {"name":"Drive","identifier":"com.google.Drive"},
      {"name":"Vellum","identifier":"com.merekdavis.vellum"},
      {"name":"MSNBC","identifier":"com.msnbc.rachelmaddow.ipad"},
      {"name":"GoToMeeting","identifier":"com.logmein.gotomeeting"},
      {"name":"Tile","identifier":"com.thetileapp.tile"},
      {"name":"Zen Planner","identifier":"com.zenplanner.member.Member"},
      {"name":"CREATE","identifier":"mobi.create"},
      {"name":"Hangouts","identifier":"com.google.hangouts"},
      {"name":"Apple Support","identifier":"com.apple.supportapp"},
      {"name":"Funk Roberts","identifier":"com.vidapp.FunkRobertsFunkRobertsFitnessApp"},
      {"name":"SpotOn","identifier":"com.spoton.mobile.ios"},
      {"name":"YT Music","identifier":"com.google.ios.youtubemusic"},
      {"name":"QuickBooks","identifier":"com.intuit.QBOiPad"},
      {"name":"Drive Safe & Save","identifier":"com.statefarm.DriveSafeAndSave"},
      {"name":"FreshBooks","identifier":"com.freshbooks.helios"},
      {"name":"Venmo","identifier":"net.kortina.labs.Venmo"},
      {"name":"Meet","identifier":"com.google.meetings"},
      {"name":"MPOW Flash","identifier":"com.mpowflash.app"},
      {"name":"Chase","identifier":"com.chase"},
      {"name":"InterviewStream Mobile","identifier":"com.interviewstream.interviewstreammobile"},
      {"name":"Dubsmash","identifier":"com.mobilemotion.dubsmash"},
      {"name":"P4W 31","identifier":"com.geoffreydagley.p4w31"},
      {"name":"Hope City","identifier":"com.subsplashconsulting.MHTVHQ"},
      {"name":"Draw Line","identifier":"com.bitmango.flowline"},
      {"name":"Duo Mobile","identifier":"com.duosecurity.DuoMobile"},
      {"name":"ScoreCenter","identifier":"com.espn.ScoreCenterXL"},
      {"name":"Behold Israel","identifier":"com.devsense.Behold-Israel"},
      {"name":"Color Road","identifier":"com.bigframes.colorroad"},
      {"name":"Scannable","identifier":"com.evernote.Scannable"},
      {"name":"POF","identifier":"com.pof.mobileapp.iphone"},
      {"name":"ROKU","identifier":"com.teix.Roku"},
      {"name":"Twitter","identifier":"com.atebits.Tweetie2"},
      {"name":"Citi Mobile","identifier":"com.citigroup.citimobile"},
      {"name":"Alarm Clock","identifier":"com.alarmclockcompany.alarmclockhdfree"},
      {"name":"Teladoc","identifier":"com.teladoc.members"},
      {"name":"Photoshop Fix","identifier":"com.adobe.photoshop.fix"},
      {"name":"HGV","identifier":"com.hilton.grandvacations"},
      {"name":"2048","identifier":"com.gabrielecirulli.app2048"},
      {"name":"Audible","identifier":"com.audible.iphone"},
      {"name":"Dropbox","identifier":"com.getdropbox.Dropbox"},
      {"name":"Calculator +","identifier":"com.yourcompany.Solve"},
      {"name":"Runkeeper","identifier":"RunKeeperPro"},
      {"name":"Voice","identifier":"com.google.GVDialer"},
      {"name":"Matter","identifier":"com.pixite.Matter"},
      {"name":"Rent.com","identifier":"com.rent.mobile.iphone.app"},
      {"name":"Football","identifier":"CollegeFootballScoreboard"},
      {"name":"Adobe Acrobat","identifier":"com.adobe.Adobe-Reader"},
      {"name":"NeuBible","identifier":"com.quietpupil.neubible"},
      {"name":"Fuelly","identifier":"com.appcubby.gascubby"},
      {"name":"Messages Hands","identifier":"com.apple.messages.hands"},
      {"name":"Marco Polo","identifier":"co.happybits.marcopolo"},
      {"name":"CHATT311","identifier":"com.accela.chattanooga-tn"},
      {"name":"GamePigeon","identifier":"com.gamerdelights.gamepigeon"},
      {"name":"MapMyRide","identifier":"Q5AWL8WCY6.iMapMyRide"},
      {"name":"Flexmls Pro","identifier":"com.fbsdata.flexmls"},
      {"name":"WordPress","identifier":"org.wordpress"},
      {"name":"Facebook","identifier":"com.facebook.Facebook"},
      {"name":"White Noise","identifier":"com.tmsoft.WhiteNoiseLite"},
      {"name":"FM NewsTalk 97.1","identifier":"com.emmis.971KFTK"},
      {"name":"Rosetta Stone","identifier":"com.rosettastone.totale.companionhd"},
      {"name":"Google Duo","identifier":"com.google.Tachyon"},
      {"name":"5-0 Radio","identifier":"com.smartestapple.50radiofree"},
      {"name":"Paribus","identifier":"paribus.Paribus"},
      {"name":"Countdown","identifier":"com.root38.CountdownTimer"},
      {"name":"Mortgage","identifier":"com.mobinnovations.mortgagePad"},
      {"name":"Light","identifier":"com.jzlabs.flashlightfree"},
      {"name":"ConduitFill","identifier":"com.southwire.conduitFill"},
      {"name":"Zillow","identifier":"com.zillow.ZillowMap"},
      {"name":"Groups","identifier":"com.qbix.groups"},
      {"name":"Everyday","identifier":"org.littlepixels.Everyday"},
      {"name":"Music Stand","identifier":"com.ministrycentered.pcomusicstand"},
      {"name":"Connect","identifier":"com.adobe.connect.mobile"},
      {"name":"Trailforks","identifier":"com.pinkbike.trailforks"},
      {"name":"Playbook","identifier":"com.fitnermedia.Fitner"},
      {"name":"Documents","identifier":"com.readdle.ReaddleDocsIPad"},
      {"name":"Snapchat","identifier":"com.toyopagroup.picaboo"},
      {"name":"AR Measure","identifier":"com.rieu.augreamsr"},
      {"name":"VideoEditor","identifier":"com.perfectvideoeditor.editor"},
      {"name":"Temple Run 2","identifier":"com.imangi.templerun2"},
      {"name":"Passion","identifier":"com.268generation.passion"},
      {"name":"Catan","identifier":"com.exozet.catan"},
      {"name":"StyleSeat","identifier":"com.dist.styleseat"},
      {"name":"ASUS Router","identifier":"com.asus.asusrouter"},
      {"name":"Helix Jump","identifier":"com.h8games.falldown"},
      {"name":"PDF Expert","identifier":"com.readdle.PDFExpert5"},
      {"name":"Wendler Log","identifier":"com.vandersw.wenderlogbook"},
      {"name":"iCompose","identifier":"com.userlight.iTemplates"},
      {"name":"My Verizon","identifier":"com.vzw.hss.myverizon"},
      {"name":"TrainingIQ","identifier":"com.trainingiq.app"},
      {"name":"Docs","identifier":"com.google.Docs"},
      {"name":"Groupon","identifier":"com.groupon.grouponapp"},
      {"name":"CamScanner","identifier":"com.intsig.CamScannerLite"},
      {"name":"Clash of Clans","identifier":"com.supercell.magic"},
      {"name":"Weathershot Pro","identifier":"mobi.byss.instaweather"},
      {"name":"Annotable","identifier":"com.moke.Annotable"},
      {"name":"Fandango","identifier":"com.fandango.fandango"},
      {"name":"OnePlace","identifier":"com.salemwebnetwork.Oneplace"},
      {"name":"SWStats","identifier":"com.southwestern.stats"},
      {"name":"M Essentials","identifier":"com.aromatools.modernessentials"},
      {"name":"Bowmasters","identifier":"com.playgendary.bowmasters"},
      {"name":"Thyme","identifier":"no.hyper.thyme"},
      {"name":"GLS18","identifier":"org.willowcreek.glsconf"},
      {"name":"CSS","identifier":"com.showings.css"},
      {"name":"Kelle","identifier":"com.kw.kelle.mobile"},
      {"name":"Tunefor Ukulele","identifier":"com.tuneforukuleletunerfree.royaltuner"},
      {"name":"CopyMyData","identifier":"com.mediamushroom.copymydata2"},
      {"name":"Heads Up!","identifier":"com.wb.Ellen.HeadsUp"},
      {"name":"Home Design","identifier":"com.anuman.HomeDesign3DFreemiumiPad"},
      {"name":"Rewards","identifier":"com.google.paidtasks"},
      {"name":"iBend Offsets","identifier":"iBendOffsets"},
      {"name":"IGN","identifier":"68RX859ZF4.com.fox.ign.iphone"},
      {"name":"Self Employed","identifier":"com.intuit.qbse"},
      {"name":"AdCap!","identifier":"com.kongregate.mobile.adventurecapitalist"},
      {"name":"Bible Study","identifier":"com.salemwebnetwork.BibleStudyTools"},
      {"name":"Hillsong Worship Stickers","identifier":"com.hillsong.hillsongworshipstickers"},
      {"name":"Hole.io","identifier":"com.nguyenvh.holeio"},
      {"name":"Pinnacle","identifier":"com.fdc.pfpntnsub"},
      {"name":"Google Photos","identifier":"com.google.photos"},
      {"name":"AnyFont","identifier":"com.flappdev.ifonts"},
      {"name":"Authenticator","identifier":"com.microsoft.azureauthenticator"},
      {"name":"Craigslist","identifier":"com.shft.qwilo-cl"},
      {"name":"Todoist","identifier":"com.todoist.ios"},
      {"name":"Allstate","identifier":"com.allstate.dev.allstate"},
      {"name":"CarGurus","identifier":"com.cargurus.v1"},
      {"name":"Power BI","identifier":"com.microsoft.powerbimobile"},
      {"name":"Speedtest","identifier":"com.ookla.speedtest"},
      {"name":"ParkMobile","identifier":"us.parkmobile.ParkMobile"},
      {"name":"CrossFit Games","identifier":"com.crossfit.crossfitgames"},
      {"name":"Star Walk 2","identifier":"com.vitotechnology.StarWalk2"},
      {"name":"LakeInfo","identifier":"com.tva.lakeinfo"},
      {"name":"AirPort Utility","identifier":"com.apple.airport.mobileairportutility"},
      {"name":"lululemon","identifier":"com.lululemon.shopapp"},
      {"name":"Experience","identifier":"com.subsplashconsulting.KVWJ5V"},
      {"name":"Elevate","identifier":"com.elevateapp.elevate"},
      {"name":"Harvest","identifier":"com.getharvest.Harvest"},
      {"name":"Delay Calc","identifier":"com.kevleesoftware.DelayBPM"},
      {"name":"iHeartRadio","identifier":"com.clearchannel.iheartradio"},
      {"name":"Hotels.com","identifier":"com.hotels.HotelsNearMe"},
      {"name":"Hulu,\"iOS"},
      {"name":"Musicbed","identifier":"com.themusicbed.musicbed"},
      {"name":"Calm","identifier":"com.calm.calmapp"},
      {"name":"Google+","identifier":"com.google.GooglePlus"},
      {"name":"Food City Mobile","identifier":"com.foodcity.mobileapp"},
      {"name":"Yard Sale","identifier":"com.kolodgiesoft.mapview"},
      {"name":"Musemage","identifier":"com.Paraken.Musemage"},
      {"name":"Walgreens","identifier":"com.usablenet.walgreens"},
      {"name":"GLSnext","identifier":"org.willowcreek.glsnext"},
      {"name":"Airmail","identifier":"com.airmailapp.iphone"},
      {"name":"Hudl","identifier":"com.hudl.modi"},
      {"name":"Candy Crush","identifier":"com.midasplayer.apps.candycrushjellysaga1"},
      {"name":"Dice Roller","identifier":"eu.internetdesigns.iphoneapps.diceroller"},
      {"name":"Credit Karma","identifier":"com.creditkarma.mobile"},
      {"name":"Logos Bible","identifier":"com.logos.ilogos"},
      {"name":"Huntington","identifier":"com.huntington.m"},
      {"name":"BOC Mobile","identifier":"com.fi6018.godough"},
      {"name":"Starbucks","identifier":"com.starbucks.myStarbucks.stickers"},
      {"name":"Cash Show","identifier":"com.triviagames.cashshow"},
      {"name":"Overflow","identifier":"com.theoverflow.TheOverflow"},
      {"name":"Monument","identifier":"com.ustwo.monumentvalley"},
      {"name":"eKEY","identifier":"com.fs.utc.supra.ekey"},
      {"name":"Baby Monitor","identifier":"com.martinman.bestbabymonitor"},
      {"name":"UniFi","identifier":"com.ubnt.unifiac"},
      {"name":"Atlas","identifier":"com.argosy.vb.superatlas"},
      {"name":"HealthEquity","identifier":"com.healthequity.healthequitymobile"},
      {"name":"Tinycards","identifier":"com.duolingo.Flashcards"},
      {"name":"UniFi Video","identifier":"com.ubnt.unifivideo"},
      {"name":"imo","identifier":"imoimiphone"},
      {"name":"Kinomatic","identifier":"com.infoding.kinomatic"},
      {"name":"D&D Beyond","identifier":"com.curse.dndbeyond"},
      {"name":"The Room Three","identifier":"com.FireproofStudios.TheRoom3"},
      {"name":"Remote Desktop","identifier":"com.google.ChromeRemoteDesktop"},
      {"name":"Homer","identifier":"com.Homer.HomerLearning"},
      {"name":"Expensify","identifier":"com.expensify.expensifylite"},
      {"name":"Calvary","identifier":"org.calvaryabq.skipheitzig"},
      {"name":"NPR","identifier":"org.npr.nprnews"},
      {"name":"Freshdesk","identifier":"com.freshdesk.Freshdesk"},
      {"name":"BankOfTheWest","identifier":"com.botw.mbanking.store"},
      {"name":"Uber","identifier":"com.ubercab.UberClient"},
      {"name":"Waze","identifier":"com.waze.iphone"},
      {"name":"Wish","identifier":"com.contextlogic.Wish"},
      {"name":"Chattanooga","identifier":"com.netpulse.akfitness"},
      {"name":"GEICO Mobile","identifier":"com.geico.GloveBox"},
      {"name":"Flixster","identifier":"com.jeffreygrossman.moviesapp"},
      {"name":"Dayflash","identifier":"com.switness.Switness"},
      {"name":"iMuscle 2","identifier":"com.3d4medical.iMuscleiPhone"},
      {"name":"Autotrader","identifier":"com.autotrader.showroom.ipad"},
      {"name":"531 Strength","identifier":"com.jachobsen.fivethreeone"},
      {"name":"Zillow Rentals","identifier":"com.zillow.rentals"},
      {"name":"Home Workouts","identifier":"com.abishkking.maleworkout"},
      {"name":"Jetpack","identifier":"com.halfbrick.jetpack"},
      {"name":"AroundMe","identifier":"com.tweakersoft.AroundMe"},
      {"name":"Biblos","identifier":"com.digibooks4all.biblosapp"},
      {"name":"Simple Radio","identifier":"com.simpleradio.SimpleRadioFree"},
      {"name":"Leo's Fortune","identifier":"com.leosfortune"},
      {"name":"Real Life","identifier":"com.subsplashstudio768.reallife"},
      {"name":"IntervalTimer","identifier":"com.dworks.intervalfitnesstimerlite"},
      {"name":"Google Pay","identifier":"com.google.Wallet"},
      {"name":" Weather ","identifier":"com.weather.TWCiPadMax"},
      {"name":"Fit Radio","identifier":"com.fitradio.mobileapp"},
      {"name":"Videoleap","identifier":"com.lightricks.Enlight-Video"},
      {"name":"theScore","identifier":"iphone.thescore.com"},
      {"name":"App Remote","identifier":"jp.co.sony.evc.launcher"},
      {"name":"Live Weather","identifier":"com.fotoable.news.weather"},
      {"name":"Cars.com","identifier":"com.cars.carsipad"},
      {"name":"Mint","identifier":"com.mint.internal"},
      {"name":"Net Analyzer","identifier":"net.techet.netanalyzerlite"},
      {"name":"MoviePass","identifier":"com.moviepass.MoviePass"},
      {"name":"Scooter's","identifier":"com.firstdata.Scooters"},
      {"name":"Poshmark","identifier":"com.poshmark.poshmark"},
      {"name":"Zillow Mortgage","identifier":"com.zillow.zmm"},
      {"name":"SeatGeek","identifier":"com.seatgeek.SeatGeek"},
      {"name":"Steak ’n Shake","identifier":"com.SnS.Steak-n-Shake"},
      {"name":"Southwest","identifier":"com.southwest.iphoneprod"},
      {"name":"Zelle","identifier":"com.zellepay.zelle"},
      {"name":"Candy Crush Saga","identifier":"com.midasplayer.apps.candycrushsaga"},
      {"name":"Support","identifier":"com.zendesk.agent.appstore"},
      {"name":"reader","identifier":"com.lifeway.xbooksreader"},
      {"name":"Rook","identifier":"com.fishdog.rook"},
      {"name":"NFHS Network","identifier":"com.2048media.nfhsnetwork"},
      {"name":"Messenger","identifier":"com.facebook.Messenger"},
      {"name":"PopAGraph","identifier":"com.flambestudios.popagraph"},
      {"name":"Diptic","identifier":"com.peaksystems.Diptic"},
      {"name":"Domino's","identifier":"com.dominos.iphone"},
      {"name":"Projector","identifier":"com.ministrycentered.projector"},
      {"name":"Wikipedia","identifier":"org.wikimedia.wikipedia"},
      {"name":"Streetlights","identifier":"com.streetlightsbible.app"},
      {"name":"iBend Pipe","identifier":"com.yourcompany.iBend-Pipe"},
      {"name":"Zomato","identifier":"com.zomato.zomato"},
      {"name":"Noisli","identifier":"com.noisli.Noisli"},
      {"name":"SpeedSmart","identifier":"com.veeapps.speedtestxhd"},
      {"name":"Day One","identifier":"com.bloombuilt.dayone-ios"},
      {"name":"Coinbase","identifier":"com.vilcsak.bitcoin2"},
      {"name":"Fresh Life","identifier":"com.subsplashstudio65.Fresh-Life-Church"},
      {"name":"iTunes U","identifier":"com.apple.itunesu"},
      {"name":"MyFitnessPal","identifier":"com.myfitnesspal.mfp"},
      {"name":"Intelex Mobile","identifier":"com.intelex.intelexMobile"},
      {"name":"Collage Maker","identifier":"co.vulcanlabs.photo.collage"},
      {"name":"U by BB&T","identifier":"com.bbt.bank"},
      {"name":"1Password","identifier":"com.agilebits.onepassword-ios"},
      {"name":"Jimmy John’s","identifier":"com.jimmyjohns.jimmyjohns"},
      {"name":"NFL","identifier":"com.nfl.gamecenter"},
      {"name":"Tailor","identifier":"com.foundry63.tailor"},
      {"name":"Connect","identifier":"com.garmin.connect.mobile"},
      {"name":"Discovery GO","identifier":"com.discovery.mobile.discoverygo"},
      {"name":"Martin Tuner","identifier":"com.martintuner.Martin-Tuner"},
      {"name":"Disney Junior","identifier":"com.disney.WATCHDisneyJunior"},
      {"name":"My Bender","identifier":"mybender"},
      {"name":"Play Movies","identifier":"com.google.Movies"},
      {"name":"Houzz","identifier":"com.houzz.app"},
      {"name":"Clips","identifier":"com.apple.clips"},
      {"name":"Golf Clash","identifier":"com.playdemic.golf"},
      {"name":"Pixlr","identifier":"com.autodesk.ios.pixlrexpressplus"},
      {"name":"Chatbooks","identifier":"com.justfamily.Moments"},
      {"name":"Charades!","identifier":"com.fatchicken007.headsupcharades"},
      {"name":"MileIQ","identifier":"com.mobiledatalabs.goiq"},
      {"name":"Video Mixer","identifier":"com.odyssey.videomerge"},
      {"name":"Time Entry","identifier":"com.computerease.timeentry"},
      {"name":"iMovie","identifier":"com.apple.iMovie"},
      {"name":"NBA","identifier":"com.nbadigital.gametimelt"},
      {"name":"Camera+","identifier":"com.taptaptap.CameraPlus"},
      {"name":"VRBO","identifier":"com.vrbo.traveler"},
      {"name":"Chick-fil-A","identifier":"com.engauge.Chick-fil-A"},
      {"name":"Twitch","identifier":"tv.twitch"},
      {"name":"Check-Ins","identifier":"com.ministrycentered.check-ins"},
      {"name":"Hiya","identifier":"com.whitepages.callerid"},
      {"name":"Chromecast","identifier":"afl.chromecast"},
      {"name":"Termius","identifier":"com.crystalnix.ServerAuditor"},
      {"name":"dotloop","identifier":"com.dotloop.dotloop"},
      {"name":"Wild Kitchen","identifier":"com.fatburningman.wildkitchen"},
      {"name":"Sonicare","identifier":"com.philips.ph.hw.ohc.sonicare"},
      {"name":"Rise Up","identifier":"com.riseup.game"},
      {"name":"Layout","identifier":"com.burbn.layouts"},
      {"name":"MOSAIC","identifier":"com.echurchapps.mosaicla"},
      {"name":"Sermon","identifier":"org.desiringgod.SermonOfTheDay"},
      {"name":"Remote","identifier":"com.apple.Remote"},
      {"name":"BLB","identifier":"com.BlueLetterBible.BLB"},
      {"name":"Principal","identifier":"com.principal.mobile"},
      {"name":"PLAYBULB X","identifier":"com.mipow.PLAYBULBX"},
      {"name":"Nick Jr.","identifier":"com.mtvn.nickjr"},
      {"name":"WeatherBug","identifier":"com.aws.weatherbug.pro"},
      {"name":"FollowUpBoss","identifier":"com.followupboss.FUBApp"},
      {"name":"AdSense","identifier":"com.google.PublisherApp"},
      {"name":"HC NOW","identifier":"com.hillsongchannel.now"},
      {"name":"McDonald's","identifier":"com.mcdonalds.gma"},
      {"name":"KicksOnFire","identifier":"com.kicksonfire.kicksonfire"},
      {"name":"Clash Royale","identifier":"com.supercell.scroll"},
      {"name":"Rich Dad","identifier":"com.thepei.app.richdadcoaching"},
      {"name":"Script","identifier":"com.celtx.screenwriter"},
      {"name":"Credit One","identifier":"com.creditonebank.mobile"},
      {"name":"Browser","identifier":"com.air-watch.secure.browser"},
      {"name":"CarMax","identifier":"com.carmax.carmax"},
      {"name":"August","identifier":"com.august.iossapp"},
      {"name":"DIY","identifier":"com.scripps.diy.iphone"},
      {"name":"Connections","identifier":"com.nalco.Connections"},
      {"name":"PCO,\"iOS"},
      {"name":"KBB.com","identifier":"com.kbb.phone"},
      {"name":"OfferUp","identifier":"com.offerup.iphone.consumer"},
      {"name":"Target","identifier":"com.target.Target"},
      {"name":"Threes","identifier":"vo.threes.exclaim"},
      {"name":"ESPN","identifier":"com.espn.ScoreCenter"},
      {"name":"Flipflop","identifier":"net.stfj.updownsolitaire"},
      {"name":"Wunderlist","identifier":"com.6wunderkinder.wunderlistmobile"},
      {"name":"HelloFresh","identifier":"com.hellofresh.HelloFresh"},
      {"name":"TC 2.0","identifier":"com.alarmnet.tc2"},
      {"name":"Work","identifier":"com.cartoonsmart.workstickers"},
      {"name":"Albert","identifier":"com.albert.Albert"},
      {"name":"SunTrust","identifier":"com.suntrust.mobilemoney"},
      {"name":"Rakuten Global Market","identifier":"jp.co.rakuten.Shopping.global"},
      {"name":"Nest","identifier":"com.nestlabs.jasper.release"},
      {"name":"Sudoku","identifier":"com.redkeysoftware.expertsudoku"},
      {"name":"Commentary","identifier":"english.comments.constable.Commentary"},
      {"name":"Trulia","identifier":"com.trulia.Trulia"},
      {"name":"Life Time","identifier":"com.lifetimefitness.interests.ltfitness"},
      {"name":"Sonos","identifier":"com.sonos.SonosController"},
      {"name":"Key Ring","identifier":"com.mobestream.keyring"},
      {"name":"Dashboard","identifier":"com.meraki.Dashboard"},
      {"name":"IKEA Place","identifier":"com.inter-ikea.place"},
      {"name":"ESV Bible","identifier":"org.crossway.ESVStudyBible"},
      {"name":"PoolOps","identifier":"com.poolops.poolops"},
      {"name":"Marriott","identifier":"com.marriott.iphoneprod"},
      {"name":"Realm Connect","identifier":"com.acstechnologies.Realm.Engagement"},
      {"name":"My Resource","identifier":"com.republicservices.myresource"},
      {"name":"Sudoku","identifier":"com.redkeysoftware.sudokufree"},
      {"name":"Grocery","identifier":"com.walmart.grocery"},
      {"name":"The Mesh","identifier":"cl.TheMesh"},
      {"name":"Tasty","identifier":"com.buzzfeed.tasty"},
      {"name":"Accordance","identifier":"com.oaktree.iAccord"},
      {"name":"Blackjack","identifier":"uk.me.decipher.blackjack7"},
      {"name":"Auxy","identifier":"co.auxy.auxy-phone"},
      {"name":"Transistor","identifier":"com.supergiantgames.ios.transistor"},
      {"name":"Union","identifier":"com.pixite.Union"},
      {"name":"2048","identifier":"com.ketchapp.2048"},
      {"name":"Yummly","identifier":"com.yummly.production"},
      {"name":"DYS","identifier":"com.directsalesmobile.prospect1"},
      {"name":"Sneaker Crush","identifier":"davidgarcia.app.Sneaker-Crush"},
      {"name":"Car-Net","identifier":"com.verizontelematics.VWCar-Net"},
      {"name":"Jurassic World","identifier":"com.ludia.jurassicworld"},
      {"name":"Office 365 Admin","identifier":"com.microsoft.o365shdmobileapp"},
      {"name":"Deputy","identifier":"com.deputy.prod"},
      {"name":"CCChatt","identifier":"com.subsplashconsulting.XHTB2R"},
      {"name":"Bitmoji","identifier":"com.bitstrips.imoji"},
      {"name":"Starbucks","identifier":"com.starbucks.mystarbucks"},
      {"name":"Remind","identifier":"com.remind101.Remind101"},
      {"name":"Classic","identifier":"com.popcap.ios.Bej3"},
      {"name":"PowerSchool","identifier":"com.powerschool.portal"},
      {"name":"WAY-FM","identifier":"com.commotion.wayfm"},
      {"name":"E*TRADE","identifier":"com.etrade.mobileproiphone"},
      {"name":"Google Wifi","identifier":"com.google.OnHub"},
      {"name":"Make Ready!","identifier":"com.codemonkeylabs.makeready-lite"},
      {"name":"Really Bad Chess","identifier":"net.stfj.reallyBadChess"},
      {"name":"StockX","identifier":"com.Campless.Campless"},
      {"name":"PLT Hub","identifier":"com.plantronics.myheadset"},
      {"name":"MileagePlus X","identifier":"com.mileageplus.mpx"},
      {"name":"DraftKings","identifier":"com.draftkings.dknativermg"},
      {"name":"Honeydue","identifier":"co.walletiq.WalletIQ"},
      {"name":"Fortnite","identifier":"com.chairentertainment.Fortnite"},
      {"name":"Smoothie King Rewards","identifier":"com.appsmyth.mobile.smoothieking"},
      {"name":"Pages","identifier":"com.apple.Pages"},
      {"name":"Prisma","identifier":"com.prisma-ai.app"},
      {"name":"StubHub","identifier":"com.stubhub.stubhub"},
      {"name":"Bleacher Report","identifier":"com.bleacherreport.TeamStream"},
      {"name":"Wood Puzzle","identifier":"puzzle.woodenblockpuzzle.mania"},
      {"name":"Stripe","identifier":"com.stripe.dashboard"},
      {"name":"Netflix","identifier":"com.netflix.Netflix"},
      {"name":"AllTrails","identifier":"com.alltrails.AllTrails"},
      {"name":"Labelbox","identifier":"com.stepcase.tape"},
      {"name":"VSCO","identifier":"co.visualsupply.cam"},
      {"name":"Over","identifier":"com.gopotluck.over"},
      {"name":"Got Questions?","identifier":"com.zoeinc.gotquestions"},
      {"name":"Before | After","identifier":"com.JeffHarden.BeforeNAfter"},
      {"name":"Route4Me","identifier":"com.route4me.route4me"},
      {"name":"ShopSavvy","identifier":"com.biggu.shopsavvyapp"},
      {"name":"Relax Melodies","identifier":"com.ilbsoft.irelaxpremium"},
      {"name":"Food Network","identifier":"com.foodnetwork.tveverywhere"},
      {"name":"MARIO RUN","identifier":"com.nintendo.zara"},
      {"name":"Life Cycle","identifier":"com.northcube.life"},
      {"name":"Rolling Sky","identifier":"com.turbochilli.rollingsky"},
      {"name":"UNUM","identifier":"la.unum.unum-ios"},
      {"name":"Tinder","identifier":"com.cardify.tinder"},
      {"name":"Ask Pastor John","identifier":"org.desiringgod.askpastorjohn"},
      {"name":"AmazonSeller","identifier":"com.amazon.AmazonSeller"},
      {"name":"HotPads","identifier":"com.hotpads.hotpadsapp"},
      {"name":"BofA","identifier":"com.bankofamerica.BofA"},
      {"name":"Calculator+","identifier":"com.supreme.secretcalculatorfree"},
      {"name":"Google Keep","identifier":"com.google.Keep"},
      {"name":"PS Express","identifier":"com.adobe.PSMobile"},
      {"name":"Slow Shutter","identifier":"com.cogitap.SlowShutter"},
      {"name":"The Calculator","identifier":"com.itwcalculator.calculatorforipadfree"},
      {"name":"Capital One","identifier":"com.capitalone.enterprisemobilebanking"},
      {"name":"StateFarm","identifier":"com.statefarm.mobile.iphone"},
      {"name":"Guva","identifier":"com.ekshi.cradle"},
      {"name":"WiTouch Pro","identifier":"com.hollywog.witouch"},
      {"name":"Dunkin'","identifier":"com.dunkinbrands.otgo"},
      {"name":"Scrubbies","identifier":"com.google.photolab.scrubbies"},
      {"name":"MINDBODY","identifier":"com.mindbodyonline.connect"},
      {"name":"Designer","identifier":"com.seriflabs.affinitydesigner.ios"},
      {"name":"Halo 1 Timer","identifier":"com.btcwiseops.TimerHalo1MCC"},
      {"name":"Pandora","identifier":"com.pandora"},
      {"name":"Instashare","identifier":"com.arat.Vacuum"},
      {"name":"Hay Day","identifier":"com.supercell.soil"},
      {"name":"Algebra","identifier":"com.varsitytutors.LT-Algebra-1"},
      {"name":"Trivia Crack","identifier":"com.etermax.preguntados"},
      {"name":"Evernote","identifier":"com.evernote.iPhone.Evernote"},
      {"name":"Slickdeals","identifier":"com.slickdeals.mobile"},
      {"name":"MTB Project","identifier":"com.mtbproject.ios"},
      {"name":"MSQRD","identifier":"me.msqrd.ios"},
      {"name":"P Tracker Lite","identifier":"com.gpapps.ptrackerlite"},
      {"name":"Temple Run","identifier":"com.imangi.templerun"},
      {"name":"Polytopia","identifier":"com.felixrum.supertribes"},
      {"name":"GuitarTuna","identifier":"com.ovelin.guitartuna"},
      {"name":"Metrics","identifier":"tv.lifechurch.ChurchMetrics"},
      {"name":"Zoom","identifier":"us.zoom.videomeetings"},
      {"name":"QuizUp","identifier":"com.plainvanillacorp.quizup"},
      {"name":"Slack","identifier":"com.tinyspeck.chatlyio"},
      {"name":"DIRECTV NOW","identifier":"com.att.tv"},
      {"name":"TripAdvisor","identifier":"com.tripadvisor.LocalPicks"},
      {"name":"Prime Photos","identifier":"com.amazon.CloudDrivePhotos"},
      {"name":"Hy-Vee","identifier":"com.hyvee.flagship"},
      {"name":"Amex","identifier":"com.americanexpress.amexservice"},
      {"name":"Spectrum TV","identifier":"com.timewarnercable.simulcast"},
      {"name":"TurboScan","identifier":"com.novosoft.TurboScanFree"},
      {"name":"Feud 2","identifier":"com.ludia.familyfeudblitz"},
      {"name":"PanoTuner","identifier":"junggun-lim.PanoTuner-Free"},
      {"name":"Bible Lens","identifier":"church.life.biblelens"},
      {"name":"Bravo Now","identifier":"com.nbcuni.bravo.bravonow"},
      {"name":"TCC","identifier":"com.honeywell.totalconnectcomfort"},
      {"name":"AWS Console","identifier":"com.amazonaws.mobileConsole"},
      {"name":"Sheets","identifier":"com.google.Sheets"},
      {"name":"Traeger","identifier":"com.traeger.wifire"},
      {"name":"AT&T Mobile Transfer","identifier":"com.att.mobiletransfer"},
      {"name":"M32-Q","identifier":"com.music-group.m32-q"},
      {"name":"Urbanspoon","identifier":"com.urbanspoon.urbanspin"},
      {"name":"Global Wi-Fi","identifier":"com.att.AccuRoam"},
      {"name":"Tuner Lite","identifier":"com.plus-add.paTunerLite"},
      {"name":"GroupMe","identifier":"com.groupme.iphone-app"},
      {"name":"Chairish","identifier":"com.chairish.Chairish"},
      {"name":"Duolingo","identifier":"com.duolingo.DuolingoMobile"},
      {"name":"Flexmls","identifier":"com.fbsdata.flexmls-vow"},
      {"name":"Google Maps","identifier":"com.google.Maps"},
      {"name":"Acorns","identifier":"com.acorns.investor"},
      {"name":"Anchor","identifier":"com.anchorfminc.Anchor"},
      {"name":"ClassDojo","identifier":"com.ClassDojo"},
      {"name":"Panera Bread","identifier":"com.panerabread.mobile.minneapolis"},
      {"name":"Bible Memory","identifier":"com.wordpress.biblememoryapp.Bible-Memory"},
      {"name":"Chess","identifier":"com.chess.iphone"},
      {"name":"Dictionary","identifier":"com.m-w.dictionary"},
      {"name":"TC","identifier":"io.echurch.transformchurch"},
      {"name":"Focos","identifier":"com.focos"},
      {"name":"Seconds","identifier":"com.runloop.seconds.free"},
      {"name":"Keynote","identifier":"com.apple.Keynote"},
      {"name":"Meetup","identifier":"com.meetup.iphone"},
      {"name":"Dancing Line","identifier":"com.cmplay.dancingline"},
      {"name":"Sudoku","identifier":"com.fingerarts.sudoku2"},
      {"name":"Day & Night","identifier":"org.pbskids.dtigmorningandnight"},
      {"name":"Mpix","identifier":"com.mpix.MpixTapToPrint"},
      {"name":"Roku","identifier":"com.roku.ios.roku"},
      {"name":"Inside Elevation","identifier":"io.echurch.insideelevation"},
      {"name":"Travelers App","identifier":"com.travelers.mobile"},
      {"name":"Family Guy App","identifier":"com.tinycorp.familyguy"},
      {"name":"Six pack App","identifier":"me.nanolife.abchallenge"},
      {"name":"GIF Keyboard","identifier":"com.riffsy.RiffsyKeyboard"},
      {"name":"NBC App","identifier":"com.nbcuni.nbc.portal"},
      {"name":"Baker's","identifier":"com.kroger.bakersplus"},
      {"name":"USPS Mobile","identifier":"com.usps.uspsmobile"},
      {"name":"Word of the Day","identifier":"com.wordwordapp.en"},
      {"name":"TurboTax","identifier":"com.intuit.turbotax"},
      {"name":"Hurricanes App","identifier":"com.jrustonapps.My-Hurricane-Tracker"},
      {"name":"Total Safety","identifier":"com.totalsafety.ios"},
      {"name":"YouTube TV","identifier":"com.google.ios.youtubeunplugged"},
      {"name":"Tangent","identifier":"com.benguerrette.Tangent"},
      {"name":"NBC Sports","identifier":"com.nbcuni.com.nbcsports.liveextra"},
      {"name":"Happy Glass","identifier":"com.game5mobile.lineandwater"},
      {"name":"Jerusalem Post","identifier":"com.jpost.iphone"},
      {"name":"Telegram","identifier":"ph.telegra.Telegraph"},
      {"name":"Bed Bath & Beyond","identifier":"com.digby.bedbathbeyond"},
      {"name":"Words 2","identifier":"com.zynga.WordsWithFriends3"},
      {"name":"Delta Dental","identifier":"com.deltadental.HealthApp"},
      {"name":"Chipotle","identifier":"com.chipotle.Chipotle"},
      {"name":"Gmail","identifier":"com.google.Gmail"},
      {"name":"Google","identifier":"com.google.GoogleMobile"},
      {"name":"LivingSocial","identifier":"com.livingsocial.deals"},
      {"name":"RetailMeNot","identifier":"com.whaleshark.retailmenot"},
      {"name":"First Tenn","identifier":"com.firsttennessee.mbanking"},
      {"name":"Duet","identifier":"com.kumobius.duet"},
      {"name":"Baby Monitor","identifier":"com.tappytaps.Baby-Monitor-3G"},
      {"name":"letgo","identifier":"com.letgo.ios"},
      {"name":"Safety Meeting","identifier":"com.nwlocalcontractors.Safety-Meeting"},
      {"name":"Spotify","identifier":"com.spotify.client"},
      {"name":"WOWT 6 News","identifier":"com.graydigitalmedia.wowtnews"},
      {"name":"Morgan Stanley","identifier":"com.morganstanley.prod.ms-mobile"},
      {"name":"Tweetbot","identifier":"com.tapbots.Tweetbot4"},
      {"name":"Life360","identifier":"com.life360.safetymap"},
      {"name":"Eventbrite","identifier":"com.eventbrite.attendee"},
      {"name":"Facetune 2","identifier":"com.lightricks.Facetune2"},
      {"name":"TuneIn Radio","identifier":"com.tunein.TuneInRadio"},
      {"name":"Ripl","identifier":"me.fanzo.ripl"},
      {"name":"Splendor","identifier":"com.daysofwonder.Splendor"},
      {"name":"Google Home","identifier":"com.google.Chromecast"},
      {"name":"Messages Hearts","identifier":"com.apple.messages.hearts"},
      {"name":"TurboDismount","identifier":"com.secretexit.trdismount"},
      {"name":"USAA","identifier":"com.usaa.UsaaMobile"},
      {"name":"Registry","identifier":"com.target.GuestGiftRegistry"},
      {"name":"Vectornator","identifier":"com.linearity.vn"},
      {"name":"BiOY","identifier":"com.alphainternational.bioy"},
      {"name":"Bandsintown","identifier":"com.bandsintown.bit"},
      {"name":"Boomerang","identifier":"com.burbn.boomerang"},
      {"name":"PvZ","identifier":"com.ea.pvzfree.bv"},
      {"name":"dB Meter","identifier":"com.dbmeterpro.dB-Meter-Free"},
      {"name":"The Knot","identifier":"com.theknot.theknot"},
      {"name":"Clarity Money","identifier":"com.claritymoney.ios.prod"},
      {"name":"Weather Live","identifier":"com.apalonapps.wlf"},
      {"name":"Fing","identifier":"overlook.fing"},
      {"name":"Piano","identifier":"com.yuxuankeji.com.yuxuankeji.iPhonePiano"},
      {"name":"Numbers","identifier":"com.apple.Numbers"},
      {"name":"Tubi TV","identifier":"com.adrise.tubitv"},
      {"name":"TrainHeroic","identifier":"com.TrainHeroic.TrainHeroic"},
      {"name":"WhatsApp","identifier":"net.whatsapp.WhatsApp"},
      {"name":"Joule","identifier":"com.chefsteps.circulator"},
      {"name":"YT Kids","identifier":"com.google.ios.youtubekids"},
      {"name":"Movies","identifier":"com.moviesanywhere.ma"},
      {"name":"Seven","identifier":"se.perigee.7minute-workout"},
      {"name":"AccuWeather","identifier":"com.yourcompany.TestWithCustomTabs"},
      {"name":"Skate Universe","identifier":"com.cec.skateuniverse"},
      {"name":"Email","identifier":"com.easilydo.mail"},
      {"name":"Mobile Pass","identifier":"us.mobilepassport.ios"},
      {"name":"Golden Girls","identifier":"com.baretreemedia.GoldenGirls"}
    ]
    var userAgents = [
      {"identifier":"ZillowMap", "name": "Zillow App"},
      {"identifier":"YouTube", "name": "YouTube App"},
      {"identifier":"Yelp", "name": "Yelp App"},
      {"identifier":"WRCB%20Weather", "name": "WRCB Weather App"},
      {"identifier":"WeatherBug", "name":"WeatherBug App"},
      {"identifier":"USPS Mobile", "name":"USPS Mobile App"},
      {"identifier":"USPS%20Mobile", "name":"USPS Mobile App"},
      {"identifier":"UnitedCustomerFacingIPhone", "name":"United Airlines App"},
      {"identifier":"UNID", "name":"United Airlines App"},
      {"identifier":"Todoist-iOS", "name":"Todoist App"},
      {"identifier":"BLB", "name":"Blue Letter Bible"},
      {"identifier":"WordsWithFriends", "name":"Words With Friends"},
      {"identifier":"Kik", "name":"Kik Messenger app"},
      {"identifier":"Facebook", "name":"Facebook app"},
      {"identifier":"newsd", "name":"Apple News app"},
      {"identifier":"newsd", "name":"Apple News app"},
      {"identifier":"Starbucks", "name":"Starbucks app"},
      {"identifier":"LastPass", "name":"LastPass app"},
      {"identifier":"DIRECTV", "name":"DirectTV app"},
      {"identifier":"AccuWeather", "name":"Accuweather"},
      {"identifier":"FortniteGame", "name":"Fortnite app"},
      {"identifier":"AppleNewsAgent", "name":"Apple News app"},
    ]


    var ads = 'Adverstising and Analytics'
    var abs = 'Apple Background Services'
    var gbs = 'Google Background Services'
    var cdn = 'Content Delivery Network'

    // if we have a referrer header, set it as the URL
    if (o.refHeader) {
      o.URL = o.refHeader
    }

    for ( var i = 0; i < bundleIds.length; i++) {
      if (o.URL.includes(bundleIds[i].identifier) || o.userAgent.includes(bundleIds[i].identifier)) {
        o.URL = bundleIds[i].name
      }
    }

    for (var i = 0; i < adServers.length; i++) {
      if (o.URL.includes(adServers[i])) {
        o.URL = ads
      }
    }

    if (o.URL.includes('doubleverify.com')) {
      o.URL = ''
    }
    if (o.userAgent.includes('dc72976c7e9a4e749e3af5d95.litix.io')) {
      o.URL = 'Video Game News, Reviews, and Walkthroughs - IGN.com'
    }

    if (o.URL.includes('.helpshift.com')) {
      o.URL = ''
    }

    if (o.URL.includes('a.appbaqend.com') ||
      o.URL.includes('a.26f396e0b71780f057be4d4af8ebe55b.com') ||
      o.userAgent.includes('My%20Hurricane%20Tracker')) {
      o.URL = 'My Hurricane Tracker App'
    }

    if (o.URL.includes('api.')) {
      o.URL = o.URL.replace('api.', '')
    }

    if (o.URL.includes('bungie.net')) {
      o.URL = 'Bungie.net - Video Games'
    }

    if (o.URL.includes('WindowsCortanaPane')) {
      o.URL = 'Windows Updates'
    }

    if (o.URL.includes('youtube.com/embed')) {
      o.URL = ads
    }

    if (o.URL.includes('youtube.com') ||
        o.URL.includes('ytimg.com') ||
        o.URL.includes('googlevideo.com') ||
        o.URL.includes('yt3.ggpht.com') ||
        o.URL.includes('youtu.be') ||
        o.userAgent.includes('YouTube') ||
        o.userAgent.includes('com.google.ios.youtube') ||
        o.URL.includes('youtubei.googleapis.com:')) {
      o.URL = 'Youtube'
    }

    // Remove this from results
    if (o.URL.includes('facebook.com') && o.URL.includes('domain%3D')) {
      o.URL = ads
    }

    if (o.URL.includes('w.me/') ||
        o.URL.includes('m.me/') ||
        o.URL.includes('edge-chat.facebook.com') ||
        o.URL.includes('messenger.com')) {
      o.URL = 'Facebook Messenger'
    }

    if (o.URL.includes('facebook.com/tr/') ||
        o.URL.includes('facebook.com/rsrc.php') ||
        o.URL.includes('graph.facebook.com') ||
        o.URL.includes('connect.facebook.com') ||
        o.URL.includes('connect.facebook.net') ||
        o.URL.includes('facebook.com/impression.php')) {
      o.URL = ads
    }

    if (o.URL.includes('gstatic.com')) {
      o.URL = 'Google'
    }

    if (o.URL.includes('clients') && o.URL.includes('google.com')) {
      o.URL = 'Google'
    }

    if (o.URL.includes('apis.google.com')) {
      o.URL = 'Google Services'
    }

    if (o.URL.includes('mail.google.com') ||
        o.URL.includes('inbox.google.com') ||
        o.URL.includes('ogs.google.com') ||
        o.userAgent.includes('com.google.Gmail') ||
        o.URL.includes('mtalk.google.com')) {
      o.URL = 'Gmail'
    }

    if (o.URL.includes('docs.google.com')) {
      o.URL = 'Google Docs'
    }

    if (o.URL.includes('drive.google.com') ||
      o.userAgent.includes('Google.Drive')) {
      o.URL = 'Google Drive'
    }

    if (o.URL.includes('maps.google.com') ||
        o.URL.includes('geo0.ggpht.com') ||
        o.URL.includes('geo1.ggpht.com') ||
        o.URL.includes('geo2.ggpht.com') ||
        o.URL.includes('geo3.ggpht.com') ||
        o.userAgent.includes('com.google.Maps') ||
        o.URL.includes('google.com/maps')) {
      o.URL = 'Google Maps'
    }

    if (o.URL.includes('grouponcdn.com') ||
        o.URL.includes('www.groupon.')) {
      o.URL = 'Groupon'
    }

    if (o.URL.includes('hobbylobby.com') ||
        o.URL.includes('hobbylobby.evergage.com')) {
      o.URL = 'Hobby Lobby'
    }

    if (o.URL.includes('marcopolo.me') ||
        o.userAgent.includes('MarcoPolo') ||
        o.URL.includes('hb-img.s3.amazonaws.com') ||
        o.URL.includes('onpolo.com') ||
        o.URL.includes('d1yalerk4ruah8.cloudfront.net') ||
        o.URL.includes('marco.feathr.co') ||
        o.URL.includes('speedys3-hb.s3.amazonaws.com')) {
      o.URL = 'Marco Polo App'
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

    if (o.URL.includes('duolingo.com') ||
        o.URL.includes('d1vq87e9lcf771.cloudfront.net') ||
        o.URL.includes('d3kwyfyztuo0xs.cloudfront.net') ||
        o.URL.includes('d2pur3iezf4d1j.cloudfront.net') ||
        o.URL.includes('d9np3dj86nsu2.cloudfront.net')) {
      o.URL = 'Duo Lingo App'
    }


    if (o.URL.includes('snapchat.com') ||
      o.URL.includes('sc-cdn.net') ||
      o.URL.includes('instalog-prod.sc-prod.net') ||
      o.URL.includes('am-prod.sc-jpl.com') ||
      o.userAgent.includes('Snapchat') ||
      o.URL.includes('sc-analytics.appspot.com')) {
      o.URL = 'Snapchat'
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

    if (o.URL.includes('itunes.apple.com-a.akamaihd.net') ||
        o.URL.includes('itunes.com') ||
        o.userAgent.includes('itunesstored') ||
        o.URL.includes('itunes.apple.com')) {
      o.URL = 'Apple iTunes'
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

    if (o.URL.includes('bible.com') ||
        o.URL.includes('youversion.com') ||
        o.URL.includes('youversioncom') ||
        o.URL.includes('d34xairzvf2fpg.cloudfront.net') ||
        o.userAgent.includes('Bible') ||
        o.URL.includes('youversionapi.com')) {
      o.URL = 'Youversion Bible App'
    }

    if (o.URL.includes('myfitnesspal.com')) {
      o.URL = 'My Fitness Pal app'
    }

    if (o.URL.includes('sndcdn.com') ||
        o.userAgent.includes('SoundCloud') ||
        o.URL.includes('soundcloud.com')) {
      o.URL = 'Sound Cloud'
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

    if (o.userAgent.includes('Podcasts')) {
      o.URL = 'Apple Podcasts App'
    }

    if (o.URL.includes('outlook.office365.com') ||
        o.URL.includes('login.microsoftonline.com') ||
        o.URL.includes('mobile.pipe.aria.microsoft.com') ||
        o.URL.includes('outlookmobile-office365-tas.msedge.net') ||
        o.userAgent.includes('Outlook') ||
        o.URL.includes('outlook.office.com')) {
      o.URL = 'Microsoft Outlook'
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

    if (o.URL.includes('groupme.com') ||
        o.userAgent.includes('GroupMe') ||
        o.URL.includes('powerups.s3.amazonaws.com ')) {
      o.URL = 'Groupme'
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

    if (o.URL.includes('prime.amazon.com') ||
      o.userAgent.includes('InstantVideo.US') ||
      o.userAgent.includes('Prime%20Video')) {
      o.URL = 'Amazon Prime Video'
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

    if (o.URL.includes('api.tenor.com') ||
        o.userAgent.includes('GIF%20Keyboard') ||
        o.URL.includes('media.tenor.com')) {
      o.URL = 'Tenor GIF Keyboard'
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

    if (o.userAgent.includes('geod') ||
      o.userAgent.includes('locationd')) {
      o.URL = 'Apple Location Services'
    }

    if (o.URL.includes('gsa.apple.com') ||
        o.URL.includes('pancake.apple.com') ||
        o.URL.includes('init.ess.apple.com') ||
        o.URL.includes('init-p01md.apple.com')) {
      o.URL = abs
    }

    if (o.URL.includes('cdn.ampproject.org')) {
      o.URL = cdn
    }

    if (o.URL.includes('ck-assets.imgix.net') ||
        o.URL.includes('ck-content.imgix.net') ||
        o.URL.includes('creditkarmacdn-a.akamaihd.net') ||
        o.URL.includes('creditkarma.onelink.me') ||
        o.URL.includes('creditkarma.zendesk.com') ||
        o.URL.includes('creditkarmacdn-a.akamaihd.net') ||
        o.URL.includes('ckapis.com') ||
        o.URL.includes('ckfiles.imgix.net')) {
      o.URL = 'Credit Karma'
    }

    if (o.URL.includes('cdn.shopify.com')) {
      o.URL = 'Shopify'
    }

    if (o.URL.includes('0.client-channel.google.com') ||
        o.URL.includes('beacons.gcp.gvt2.com') ||
        o.URL.includes('beacons2.gvt2.com') ||
        o.URL.includes('beacons3.gvt2.com') ||
        o.URL.includes('beacons4.gvt2.com') ||
        o.URL.includes('beacons5.gvt2.com') ||
        o.URL.includes('beacons5.gvt3.com') ||
        o.URL.includes('beacons6.gvt3.com') ||
        o.URL.includes('google.com/_/chrome/')) {
      o.URL = gbs
    }

    if (o.URL.includes('evernote.com')) {
      o.URL = 'Evernote'
    }

    if (o.URL.includes('answcdn.com') ||
        o.URL.includes('answers.com')) {
      o.URL = 'Answers.com'
    }

    if (o.URL.includes('vw.com')) {
      o.URL = 'Volkswagen'
    }

    if (o.URL.includes('etsy.com') ||
        o.URL.includes('img.etsystatic.com')) {
      o.URL = 'Etsy'
    }

    if (o.URL.includes('usps.com')) {
      o.URL = 'US Postal Service'
    }

    if (o.URL.includes('kh.google.com')) {
      o.URL = 'Google Earth'
    }

    if (o.URL.includes('tripadvisor.com')) {
      o.URL = 'Trip Advisor'
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

    if (o.URL.includes('google.com/carddav') || o.URL.includes('contacts.google.com')) {
      o.URL = 'Gmail Contacts'
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

    if (o.URL.includes('plex.tv') ||
        o.userAgent.includes('PlexMobile') ||
        o.URL.includes('plex.direct')) {
      o.URL = 'Plex streaming movies and tv shows'
    }

    if (o.URL.includes('redbubble.com') ||
      o.URL.includes('redbubble.net')) {
      o.URL = 'Redbubble - Awesome Products Designed By Independent Artists'
    }

    if (o.URL.includes('i0.wp.com') ||
      o.URL.includes('i2.wp.com')) {
      o.URL = 'Wordpress.com'
    }


    if (o.URL.includes('oneyearbibleonline.com')) {
      o.URL = 'One Year Bible Online'
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

    if (o.URL.includes('mzstatic.com') ||
        o.userAgent.includes('AppStore')) {
      o.URL = 'Apple App Store'
    }

    if (o.userAgent.includes('Self%20Employed')) {
      o.URL = 'Quickbooks Self Employed app'
    }

    if (o.userAgent.includes('ConnectMobile')) {
      o.URL = 'Garmin Connect app'
    }

    if (o.URL.includes('mail.epbfi.com')) {
      o.URL = 'EPB Email account'
    }

    if (o.URL.includes('thescore.com')) {
      o.URL = 'The Score - Sports News'
    }

    if (o.URL.includes('poshmark.com')) {
      o.URL = 'Poshmark.com'
    }

    if (o.URL.includes('amazon.ca') ||
      o.URL.includes('amazon.cn') ||
      o.URL.includes('amazon.co.') ||
      o.URL.includes('amazon.d') ||
      o.URL.includes('amazon.e') ||
      o.URL.includes('amazon.f') ||
      o.URL.includes('amazon.i') ||
      o.URL.includes('amazon.ca') ||
      o.URL.includes('amazon.cn')) {
      o.URL = 'Amazon.com'
    }

    if (o.URL.includes('smoot.apple.com')) {
      o.URL = abs
    }

    if (o.URL.includes('cdws.us-east-1.amazonaws.com')) {
      o.URL = 'Amazon Prime Photos'
    }

    if (o.URL.includes('amazon.com')) {
      o.URL = 'Amazon'
    }

    if (o.URL.includes('urbanoutfitters.com')) {
      o.URL = 'Urban Outfitters'
    }

    if (o.URL.includes('google.com/calendar')) {
      o.URL = 'Google Calendar'
    }

    if (o.URL.includes('vivintsky.com') ||
      o.URL.includes('vivint.com') ||
      o.URL.includes('spacemonkey.com') ||
      o.URL.includes('vivintclips.s3.amazonaws.com')) {
      o.URL = 'Vivint - Home Security Monitoring'
    }

    if (o.URL.includes('outlook.com')) {
      o.URL = 'Microsoft Outlook'
    }

    if (o.URL.includes('calendar.yahoo.com') ||
      o.URL.includes('address.yahoo.com')) {
      o.URL = 'Yahoo Mail Calendar'
    }

    if (o.URL.includes('rei.com')) {
      o.URL = 'REI Outdoor Gear'
    }

    if (o.URL.includes('shellshock.io')) {
      o.URL = 'Shellshock.io - Online game'
    }

    if (o.URL.includes('titotu.io')) {
      o.URL = 'Titotu.io - Online Games'
    }

    if (o.URL.includes('iogames.space')) {
      o.URL = 'iOGames.space - Online games '
    }

    if (o.URL.includes('s3.amazonaws.com/duolingo-explanations') ||
     o.URL.includes('duolingo-images.s3.amazonaws.com') ||
     o.URL.includes('d1vq87e9lcf771.cloudfront.net') ||
     o.URL.includes('d2pur3iezf4d1j.cloudfront.net')) {
      o.URL = 'Duolingo'
    }

    if (o.URL.includes('facebook.com') && o.URL.includes('S&mobile_iframe=true')) {
      o.URL = ads
    }

    if (o.URL.includes('facebook.com') && o.deviceId.includes('973279683378823765')) {
      o.URL = ads
    }

    if (o.URL.includes('tr.snapchat.com') ||
     o.URL.includes('facebook.com/tr/')) {
      o.URL = ads
    }

    if (o.URL.includes('august.com') ||
     o.URL.includes('res.cloudinary.com/august-com')) {
      o.URL = 'August Smart Lock'
    }

    if (o.URL.includes('autotrader.com')) {
      o.URL = 'Autotrader'
    }

    if (o.URL.includes('ical.mac.com') ||
     o.URL.includes('files.apple.com/calendars')) {
      o.URL = 'iCloud Calendar'
    }

    if (o.URL.includes('libsyn.com')) {
      o.URL = 'Podcasts'
    }

    if (o.URL.includes('icloud-content.com') ||
     o.userAgent.includes('cloudd')) {
      o.URL = 'iCloud content'
    }

    if (o.URL.includes('basecamp.com') ||
      o.URL.includes('37signals.com') ||
      o.URL.includes('basecamp-static.com')) {
      o.URL = 'Basecamp Project Management'
    }

    if (o.URL.includes('straighttalk.com')) {
      o.URL = 'Straight Talk Wireless'
    }

    if (o.URL.includes('yummly.com') ||
        o.userAgent.includes('Yummly-iPhone')) {
          o.URL = 'Yummly - Personalized Recipes'
        }



    if (o.catsBlocked == 'ads') {
      o.URL = ads
    }

    if (!mp.has(o.URL)) {
      mp.set(o.URL, Object.assign({
        count: 0
      }, o))
    }
    mp.get(o.URL).count += 1
    return mp
  }, new Map()).values()]

  // get rid of all sites with count less than 50
  var final = []
  for (var i = result.length - 1; i >= 0; i -= 1) {
    if (result[i].count > 6) {
      final.push(result[i])
    }
  }

  var byDate = final.slice(0)
  var sorted = byDate.sort(function (a, b) {
    return b.count - a.count
  })

  return sorted
}
