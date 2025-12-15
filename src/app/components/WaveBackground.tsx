export const WaveBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <svg
        className="absolute top-0 left-0 w-full h-[800px]"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0H1440V600C1440 600 1100 800 720 700C340 600 0 800 0 800V0Z"
          fill="#F2E6EA"
        />
      </svg>
    </div>
  )
}
