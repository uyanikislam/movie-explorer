'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  console.log(genre, "genre");

  const tabs = [
    {
      name: "Popüler",
      url: "popular",
    },
    {
      name: "Yeniler",
      url: "latest",
    },
    {
      name: "Yakında",
      url: "upcoming",
    },
  ];

  return (
    <div className="p-5 m-5 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7">
      {tabs.map((tab, i) => (
        <Link
          key={i}
          className={`cursor-pointer hover:opacity-75 transition-opacity ${
            tab.url === genre ? "underline underline-offset-8 text-amber-600" : ""
          }`}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default function TabsWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Tabs />
    </Suspense>
  );
}
