"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/locaters-api", label: "Locaters" },
  { href: "/about-us", label: "about-us" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-4 p-4 w-full items-center text-white rounded-md border-gray-200 border-2 ">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`${pathname === route.href ? "bg-blue-500" : "bg-gray-500"} px-3 py-2 rounded-md`}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
