import React from 'react';

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Project Management: AI-Powered Insights",
      excerpt: "Discover how artificial intelligence is revolutionizing project management and helping teams deliver better results faster than ever before.",
      author: "Sarah Chen",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Technology",
      image: "/images/blog/ai.jpg"
    },
    {
      title: "5 Strategies to Eliminate Project Delays Before They Start",
      excerpt: "Learn proven techniques to identify and prevent project bottlenecks using predictive analytics and smart planning.",
      author: "Marcus Johnson",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Strategy",
      image: "/images/blog/clock.jpg"
    },
    {
      title: "Gantt vs Kanban vs Scrum: Choosing the Right Methodology",
      excerpt: "A comprehensive comparison of project management methodologies to help you choose the best approach for your team.",
      author: "Priya Sharma",
      date: "December 10, 2024",
      readTime: "10 min read",
      category: "Methodology",
      image: "/images/blog/methodology.jpg"
    },
    {
      title: "Building High-Performance Remote Teams",
      excerpt: "Essential strategies for managing distributed teams and maintaining productivity in a remote-first world.",
      author: "David Kim",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Remote Work",
      image: "/images/blog/remote.jpg"
    },
    {
      title: "The ROI of Project Management Software",
      excerpt: "Calculate the real return on investment of implementing professional project management tools in your organization.",
      author: "Lisa Rodriguez",
      date: "December 5, 2024",
      readTime: "5 min read",
      category: "Business",
      image: "/images/blog/roi.jpg"
    },
    {
      title: "Mastering Stakeholder Communication",
      excerpt: "Best practices for keeping stakeholders informed, engaged, and satisfied throughout the project lifecycle.",
      author: "James Wilson",
      date: "December 3, 2024",
      readTime: "8 min read",
      category: "Communication",
      image: "/images/blog/communication.jpg"
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section - Full Screen */}
     <section className="min-h-screen flex flex-col items-center justify-start pt-20 px-4 text-center">

        <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Project Management Insights
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
          Stay ahead with expert advice, industry insights, and practical guides from project management professionals.
        </p>
      </section>

      {/* Blog List Section */}
      <div className="px-4 py-12 flex justify-center">
        <div className="w-full max-w-4xl space-y-10">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-gray-800 hover:bg-gray-700 transition rounded-xl shadow-md overflow-hidden"
            >
              {/* Image */}
              <div className="md:w-1/3 h-52 md:h-auto">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:w-2/3 p-5 flex flex-col justify-center space-y-2">
                <span className="uppercase text-xs text-purple-400 font-semibold tracking-wide">{post.category}</span>
                <h2 className="text-xl font-bold text-white">{post.title}</h2>
                <p className="text-sm text-slate-300">{post.excerpt}</p>
                <div className="text-xs text-slate-400">
                  By {post.author} • {post.date} • {post.readTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}