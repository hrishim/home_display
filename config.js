/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		/*
		 * Install calendar_monthly
		{
			module: "calendar_monthly",
			position: "top_left",
			config: {
				showHeader: "true",
			//	cssStyle: "slate",
			}
		},
		*/
		{
			module: "calendar",
			header: "Our Calendar",
			position: "top_right",
			config: {
				maximumEntries: 3,
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/sathyavasu%40gmail.com/private-f418191c7dc1c07625be40c13d326574/basic.ics"
						//url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "middle_center",
			config: {
				//remoteFile: "compliments.json",
				updateInterval: 30000,
				remoteFile: "https://raw.githubusercontent.com/hrishim/home_display/main/compliments_thirukural.json",
			}
		},
		{
			module: "compliments",
			position: "middle_center",
			config: {
				remoteFile: "compliments.json",
				updateInterval: 30000,
				//remoteFile: "https://raw.githubusercontent.com/hrishim/home_display/main/compliments_subash.json",
			}
		},
		{
            		module: 'MMM-Carousel',
            		config: {
                		transitionInterval: 60000,
                		//overrideTransitionInterval: 60000,
                		ignoreModules: [],
                		mode: 'positional',
                		middle_center: {enabled: true, ignoreModules: []},
                		//top_right: {enabled: true, ignoreModules: ['currentweather']}
            		}
        	},
		{
   			 module: "MMM-Wallpaper",
    			position: "fullscreen_below",
    			config: { // See "Configuration options" for more information.
				source: "local:/home/hrishi/MagicMirror/wallpapers",
      				slideInterval: 60 * 1000, // Change slides every minute
				nsfw: false,
				crossfade: true,
    			}
  		},
		/*
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				showHumidity: "true",
				useKMPHwind: "true",
				showSun: "true",
				location: "Bangalore, India",
				locationID: "", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "e76639884396105235e4764c05979ca8"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Bangalore, India",
				locationID: "", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "e76639884396105235e4764c05979ca8"
			}
		},
		*/
		/*
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		*/
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
