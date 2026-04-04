import React from 'react';
import video1 from '../../assets/video1.mp4';

function AboutHero() {
  return (
    <div className='bg-bg pb-20'>
      <div className="absolute top-36 left-0 w-32 h-32 bg-dark-green/10 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      
      <div className='md:flex md:mx-20 mx-5 md:pt-24 pt-5 gap-20 md:pl-5'>
        
        <div className='mt-16 md:max-w-[580px]'>
          <h1 className='text-6xl text-dark-green'>Our Story</h1>
          <div className='mt-10 text-gray-600 space-y-4'>
            <p>
              In today’s fast-paced world, people are silently overwhelmed. Teams face burnout, youth struggle with identity, and professionals often operate without alignment.
            </p>
            <p>
              My Soul’s Universe was founded to bridge psychology, personal growth, and organizational wellness into one cohesive transformation journey.
            </p>
            <p>
              We deliver evidence-informed, practical programs that transform lives, empower youth, and strengthen teams.
            </p>
            <p className="pt-4">
              <strong className="text-dark-green">Our Promise:</strong> We don’t offer inspiration - we build transformation systems. Through coaching, team building, and psychosocial support, we ensure growth is both practical and sustainable.
            </p>
          </div>
        </div>
        
        <div className='md:w-[500px] bg-[#E2EDE3] flex justify-center rounded-2xl mt-20 md:mt-0'>
          <div>
            <video
              src={video1}
              className='w-[300px] rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300'
              controls
              playsInline
              muted
              title='Welcome to My Soul’s Universe'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;