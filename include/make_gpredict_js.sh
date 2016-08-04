#!/bin/sh
cat \
	gpredict/orbit_tools.js \
	gpredict/sgp_in.js \
	gpredict/sgp4sdp4.js \
	gpredict/predict-tools.js \
	gpredict/sgp_time.js \
	gpredict/sgp_obs.js \
	gpredict/math.js \
	gpredict/gtk-sat-data.js \
	gpredict/qth-data.js \
	gpredict/sgp_math.js \
	gpredict/predict-tools.js \
> gpredict.js

closure-compiler gpredict.js > gpredict.min.js

