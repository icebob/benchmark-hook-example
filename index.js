"use strict";

console.log("Hello World!");

module.exports = {
	concatV1(ITERATION) {
		let s = "";
		for(let i = 0; i < ITERATION; i++)
			s += "test" + i;
		return s;	
	},

	concatV2(ITERATION) {
		let s = [];
		for(let i = 0; i < ITERATION; i++)
			s.push("test" + i);
		return s.join();
	}
}