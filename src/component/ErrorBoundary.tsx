import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { ReactNode } from 'react';
import { ChildProcess } from 'node:child_process';

interface ErrorFallbackProps {
    error: Error;
    resetErrorBoundary: () => void;
}


const ErrorFallBack = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
   return (
     <div className="bg-[#FFFFFF] p-4 rounded mb-8">
        <div className="bg-red-50 border border-red-200 rounded p-4 text-center">
            <h3 className="text-red-800 font-semibold mb-2">Unable to Load Panchang</h3>
            <p className="text-red-600 text-sm mb-2">
                Failed to fetch panchang data. Please check your connection and try again.
            </p>
            <p className="text-red-500 text-xs mb-4 font-mono">
                Error: {error.message}
            </p>
            <button 
                onClick={resetErrorBoundary}
                className="bg-[#FF9933] text-white px-4 py-2 rounded text-sm hover:bg-orange-600"
            >
                Try Again
            </button>
        </div>
    </div>
   )
}


interface ErrorBoundaryProps {
    children: ReactNode;
    
}

export const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorFallBack}
            onError={(error: Error, errorInfo: { componentStack: string }) => {
                console.error('Panchang Error:', error, errorInfo);
            }}
            onReset={() => {
                window.location.reload();
            }}
        >
            {children}
        </ReactErrorBoundary>
    )
}