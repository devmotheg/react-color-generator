/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import Color from "color";

export const getShades = (colors: string[], color: string) => {
	const shades: string[] = [];
	try {
		for (let i = 10; i >= 0; i--) {
			const shade = Color(color)
				.lightness(10 * i)
				.hex();
			shades.push(shade);
		}
		return shades;
	} catch (err) {
		alert("Invalid CSS color format!");
		return colors;
	}
};
