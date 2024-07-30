import Link from "next/link";

export default function Head() {
  return (
    <div className="flex justify-around items-center  w-[95%] h-[100px] bg-gray-200">
      <div className="bg-gray-300 flex-col items-start justify-center flex h-[50px] cursor-pointer rounded-[8px]  w-[17%]">
        Logo
      </div>
      <Link href={"./components/Campus-introduction"}>
        <div className="flex flex-col items-start justify-center  h-[50px] cursor-pointer rounded-[8px]  w-[17%] ">
          <span className="text-gray-100 text-[14px]">Хотхоны</span>
          <span className="">Давуу тал</span>
        </div>
      </Link>
      <Link href={"./components/Organization"}>
        <div className=" flex-col items-start  justify-center flex h-[50px] cursor-pointer rounded-[8px]  w-[17% ]">
          <span className="text-gray-100 text-[14px]">Ерөнхий</span>
          <span className="">төлөвлөлт</span>
        </div>
      </Link>
      <Link href={"./components/Room-options"}>
        <div className=" flex-col items-start  justify-center flex h-[50px] cursor-pointer rounded-[8px]  w-[17% ]">
          <span className="text-gray-100 text-[14px]">Өрөөний</span>
          <span className="">сонголтууд</span>
        </div>
      </Link>
      <Link href={"./components/Sales-department"}>
        <div className=" flex-col items-start  justify-center flex h-[50px] cursor-pointer rounded-[8px]  w-[17% ]">
          <span className="text-gray-100 text-[14px]">Борлуулалтын</span>
          <span className="">алба</span>
        </div>
      </Link>
      <div className="bg-gray-300 flex-col items-start justify-center flex h-[50px] cursor-pointer rounded-[8px]  w-[17%]">
        99028653
      </div>
    </div>
  );
}
