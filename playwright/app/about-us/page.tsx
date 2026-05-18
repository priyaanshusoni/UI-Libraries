import React from "react";

import Link from "next/link";

const page = () => {
  return (
    <div className=" flex flex-col gap-5  items-center w-full p-4 text-white font-bold text-lg">
      This is About us page
      <Link href={""}>Home</Link>
    </div>
  );
};

export default page;
