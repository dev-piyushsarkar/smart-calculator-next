"use client";

import { Divide, MinusIcon, PlusIcon, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./shadcnui/select";

const SmartCalculator = () => {
	const [inputOne, setInputOne] = useState("");
	const [inputTwo, setInputTwo] = useState("");
	const [value, setFinalValue] = useState("");
	const [operator, setOperator] = useState("");

	const logicHandel = () => {
		if (inputOne !== "" && inputTwo !== "" && operator !== "") {
			const inone = parseInt(inputOne);
			const intwo = parseInt(inputTwo);

			switch (operator) {
				case "plus":
					setFinalValue((inone + intwo).toString());
					break;
				case "minus":
					setFinalValue((inone - intwo).toString());
					break;
				case "multiply":
					setFinalValue((inone * intwo).toString());
					break;
				case "divide":
					setFinalValue((inone / intwo).toString());
					break;
			}
		}
		setInputOne("");
		setInputTwo("");
		setOperator("");
	};
	const clearAll = () => {
		setInputOne("");
		setInputTwo("");
		setOperator("");
		setFinalValue("");
	};

	return (
		<section className="grid grid-cols-3 gap-5">
			<Input
				type="number"
				placeholder="Number 1"
				onChange={({ target }) => setInputOne(target.value)}
				value={inputOne}
			/>
			<Select onValueChange={(i) => setOperator(i)}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Operators">Operators</SelectValue>
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="plus">
						<PlusIcon />
					</SelectItem>
					<SelectItem value="minus">
						<MinusIcon />
					</SelectItem>
					<SelectItem value="multiply">
						<X />
					</SelectItem>
					<SelectItem value="divide">
						<Divide />
					</SelectItem>
				</SelectContent>
			</Select>
			<Input
				type="number"
				onChange={(e) => setInputTwo(e.target.value)}
				placeholder="Number 2"
			/>
			<Input
				value={value}
				disabled
				placeholder="Total"
				className="col-span-2"
			/>
			<Button
				disabled={inputOne === "" && inputTwo === "" && operator === ""}
				onClick={logicHandel}
				className="cursor-pointer">
				Calculate
			</Button>
			<Button
				disabled={inputOne === "" && inputTwo === "" && operator === ""}
				onClick={clearAll}
				className="col-span-3 cursor-pointer bg-red-500 text-white hover:bg-green-400">
				Reset
			</Button>
		</section>
	);
};

export default SmartCalculator;
