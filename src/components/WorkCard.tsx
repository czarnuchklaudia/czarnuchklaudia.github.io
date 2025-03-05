import { useState } from 'react';
import { Modal } from './Modal';

interface WorkCardProps {
  title: string;
  description: string;
  imageUrl: string | string[];
  category: string;
}

const isValidUrl = (text: string) => {
  try {
    new URL(text);
    return true;
  } catch (_) {
    return false;
  }
};

export function WorkCard({ title, description, imageUrl, category }: WorkCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Array.isArray(imageUrl) ? imageUrl : [imageUrl];
  const hasMultipleImages = images.length > 1;

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = () => {
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  return (
      <>
        <div
            className="group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 shadow-xl"
            onClick={openModal}
        >
          <div className="relative w-full h-64 overflow-visible">
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`${title} ${index + 1}`}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                        hasMultipleImages && index > 0
                            ? `absolute opacity-0`
                            : ''
                    }`}
                    style={{
                      zIndex: hasMultipleImages ? 10 + index : 10,
                    }}
                />
            ))}
            {hasMultipleImages && (
                <div
                    className="absolute top-2 right-2 bg-stone-700 bg-opacity-60 text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center"
                >
                  {images.length}
                </div>
            )}
          </div>
          <div
              className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center"
              style={{ zIndex: 20 }}
          >
            <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm mt-2">{category}</p>
            </div>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="p-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-6">
              <img
                  src={images[currentImageIndex]}
                  alt={`${title} ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain bg-gray-100"
              />
              {hasMultipleImages && (
                  <>
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                    >
                      ‹
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                    >
                      ›
                    </button>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 p-2 bg-black bg-opacity-50 rounded-full">
                      <div className="flex space-x-2">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`w-2 h-2 rounded-full ${
                                    index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                                }`}
                            />
                        ))}
                      </div>
                    </div>
                  </>
              )}
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
            {isValidUrl(description) ? (
                <a
                    href={description}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline mt-2 block"
                >
                  Otwórz link
                </a>
            ) : (
                <p className="text-gray-600 mt-2">{description}</p>
            )}
            <p className="text-sm text-gray-500 mt-4">{category}</p>
          </div>
        </Modal>
      </>
  );
}