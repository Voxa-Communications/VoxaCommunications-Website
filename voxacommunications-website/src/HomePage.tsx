import React from 'react';
import { ChevronRightIcon, CubeIcon, LinkIcon, ShieldCheckIcon, CloudIcon } from '@heroicons/react/24/outline';
import AboutSection from './AboutSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <CubeIcon className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold text-white">Voxa Communications</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-14 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Decentralizing the Future of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {' '}Container Infrastructure
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Revolutionizing how containers and blockchain technology work together. 
            Voxa Communications builds the next generation of decentralized infrastructure 
            that's secure, scalable, and truly distributed.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Explore Our Platform
            </button>
            <button className="text-sm font-semibold leading-6 text-gray-300 hover:text-white flex items-center">
              Learn more <ChevronRightIcon className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-400 to-purple-400 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Revolutionary Technology</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Decentralized Container Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our cutting-edge platform combines container orchestration with blockchain technology 
              to create truly decentralized, secure, and scalable infrastructure.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <CubeIcon className="h-6 w-6 text-white" />
                  </div>
                  Decentralized Container Orchestration
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  Deploy and manage containers across a distributed network without central points of failure. 
                  Our blockchain-based orchestration ensures high availability and censorship resistance.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <ShieldCheckIcon className="h-6 w-6 text-white" />
                  </div>
                  Blockchain-Secured Infrastructure
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  Every container deployment is cryptographically signed and verified on the blockchain, 
                  ensuring integrity and creating an immutable audit trail.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <LinkIcon className="h-6 w-6 text-white" />
                  </div>
                  Peer-to-Peer Networking
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  Containers communicate directly through encrypted P2P channels, eliminating traditional 
                  network bottlenecks and reducing latency.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <CloudIcon className="h-6 w-6 text-white" />
                  </div>
                  Distributed Storage
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  Container images and persistent data are distributed across the network using 
                  content-addressed storage, ensuring data availability and redundancy.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Decentralize Your Infrastructure?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join the revolution in container orchestration. Build applications that are truly 
              decentralized, secure, and resistant to censorship.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Start Building
              </button>
              <button className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
                Read Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CubeIcon className="h-6 w-6 text-blue-400" />
              <span className="text-sm text-gray-300">© 2025 Voxa Communications. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <button className="text-gray-400 hover:text-white" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-white" aria-label="GitHub">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
