import Key from "./Key";

const Keyboard = () => {
	const keys = Array.from(Array(9));

	return (
		<div className="w-full flex flex-row justify-around text-3xl text-editable-cell font-medium mt-4">
			{keys.map((_, i) => <Key key={i} value={i + 1}  />)}
		</div>
	)
}

export default Keyboard;