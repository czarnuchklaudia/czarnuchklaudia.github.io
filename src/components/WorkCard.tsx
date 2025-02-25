import { useState } from 'react';
import { Modal } from './Modal';

interface WorkCardProps {
  title: string;
  description: string;
  imageUrl: string;
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

  return (
      <>
        <div
            className="group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => setIsModalOpen(true)}
        >
          <img
              src={imageUrl}
              alt={title}
              className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
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
                  src={imageUrl}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-contain bg-gray-100"
              />
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