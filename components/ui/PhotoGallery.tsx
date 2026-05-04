import Image from 'next/image';

interface PhotoGalleryProps {
  images: string[];
  columns?: 2 | 3 | 4;
  altPrefix?: string;
}

export default function PhotoGallery({ images, columns = 4, altPrefix = 'Cabinet dentaire Dr MEZGUELDI' }: PhotoGalleryProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4'
  };

  return (
    <div className={`max-w-5xl mx-auto grid ${gridCols[columns]} gap-4`}>
      {images.map((image, index) => (
        <div 
          key={index}
          className="relative aspect-square overflow-hidden rounded-lg shadow-md group cursor-pointer"
        >
          <Image
            src={`/images/${image}`}
            alt={`${altPrefix} - photo ${index + 1}`}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
}