import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-neutral-900 lowercase"
        >
          ad test web
        </a>
      </div>
    </header>
  );
};
