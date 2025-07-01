"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  let path = "";

  return (
    <nav className="text-sm text-gray-600 my-10">
      <ol className="flex gap-2 justify-center text-2xl">
        <li>
          <Link href="/" className="text-[#FF9933] hover:underline">Home</Link>
        </li>
        {segments.map((segment, index) => {
            console.log(segment)
          path += `/${segment}`;
          const isLast = index === segments.length - 1;

          return (
            <li key={path} className="flex items-center gap-2">
              <span>/</span>
              {isLast ? (
                <span className="text-gray-500 capitalize">{segment}</span>
              ) : (
                <Link href={path} className="text-blue-600 hover:underline capitalize">
                  {segment}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
