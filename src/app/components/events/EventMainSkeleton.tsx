const EventMainSkeleton: React.FC = () => {
  return (
    <div className="mt-[22.3px] w-full h-auto px-4 flex-col items-start gap-7 flex relative animate-pulse">
      {/* Month carousel skeleton */}
      <div className="w-full flex justify-center gap-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-10 w-20 bg-gray-200 rounded-full" />
        ))}
      </div>

      {/* Search input skeleton */}
      <div className="w-full">
        <div className="w-full h-11 bg-gray-200 rounded-lg" />
      </div>

      {/* Day carousel skeleton */}
      <div className="self-stretch w-full relative bg-neutral-50 rounded-lg p-4">
        <div className="flex justify-between w-full items-center gap-2">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-14 h-16 shrink-0 rounded-lg bg-gray-200"
            />
          ))}
        </div>
      </div>

      {/* Header title skeleton */}
      <div className="flex gap-2">
        <div className="h-6 w-24 bg-gray-200 rounded" />
        <div className="h-6 w-32 bg-gray-300 rounded" />
      </div>

      {/* Event cards grid skeleton */}
      <div className="w-full grid grid-cols-3 gap-x-[15px] gap-y-[30px] pr-4 pb-10">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="w-full h-64 bg-gray-200 rounded-[9.77px]" />
            <div className="flex flex-col gap-2">
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
              <div className="h-3 w-32 bg-gray-200 rounded" />
              <div className="h-3 w-40 bg-gray-200 rounded" />
              <div className="h-12 w-full bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventMainSkeleton
