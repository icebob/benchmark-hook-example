"use strict";

let Benchmarkify = require("benchmarkify");
let benchmark = new Benchmarkify("Simple example").printHeader();

let bench = benchmark.createSuite({ name: "String concatenate" });

let main = require("../index");

const ITERATION = 1000;
bench.add("Concat with '+'", () => {
	return main.concatV1(ITERATION);
});

bench.add("Concat with array & join", () => {
	return main.concatV2(ITERATION);
});

module.exports = benchmark.run([bench]);