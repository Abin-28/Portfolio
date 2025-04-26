import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

/**
 * This file helps us check if our website is fast and works well.
 * It measures 5 important things:
 * 
 * 1. CLS (Layout Shifts):
 *    - Checks if things on the page jump around while loading
 *    - Like when you're about to click a button and it suddenly moves
 *    Example: You're reading an article and suddenly all the text jumps down
 *    because an ad loaded at the top. That's bad CLS.
 * 
 * 2. INP (How Fast Buttons Work):
 *    - Measures how quickly buttons and links respond when you click them
 *    - Like how fast a menu opens when you click it
 *    Example: You click a "Submit" button and it takes 2 seconds to respond.
 *    That's bad INP. It should respond instantly.
 * 
 * 3. FCP (First Thing You See):
 *    - Measures how fast the first thing appears on the screen
 *    - Like when the page starts to show up
 *    Example: You open a website and it shows a blank white screen for 5 seconds
 *    before anything appears. That's bad FCP.
 * 
 * 4. LCP (Biggest Thing on Page):
 *    - Measures how fast the main content appears
 *    - Like when the main image or text block shows up
 *    Example: You open a product page and the main product image takes 10 seconds
 *    to load. That's bad LCP.
 * 
 * 5. TTFB (Server Speed):
 *    - Measures how fast the server responds
 *    - Like how long it takes to start loading the page
 *    Example: You click a link and nothing happens for 3 seconds before the page
 *    starts loading. That's bad TTFB.
 * 
 * We only check these in development mode (when you're building the website)
 * to help make the website faster and better.
 * 
 * Good website = Fast loading + No jumping content + Quick responses
 */
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onINP(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals; 