import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaSearchPlus, FaSearchMinus } from 'react-icons/fa';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure worker with proper CDN URL
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ isOpen, onClose, pdfPath, title = "PDF Preview" }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Handle window resize and set initial scale
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Set initial scale based on screen size
    if (windowWidth <= 640) { // Mobile
      setScale(0.6);
    } else if (windowWidth <= 768) { // Tablet
      setScale(0.8);
    } else {
      setScale(1.0); // Desktop
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2 sm:p-4"
        style={{ zIndex: 9999 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg shadow-2xl w-full max-w-[95vw] sm:max-w-4xl max-h-[90vh] sm:max-h-[80vh] overflow-hidden flex flex-col"
          style={{ zIndex: 10000 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-2 sm:p-3 border-b bg-purple-50 flex-shrink-0">
            <div className="flex items-center space-x-2">
              <h3 className="text-base sm:text-lg font-semibold text-purple-600">{title}</h3>
              <span className="text-xs sm:text-sm text-purple-500">
                Page {pageNumber} of {numPages} | Scale: {Math.round(scale * 100)}%
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-purple-500 hover:text-purple-700 p-1"
            >
              <FaTimes className="text-base sm:text-lg" />
            </button>
          </div>

          {/* PDF Controls */}
          <div className="flex items-center justify-end p-1.5 sm:p-2 bg-purple-50 flex-shrink-0">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                onClick={() => setScale(Math.max(0.4, scale - 0.1))}
                disabled={scale <= 0.4}
                className="p-1 sm:p-1.5 rounded hover:bg-purple-100 disabled:opacity-50 text-purple-600"
              >
                <FaSearchMinus className="text-xs sm:text-sm" />
              </button>
              <button
                onClick={() => setScale(Math.min(2, scale + 0.1))}
                disabled={scale >= 2}
                className="p-1 sm:p-1.5 rounded hover:bg-purple-100 disabled:opacity-50 text-purple-600"
              >
                <FaSearchPlus className="text-xs sm:text-sm" />
              </button>
            </div>
          </div>
          
          {/* PDF Content */}
          <div className="flex-1 overflow-auto p-2 sm:p-3 bg-purple-50 min-h-0 pdf-viewer-scrollbar">
            <div className="flex justify-center min-w-fit">
              <Document
                file={`/Portfolio/${pdfPath}`}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="text-center py-2 sm:py-4">
                    <div className="animate-pulse text-purple-600 text-sm sm:text-base">Loading PDF...</div>
                  </div>
                }
                transformGetDocumentParams={(params) => ({
                  ...params,
                  isEvalSupported: false
                })}
              >
                <Page
                  pageNumber={pageNumber}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  scale={scale}
                  loading={
                    <div className="text-center py-2 sm:py-4">
                      <div className="animate-pulse text-purple-600 text-sm sm:text-base">Loading page...</div>
                    </div>
                  }
                  className="shadow-lg"
                />
              </Document>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default PDFViewer; 