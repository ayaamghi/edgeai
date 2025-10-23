import { useState, useRef } from 'react';

export default function UploadDropzone({ onFileSelected, accept = 'image/jpeg,image/jpg,image/png,image/webp' }) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const validateFile = (file) => {
    const acceptedTypes = accept.split(',').map(t => t.trim());
    return acceptedTypes.includes(file.type);
  };

  const handleFile = (file) => {
    if (!validateFile(file)) {
      alert('Invalid file type. Please upload a JPG, JPEG, PNG, or WebP image.');
      return;
    }
    onFileSelected(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
      className={`
        relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer
        transition-all duration-200
        ${isDragging
          ? 'border-brand bg-brand/5 dark:bg-brand/10'
          : 'border-gray-300 dark:border-gray-600 hover:border-brand hover:bg-gray-50 dark:hover:bg-gray-800'
        }
      `}
      role="button"
      tabIndex={0}
      aria-label="Upload image dropzone"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileInput}
        className="hidden"
        aria-label="File input"
      />

      <div className="flex flex-col items-center gap-3">
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>

        <div>
          <p className="text-base font-medium text-gray-700 dark:text-gray-300">
            Drop your image here, or <span className="text-brand">browse</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Supports JPG, JPEG, PNG, and WebP
          </p>
        </div>
      </div>
    </div>
  );
}
