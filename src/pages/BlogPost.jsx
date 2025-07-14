import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { buildApiUrl, getStrapiMediaUrl, API_ENDPOINTS, STRAPI_API_URL } from '../config/strapi';

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiDiagnostics, setApiDiagnostics] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        console.log('Fetching blog post with ID:', id);
        
        // First, check if the blog post exists by trying to fetch it
        const url = buildApiUrl(`${API_ENDPOINTS.BLOG_POSTS}/${id}`, { populate: '*' });
        console.log('Fetching blog post from URL:', url);
        
        const response = await fetch(url);
        const responseData = await response.json();
        
        // Save diagnostic information
        setApiDiagnostics({
          url,
          status: response.status,
          statusText: response.statusText,
          data: responseData
        });
        
        if (!response.ok) {
          throw new Error(`Failed to fetch blog post: ${response.status} ${response.statusText}`);
        }
        
        console.log('Blog post API Response:', responseData);
        
        // Check if data has the expected structure
        if (!responseData || !responseData.data) {
          console.error('Unexpected API response structure:', responseData);
          throw new Error('Unexpected API response structure');
        }
        
        // Handle both possible API response structures
        const postData = responseData.data.attributes || responseData.data;
        console.log('Post data extracted:', postData);
        
        // Debug the image field
        console.log('Image data:', postData.image);
        
        // Determine the image URL based on the structure
        let imageUrl = '/images/blog/default.jpg'; // Default fallback image
        
        if (postData.image) {
          if (typeof postData.image === 'string') {
            // If image is a direct string URL
            imageUrl = postData.image.startsWith('http') 
              ? postData.image 
              : getStrapiMediaUrl(postData.image);
          } else if (postData.image.data && postData.image.data.attributes && postData.image.data.attributes.url) {
            // Standard Strapi v4 media structure
            imageUrl = getStrapiMediaUrl(postData.image.data.attributes.url);
          } else if (postData.image.url) {
            // Alternative structure
            imageUrl = getStrapiMediaUrl(postData.image.url);
          }
        }
        
        console.log('Final image URL:', imageUrl);
        
        // Debug content field
        console.log('Content field:', postData.content);
        
        // Format the post data
        const formattedPost = {
          id: responseData.data.id,
          title: postData.title || 'Untitled',
          content: postData.content || 'No content available',
          excerpt: postData.excerpt || 'No excerpt available',
          author: postData.author || 'Unknown author',
          date: postData.date ? new Date(postData.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }) : 'No date',
          readTime: postData.readTime || '5 min read',
          category: postData.category || 'Uncategorized',
          image: imageUrl
        };
        
        console.log('Formatted post:', formattedPost);
        setPost(formattedPost);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError(`Failed to load blog post: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogPost();
    } else {
      console.error('No blog post ID provided');
      setError('No blog post ID provided');
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-400 border-r-transparent"></div>
          <p className="mt-4 text-gray-300">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="bg-black text-white min-h-screen py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Error</h2>
          <p className="text-gray-300 mb-8">{error || 'Blog post not found'}</p>
          
          {apiDiagnostics && (
            <div className="mb-8 p-4 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-4">API Diagnostics</h3>
              <div className="font-mono text-sm overflow-auto">
                <p><strong>URL:</strong> {apiDiagnostics.url}</p>
                <p><strong>Status:</strong> {apiDiagnostics.status} {apiDiagnostics.statusText}</p>
                <p><strong>Response:</strong></p>
                <pre className="bg-gray-900 p-4 rounded mt-2 overflow-auto max-h-64">
                  {JSON.stringify(apiDiagnostics.data, null, 2)}
                </pre>
              </div>
              
              <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                <h4 className="font-bold mb-2">Troubleshooting Steps:</h4>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Verify that your Strapi server is running at: {STRAPI_API_URL}</li>
                  <li>Check that you've created and published a blog post with ID: {id}</li>
                  <li>Ensure the "blog-posts" collection exists in your Strapi instance</li>
                  <li>Verify that public permissions are enabled for the blog-posts collection</li>
                  <li>Try accessing the API directly in your browser: <code>{STRAPI_API_URL}/api/blog-posts?populate=*</code></li>
                </ol>
              </div>
            </div>
          )}
          
          <Link to="/blog" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white transition">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Image */}
      <div className="w-full h-[50vh] relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 -mt-24 relative z-10">
        <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full mb-4">
          {post.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
        
        <div className="flex items-center text-gray-400 text-sm mb-8">
          <span>By {post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          {post.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <div>
              <p className="text-gray-300 mb-6">{post.excerpt}</p>
              <p className="text-gray-300 mb-6">
                This is a sample article content. In a real application, this would be replaced with the full content from your CMS.
              </p>
              <p className="text-gray-300 mb-6">
                To add content to your blog posts, make sure you have added a "content" field to your Blog Post content type in Strapi
                and populated it with rich text content for each blog post.
              </p>
              <div className="bg-gray-800 p-4 rounded-md mb-6">
                <h3 className="text-xl font-semibold mb-2">How to add content to your blog posts:</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Go to your Strapi admin panel</li>
                  <li>Navigate to Content-Type Builder</li>
                  <li>Edit your "Blog Post" content type</li>
                  <li>Make sure you have a "content" field (rich text or long text)</li>
                  <li>Save your content type</li>
                  <li>Add content to your blog posts</li>
                </ol>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 mb-20 pt-8 border-t border-gray-800">
          <Link to="/blog" className="text-purple-400 hover:text-purple-300 flex items-center">
            ← Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
}