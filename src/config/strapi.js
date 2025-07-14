/**
 * Strapi API configuration
 * 
 * This file contains configuration settings for connecting to the Strapi CMS.
 * Update these values based on your environment (development, production, etc.)
 */

// Base URL for the Strapi API
export const STRAPI_API_URL = 'http://localhost:1337';

// API endpoints
export const API_ENDPOINTS = {
  BLOG_POSTS: '/api/blog-posts',
};

/**
 * Helper function to build a full Strapi API URL with query parameters
 * 
 * @param {string} endpoint - The API endpoint path
 * @param {Object} queryParams - Query parameters to include
 * @returns {string} The complete URL
 */
export const buildApiUrl = (endpoint, queryParams = {}) => {
  const url = new URL(`${STRAPI_API_URL}${endpoint}`);
  
  // Add query parameters
  Object.keys(queryParams).forEach(key => {
    if (queryParams[key] !== undefined && queryParams[key] !== null) {
      url.searchParams.append(key, queryParams[key]);
    }
  });
  
  return url.toString();
};

/**
 * Helper function to get the full URL for a Strapi media asset
 * 
 * @param {string} mediaUrl - The relative URL of the media asset
 * @returns {string} The complete URL
 */
export const getStrapiMediaUrl = (mediaUrl) => {
  if (!mediaUrl) return null;
  
  // If the URL is already absolute, return it as is
  if (mediaUrl.startsWith('http')) {
    return mediaUrl;
  }
  
  // Otherwise, prepend the Strapi URL
  return `${STRAPI_API_URL}${mediaUrl}`;
};

export default {
  STRAPI_API_URL,
  API_ENDPOINTS,
  buildApiUrl,
  getStrapiMediaUrl,
};
