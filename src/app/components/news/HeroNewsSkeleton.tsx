const HeroNewsSkeleton: React.FC = () => {
  return (
    <section className="w-full mx-auto py-8 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* TOP ROW */}

        {/* Top Left: 2 Small Items Skeleton */}
        <div className="lg:col-span-4 flex flex-col gap-6 justify-start">
          {[...Array(2)].map((_, i) => (
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

        {/* Top Right: Large Hero Image Skeleton */}
        <div className="lg:col-span-8 relative lg:h-[470px] lg:min-h-0 rounded-2xl overflow-hidden bg-gray-200" />

        {/* BOTTOM ROW */}

        {/* 3 Medium Items Skeleton */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="lg:col-span-4">
            <div className="flex flex-col gap-4">
              <div className="relative w-full aspect-16/10 rounded-xl bg-gray-200" />
              <div className="flex flex-col gap-2">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-12 w-full bg-gray-200 rounded" />
                <div className="h-3 w-20 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HeroNewsSkeleton
