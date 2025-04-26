import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const ProgrammerVector = ({ className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showText, setShowText] = useState(false);

  const codeLines = useMemo(() => [
    "const developer = {",
    "  name : \"Abin Skaria\",",
    "  skills : [\"AI/ML\", \"Full Stack\"],",
    "  languages : [\"Python\", \"JavaScript\", \"Java\", \"C\", \"SQL\"],",
    "  passion : \"Building the future\"",
    "};"
  ], []);

  useEffect(() => {
    if (!isTyping) return;

    const currentText = codeLines[currentLine];
    const currentLength = displayedText.length;

    if (currentLength < currentText.length) {
      const timer = window.setTimeout(() => {
        setDisplayedText(currentText.substring(0, currentLength + 1));
      }, 50);
      return () => window.clearTimeout(timer);
    } else {
      const timer = window.setTimeout(() => {
        if (currentLine < codeLines.length - 1) {
          setCurrentLine(currentLine + 1);
          setDisplayedText('');
        } else {
          setTimeout(() => {
            setIsTyping(false);
            setCurrentLine(0);
            setDisplayedText('');
            setIsTyping(true);
          }, 3000);
        }
      }, 500);
      return () => window.clearTimeout(timer);
    }
  }, [displayedText, currentLine, isTyping, codeLines]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (showText) {
      const timer = window.setTimeout(() => {
        setShowText(false);
      }, 3000);

      return () => {
        window.clearTimeout(timer);
      };
    }
  }, [showText]);

  const getTextColor = (line) => {
    if (line.includes('const')) return '#569CD6'; // Blue for keywords
    if (line.includes('"')) return '#CE9178'; // Orange for strings
    if (line.includes('{') || line.includes('}')) return '#569CD6'; // blue for arrays
    return '#4f46e5'; // Default color
  };

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.svg
        width="1200"
        height="600"
        viewBox="0 0 1200 600"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Mac Window */}
        <motion.rect
          x="50"
          y="50"
          width="1000"
          height="500"
          rx="10"
          fill="#1e1e1e"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Window Controls */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <circle cx="80" cy="70" r="8" fill="#ff5f56" />
          <circle cx="110" cy="70" r="8" fill="#ffbd2e" />
          <circle cx="140" cy="70" r="8" fill="#27c93f" />
        </motion.g>

        {/* Code Lines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {codeLines.slice(0, currentLine).map((line, i) => (
            <text
              key={i}
              x="70"
              y={150 + i * 60}
              fill={getTextColor(line, i)}
              fontFamily="monospace"
              fontSize="28"
              className="font-medium"
            >
              {line}
            </text>
          ))}
          {isTyping && (
            <>
              <text
                x="70"
                y={150 + currentLine * 60}
                fill={getTextColor(codeLines[currentLine], currentLine)}
                fontFamily="monospace"
                fontSize="28"
                className="font-medium"
              >
                {displayedText}
              </text>
              <rect
                x={Math.min(70 + displayedText.length * 16.5, 1000)}
                y={150 + currentLine * 60 - 20}
                width="2"
                height="35"
                fill={getTextColor(codeLines[currentLine], currentLine)}
                className="animate-pulse"
              />
            </>
          )}
        </motion.g>
      </motion.svg>
    </motion.div>
  );
};

export default ProgrammerVector; 