function Display({ displayvalue }) {
  return (
    <>
      <input
        type="text"
        className="w-[90%]  p-1 text-[35px] text-white bg-transparent ml-[5%] font-[200] font-sans mt-[100px] text-right"
        readOnly
        value={displayvalue}
      ></input>
    </>
  );
}

export default Display;
