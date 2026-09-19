import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] bg-[#FFF8ED] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8 animate-pulse">
      {/* Top Breadcrumb & Heading Skeleton */}
      <div className="space-y-4 max-w-xl">
        <div className="h-4 w-32 bg-[#EBD8C3] rounded-md" />
        <div className="h-8 sm:h-10 w-3/4 bg-[#E0C7AA] rounded-xl" />
        <div className="h-4 w-full bg-[#EBD8C3] rounded-md" />
        <div className="h-4 w-2/3 bg-[#EBD8C3] rounded-md" />
      </div>

      {/* Filter / Tabs Skeleton */}
      <div className="flex flex-wrap gap-2 pt-2">
        <div className="h-9 w-24 bg-[#E0C7AA] rounded-full" />
        <div className="h-9 w-28 bg-[#EBD8C3] rounded-full" />
        <div className="h-9 w-24 bg-[#EBD8C3] rounded-full" />
        <div className="h-9 w-32 bg-[#EBD8C3] rounded-full" />
      </div>

      {/* Grid of Card Skeletons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 pt-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="rounded-3xl bg-white/70 border border-[#D99A45]/20 p-4 space-y-4 shadow-sm"
          >
            <div className="w-full aspect-square bg-[#EBD8C3] rounded-2xl" />
            <div className="space-y-2">
              <div className="h-4 w-3/4 bg-[#E0C7AA] rounded-md" />
              <div className="h-3 w-full bg-[#EBD8C3] rounded-md" />
              <div className="h-3 w-5/6 bg-[#EBD8C3] rounded-md" />
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#D99A45]/15">
              <div className="h-5 w-16 bg-[#E0C7AA] rounded-md" />
              <div className="h-8 w-20 bg-[#E0C7AA] rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
