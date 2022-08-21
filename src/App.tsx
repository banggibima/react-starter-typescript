import { FC } from 'react';

const App: FC = () => {
  return (
    <>
      <header className="bg-gray-900 min-h-screen py-16 flex flex-1 flex-col justify-center items-center">
        <img
          src={`${window.location.origin}/logo.svg`}
          className="h-64 w-64"
          alt="logo"
        />
        <p className="my-4 text-white">
          Edit
          <code className="mx-2 py-2 px-2 bg-gray-800 rounded-md font-mono">
            src/App.tsx
          </code>
          and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          className="leading-tight px-6 text-xl font-semibold text-cyan-300 hover:text-cyan-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </>
  );
};

export default App;
