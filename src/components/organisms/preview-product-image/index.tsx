import React, { useState } from 'react';

import Image from 'src/components/atoms/image';

import { PreviewContainer, Wrapper } from './styles';
import { emptyImage } from 'src/assets/images';

interface PreviewProductImageProps {
  images: string[];
}

const PreviewProductImage = ({ images }: PreviewProductImageProps) => {
  const [previewSelected, setPreviewSelected] = useState(0);

  return (
    <PreviewContainer>
      <div className='image-list'>
        {images
          ? images.map((image, index) => (
              <Wrapper
                key={`image-${index}`}
                selected={index === previewSelected}
                onMouseEnter={() => setPreviewSelected(index)}
              >
                <Image
                  src={image}
                  alt={`image-${index}`}
                  height={40}
                  width={40}
                />
              </Wrapper>
            ))
          : 'loading'}
      </div>
      <div>
        <Image
          src={images ? images[previewSelected] : emptyImage}
          alt={`image-[0]`}
          height={300}
          width={300}
        />
      </div>
    </PreviewContainer>
  );
};

export default PreviewProductImage;
