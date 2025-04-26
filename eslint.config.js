import eslintJs from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier';

export default [
  // Global ignores
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/*.config.js',
      '**/*.config.mjs',
    ],
  },

  // Base ESLint recommended rules
  eslintJs.configs.recommended,

  // React configuration
  {
    files: ['src/**/*.{js,jsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...hooksPlugin.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/prop-types': 'off', // Optional: Remove if you want prop-types validation
      'no-undef': 'off', // Allow global variables like document, setTimeout
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        document: 'readonly',
        window: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
      },
    },
  },
  
  prettierConfig,
]; 