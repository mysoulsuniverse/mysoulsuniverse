import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-dark-green py-24 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-bg mb-6">
          Hear From Those Who’ve Thrived
        </h2>
        <div className="h-1 w-20 mx-auto rounded bg-goldenrod mb-16" />
        
        {/* Placeholder for Testimonials Content */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 rounded-2xl">
          <p className="text-xl text-white/80 italic mb-8">
            "Content to be shared..."
          </p>
          
          {/* Skeleton UI for author while waiting for content */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full animate-pulse"></div>
            <div className="text-left">
              <div className="h-4 w-24 bg-white/20 rounded animate-pulse mb-2"></div>
              <div className="h-3 w-16 bg-white/10 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;