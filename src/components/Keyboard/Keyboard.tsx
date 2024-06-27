import Key from './Key';

const Keyboard = () => {
  const keys = Array.from(Array(9));

  return (
    <div className="w-full flex flex-row justify-around text-3xl text-cell-editable font-medium mt-2">
      {keys.map((_, i) => <Key key={i} value={i + 1} />)}
    </div>
  );
};

export default Keyboard;
