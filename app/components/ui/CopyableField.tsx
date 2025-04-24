'use client';

interface CopyableFieldProps {
  label: string;
  value: string;
  isSmallText?: boolean;
  darkMode?: boolean;
  onCopy?: (text: string) => void;
  isCopied?: boolean;
}

export function CopyableField({ 
  label, 
  value, 
  isSmallText = false, 
  darkMode = false,
  onCopy,
  isCopied = false
}: CopyableFieldProps) {
  
  const handleCopy = () => {
    if (onCopy) {
      onCopy(value);
    } else {
      navigator.clipboard.writeText(value);
    }
  };
  
  return (
    <div className="space-y-2">
      <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {label}
      </label>
      
      {isSmallText ? (
        <div className="relative">
          <p className="text-xs font-mono break-all pr-16 py-1">
            {value.includes("Token guardado") ? (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {value}
              </span>
            ) : (
              value
            )}
          </p>
          <div className="flex">
            <input
              type="text"
              readOnly
              value={value}
              className={`
                flex-grow px-4 py-2 border 
                ${darkMode 
                  ? 'border-gray-700 bg-gray-800 text-white' 
                  : 'border-gray-300 bg-gray-50 text-gray-900'
                } 
                rounded-l-lg focus:outline-none 
                ${isSmallText ? 'text-xs' : ''}
              `}
            />
            <button
              onClick={handleCopy}
              className={`
                ${darkMode 
                  ? 'bg-indigo-600 hover:bg-indigo-700' 
                  : 'bg-blue-500 hover:bg-blue-600'
                } 
                text-white px-4 py-2 rounded-r-lg transition-colors
              `}
            >
              {isCopied ? 'Copiado!' : 'Copiar'}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex">
          <input
            type="text"
            readOnly
            value={value}
            className={`
              flex-grow px-4 py-2 border 
              ${darkMode 
                ? 'border-gray-700 bg-gray-800 text-white' 
                : 'border-gray-300 bg-gray-50 text-gray-900'
              } 
              rounded-l-lg focus:outline-none 
              ${isSmallText ? 'text-xs' : ''}
            `}
          />
          <button
            onClick={handleCopy}
            className={`
              ${darkMode 
                ? 'bg-indigo-600 hover:bg-indigo-700' 
                : 'bg-blue-500 hover:bg-blue-600'
              } 
              text-white px-4 py-2 rounded-r-lg transition-colors
            `}
          >
            {isCopied ? 'Copiado!' : 'Copiar'}
          </button>
        </div>
      )}
    </div>
  );
}