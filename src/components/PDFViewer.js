import React, { useState } from 'react';
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

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-3 border-b bg-purple-50">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold text-purple-600">{title}</h3>
              <span className="text-sm text-purple-500">Page {pageNumber} of {numPages}</span>
            </div>
            <button
              onClick={onClose}
              className="text-purple-500 hover:text-purple-700"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>

          {/* PDF Controls */}
          <div className="flex items-center justify-end p-2 bg-purple-50">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setScale(Math.max(0.5, scale - 0.1))}
                disabled={scale <= 0.5}
                className="p-1.5 rounded hover:bg-purple-100 disabled:opacity-50 text-purple-600"
              >
                <FaSearchMinus className="text-sm" />
              </button>
              <span className="text-xs text-purple-600">{Math.round(scale * 100)}%</span>
              <button
                onClick={() => setScale(Math.min(2, scale + 0.1))}
                disabled={scale >= 2}
                className="p-1.5 rounded hover:bg-purple-100 disabled:opacity-50 text-purple-600"
              >
                <FaSearchPlus className="text-sm" />
              </button>
            </div>
          </div>
          
          {/* PDF Content */}
          <div className="flex-1 overflow-auto p-3 bg-purple-50">
            <div className="flex justify-center">
              <Document
                file={`/${pdfPath}`}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="text-center py-4">
                    <div className="animate-pulse text-purple-600">Loading PDF...</div>
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  scale={scale}
                  loading={
                    <div className="text-center py-4">
                      <div className="animate-pulse text-purple-600">Loading page...</div>
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
};

export default PDFViewer; 