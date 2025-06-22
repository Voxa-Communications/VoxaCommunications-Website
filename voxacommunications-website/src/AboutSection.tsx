import React from 'react';
import { 
  CubeIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  CpuChipIcon,
  ServerIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">About Voxa Communications</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pioneering the Future of Decentralized Infrastructure
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're building the next generation of container orchestration platforms that leverage 
            blockchain technology to create truly decentralized, secure, and resilient infrastructure.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            <div className="flex flex-col">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <CubeIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                Decentralized Containers
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Our platform enables containers to run across a distributed network of nodes, 
                eliminating single points of failure and creating a more resilient infrastructure.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <ShieldCheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                Blockchain Security
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Every deployment and configuration change is cryptographically signed and recorded 
                on the blockchain, ensuring transparency and immutability.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <CloudIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                Distributed Storage
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Container images and persistent data are stored across the network using 
                content-addressed storage, ensuring high availability and data integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-32">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Technical Architecture
            </h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our platform combines cutting-edge container technology with blockchain infrastructure 
              to deliver unprecedented security and decentralization.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div className="flex flex-col">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                  <CpuChipIcon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h4 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  Smart Contract Orchestration
                </h4>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Container deployments are managed through smart contracts, ensuring deterministic 
                  behavior and enabling automated scaling and healing based on predefined conditions.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• Automated container lifecycle management</li>
                  <li>• Consensus-based resource allocation</li>
                  <li>• Immutable deployment history</li>
                </ul>
              </div>

              <div className="flex flex-col">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
                  <ServerIcon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h4 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  Peer-to-Peer Node Network
                </h4>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Our network consists of autonomous nodes that communicate directly with each other, 
                  eliminating the need for centralized coordination and reducing latency.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• Direct peer-to-peer communication</li>
                  <li>• Distributed load balancing</li>
                  <li>• Self-healing network topology</li>
                </ul>
              </div>

              <div className="flex flex-col">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600">
                  <LockClosedIcon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h4 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  Zero-Knowledge Verification
                </h4>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Container integrity is verified using zero-knowledge proofs, allowing validation 
                  without revealing sensitive information about the container contents.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• Privacy-preserving verification</li>
                  <li>• Cryptographic integrity checks</li>
                  <li>• Tamper-evident deployments</li>
                </ul>
              </div>

              <div className="flex flex-col">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-600 to-red-600">
                  <CloudIcon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h4 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  IPFS Integration
                </h4>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Container images and data are stored on IPFS, providing content-addressed storage 
                  that's distributed, versioned, and peer-to-peer.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• Content-addressed storage</li>
                  <li>• Automatic deduplication</li>
                  <li>• Global content distribution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
