"use client";

import Link from "next/link";
import React from "react";
import { BreadcrumbData } from "../lib/interface";
import { usePathname } from "next/navigation";

const Breadcrumb: React.FC<BreadcrumbData> = ({ title }) => {
  const pathname = usePathname();

  return (
    <div className="hidden sm:block text-sm text-gray-600 dark:text-gray-300 breadcrumbs mt-5">
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href={pathname} className="truncate-length">
            {title.toUpperCase()}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
