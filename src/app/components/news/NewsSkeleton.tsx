const NewsSkeleton: React.FC = () => {
  return (
    <div className="w-full h-full flex bg-white rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)]">
      <div className="w-full h-auto mx-4 py-4 flex-col items-start gap-7 flex relative">
        {/* Main News Skeleton */}
        <div className="flex flex-col md:flex-row w-full min-h-[300px] items-center gap-[25px] relative animate-pulse">
          <div className="relative w-full md:w-1/2 h-[300px] rounded-[7.1px] overflow-hidden shrink-0 bg-gray-200" />
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-6 w-full bg-gray-200 rounded" />
            <div className="h-4 w-32 bg-gray-200 rounded" />
            <div className="h-20 w-full bg-gray-200 rounded" />
            <div className="h-4 w-20 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Grid News Skeleton */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-full flex flex-col sm:flex-row justify-start items-center gap-4 animate-pulse"
            >
              <div className="relative w-full sm:w-[112px] h-[112px] shrink-0 bg-gray-200 rounded-[9.77px]" />
              <div className="w-full min-h-24 flex flex-col justify-start items-start gap-2">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-3 w-24 bg-gray-200 rounded" />
                <div className="h-12 w-full bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsSkeleton
