"use strict";

let Benchmarkify = require("benchmarkify");
Benchmarkify.printHeader("Simple example");

let bench1 = new Benchmarkify({ async: false, name: "String concatenate"});

const ITERATION = 1000;
bench1.add("Concat with '+'", () => {
	let s = "";
	for(let i = 0; i < ITERATION; i++)
		s += "test" + i;
	return s;
});

bench1.add("Concat with array & join", () => {
	let s = [];
	for(let i = 0; i < ITERATION; i++)
		s.push("test" + i);
	return s.join();
});

let bench2 = new Benchmarkify({ async: false, name: "Increment integer"});

let i1 = 0;
bench2.add("Increment with ++", () => {
	i1++;
});

let i2 = 0;
bench2.add("Increment with +=", () => {
	i2 += 1;
});

let i3 = 0;
bench2.add("Increment with = i + 1", () => {
	i3 = i3 + 1;
});

module.exports = Benchmarkify.run([bench1, bench2])
