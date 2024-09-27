import { ReactNode } from "react";

const Authlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" flex flex-col items-center justify-between px-6 py-8 mx-auto h-fit">
      <div className="w-full  bg-white rounded-lg shadow-md mt-0 max-w-md">
        {children}
      </div>
    </div>
  );
};

export default Authlayout;
