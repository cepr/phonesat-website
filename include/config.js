// Default ground station
qth = new qth_t();
qth.lat=37.9235381;
qth.lon=-75.4766902;
qth.alt=0;

// Number of positions to compute
var COUNT = 300;

// Interval in ms between positions to compute
var STEP = 60*1000;

var SAT_CFG_INT_PRED_RESOLUTION = 10;
var SAT_CFG_INT_PRED_NUM_ENTRIES = 20;
var SAT_CFG_INT_PRED_MIN_EL = 5;
// Color saturation between 0 and 1
var SAT_CFG_COLOR_SATURATION = 0.7;
// Color value between 0 and 255
var SAT_CFG_COLOR_VALUE = 255;

var SATELLITES = [
	// TechEdSat 6
	{
		id: 43026,
		freq: 2.457
	}
];
