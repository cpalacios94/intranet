const NewsMainSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 w-full animate-pulse">
      {/* Left Column: Featured + Bottom Grid */}
      <div className="w-full xl:w-2/3 flex flex-col gap-8">
        {/* Featured Section Skeleton */}
        <div className="w-full flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 h-[300px] bg-gray-200 rounded-lg" />
          <div className="w-full md:w-1/2 flex flex-col gap-4 py-2">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-6 w-full bg-gray-200 rounded" />
            <div className="h-4 w-32 bg-gray-200 rounded" />
            <div className="h-20 w-full bg-gray-200 rounded" />
            <div className="h-4 w-20 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Bottom Section Skeleton: 2x2 Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-full flex gap-4">
              <div className="w-24 h-24 bg-gray-200 rounded-lg shrink-0" />
              <div className="flex flex-col gap-2 flex-1">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-3 w-24 bg-gray-200 rounded" />
                <div className="h-10 w-full bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Sidebar Skeleton */}
      <div className="w-full xl:w-1/3 flex flex-col gap-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-full flex gap-4">
            <div className="w-24 h-24 bg-gray-200 rounded-lg shrink-0" />
            <div className="flex flex-col gap-2 flex-1">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-3 w-24 bg-gray-200 rounded" />
              <div className="h-10 w-full bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsMainSkeleton
