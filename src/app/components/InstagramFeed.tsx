'use client' // Importante: Taggbox necesita ejecutarse en el cliente

export default function InstagramFeed() {
  return (
    <div className="w-full h-full min-h-[500px]">
      {/* 1. El contenedor con tus IDs específicos */}
      <div
        className="taggbox"
        style={{ width: '100%', height: '100%', overflow: 'auto' }}
        data-widget-id="311631"
        data-website="1"
      ></div>

      {/* 2. Carga del script usando el componente de Next.js */}
      {/* <Script
        src="https://widget.taggbox.com/embed.min.js"
        type="text/javascript"
        strategy="afterInteractive"
      /> */}
    </div>
  )
}
