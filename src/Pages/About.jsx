import { images } from '../constant';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const AboutPage = () => {
  return (
    <div className="about-page">
        <NavBar />
      <div 
        className="relative h-72 bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `url(${images.Shopys.shopi3})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <h1 className="text-white text-5xl md:text-6xl font-bold uppercase tracking-wide">
          ABOUT
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

          <div className="overflow-hidden rounded-lg">
            <img 
              src={images.Gallerys.Gallery3} 
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Our story</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-5">
              Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;