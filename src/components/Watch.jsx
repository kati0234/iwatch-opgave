import Image from "next/image";
const Watch = ({ img, alt, bgcolor }) => {
  return (
    <article className="grid grid-cols-1 w-fit grid-rows-4">
      <div className="grid grid-columns-subgrid col-span-full row-span-full">
        <div className=" max-w-24 row-start-1 row-end-4 col-span-full z-10 justify-self-center">
          <Image src={img} alt={alt} layout="responsive" objectFit="contain" />
        </div>
        <div
          className={`w-28 h-[4.5rem] ${bgcolor}   opacity-60   row-start-2 row-end-5 col-start-1 rounded-lg`}
        ></div>
        {/* <div className="`row-start-2 row-span-2  ${bgcolor}  max-w-[400px]  w-full h-full`"></div> */}
      </div>
    </article>
  );
};

export default Watch;
