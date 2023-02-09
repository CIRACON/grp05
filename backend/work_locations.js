const work_locations = [
"Albany - Park Pl",
"Albany-Law",
"Albuquerque-Lang Avenue",
"Alpharetta-Atlanta",
"Alpharetta-Atlanta-Law",
"Altamonte Springs-Orlando",
"Anaheim - Los Angeles",
"Anchorage",
"Austin-901 Mo-Pac",
"Australia Virtual",
"Baltimore-Pulaski",
"Bangalore - Accenture - 3",
"Bangalore - Accenture - 4",
"Bangalore-Cognizant-2",
"Bangalore-Deloitte",
"Bangalore-Genpact",
"Bangalore-Infosys LTD",
"Bangalore-L&amp;T-2",
"Bedford - Commerce",
"Birmingham-Riverchase",
"Birmingham-Riverchase-Law",
"Birmingham-Somerset",
"Blue Bell - Philadelphia",
"Blue Bell-Philadelphia-Law",
"BlueBell-Phil-Law-StaffCounsHO",
"Board of Directors - Canada",
"Board of Directors - US",
"Boise-Meridian",
"Boston-Atlantic Ave",
"Boston-South St",
"Boston-South St Law",
"Braintree-Boston",
"Brookfield-Milwaukee",
"Brookfield-Milwaukee-Law",
"Buffalo",
"Buffalo-Law",
"Calgary-8th Ave.",
"Cambridge",
"Canada Virtual -  NL",
"Canada Virtual -  PE",
"Canada Virtual - AB",
"Canada Virtual - BC",
"Canada Virtual - MB",
"Canada Virtual - NB",
"Canada Virtual - NS",
"Canada Virtual - ON",
"Canada Virtual - QC",
"Cape Town-WNS",
"Cebu City-Cognizant",
"Centennial-Denver-Geddes",
"Centennial-Geddes-Law",
"Chantilly-WashingtnDC-PkMd-Law",
"Chantilly-WashingtnDC-PkMeadow",
"Charleston",
"Charleston - Virginia St - Law",
"Charlotte-Carmel Commons",
"Chennai - Cognizant - 6",
"Chennai - Cognizant - 7",
"Chennai-Cognizant-2",
"Chennai-Cognizant-3",
"Chennai-L&amp;T",
"Chicago - Clark St",
"Chicago-Law",
"Chicago-Law2",
"Cincinnati - Law Office",
"Cincinnati-Elsinore",
"Cognizant Deccan Campus",
"Coimbatore-Cognizant-2",
"Colorado Springs - Tech Center",
"Columbus-Easton Oval",
"Concentra Tampa-Adamo Drive",
"Coral Gables-Miami Law",
"Creechurch 4th floor",
"Dartmouth- Atlantic Regional",
"Delaware - Virtual",
"Des Moines - Cognizant",
"Diamond Bar - Staff Counsel HO",
"Diamond Bar-Los Angeles",
"Diamond Bar-Los Angeles-Law",
"Diamond Bar-Los Angeles-Law2",
"Dublin-Harcourt",
"Durham - Emperor Blvd",
"Edison-343 Thornall",
"Exton-Philadelphia",
"Federal Way-Seattle-6th Ave",
"Flowood-Jackson-Canebrake",
"Flowood-Jackson-Canebrake-Law",
"Franklin-Nashville",
"Franklin-Nashville Law",
"Fredericksburg-GEICO",
"Fresno",
"Ft Lauderdale",
"Ft Lauderdale Law",
"Getzville-Buffalo GEICO",
"Glasgow",
"Glen Allen-Richmond",
"Glendale-Los Angeles-Law",
"Glendale-Los Angeles-Law2",
"Glendale-LosAngeles-655NCentrl",
"Glens Falls-Albany",
"Grand Rapids-Kenmoor",
"Grand Rapids-Law",
"Gurgaon - Genpact",
"Gurgaon - Inductis",
"Hamden Law",
"Hartford - Tower",
"Hartford-Bradley Int'l Airport",
"Hartford-Field",
"Hartford-Field-Law",
"Hartford-Fld-Staff Counsel BRC",
"Honolulu",
"Houston - Westway",
"Houston-Westway Law",
"Hudson - Boston",
"Hunt Valley-Baltimore-Schillin",
"Hunt-Valley-Baltimore- Law",
"Hyderabad-Accenture",
"Hyderabad-Deloitte",
"Hyderabad-Genpact-Hafeezpet",
"Hyderabad-Infosys",
"Independence-Cleveland",
"Independence-Cleveland Law",
"Indianapolis - 96th St",
"Indianapolis-96th St-Law",
"Irvine-Los Angeles-Michelson",
"Jacksonville Law",
"Knoxville",
"Knoxville Law",
"Kochi-Cognizant-2",
"Kolkata - Cognizant - 2",
"Kolkata-Cognizant-3",
"Las Vegas-Arroyo Crossing",
"Las Vegas-Arroyo Crossing-Law",
"Leeds",
"Lenexa-KS (GEICO)",
"Little Rock",
"London - Creechurch-Lloyds",
"London-Creechurch",
"London-Gresham Street",
"Los Angeles - W 6th St",
"Los Angeles-801 Figueroa",
"Louisville-Hurstbourne Pkwy",
"Manchester",
"Manchester, UK",
"Mandeville-New Orleans-Law",
"Mandeville-NO-Law-StaffCounsHO",
"Manila-Cognizant",
"Marlton-Camden Law",
"Maryland Heights-St Louis-Law",
"Maryland Heights-St. Louis",
"Massachusetts - Virtual",
"Melville NY Corp Center Dr",
"Melville NY Corp Center Dr Law",
"Melville NY Corp Center Dr Law",
"Memphis-6750 Poplar",
"Memphis-6750 Poplar-Law",
"Metairie-New Orleans-3900 Cswy",
"Metairie-New Orleans-Law-T",
"Montana - Virtual",
"Montreal",
"Moosic-Scranton",
"Morristown",
"Morristown Law-2",
"Morristown-Law",
"Mumbai-Accenture-3",
"Mumbai-L&amp;T-3",
"Naperville - Chicago - Law",
"Naperville - Chicago - Law2",
"Naperville-Chicago",
"Naperville-ChicLawStaffCounsHO",
"New York City - Lexington Ave",
"New York City-Law1-FirstParty",
"New York City-Law2-Liability",
"Newark - DE Law",
"Noida-Cognizant",
"Noida-Genpact",
"Norcross-Atlanta",
"North Dakota - Virtual",
"Northampton",
"Oakville-Metro West Reg. Ctr",
"Oklahoma City Law",
"Omaha Data Center-Schram Rd",
"Omaha-Dodge Rd",
"Orange-Los Angeles-Law",
"Orlando",
"Orlando-Law",
"Overland Park-Kansas City-Law",
"Overland Pk-Kansas City-132 St",
"Parsippany",
"Philadelphia-Market St",
"Philadelphia-Market St-Law2",
"Phoenix-Law",
"Phoenix-Tatum Blvd",
"Pittsburgh-Chatham Ctr-Law",
"Pittsburgh-Washington Pl",
"Portland",
"Portland OR - Law",
"Providence Law",
"Pune - L &amp; T-1",
"Pune - L &amp; T-2",
"Pune-Infosys",
"Pune-WNS",
"Raleigh",
"Rancho Cordova-Sacramento Law2",
"Rancho Cordova-Sacramento-Law",
"RanchoCordova-Sacramento-11070",
"RanchoCordova-Sacramento-11090",
"Redhill",
"Redhill - Data Centre",
"Retiree Location",
"Richardson-Dallas",
"Richardson-Dallas-Law",
"Richmond Law",
"Richmond-Mayland Dr",
"Rochester - Linden Oaks",
"Salt Lake City-1100 E 6600",
"Salt Lake City-Law",
"San Antonio Law",
"San Antonio-McAllister Fwy",
"San Diego",
"San Diego Law",
"San Diego Law 2",
"San Francisco-100 CaliforniaSt",
"San Francisco-Market St",
"Schaumburg-Chicago-Woodfield",
"Seattle-4th Ave",
"Seattle-4th Ave-Law",
"South Carolina - Virtual",
"South Dakota - Virtual",
"South Portland",
"Spokane",
"St. Paul",
"Syracuse Law",
"Syracuse-Plainfield Rd",
"Tampa - Dale Mabry",
"Tampa Law",
"Toronto - Queen St (inactive)",
"Toronto-165 University",
"Troy-Detroit",
"Troy-Detroit-Law",
"Tulsa-5100 Skelly",
"Vancouver SPC",
"Vermont - Virtual",
"Virginia Beach-GEICO",
"Wall Township-Campus Pkwy",
"Walnut Creek-San Francisco-401",
"Walnut Creek-San Francisco-Law",
"Walnut Creek-SanFrancisco-Law2",
"Washington, DC - 13th Street",
"West Bridgewater",
"West Des Moines-Jordan Creek",
"West Des Moines-Jordan Creek-L",
"White Plains-Law1-Liability",
"Windsor-Hartford-90 Lamberton",
"Windsor-Htfd-99 Lambrtn-ClaimU",
"Wyoming - Virtual",
"Wyomissing-Reading"
]

module.exports = {work_locations}