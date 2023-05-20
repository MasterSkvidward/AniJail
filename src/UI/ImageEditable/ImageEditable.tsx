import React, {FC, useRef, useState } from 'react';
import { CropperRef, CropperPreviewRef, Cropper, CropperPreview } from 'react-advanced-cropper';

const ImageEditable:FC = () => {
    const previewRef = useRef<CropperPreviewRef>(null);
    const cropperRef = useRef<CropperRef>(null);

    const [src, setSrc] = useState(
        'https://images.unsplash.com/photo-1623432532623-f8f1347d954c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
    );

    const onUpdate = () => {
        previewRef.current?.refresh();
    };

    return (
        <div>
            <Cropper
                ref={cropperRef}
                className="cropper"
                stencilProps={{ aspectRatio: 1 }}
                src={src}
                onUpdate={onUpdate}
            />
            <CropperPreview
                ref={previewRef}
                cropper={cropperRef}
                className="preview"
            />
        </div>
    );
};

export default ImageEditable;