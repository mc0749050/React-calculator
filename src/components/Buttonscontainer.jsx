function Buttonscontainer({ outputbtn }) {
  const buttontextvalue = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    ".",
    "=",
    "/",
    "C",
  ];
  return (
    <div className="flex flex-wrap justify-center mt-[50px]">
      {buttontextvalue.map((item) => (
        <button
          className="text-[30px] w-[60px] h-[60px] rounded-[50%] m-2 bg-red-300 active:bg-green-400"
          onClick={() => outputbtn(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
export default Buttonscontainer;
