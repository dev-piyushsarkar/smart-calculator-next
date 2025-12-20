"use client";

import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";

const BasicCalculator = () => {
	const [inputOne, setInputOne] = useState("");
	const [inputTwo, setInputTwo] = useState("");
	const [value, setValue] = useState("");

	const add = () => {
		if (inputOne !== "" && inputTwo !== "") {
			const total = parseInt(inputOne) + parseInt(inputTwo);
			setValue(total.toString());
		}

		setInputOne("");
		setInputTwo("");
	};
	const minus = () => {
		if (inputOne !== "" && inputTwo !== "") {
			const total = parseInt(inputOne) - parseInt(inputTwo);
			setValue(total.toString());
		}
		setInputOne("");
		setInputTwo("");
	};

	const multiply = () => {
		if (inputOne !== "" && inputTwo !== "") {
			const total = parseInt(inputOne) * parseInt(inputTwo);
			setValue(total.toString());
		}
		setInputOne("");
		setInputTwo("");
	};
	const divide = () => {
		if (inputOne !== "" && inputTwo !== "") {
			const total = parseInt(inputOne) * parseInt(inputTwo);
			setValue(total.toString());
		}
		setInputOne("");
		setInputTwo("");
	};

	const refresh = () => {
		setInputOne("");
		setInputTwo("");
		setValue("");
	};
	return (
		<section className="grid grid-cols-4 gap-3">
			<Input
				value={inputOne}
				onChange={(i) => setInputOne(i.target.value)}
				type="number"
				className="col-span-2"
				placeholder="Number 1"
			/>
			<Input
				value={inputTwo}
				onChange={(i) => setInputTwo(i.target.value)}
				type="number"
				className="col-span-2"
				placeholder="Number 2"
			/>
			<Input
				value={value}
				disabled
				className="col-span-4"
				placeholder="Total"
			/>
			<Button
				disabled={inputOne === "" || inputTwo === ""}
				onClick={add}
				className="cursor-pointer">
				Add
			</Button>
			<Button
				disabled={inputOne === "" || inputTwo === ""}
				onClick={minus}
				className="cursor-pointer">
				Subtract
			</Button>
			<Button
				onClick={multiply}
				disabled={inputOne === "" || inputTwo === ""}
				className="cursor-pointer">
				Multiply
			</Button>
			<Button
				disabled={inputOne === "" || inputTwo === ""}
				onClick={divide}
				className="cursor-pointer">
				Divide
			</Button>
			<Button
				disabled={inputOne === "" && inputTwo === "" && value === ""}
				onClick={refresh}
				className="col-span-4 cursor-pointer bg-red-500 text-white hover:bg-green-400">
				Reset
			</Button>
		</section>
	);
};

export default BasicCalculator;
