/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useState } from "react";

import Shade from "./Shade";
import { getShades } from "../utils";

const Project = () => {
	const [color, setColor] = useState("");
	const [colors, setColors] = useState<string[]>([]);

	return (
		<>
			<h1 className="relative py-4 mb-12 text-4xl font-bold capitalize after:w-2/4 after:h-1 after:absolute after:bottom-0 after:left-2/4 after:-translate-x-1/2 after:bg-black">
				shades generator
			</h1>
			<div className="max-w-[40rem]">
				<form className="flex items-center gap-4 mx-auto w-fit">
					<label className="text-lg capitalize" htmlFor="color">
						CSS color:
					</label>
					<input
						className="p-1 rounded outline-none appearance-none bg-slate-100"
						type="text"
						id="color"
						value={color}
						spellCheck="false"
						onChange={e => setColor(e.target.value)}
					/>
					<button
						className="p-2 font-bold text-white uppercase bg-black rounded"
						type="submit"
						onClick={e => {
							e.preventDefault();
							setColors(getShades(colors, color));
						}}>
						generate
					</button>
				</form>
				<div className="flex flex-wrap justify-center gap-6 mx-auto mt-8 w-fit">
					{colors.map((c, i) => {
						return <Shade key={i} color={c} ratio={i} />;
					})}
				</div>
			</div>
		</>
	);
};

export default Project;
