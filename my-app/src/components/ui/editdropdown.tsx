'use client';

import { useEffect, useRef, useState } from 'react';

interface EditableDropdownProps {
  options: string[];
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function EditableDropdown({
  options,
  placeholder = 'Select or type...',
  onChange,
}: EditableDropdownProps) {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelect = (value: string) => {
    setInputValue(value);
    setIsOpen(false);
    onChange?.(value);
  };

  const handleEnter = () => {
    if (inputValue.trim() !== '') {
      alert(`you choice is : ${inputValue}`);
      onChange?.(inputValue);
      setIsOpen(false);
    }
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-sm" ref={containerRef}>
      <input
        ref={inputRef}
        type="text"
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => {
          setInputValue(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleEnter();
          }
        }}
      />

      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-40 overflow-auto shadow-lg">
          {filteredOptions.length === 0 && (
            <li className="p-2 text-black italic">No options</li>
          )}
          {filteredOptions.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="p-2 cursor-pointer hover:bg-blue-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
