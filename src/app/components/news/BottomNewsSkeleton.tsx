const BottomNewsSkeleton: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col lg:flex-row min-h-[400px] animate-pulse">
      {/* Left Side - Image Skeleton */}
      <div className="relative w-full lg:w-3/4 h-[600px] lg:min-h-full bg-gray-200">
        {/* Overlay Content Skeleton */}
        <div className="absolute inset-y-0 left-0 p-8 w-full md:w-1/3 flex flex-col justify-center gap-6 bg-gray-300/60">
          <div className="h-8 w-3/4 bg-gray-400/40 rounded" />
          <div className="h-6 w-full bg-gray-400/40 rounded" />
          <div className="h-5 w-28 bg-gray-400/40 rounded" />
        </div>
      </div>

      {/* Right Side - Content Skeleton */}
      <div className="w-full lg:w-1/4 p-8 lg:p-12 flex flex-col justify-center items-start gap-6 bg-white">
        <div className="h-3 w-20 bg-gray-200 rounded" />
        <div className="h-7 w-full bg-gray-200 rounded" />
        <div className="h-4 w-28 bg-gray-200 rounded" />
        <div className="space-y-2 w-full">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-3/4 bg-gray-200 rounded" />
        </div>
        <div className="h-4 w-24 bg-gray-200 rounded" />
      </div>
    </div>
  )
}

export default BottomNewsSkeleton
