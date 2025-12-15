'use client'

import React from 'react'
import { Input } from '@heroui/react'
import { SearchIcon } from './icons/SearchIcon'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

const SearchInput: React.FC<SearchInputProps> = React.memo(
  ({ value, onChange, placeholder = 'Buscar', className }) => {
    return (
      <Input
        size="lg"
        variant="bordered"
        className={`bg-white/30 rounded-[10px] outline-1 -outline-offset-1 outline-neutral-900/20 ${
          className || ''
        }`}
        endContent={<SearchIcon />}
        classNames={{
          inputWrapper: [
            'px-0', // Restore padding from original design
            '!bg-transparent', // Ensure background is transparent to let parent bg show or handle it here
            'border-none', // Remove default border
            'data-[hover=true]:bg-transparent',
            'group-data-[focus=true]:bg-transparent'
          ],
          innerWrapper: 'bg-transparent',
          input: [
            'text-neutral-900',
            'text-sm',
            'font-medium',
            'font-["Poppins"]',
            'outline-none',
            'focus:outline-none',
            'focus:ring-0',
            'placeholder:text-neutral-900',
            '!bg-transparent',
            'leading-8',
            'px-0',
            'h-full'
          ]
        }}
        placeholder={placeholder}
        radius="lg"
        value={value}
        onValueChange={onChange}
        isClearable={false}
      />
    )
  }
)

SearchInput.displayName = 'SearchInput'

export default SearchInput
