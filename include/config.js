// NASA ARC ground station
// qth = new qth_t();
// qth.lat=37.417352;
// qth.lon=-122.058243;
// qth.alt=0;

// NASA WFF ground station
// qth = new qth_t();
// qth.lat=37.924444;
// qth.lon=-75.476389;
// qth.alt=0;

// UFL ground station
qth = new qth_t();
qth.lat=29.6396946;
qth.lon=-82.3586193;
qth.alt=20;

// Number of positions to compute
var COUNT = 300;

// Interval in ms between positions to compute
var STEP = 60*1000;

var SAT_CFG_INT_PRED_RESOLUTION = 10;
var SAT_CFG_INT_PRED_NUM_ENTRIES = 20;
var SAT_CFG_INT_PRED_MIN_EL = 40;
// Color saturation between 0 and 1
var SAT_CFG_COLOR_SATURATION = 0.7;
// Color value between 0 and 255
var SAT_CFG_COLOR_VALUE = 255;

var SATELLITES = [
	// CHOMPTT
	{
		url: "https://9hr0d59j3k.execute-api.us-west-2.amazonaws.com/default/download_chomptt_tle",
		freq: 0.43756
	},
	// TECHEDSAT 10
	// {
	// 	url: "https://dnticuyeyh.execute-api.us-west-2.amazonaws.com/default/download_techedsat10_tle",
	// 	freq: 2.28
	// }
];
