/* ============================================================
   1. SETTINGS & KISHKINDA UNIVERSITY BUS ROUTES (ALL 29 BUSES)
   ============================================================ */

const FIREBASE_CONFIG = {
  // apiKey: "", authDomain: "", databaseURL: "https://YOUR-PROJECT-default-rtdb.firebaseio.com",
  // projectId: "", appId: ""
};

// Mount View Campus (Off 28Kms, Ballari-Siruguppa Road)
const CAMPUS_POS = [15.2890, 76.9740];

// Complete Official Kishkinda University Routes Database (All 29 Routes from Schedule)
const UNIVERSITY_BUSES = {
  "01": {
    name: "Bus No 01",
    driver: "Mohan",
    phone: "6363329681",
    halting: "BPSC",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "Kakarla thota", code: "001", morning: "7.45 AM", evening: "6.15 PM", p: [15.1380, 76.9210] },
      { name: "Guggarati Railway Gate", code: "002", morning: "7.47 AM", evening: "6.03 PM", p: [15.1435, 76.9248] },
      { name: "APMC Main Gate", code: "003", morning: "7.52 AM", evening: "6.00 PM", p: [15.1550, 76.9320] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "02": {
    name: "Bus No 02",
    driver: "Bheema",
    phone: "9448654756",
    halting: "BITM",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "Bandihatti Canal", code: "022", morning: "7.45 AM", evening: "6.25 PM", p: [15.1220, 76.9080] },
      { name: "Satyanarayana Temple", code: "023", morning: "7.48 AM", evening: "6.20 PM", p: [15.1290, 76.9150] },
      { name: "Kendriya Vidyalaya", code: "024", morning: "7.51 AM", evening: "6.17 PM", p: [15.1365, 76.9215] },
      { name: "Pinchan wadi masjid", code: "025", morning: "7.54 AM", evening: "6.13 PM", p: [15.1420, 76.9260] },
      { name: "Kunitan Masjid", code: "026", morning: "7.58 AM", evening: "6.10 PM", p: [15.1490, 76.9300] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "03": {
    name: "Bus No 03",
    driver: "K P NAGARAJ",
    phone: "9740222773",
    halting: "BITM",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "G square", code: "019", morning: "7.45 AM", evening: "6.20 PM", p: [15.1350, 76.9140] },
      { name: "Mohamadia School", code: "031", morning: "7.55 AM", evening: "6.15 PM", p: [15.1410, 76.9200] },
      { name: "Chaitanya Girls Campus", code: "061", morning: "8.05 AM", evening: "6.00 PM", p: [15.1490, 76.9280] },
      { name: "Vijayawada Chaitanya College", code: "062", morning: "8.10 AM", evening: "5.50 PM", p: [15.1580, 76.9350] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "04": {
    name: "Bus No 04",
    driver: "Hussain Basha",
    phone: "9482999973",
    halting: "BITM",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "Kuvempu Nagar 3rd Cross", code: "018", morning: "7.45 AM", evening: "6.20 PM", p: [15.1305, 76.9100] },
      { name: "Vijaynagar colony", code: "021", morning: "7.50 AM", evening: "6.16 PM", p: [15.1390, 76.9180] },
      { name: "Radio Park", code: "016", morning: "7.53 AM", evening: "6.15 PM", p: [15.1460, 76.9240] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "05": {
    name: "Bus No 05",
    driver: "Basavaraj",
    phone: "8495901129",
    halting: "VADDU TALUR",
    defaultZone: "Zone 2",
    activeWindow: { start: "06:30", end: "19:30" },
    stops: [
      { name: "H S T", code: "130", morning: "6.45 AM", evening: "7.15 PM", p: [15.0800, 76.8400] },
      { name: "Old gate Circle", code: "106", morning: "7.15 AM", evening: "6.47 PM", p: [15.1310, 76.9120] },
      { name: "Railway Station", code: "107", morning: "7.17 AM", evening: "6.45 PM", p: [15.1375, 76.9190] },
      { name: "Vishal Mart", code: "108", morning: "7.19 AM", evening: "6.42 PM", p: [15.1420, 76.9230] },
      { name: "Durgamma Temple", code: "131", morning: "7.21 AM", evening: "6.40 PM", p: [15.1470, 76.9270] },
      { name: "Gram panchayat Office", code: "109", morning: "7.23 AM", evening: "6.38 PM", p: [15.1510, 76.9310] },
      { name: "Bypass", code: "110", morning: "7.25 AM", evening: "6.35 PM", p: [15.1610, 76.9400] },
      { name: "Veniveerapur Cross", code: "011", morning: "7.30 AM", evening: "6.30 PM", p: [15.1780, 76.9480] },
      { name: "BITM", code: "012", morning: "7.50 AM", evening: "6.12 PM", p: [15.1850, 76.9530] },
      { name: "Rameshwari Nagar", code: "013", morning: "7.53 AM", evening: "6.10 PM", p: [15.1950, 76.9580] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "06": {
    name: "Bus No 06",
    driver: "Mahendra",
    phone: "8971057717",
    halting: "BEHIND VAISHANAVI HOTEL",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "Tippu Circle", code: "096", morning: "7.50 AM", evening: "6.00 PM", p: [15.1390, 76.9210] },
      { name: "Ambedkar Circle", code: "097", morning: "7.55 AM", evening: "5.45 PM", p: [15.1470, 76.9280] },
      { name: "APMC-Bus Depot", code: "101", morning: "8.05 AM", evening: "5.40 PM", p: [15.1580, 76.9360] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "07": {
    name: "Bus No 07",
    driver: "B NAGARAJ",
    phone: "8217533799",
    halting: "SIRIWARA",
    defaultZone: "Zone 2",
    activeWindow: { start: "07:00", end: "19:00" },
    stops: [
      { name: "Kapagal", code: "050", morning: "7.30 AM", evening: "6.31 PM", p: [15.1100, 76.8850] },
      { name: "Siriwara", code: "051", morning: "7.35 AM", evening: "6.26 PM", p: [15.1200, 76.8980] },
      { name: "Sangakal", code: "052", morning: "7.40 AM", evening: "6.21 PM", p: [15.1300, 76.9090] },
      { name: "Vajpayee Layout", code: "053", morning: "7.45 AM", evening: "6.16 PM", p: [15.1380, 76.9170] },
      { name: "KEB Circle", code: "054", morning: "7.48 AM", evening: "6.13 PM", p: [15.1450, 76.9240] },
      { name: "Water Booster", code: "055", morning: "7.51 AM", evening: "6.10 PM", p: [15.1520, 76.9300] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "08": {
    name: "Bus No 08",
    driver: "ANIL",
    phone: "8296641835",
    halting: "BITM",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "Belagal Cross", code: "027", morning: "7.45 AM", evening: "6.17 PM", p: [15.1340, 76.9140] },
      { name: "Babu Chowk", code: "028", morning: "7.48 AM", evening: "6.12 PM", p: [15.1410, 76.9210] },
      { name: "Cowl bazar police station", code: "029", morning: "7.50 AM", evening: "6.10 PM", p: [15.1490, 76.9280] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "09": {
    name: "Bus No 09",
    driver: "Suman",
    phone: "7899782975",
    halting: "BITM",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:00", end: "19:00" },
    stops: [
      { name: "Kolagal", code: "113", morning: "7.25 AM", evening: "6.18 PM", p: [15.1150, 76.8900] },
      { name: "Shanti Nagar", code: "112", morning: "7.27 AM", evening: "6.04 PM", p: [15.1250, 76.9020] },
      { name: "Raaga Fort", code: "036", morning: "7.35 AM", evening: "5.59 PM", p: [15.1330, 76.9110] },
      { name: "Vidya Nagar Circle", code: "037", morning: "7.40 AM", evening: "5.54 PM", p: [15.1410, 76.9190] },
      { name: "Shrine Church", code: "038", morning: "7.45 AM", evening: "5.49 PM", p: [15.1480, 76.9250] },
      { name: "Indira Nagar Circle", code: "039", morning: "7.48 AM", evening: "5.44 PM", p: [15.1530, 76.9310] },
      { name: "Ambedkar School", code: "040", morning: "7.52 AM", evening: "5.39 PM", p: [15.1580, 76.9360] },
      { name: "Fire Station", code: "041", morning: "7.54 AM", evening: "5.35 PM", p: [15.1650, 76.9420] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "10": {
    name: "Bus No 10",
    driver: "Shankarappa H",
    phone: "9901419933",
    halting: "RR BLOCK",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "Water tank Circle", code: "080", morning: "7.45 AM", evening: "6.30 PM", p: [15.1320, 76.9130] },
      { name: "Sana Durgamma Gudi", code: "044", morning: "7.50 AM", evening: "6.24 PM", p: [15.1400, 76.9200] },
      { name: "Patel Nagar SBI Bank", code: "045", morning: "7.54 AM", evening: "6.11 PM", p: [15.1460, 76.9260] },
      { name: "Raghavendra Swamy Temple", code: "046", morning: "8.00 AM", evening: "6.08 PM", p: [15.1520, 76.9320] },
      { name: "Old BJP Office", code: "070", morning: "8.15 AM", evening: "6.05 PM", p: [15.1600, 76.9390] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "11": {
    name: "Bus No 11",
    driver: "Gadhilinga",
    phone: "8296180661",
    halting: "BEHIND VAISHANAVI HOTEL",
    defaultZone: "Zone 2",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "Vaishanavi Hotel Siruguppa", code: "102", morning: "8.00 AM", evening: "6.10 PM", p: [15.6280, 76.8920] },
      { name: "Tekkalkote", code: "103", morning: "8.20 AM", evening: "5.40 PM", p: [15.5340, 76.9120] },
      { name: "Byrapura Cross", code: "104", morning: "8.30 AM", evening: "5.35 PM", p: [15.4210, 76.9380] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "12": {
    name: "Bus No 12",
    driver: "Virupakshi",
    phone: "9686400864",
    halting: "RR BLOCK",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "RR BLOCK", code: "122", morning: "7.35 AM", evening: "6.25 PM", p: [15.1410, 76.9250] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "13": {
    name: "Bus No 13",
    driver: "Veeresh",
    phone: "9900750592",
    halting: "RR BLOCK",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "JK Layout", code: "071", morning: "7.45 AM", evening: "6.24 PM", p: [15.1310, 76.9110] },
      { name: "Bala Bharathi School", code: "072", morning: "7.48 AM", evening: "6.16 PM", p: [15.1380, 76.9170] },
      { name: "Sneha Colony", code: "073", morning: "7.50 AM", evening: "6.13 PM", p: [15.1430, 76.9220] },
      { name: "Govindappa Kalyana Mantapa", code: "074", morning: "7.52 AM", evening: "6.10 PM", p: [15.1480, 76.9270] },
      { name: "Reddy Hotel", code: "075", morning: "7.57 AM", evening: "6.08 PM", p: [15.1530, 76.9310] },
      { name: "Kaveri Medical Store", code: "076", morning: "8.02 AM", evening: "6.05 PM", p: [15.1580, 76.9350] },
      { name: "Talur road Canal", code: "077", morning: "8.04 AM", evening: "6.03 PM", p: [15.1630, 76.9400] },
      { name: "Shantiniketan School", code: "078", morning: "8.06 AM", evening: "6.10 PM", p: [15.1680, 76.9450] },
      { name: "Police Gymkana", code: "079", morning: "8.09 AM", evening: "6.00 PM", p: [15.1740, 76.9500] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "14": {
    name: "Bus No 14",
    driver: "Rajesh",
    phone: "9980807675",
    halting: "RR BLOCK",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "NANDI SCHOOL OF EXCELLENCE", code: "132", morning: "7.35 AM", evening: "6.27 PM", p: [15.1340, 76.9160] },
      { name: "Raghavendra Colony Medplus", code: "081", morning: "7.43 AM", evening: "6.16 PM", p: [15.1420, 76.9240] },
      { name: "Tarnatha Hospital", code: "082", morning: "7.45 AM", evening: "6.13 PM", p: [15.1470, 76.9280] },
      { name: "RR theatre", code: "084", morning: "7.47 AM", evening: "6.10 PM", p: [15.1520, 76.9330] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "15": {
    name: "Bus No 15",
    driver: "Mahantesh",
    phone: "9880596464",
    halting: "RR BLOCK",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "Gangappa Gin", code: "091", morning: "7.45 AM", evening: "6.20 PM", p: [15.1350, 76.9180] },
      { name: "Sharadha Medical Store", code: "092", morning: "7.48 AM", evening: "6.17 PM", p: [15.1410, 76.9230] },
      { name: "Raghavendra Theatre", code: "093", morning: "7.52 AM", evening: "6.15 PM", p: [15.1460, 76.9270] },
      { name: "Sangam Circle", code: "094", morning: "7.55 AM", evening: "6.12 PM", p: [15.1500, 76.9310] },
      { name: "Royal Circle Old Bus Stand", code: "095", morning: "8.00 AM", evening: "6.10 PM", p: [15.1560, 76.9360] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "16": {
    name: "Bus No 16",
    driver: "Govindappa",
    phone: "9900338432",
    halting: "RR BLOCK",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "RR block", code: "122", morning: "7.35 AM", evening: "6.20 PM", p: [15.1410, 76.9250] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "17": {
    name: "Bus No 17",
    driver: "Kumar",
    phone: "9535144363",
    halting: "BITM",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "2nd railway gate", code: "032", morning: "7.35 AM", evening: "6.24 PM", p: [15.1340, 76.9130] },
      { name: "Sudha Cross", code: "033", morning: "7.36 AM", evening: "6.21 PM", p: [15.1390, 76.9170] },
      { name: "Vasavi School", code: "034", morning: "7.40 AM", evening: "6.16 PM", p: [15.1440, 76.9220] },
      { name: "Rock Garden", code: "035", morning: "7.42 AM", evening: "6.13 PM", p: [15.1480, 76.9260] },
      { name: "Womens Police Station", code: "042", morning: "7.45 AM", evening: "6.10 PM", p: [15.1520, 76.9300] },
      { name: "Sriramulu Office", code: "059", morning: "7.50 AM", evening: "6.05 PM", p: [15.1580, 76.9360] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "18": {
    name: "Bus No 18",
    driver: "SHANKARAPPA R",
    phone: "9743798551",
    halting: "YARRINGALI",
    defaultZone: "Zone 2",
    activeWindow: { start: "07:00", end: "19:00" },
    stops: [
      { name: "Krishna Nagar Camp", code: "133", morning: "7.30 AM", evening: "6.27 PM", p: [15.1950, 76.8400] },
      { name: "Yarangali", code: "114", morning: "7.40 AM", evening: "6.21 PM", p: [15.2100, 76.8620] },
      { name: "Siddamanahalli", code: "115", morning: "7.45 AM", evening: "6.18 PM", p: [15.2200, 76.8850] },
      { name: "Badnahatti", code: "116", morning: "7.48 AM", evening: "6.15 PM", p: [15.2300, 76.9050] },
      { name: "Kurugodu", code: "117", morning: "7.50 AM", evening: "6.13 PM", p: [15.2400, 76.9250] },
      { name: "Vaddatti Cross", code: "118", morning: "7.53 AM", evening: "5.50 PM", p: [15.2550, 76.9450] },
      { name: "Madire Cross", code: "119", morning: "7.55 AM", evening: "5.35 PM", p: [15.2700, 76.9600] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "19": {
    name: "Bus No 19",
    driver: "Pavan",
    phone: "8147885090",
    halting: "RR BLOCK",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "Cool Corner", code: "047", morning: "7.35 AM", evening: "6.34 PM", p: [15.1320, 76.9140] },
      { name: "Basaveshwara Nagar", code: "048", morning: "7.38 AM", evening: "6.26 PM", p: [15.1370, 76.9190] },
      { name: "Gandhi Nagar Market", code: "049", morning: "7.40 AM", evening: "6.18 PM", p: [15.1430, 76.9240] },
      { name: "MLA Office", code: "056", morning: "7.43 AM", evening: "6.15 PM", p: [15.1480, 76.9280] },
      { name: "Sukrutha Nursing Home", code: "057", morning: "7.48 AM", evening: "6.06 PM", p: [15.1530, 76.9320] },
      { name: "Om Shanti Building", code: "058", morning: "7.52 AM", evening: "6.00 PM", p: [15.1580, 76.9360] },
      { name: "Ballari Health City", code: "060", morning: "8.03 AM", evening: "5.50 PM", p: [15.1660, 76.9430] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "20": {
    name: "Bus No 20",
    driver: "Lingamurthy",
    phone: "9110416165",
    halting: "RR BLOCK",
    defaultZone: "Zone 2",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "Andral Petrol bunk", code: "087", morning: "7.35 AM", evening: "6.25 PM", p: [15.1120, 76.9050] },
      { name: "Rupanagudi Cross (ATP RD)", code: "128", morning: "7.38 AM", evening: "6.21 PM", p: [15.1220, 76.9150] },
      { name: "Bapuji Nagar Circle", code: "088", morning: "7.40 AM", evening: "6.18 PM", p: [15.1310, 76.9220] },
      { name: "Kanekal Bus Stand", code: "089", morning: "7.42 AM", evening: "6.15 PM", p: [15.1390, 76.9280] },
      { name: "Miller Pet", code: "090", morning: "7.55 AM", evening: "6.10 PM", p: [15.1480, 76.9340] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "21": {
    name: "Bus No 21",
    driver: "K Rajashekar",
    phone: "9008783767",
    halting: "BEHIND VAISHANAVI HOTEL",
    defaultZone: "Zone 2",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "Gandhi Circle", code: "098", morning: "7.50 AM", evening: "6.10 PM", p: [15.6290, 76.8940] },
      { name: "Reliance Trends Siruguppa", code: "100", morning: "8.00 AM", evening: "6.00 PM", p: [15.6150, 76.9020] },
      { name: "Byrapur Cross", code: "104", morning: "8.20 AM", evening: "5.40 PM", p: [15.4210, 76.9380] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "22": {
    name: "Bus No 22",
    driver: "Dhananjaya",
    phone: "8971126189",
    halting: "RR BLOCK",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "RR block", code: "122", morning: "7.35 AM", evening: "6.20 PM", p: [15.1410, 76.9250] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "23": {
    name: "Bus No 23",
    driver: "Laxman",
    phone: "7259767290",
    halting: "RR BLOCK",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "RR Block", code: "122", morning: "7.35 AM", evening: "6.20 PM", p: [15.1410, 76.9250] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "24": {
    name: "Bus No 24",
    driver: "Dodda Bsavappa",
    phone: "9901574238",
    halting: "RR BLOCK",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "Benki Mareamma Temple", code: "004", morning: "7.45 AM", evening: "6.17 PM", p: [15.1320, 76.9120] },
      { name: "Bruce pet Police Station", code: "005", morning: "7.50 AM", evening: "6.12 PM", p: [15.1390, 76.9180] },
      { name: "Kalyan Jewellers", code: "006", morning: "7.52 AM", evening: "6.10 PM", p: [15.1450, 76.9230] },
      { name: "Moti Circle", code: "007", morning: "7.56 AM", evening: "6.12 PM", p: [15.1490, 76.9270] },
      { name: "Fort Entrance", code: "008", morning: "8.00 AM", evening: "6.10 PM", p: [15.1540, 76.9310] },
      { name: "Putti Hotel", code: "009", morning: "8.02 AM", evening: "6.00 PM", p: [15.1590, 76.9350] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "25": {
    name: "Bus No 25",
    driver: "Chaitanya",
    phone: "8919500901",
    halting: "BBC",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "Bhramendra Temple", code: "063", morning: "7.45 AM", evening: "6.15 PM", p: [15.1310, 76.9140] },
      { name: "Kapagal Road 5th cross", code: "064", morning: "7.48 AM", evening: "6.08 PM", p: [15.1360, 76.9180] },
      { name: "Kapagal Road 1st Cross", code: "065", morning: "7.50 AM", evening: "6.05 PM", p: [15.1400, 76.9220] },
      { name: "Bharath Nursing Home", code: "066", morning: "7.52 AM", evening: "6.02 PM", p: [15.1450, 76.9260] },
      { name: "Vishal Mart-SBI Bank", code: "067", morning: "7.55 AM", evening: "6.00 PM", p: [15.1500, 76.9310] },
      { name: "Lakshmi Nagar Camp", code: "123", morning: "8.10 AM", evening: "5.45 PM", p: [15.1950, 76.9530] },
      { name: "Bhagya Nagar Camp (Near Kolur)", code: "124", morning: "8.15 AM", evening: "5.40 PM", p: [15.2250, 76.9590] },
      { name: "Kolur", code: "125", morning: "8.25 AM", evening: "5.30 PM", p: [15.2550, 76.9650] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "27": {
    name: "Bus No 27",
    driver: "Ramakrichna B",
    phone: "9880352447",
    halting: "VADDU",
    defaultZone: "Zone 2",
    activeWindow: { start: "06:30", end: "19:30" },
    stops: [
      { name: "Vaddu", code: "129", morning: "6.45 AM", evening: "6.50 PM", p: [15.1750, 76.6710] },
      { name: "Torangal Shankar Town", code: "105", morning: "7.15 AM", evening: "6.25 PM", p: [15.2040, 76.6890] },
      { name: "Sulthanpur Cross", code: "111", morning: "7.20 AM", evening: "6.20 PM", p: [15.2100, 76.7550] },
      { name: "Kudthini bus Stand", code: "010", morning: "7.30 AM", evening: "6.10 PM", p: [15.1980, 76.8120] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "30": {
    name: "Bus No 30",
    driver: "Nagaraj K",
    phone: "9901554847",
    halting: "BITM",
    defaultZone: "Zone 2",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "Allipur", code: "014", morning: "7.40 AM", evening: "6.25 PM", p: [15.1050, 76.8920] },
      { name: "Daradmill", code: "015", morning: "7.43 AM", evening: "6.17 PM", p: [15.1180, 76.9020] },
      { name: "Kuvempu Nagar 5th Cross", code: "017", morning: "7.45 AM", evening: "6.12 PM", p: [15.1290, 76.9110] },
      { name: "Yerithata bakery", code: "020", morning: "7.50 AM", evening: "6.10 PM", p: [15.1380, 76.9190] },
      { name: "Select Talkies", code: "030", morning: "7.53 AM", evening: "6.00 PM", p: [15.1480, 76.9270] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "32": {
    name: "Bus No 32",
    driver: "Sukkendra",
    phone: "9663931579",
    halting: "BEHIND VAISHANAVI HOTEL",
    defaultZone: "Zone 2",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "Abhayanjenaya Temple Siruguppa", code: "099", morning: "7.50 AM", evening: "6.00 PM", p: [15.6310, 76.8950] },
      { name: "Devinagar Camp (Near Tekkkalakote)", code: "126", morning: "8.05 AM", evening: "5.40 PM", p: [15.5390, 76.9130] },
      { name: "Halekote", code: "127", morning: "8.15 AM", evening: "5.30 PM", p: [15.4800, 76.9240] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  },
  "33": {
    name: "Bus No 33",
    driver: "Venkatesh",
    phone: "9008839783",
    halting: "BPSC",
    defaultZone: "Zone 1",
    activeWindow: { start: "07:30", end: "19:00" },
    stops: [
      { name: "BPSC School", code: "083", morning: "7.45 AM", evening: "6.20 PM", p: [15.1280, 76.9110] },
      { name: "MG Circle", code: "085", morning: "7.48 AM", evening: "6.15 PM", p: [15.1350, 76.9180] },
      { name: "Pawan Hotel", code: "086", morning: "7.50 AM", evening: "6.10 PM", p: [15.1420, 76.9240] },
      { name: "Durgamma Temple", code: "068", morning: "7.55 AM", evening: "6.03 PM", p: [15.1490, 76.9290] },
      { name: "Sony Showroom", code: "069", morning: "7.57 AM", evening: "6.00 PM", p: [15.1550, 76.9340] },
      { name: "BBC", code: "043", morning: "8.05 AM", evening: "5.55 PM", p: [15.1610, 76.9390] },
      { name: "Somasamudra", code: "121", morning: "8.20 AM", evening: "5.40 PM", p: [15.2200, 76.9550] },
      { name: "Kollur Cross", code: "120", morning: "8.30 AM", evening: "5.30 PM", p: [15.2500, 76.9640] },
      { name: "Mount View Campus", code: "CAMPUS", morning: "8.50 AM", evening: "5.10 PM", p: CAMPUS_POS }
    ]
  }
};

let activeBusKey = "01";
let busPath = `buses/bus${activeBusKey}`;

/* ============================================================
   2. OPERATIONAL HOURS (NIGHT / OFFLINE) ENGINE
   ============================================================ */
function isBusOperating(busKey) {
  const bus = UNIVERSITY_BUSES[busKey];
  if (!bus || !bus.activeWindow) return true;
  const now = new Date();
  const curMinutes = now.getHours() * 60 + now.getMinutes();
  
  const [sH, sM] = bus.activeWindow.start.split(":").map(Number);
  const [eH, eM] = bus.activeWindow.end.split(":").map(Number);
  const startMin = sH * 60 + sM;
  const endMin = eH * 60 + eM;

  return curMinutes >= startMin && curMinutes <= endMin;
}

/* ============================================================
   3. ROUTE GEOMETRY & TRAJECTORY MATH
   ============================================================ */
const $ = s => document.querySelector(s);
const R = 6371000, rad = d => d * Math.PI / 180;
const hav = (a, b) => {
  const dLa = rad(b[0] - a[0]), dLo = rad(b[1] - a[1]);
  const x = Math.sin(dLa / 2) ** 2 + Math.cos(rad(a[0])) * Math.cos(rad(b[0])) * Math.sin(dLo / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
};

let dense = [], stops = [], cum = [], total = 0, N = 0;
let routeGlowLine = null, routeMainLine = null, stopMarkers = [];

function buildRouteGeometry(busKey) {
  const busData = UNIVERSITY_BUSES[busKey];
  const rawPoints = busData.stops.map(s => ({ p: s.p, stop: s.name, code: s.code, morning: s.morning, evening: s.evening }));
  if (rawPoints.length > 1) {
    rawPoints.push({ p: rawPoints[0].p });
  }

  dense = []; stops = [];
  rawPoints.forEach((w, i) => {
    if (i === 0) dense.push(w.p);
    else {
      const a = rawPoints[i - 1].p, b = w.p;
      const n = Math.max(1, Math.ceil(hav(a, b) / 12));
      for (let k = 1; k <= n; k++) {
        dense.push([a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n]);
      }
    }
    if (w.stop && i < rawPoints.length - 1) {
      stops.push({ name: w.stop, code: w.code, idx: dense.length - 1, pos: w.p, morning: w.morning, evening: w.evening });
    }
  });

  N = dense.length - 1;
  cum = [0];
  for (let i = 1; i < dense.length; i++) {
    cum.push(cum[i - 1] + hav(dense[i - 1], dense[i]));
  }
  total = cum[N];
  stops.forEach(s => s.cum = cum[s.idx]);
}

const posAt = f => {
  const i = Math.min(Math.floor(f), N - 1), t = f - i, a = dense[i], b = dense[i + 1];
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
};
const cumAt = f => { const i = Math.min(Math.floor(f), N - 1); return cum[i] + (cum[i + 1] - cum[i]) * (f - i); };
const distTo = (s, f) => { let d = s.cum - cumAt(f); if (d < -15) d += total; return Math.max(d, 0); };
const nearest = p => {
  let best = 0, bd = Infinity;
  for (let i = 0; i < N; i++) { const d = hav(p, dense[i]); if (d < bd) { bd = d; best = i; } }
  return best;
};

/* ============================================================
   4. MAP INITIALIZATION & ROUTE RENDERING
   ============================================================ */
const map = L.map("map", { zoomControl: false, attributionControl: true }).setView(CAMPUS_POS, 14);
L.control.zoom({ position: "bottomright" }).addTo(map);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19, attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const busIcon = L.divIcon({
  className: "", iconSize: [40, 40], iconAnchor: [20, 20],
  html: `<div class="bus" id="mapBusIcon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M3 11h18M7 20v-3M17 20v-3"/></svg></div>`
});
const bus = L.marker(CAMPUS_POS, { icon: busIcon, zIndexOffset: 1000 }).addTo(map);

function renderMapForActiveBus() {
  buildRouteGeometry(activeBusKey);

  if (routeGlowLine) map.removeLayer(routeGlowLine);
  if (routeMainLine) map.removeLayer(routeMainLine);
  stopMarkers.forEach(m => map.removeLayer(m));
  stopMarkers = [];

  routeGlowLine = L.polyline(dense, { color: "#ffc22e", weight: 11, opacity: .35, lineJoin: "round" }).addTo(map);
  routeMainLine = L.polyline(dense, { color: "#0f1b2d", weight: 4, opacity: .9, lineJoin: "round" }).addTo(map);

  stops.forEach((s, i) => {
    const marker = L.marker(s.pos, {
      icon: L.divIcon({ className: "", html: `<div class="pin">${i + 1}</div>`, iconSize: [26, 26], iconAnchor: [13, 13] })
    }).addTo(map).bindPopup(`<b>${s.name}</b><br>Stop ${i + 1} (Code: ${s.code || 'N/A'})<br><small>Pickup: ${s.morning} | Return: ${s.evening}</small>`);
    stopMarkers.push(marker);
  });

  map.fitBounds(L.polyline(dense).getBounds(), { padding: [50, 50] });

  renderStopsList();
  
  S.f = 0;
  cur = dense[0];
  from = dense[0];
  to = dense[0];
  bus.setLatLng(dense[0]);

  checkOperatingStatus();
}

let cur = null, from = null, to = null, t0 = 0, dur = 950;
function moveBus(p) {
  if (!cur) { cur = p; bus.setLatLng(p); }
  from = cur; to = p; t0 = performance.now();
  if (S.follow) map.panTo(p, { animate: true, duration: Math.min(dur, 1500) / 1000, easeLinearity: 1 });
}
(function anim(now) {
  if (to) {
    const k = Math.min(1, (now - t0) / dur);
    cur = [from[0] + (to[0] - from[0]) * k, from[1] + (to[1] - from[1]) * k];
    bus.setLatLng(cur);
  }
  requestAnimationFrame(anim);
})(performance.now());

/* ============================================================
   5. STATE, REAL-TIME & TIMELINE UI
   ============================================================ */
const S = { mode: "sim", f: 0, speed: 0, ema: 6, mult: 1, follow: true, jam: 0, dwell: 0,
            atStop: null, warned: new Set(), slow: 0, offline: false, updated: 0, liveLast: 0, unsub: null, lastTs: 0 };

function renderStopsList() {
  const stopsEl = $("#stops");
  stopsEl.innerHTML = "";
  stops.forEach((s, i) => {
    const li = document.createElement("li");
    li.tabIndex = 0;
    li.innerHTML = `<span class="dot">${i + 1}</span><div class="s-name"><b>${s.name}</b><small>Pickup ${s.morning}</small></div><span class="eta">–</span>`;
    const go = () => { setFollow(false); map.flyTo(s.pos, 17, { duration: .8 }); };
    li.onclick = go; li.onkeydown = e => { if (e.key === "Enter") go(); };
    stopsEl.append(li);
    s.el = li; s.sub = li.querySelector("small"); s.etaEl = li.querySelector(".eta");
  });
}

const fmt = sec => sec < 40 ? "Now" : sec < 90 ? "1 min" : Math.round(sec / 60) + " min";
const AT = 45;

function info() {
  const arr = stops.map(s => { const d = distTo(s, S.f); return { s, d, eta: d / Math.max(S.ema, 4) }; });
  const at = arr.find(a => a.d <= AT);
  const ahead = arr.filter(a => a.d > AT);
  const next = ahead.length ? ahead.reduce((a, b) => a.d < b.d ? a : b) : arr[0];
  return { arr, at, next };
}

function updateUI() {
  if (!stops.length) return;
  const isRunning = isBusOperating(activeBusKey);
  if (!isRunning && S.mode === "live") {
    $("#vSpeed").innerHTML = `0<span>km/h</span>`;
    $("#vNext").textContent = "Service Halted";
    $("#vEta").textContent = "Off-Duty";
    return;
  }

  const { arr, at, next } = info();
  $("#vSpeed").innerHTML = `${Math.round(S.speed)}<span>km/h</span>`;
  $("#vNext").textContent = at ? at.s.name : (next ? next.s.name : "–");
  $("#vEta").textContent = at ? "At stop" : (next ? fmt(next.eta) : "–");
  arr.forEach(a => {
    const isAt = at && a.s === at.s, isNext = !at && next && a.s === next.s, gone = !isAt && a.d > total - 120;
    a.s.el.className = isAt ? "at" : isNext ? "next" : gone ? "gone" : "";
    a.s.sub.textContent = isAt ? "Bus is here" : isNext ? `Next • ${a.s.morning}` : gone ? "Departed" : `Pickup • ${a.s.morning}`;
    a.s.etaEl.textContent = isAt ? "At stop" : gone ? "Left" : fmt(a.eta);
  });
}

/* Alerts */
const ICON = { info: "i", ok: "✓", warn: "!", bad: "×" };
function closeAlert(el) {
  if (!el || el.classList.contains("out")) return;
  el.classList.add("out");
  setTimeout(() => el.remove(), 320);
}
function pushAlert(type, title, msg, key) {
  const box = $("#alerts");
  if (key && box.querySelector(`[data-key="${key}"]:not(.out)`)) return;
  const el = document.createElement("div");
  el.className = "alert " + type; el.setAttribute("role", "status");
  if (key) el.dataset.key = key;
  el.innerHTML = `<span class="a-ic">${ICON[type]}</span><div><b>${title}</b><p>${msg}</p></div><button aria-label="Dismiss alert">×</button>`;
  el.querySelector("button").onclick = () => closeAlert(el);
  box.prepend(el);
  [...box.children].slice(4).forEach(closeAlert);
  setTimeout(() => closeAlert(el), 14000);
}
$("#clearAlerts").onclick = () => [...$("#alerts").children].forEach(closeAlert);

function alertsLogic() {
  if (!stops.length) return;
  const { at, next } = info();
  if (at) {
    if (S.atStop !== at.s.name) {
      S.atStop = at.s.name; S.warned.delete(at.s.name);
      pushAlert("ok", `Bus is at ${at.s.name}`, "Board now. It leaves in a few seconds.", "at-" + at.s.name);
    }
  } else S.atStop = null;
  if (!at && next && next.eta < 120 && !S.warned.has(next.s.name)) {
    S.warned.add(next.s.name);
    pushAlert("info", "Arriving soon", `Bus reaches ${next.s.name} in about ${Math.max(1, Math.round(next.eta / 60))} min.`, "soon-" + next.s.name);
  }
  if (!at && S.speed < 3) { if (++S.slow === 8) pushAlert("warn", "Bus is moving slowly", "Traffic on route. Arrival times adjusted.", "slow"); }
  else if (S.speed >= 3) S.slow = 0;
}

function setPill(state, text) {
  const p1 = $("#pill");
  const p2 = $("#mobilePill");
  const pText1 = $("#pillText");
  const pText2 = $("#mobilePillText");
  
  const cls = "pill " + (state === "sim" ? "" : state);
  if (p1) { p1.className = cls + " desktop-pill"; pText1.textContent = text; }
  if (p2) { p2.className = cls; pText2.textContent = text; }
}

function handle(pos, speed) {
  const now = Date.now();
  dur = S.lastTs ? Math.min(4000, Math.max(900, now - S.lastTs)) : 950;
  S.lastTs = now;
  S.speed = speed;
  S.ema = S.ema * .8 + (speed / 3.6) * .2;
  S.updated = now;
  moveBus(pos); updateUI(); alertsLogic();
}

function checkOperatingStatus() {
  const isOperating = isBusOperating(activeBusKey);
  const notice = $("#offlineHoursNotice");
  const busEl = $("#mapBusIcon");

  if (!isOperating) {
    notice.classList.remove("hidden");
    if (busEl) busEl.classList.add("bus-offline");
    if (S.mode === "live") {
      setPill("night", "Night Offline");
      $("#updated").textContent = "Service off-duty";
    }
  } else {
    notice.classList.add("hidden");
    if (busEl) busEl.classList.remove("bus-offline");
    if (S.mode === "live" && !S.offline) setPill("live", "Live");
  }
}
setInterval(checkOperatingStatus, 30000);

/* Simulator Loop */
function simTick() {
  if (S.mode !== "sim" || !stops.length) return;
  const dt = S.mult;
  const ahead = stops.map(s => distTo(s, S.f)).filter(d => d > 1);
  const nextD = ahead.length ? Math.min(...ahead) : 999;
  let v;
  if (S.dwell > 0) { S.dwell -= dt; v = 0; }
  else if (S.jam > 0) { S.jam -= dt; v = 2.5; }
  else v = (28 + 6 * Math.sin(Date.now() / 9000)) * Math.min(1, Math.max(.4, nextD / 70));

  const pf = S.f; let nf = pf + (v / 3.6) * dt / 12; const wrapped = nf >= N; if (wrapped) nf -= N;
  if (S.dwell <= 0) {
    const hit = stops.find(s => wrapped ? (s.idx >= pf || s.idx <= nf) : (s.idx > pf && s.idx <= nf));
    if (hit) { nf = hit.idx; S.dwell = 5; }
  }
  S.f = nf;
  handle(posAt(S.f), v);
}
setInterval(simTick, 1000);

/* Firebase Live Mode */
async function startLive() {
  const isOperating = isBusOperating(activeBusKey);
  if (!isOperating) {
    setPill("night", "Night Offline");
    pushAlert("warn", "Shuttles Off-Duty", "Buses are parked for the night. Tracker resumes at 06:30 AM.", "off-hours");
  }

  const [{ initializeApp }, { getDatabase, ref, onValue }] = await Promise.all([
    import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"),
    import("https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js")
  ]);
  const db = getDatabase(initializeApp(FIREBASE_CONFIG));
  busPath = `buses/bus${activeBusKey}`;
  S.unsub = onValue(ref(db, busPath), snap => {
    const v = snap.val(); if (!v || S.mode !== "live") return;
    const lat = +v.lat, lng = +v.lng; if (!isFinite(lat) || !isFinite(lng)) return;
    S.liveLast = Date.now();
    if (S.offline) { S.offline = false; pushAlert("ok", "Signal restored", `Receiving live location for Bus ${activeBusKey}.`, "back"); }
    
    if (isBusOperating(activeBusKey)) {
      setPill("live", "Live");
    } else {
      setPill("night", "Night Offline");
    }
    S.f = nearest([lat, lng]);
    handle([lat, lng], +v.speed || 0);
  });
}
function stopLive() { if (S.unsub) { S.unsub(); S.unsub = null; } }

setInterval(() => {
  if (S.mode === "live") {
    const isOperating = isBusOperating(activeBusKey);
    if (!isOperating) {
      setPill("night", "Night Offline");
      return;
    }
    if (S.liveLast && !S.offline && Date.now() - S.liveLast > 15000) {
      S.offline = true; setPill("off", "Offline");
      pushAlert("bad", "Bus signal lost", "No GPS ping received in 15 seconds. Showing last recorded spot.", "lost");
    }
    if (S.updated) {
      const s = Math.round((Date.now() - S.updated) / 1000);
      $("#updated").textContent = s < 3 ? "Realtime • Just now" : `Realtime • ${s}s ago`;
    }
  }
}, 1000);

/* ============================================================
   6. BUS SWITCHING & CARD-BASED CATALOG
   ============================================================ */
function switchBus(busKey) {
  if (!UNIVERSITY_BUSES[busKey]) return;
  activeBusKey = busKey;
  const b = UNIVERSITY_BUSES[busKey];
  $("#currentBusLabel").textContent = b.name;
  $("#mobileTimeBadge").textContent = `Active Route: ${b.name}`;
  $("#driverName").textContent = `Driver: ${b.driver}`;
  const dPhone = $("#driverPhone");
  dPhone.textContent = `📞 ${b.phone}`;
  dPhone.href = `tel:${b.phone}`;
  $("#stopsHeader").textContent = `${b.name} Stops`;

  renderMapForActiveBus();
  renderRoutesCatalog();
  pushAlert("info", `${b.name} Loaded`, `Driver: ${b.driver} • Halting: ${b.halting}`, "bus-switched");

  if (S.mode === "live") {
    stopLive();
    startLive().catch(() => {});
  }
}

let routeSearchQuery = "";
let selectedZoneFilter = "all";

function renderRoutesCatalog(targetSelectionMode = false) {
  const grid = $("#busesCardsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const filtered = Object.entries(UNIVERSITY_BUSES).filter(([key, bus]) => {
    const matchesZone = selectedZoneFilter === "all" || bus.defaultZone === selectedZoneFilter;
    const query = routeSearchQuery.toLowerCase();
    const matchesQuery = !query ||
      bus.name.toLowerCase().includes(query) ||
      bus.driver.toLowerCase().includes(query) ||
      bus.halting.toLowerCase().includes(query) ||
      bus.stops.some(st => st.name.toLowerCase().includes(query));
    return matchesZone && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 30px; color: var(--muted); font-weight: 700;">No bus routes found matching "${routeSearchQuery}".</div>`;
    return;
  }

  filtered.forEach(([key, busData]) => {
    const isOperating = isBusOperating(key);
    const card = document.createElement("div");
    card.className = "bus-card" + (key === activeBusKey ? " active-selected" : "") + (!isOperating ? " off-duty" : "");
    
    const zoneBadgeClass = busData.defaultZone === "Zone 2" ? "zone-pill-outer" : "";
    const firstStop = busData.stops[0];
    const totalStops = busData.stops.length;

    let stopsHtml = busData.stops.map(st => `
      <li>
        <span>${st.name} ${st.code ? `<b style="color:var(--muted);font-size:0.7rem;">(${st.code})</b>` : ''}</span>
        <small>${st.morning}</small>
      </li>
    `).join("");

    card.innerHTML = `
      <div>
        <div class="bus-card-header">
          <div>
            <div class="bus-card-num">${busData.name}</div>
            <div class="bus-card-driver">Driver: <b>${busData.driver}</b></div>
          </div>
          <div style="display:flex;gap:4px;flex-direction:column;align-items:flex-end;">
            <span class="route-badge-pill ${zoneBadgeClass}">${busData.defaultZone}</span>
            <span style="font-size:0.68rem;font-weight:700;color:${isOperating ? 'var(--ok)' : 'var(--muted)'};">
              ${isOperating ? '● Operating' : '○ Night Offline'}
            </span>
          </div>
        </div>

        <div class="route-stop-summary" style="margin-top: 10px;">
          <div class="summary-row">
            <small>First Pickup</small>
            <span>${firstStop.name} (${firstStop.morning})</span>
          </div>
          <div class="summary-row">
            <small>Halting Depo</small>
            <span>${busData.halting}</span>
          </div>
          <div class="summary-row">
            <small>Contact</small>
            <a href="tel:${busData.phone}" style="color:var(--info);text-decoration:none;font-weight:700;">📞 ${busData.phone}</a>
          </div>
        </div>

        <div class="card-stops-expand" style="margin-top: 10px;">
          <button type="button" class="expand-toggle-btn">
            <span>View All ${totalStops} Stops & Times</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <ul class="card-stops-list">
            ${stopsHtml}
          </ul>
        </div>
      </div>

      <div class="bus-card-actions" style="margin-top: 12px;">
        ${targetSelectionMode ? `
          <button type="button" class="btn primary-btn select-this-bus-btn" data-bus="${key}">
            Select for My Pass
          </button>
        ` : `
          <button type="button" class="btn ${key === activeBusKey ? 'on' : 'primary-btn'} track-this-bus-btn" data-bus="${key}">
            ${key === activeBusKey ? '✓ Currently Tracking' : 'Track This Bus'}
          </button>
        `}
      </div>
    `;

    const toggleBtn = card.querySelector(".expand-toggle-btn");
    const stopsList = card.querySelector(".card-stops-list");
    toggleBtn.onclick = () => {
      const isOpen = stopsList.classList.toggle("open");
      toggleBtn.querySelector("span").textContent = isOpen ? `Hide ${totalStops} Stops` : `View All ${totalStops} Stops & Times`;
      toggleBtn.querySelector("svg").style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
    };

    const actionBtn = card.querySelector(".track-this-bus-btn") || card.querySelector(".select-this-bus-btn");
    if (actionBtn) {
      actionBtn.onclick = () => {
        if (targetSelectionMode) {
          applySelectedBusToForm(key);
          closeModal("routesModal");
          openModal("studentFormModal");
        } else {
          switchBus(key);
          closeModal("routesModal");
        }
      };
    }

    grid.appendChild(card);
  });
}

function applySelectedBusToForm(busKey) {
  const chosen = UNIVERSITY_BUSES[busKey];
  if (!chosen) return;
  $("#formBusNumberVal").value = busKey;
  $("#formSelectedBusBadge").textContent = chosen.name;
  $("#formSelectedBusTitle").textContent = `${chosen.name} (${chosen.defaultZone})`;
  $("#formSelectedBusDriver").textContent = `Driver: ${chosen.driver} • ${chosen.phone}`;
  $("#busZone").value = chosen.defaultZone;
  updateFormPickupStops(busKey);
}

// Routes Modal & Filter Events
$("#allRoutesBtn").onclick = () => {
  renderRoutesCatalog(false);
  openModal("routesModal");
};
$("#quickSwitchBtn").onclick = () => {
  renderRoutesCatalog(false);
  openModal("routesModal");
};
$("#routesClose").onclick = () => closeModal("routesModal");

$("#routeSearchInput").oninput = e => {
  routeSearchQuery = e.target.value.trim();
  renderRoutesCatalog(false);
};

document.querySelectorAll("#zoneFilterChips .filter-chip").forEach(chip => {
  chip.onclick = () => {
    document.querySelectorAll("#zoneFilterChips .filter-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    selectedZoneFilter = chip.dataset.filter;
    renderRoutesCatalog(false);
  };
});

// Mobile menu toggle: scrolls smoothly to side panel controls
$("#mobileMenuToggle").onclick = () => {
  const panel = $("#mainPanel");
  panel.scrollIntoView({ behavior: "smooth" });
};

// Mode switch handler
function setMode(m) {
  if (m === S.mode) return;
  if (m === "live" && !FIREBASE_CONFIG.apiKey) {
    pushAlert("warn", "Live mode needs Firebase", "Configure FIREBASE_CONFIG in app.js with your project credentials.", "nofb");
    return;
  }
  stopLive(); S.mode = m; S.offline = false; S.liveLast = 0; S.lastTs = 0;
  $("#seg").dataset.mode = m;
  document.querySelectorAll("#seg button").forEach(b => b.classList.toggle("on", b.dataset.mode === m));
  document.body.classList.toggle("live", m === "live");
  if (m === "live") {
    setPill("off", "Connecting GPS");
    startLive().catch(() => pushAlert("bad", "Could not connect", "Check connection and credentials.", "fberr"));
  } else {
    setPill("sim", "Simulator");
  }
}
document.querySelectorAll("#seg button").forEach(b => b.onclick = () => setMode(b.dataset.mode));

function setFollow(v) {
  S.follow = v; const b = $("#followBtn");
  b.classList.toggle("on", v); b.setAttribute("aria-pressed", v);
  if (v && cur) map.panTo(cur);
}
$("#followBtn").onclick = () => setFollow(!S.follow);
map.on("dragstart", () => setFollow(false));
$("#fitBtn").onclick = () => { setFollow(false); map.flyToBounds(L.polyline(dense).getBounds(), { padding: [50, 50], duration: .8 }); };

const SPEEDS = [1, 2, 4];
$("#speedBtn").onclick = e => {
  S.mult = SPEEDS[(SPEEDS.indexOf(S.mult) + 1) % SPEEDS.length];
  e.currentTarget.lastChild.textContent = `Sim speed ${S.mult}×`;
};
$("#trafficBtn").onclick = () => {
  S.jam = 25;
  pushAlert("info", "Traffic simulated", "Bus will encounter slowed traffic for ~25s.", "jam");
};

$("#themeBtn").onclick = () => {
  const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem("cr-theme", t); } catch (e) {}
};

// Button ripple animation
document.addEventListener("click", e => {
  const b = e.target.closest(".btn, .seg button, .icon-btn, .nav-chip-btn"); if (!b) return;
  const r = b.getBoundingClientRect(), s = Math.max(r.width, r.height), el = document.createElement("span");
  el.className = "ripple";
  el.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
  b.appendChild(el); setTimeout(() => el.remove(), 600);
});

/* ============================================================
   7. USER AUTHENTICATION, PROFILE & LOGOUT WORKFLOW
   ============================================================ */
let currentUser = null;
let studentProfile = null;
let uploadedPhotoData = "";

function openModal(id) {
  const modal = $(`#${id}`);
  modal.classList.add("open");
  document.body.classList.add("modal-open");
}
function closeModal(id) {
  const modal = $(`#${id}`);
  modal.classList.remove("open");
  if (!document.querySelector(".modal-overlay.open")) {
    document.body.classList.remove("modal-open");
  }
}

// User Menu Popover Toggle
const userMenuPopover = $("#userMenuPopover");
$("#userProfileBtn").onclick = e => {
  e.stopPropagation();
  if (!currentUser) {
    openModal("authModal");
  } else {
    userMenuPopover.classList.toggle("open");
  }
};
document.addEventListener("click", e => {
  if (!userMenuPopover.contains(e.target) && e.target !== $("#userProfileBtn")) {
    userMenuPopover.classList.remove("open");
  }
});

// Popover Handlers
$("#popoverUpdatePassBtn").onclick = () => {
  userMenuPopover.classList.remove("open");
  openModal("studentFormModal");
};

$("#popoverLogoutBtn").onclick = () => {
  userMenuPopover.classList.remove("open");
  logoutUser();
};

function logoutUser() {
  currentUser = null;
  studentProfile = null;
  uploadedPhotoData = "";
  try {
    localStorage.removeItem("cr-user");
    localStorage.removeItem("cr-student-profile");
  } catch (e) {}

  $("#badgeStudentName").textContent = "Student Profile";
  $("#badgeUsn").textContent = "USN Pending";
  $("#badgeRouteDesc").textContent = "Signed out. Click update to login.";
  $("#badgeAvatar").innerHTML = "KU";
  $("#popoverName").textContent = "Student Account";
  $("#popoverEmail").textContent = "Not signed in";
  $("#popoverAvatar").innerHTML = "KU";
  $("#studentDetailsForm").reset();
  photoPreview.classList.add("hidden");
  dropUi.classList.remove("hidden");

  pushAlert("info", "Logged Out", "You have successfully signed out.", "logout");
}

// Modal Closers
$("#authClose").onclick = () => closeModal("authModal");
$("#studentFormClose").onclick = () => closeModal("studentFormModal");

// Auth Tabs
document.querySelectorAll("#authTabs .tab-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll("#authTabs .tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const isSignup = btn.dataset.tab === "signup";
    $("#authTitle").textContent = isSignup ? "Create Student Account" : "Student Portal Login";
    $("#authSubmitBtn").textContent = isSignup ? "Create Account & Continue" : "Login & Continue";
  };
});

$("#authForm").onsubmit = e => {
  e.preventDefault();
  const email = $("#authEmail").value.trim();
  currentUser = { email, loggedInAt: Date.now() };
  try { localStorage.setItem("cr-user", JSON.stringify(currentUser)); } catch (err) {}
  
  closeModal("authModal");
  pushAlert("ok", "Authenticated", `Logged in as ${email}`, "auth-ok");

  $("#popoverEmail").textContent = email;

  if (!studentProfile) {
    setTimeout(() => openModal("studentFormModal"), 300);
  } else {
    updateProfileBadge();
  }
};

// Form Trigger: Open card picker modal to select bus
$("#triggerBusSelection").onclick = () => {
  renderRoutesCatalog(true);
  openModal("routesModal");
};

// Populate Pickups dropdown based on selected bus
function updateFormPickupStops(busKey) {
  const pickupSelect = $("#pickupStop");
  pickupSelect.innerHTML = "";
  const bus = UNIVERSITY_BUSES[busKey];
  if (!bus) return;
  bus.stops.forEach(st => {
    const opt = document.createElement("option");
    opt.value = st.name;
    opt.textContent = `${st.name} (Code: ${st.code || 'N/A'}, Morning: ${st.morning})`;
    pickupSelect.appendChild(opt);
  });
}

// Pass Photo File Upload Preview
const passPhotoInput = $("#passPhotoInput");
const dropArea = $("#dropArea");
const dropUi = $("#dropUi");
const photoPreview = $("#photoPreview");
const previewImg = $("#previewImg");

function handleFile(file) {
  if (!file || !file.type.startsWith("image/")) {
    alert("Please upload a valid image file.");
    return;
  }
  const reader = new FileReader();
  reader.onload = ev => {
    uploadedPhotoData = ev.target.result;
    previewImg.src = uploadedPhotoData;
    dropUi.classList.add("hidden");
    photoPreview.classList.remove("hidden");
  };
  reader.readAsDataURL(file);
}

passPhotoInput.onchange = e => {
  if (e.target.files && e.target.files[0]) handleFile(e.target.files[0]);
};
$("#changePhotoBtn").onclick = e => {
  e.stopPropagation();
  passPhotoInput.click();
};

dropArea.ondragover = e => { e.preventDefault(); dropArea.style.borderColor = "var(--brand)"; };
dropArea.ondragleave = () => { dropArea.style.borderColor = "var(--line)"; };
dropArea.ondrop = e => {
  e.preventDefault();
  dropArea.style.borderColor = "var(--line)";
  if (e.dataTransfer.files && e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
};

// Confetti for Success Modal
function triggerConfetti() {
  const container = $("#confettiContainer");
  container.innerHTML = "";
  const colors = ["#ffc22e", "#16a34a", "#2563eb", "#ea8a0c", "#ec4899", "#8b5cf6"];
  for (let i = 0; i < 45; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.style.left = `${Math.random() * 100}%`;
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.transform = `scale(${Math.random() * .8 + .5})`;
    el.style.animationDelay = `${Math.random() * .4}s`;
    el.style.animationDuration = `${1.8 + Math.random() * 1.5}s`;
    container.appendChild(el);
  }
}

// Student Details Form Submit
$("#studentDetailsForm").onsubmit = e => {
  e.preventDefault();
  if (!uploadedPhotoData) {
    alert("Please upload your bus pass photo to proceed.");
    return;
  }

  const busKey = $("#formBusNumberVal").value || "01";
  studentProfile = {
    name: $("#studentName").value.trim(),
    usn: $("#studentUsn").value.trim().toUpperCase(),
    phone: $("#studentPhone").value.trim(),
    zone: $("#busZone").value,
    busNo: busKey,
    busName: UNIVERSITY_BUSES[busKey].name,
    pickupStop: $("#pickupStop").value,
    photo: uploadedPhotoData
  };

  try { localStorage.setItem("cr-student-profile", JSON.stringify(studentProfile)); } catch (err) {}

  closeModal("studentFormModal");

  // Populate Success Modal ID Card
  $("#successStudentName").textContent = studentProfile.name;
  $("#successUsn").textContent = studentProfile.usn;
  $("#successZone").textContent = studentProfile.zone;
  $("#successPickup").textContent = studentProfile.pickupStop;
  $("#successPhone").textContent = studentProfile.phone;
  $("#successBusBadge").textContent = studentProfile.busName;
  $("#successPassImg").src = studentProfile.photo;

  openModal("successModal");
  triggerConfetti();

  updateProfileBadge();
};

function updateProfileBadge() {
  if (!studentProfile) return;
  $("#badgeStudentName").textContent = studentProfile.name;
  $("#badgeUsn").textContent = studentProfile.usn;
  $("#badgeRouteDesc").textContent = `${studentProfile.busName} • ${studentProfile.pickupStop}`;
  $("#popoverName").textContent = studentProfile.name;
  
  if (currentUser) {
    $("#popoverEmail").textContent = currentUser.email;
  }
  
  if (studentProfile.photo) {
    $("#badgeAvatar").innerHTML = `<img src="${studentProfile.photo}" alt="${studentProfile.name}">`;
    $("#popoverAvatar").innerHTML = `<img src="${studentProfile.photo}" alt="${studentProfile.name}">`;
  }
}

// Track My Bus Route from Success Modal
$("#viewRouteNowBtn").onclick = () => {
  closeModal("successModal");
  if (studentProfile && studentProfile.busNo) {
    switchBus(studentProfile.busNo);
  }
};

$("#editProfileBtn").onclick = () => {
  if (!currentUser) openModal("authModal");
  else openModal("studentFormModal");
};

/* ============================================================
   8. INITIALIZATION & RECOVERY
   ============================================================ */
applySelectedBusToForm("01");

try {
  const savedUser = localStorage.getItem("cr-user");
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    $("#popoverEmail").textContent = currentUser.email;
  }

  const savedProfile = localStorage.getItem("cr-student-profile");
  if (savedProfile) {
    studentProfile = JSON.parse(savedProfile);
    uploadedPhotoData = studentProfile.photo;
    previewImg.src = uploadedPhotoData;
    dropUi.classList.add("hidden");
    photoPreview.classList.remove("hidden");
    
    $("#studentName").value = studentProfile.name || "";
    $("#studentUsn").value = studentProfile.usn || "";
    $("#studentPhone").value = studentProfile.phone || "";
    $("#busZone").value = studentProfile.zone || "Zone 1";
    applySelectedBusToForm(studentProfile.busNo || "01");
    $("#pickupStop").value = studentProfile.pickupStop || "";
    
    updateProfileBadge();
    switchBus(studentProfile.busNo);
  } else {
    setTimeout(() => openModal("authModal"), 600);
  }
} catch (err) {}

setPill("sim", "Simulator");
renderMapForActiveBus();
simTick();