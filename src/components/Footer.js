const Footer=()=>{
  return (
    <div className="mt-16 bg-red-300">
      <div className=" text-white py-8 top-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-6 sm:gap-0">
            
            {/* Left section */}
            <div>
              <p className="text-lg font-semibold">Simran</p>
              <div className="flex justify-center sm:justify-start space-x-4 mt-2">
                <a href="https://twitter.com/Simran5203" target="_blank" rel="noopener noreferrer" className=" hover:text-white  hover:font-medium transition duration-300">
                  Twitter
                </a>
                <a href="https://linkedin.com/in/simrandhiman05" target="_blank" rel="noopener noreferrer" className=" hover:text-white hover:font-medium transition duration-300">
                  LinkedIn
                </a>
                <a href="https://github.com/SIMRAN5-CS" target="_blank" rel="noopener noreferrer" className=" hover:text-white hover:font-medium transition duration-300">
                  GitHub
                </a>
              </div>
            </div>
            
            {/* Center section */}
            <div>
              <p className="text-lg">Made with <span role="img" aria-label="Love">❤️</span> by Simran</p>
              <p className="text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            
            {/* Right section */}
            <div>
              <p className="text-lg font-semibold">Contact</p>
              <p className="text-sm mt-2">Email: simrandddhiman@gmail.com</p>
              <p className="text-sm">Phone: 91-9991448161</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
  
}
export default Footer