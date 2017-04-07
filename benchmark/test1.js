"use strict";

let Benchmarkify = require("benchmarkify");
let benchmark = new Benchmarkify("Simple example").printHeader();

let bench1 = benchmark.createSuite({ name: "String concatenate" });

let main = require("../index");

const ITERATION = 1000;
bench1.add("Concat with '+'", () => {
	return main.concatV1(ITERATION);
});

bench1.ref("Concat with array & join", () => {
	return main.concatV2(ITERATION);
});

let bench2 = benchmark.createSuite({ name: "Increment integer"});

let i1 = 0;
bench2.add("Increment with ++", () => {
	i1++;
});

let i2 = 0;
bench2.skip("Increment with +=", () => {
	i2 += 1;
});

let i3 = 0;
bench2.add("Increment with = i + 1", () => {
	i3 = i3 + 1;
});

module.exports = benchmark.run([bench1, bench2]);