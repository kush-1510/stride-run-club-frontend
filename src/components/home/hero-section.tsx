import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';

// Background video — cheerful running footage via Pexels (Pressmaster)
const BG_VIDEO_SRC =
  'https://videos.pexels.com/video-files/3191289/3191289-uhd_2732_1440_25fps.mp4';

const HeroSection = () => {
  return (
    <ScrollExpandMedia
      mediaType='image'
      mediaSrc='/hero-main-featured.webp'
      bgVideoSrc={BG_VIDEO_SRC}
      title='Move as One.'
      scrollToExpand='Scroll to run ↓'
      headingAs='h1'
      titleLayout='single'
      titleClassName='font-bold !text-stride-yellow-accent text-5xl md:text-7xl lg:text-[114px] tracking-tight transition-none'
      paneOverlay={<RunRegistrationOverlay />}
    >
      <HeroContent />
    </ScrollExpandMedia>
  );
};

const RunRegistrationOverlay = () => (
  <div className='flex flex-col items-center text-center px-6'>
    <p className='text-copy-white/80 text-xs uppercase tracking-widest mb-3 font-medium'>
      Register for our upcoming run
    </p>
    <h2 className='font-bold text-stride-yellow-accent text-4xl md:text-5xl mb-4 leading-tight'>
      Tim&apos;s Power Run
    </h2>
    <div className='flex items-center gap-3 text-copy-white text-lg mb-8'>
      <span>15 March 2025</span>
      <span aria-hidden>·</span>
      <span>Cubbon Park, Bengaluru</span>
    </div>
    <a
      href='/events'
      className='bg-stride-yellow-accent text-stride-purple-primary font-bold px-10 py-3.5 rounded-md hover:opacity-90 transition-opacity text-lg'
    >
      Register Now
    </a>
  </div>
);

const HeroContent = () => {
  return (
    <div className='max-w-4xl mx-auto text-center'>
      <h2 className='text-4xl lg:text-5xl font-bold text-white mb-4'>
        Run with India's <br /><span className='text-stride-yellow-accent'>2nd Largest Running Community.</span>
      </h2>

      <p className='text-base md:text-lg text-copy-white/75 mb-10 max-w-2xl mx-auto leading-relaxed'>
        Stride Run Club is Bengaluru&apos;s community for runners of all paces.
        Whether you&apos;re chasing a PB or your first 5K, you belong here.
      </p>

      <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
        <a
          href='/events'
          className='bg-stride-yellow-accent text-copy-black font-bold px-10 py-3.5 rounded-md hover:opacity-90 transition-opacity'
        >
          Get Started
        </a>
        <a
          href='/events'
          className='border border-copy-white/60 text-copy-white font-semibold px-10 py-3.5 rounded-md hover:bg-copy-white/10 transition-colors'
        >
          View Upcoming Runs
        </a>
      </div>

      <div className='grid grid-cols-3 gap-8 mt-16 border-t border-copy-white/20 pt-12'>
        <div>
          <p className='text-4xl lg:text-5xl font-bold text-stride-yellow-accent font-libre'>500+</p>
          <p className='text-copy-white/60 mt-1 text-sm uppercase tracking-wide'>Active Members</p>
        </div>
        <div>
          <p className='text-4xl lg:text-5xl font-bold text-stride-yellow-accent font-libre'>50+</p>
          <p className='text-copy-white/60 mt-1 text-sm uppercase tracking-wide'>Events Run</p>
        </div>
        <div>
          <p className='text-4xl lg:text-5xl font-bold text-stride-yellow-accent font-libre'>2+</p>
          <p className='text-copy-white/60 mt-1 text-sm uppercase tracking-wide'>Years Strong</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
