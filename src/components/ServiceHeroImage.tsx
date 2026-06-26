interface ServiceHeroImageProps {
  src: string;
  alt: string;
}

export function ServiceHeroImage({ src, alt }: ServiceHeroImageProps) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[var(--radius--radius-xxl)] bg-[var(--neutral--neutral-grey-200)] max-[991px]:max-w-[28rem] max-[991px]:mx-auto">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-contain"
        sizes="(max-width: 991px) 100vw, 50vw"
      />
    </div>
  );
}
