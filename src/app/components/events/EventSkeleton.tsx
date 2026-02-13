const EventSkeleton: React.FC = () => {
  return (
    <>
      {/* Day title skeleton */}
      <div className="flex items-start relative self-stretch w-full flex-[0_0_auto] animate-pulse">
        <div className="h-5 w-48 bg-gray-200 rounded" />
      </div>

      {/* Day carousel skeleton */}
      <div className="self-stretch w-full relative bg-neutral-50 rounded-lg p-4 animate-pulse">
        <div className="flex justify-between w-full items-center gap-2">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className="w-14 h-16 shrink-0 rounded-lg bg-gray-200"
            />
          ))}
        </div>
      </div>

      {/* Event card skeleton */}
      <div className="flex-1 min-h-0 w-full flex flex-col gap-4 animate-pulse">
        <div className="relative w-full h-52 shrink-0 bg-gray-200 rounded-[9.77px]" />
        <div className="flex flex-col gap-2">
          <div className="h-4 w-3/4 bg-gray-200 rounded" />
          <div className="h-3 w-32 bg-gray-200 rounded" />
          <div className="h-12 w-full bg-gray-200 rounded" />
        </div>
      </div>
    </>
  )
}

export default EventSkeleton
