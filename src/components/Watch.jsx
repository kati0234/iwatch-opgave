import Image from "next/image";
const Watch = ({ img, alt, bgcolor }) => {
  return (
    <div className="grid grid-rows-3  ">
      <div className="  row-span-3 max-w-[300px] max-h-[300px] w-full h-auto">
        <Image src={img} alt={alt} layout="responsive" objectFit="contain" />
      </div>
      <div
        // style={{ backgroundColor: bgg }}
        className="`row-start-2 row-span-2  ${bgcolor}  max-w-[400px]  w-full h-full`"
      >
        {" "}
      </div>
      {/* <div className={`bg-${bgg}`}>{bg} hey</div> */}
    </div>
  );
};

export default Watch;
