import useSWR from "swr";
import React from "react";

const fetcher = async (input: RequestInfo, init?: RequestInit) => {
	const res = await fetch(input, init);
	return res.json();
};

export default function App() {
	const { data, error } = useSWR(
		"https://api.github.com/repos/vercel/swr",
		fetcher
	);

	if (error) return "An error has occurred.";
	if (!data) return "Loading...";
	return (
		<div>
			<h1>{data.name}</h1>
			<p>{data.description}</p>
			<strong>👁 {data.subscribers_count}</strong>{" "}
			<strong>✨ {data.stargazers_count}</strong>{" "}
			<strong>🍴 {data.forks_count}</strong>
		</div>
	);
}
