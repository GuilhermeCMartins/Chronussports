import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import styles from './styles.module.css'
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface Option {
  id: number;
  name: string;
  unavailable: boolean;
}

const options = [
  { id: 1, name: 'De qual Região?', unavailable: true },
  { id: 2, name: 'Norte', unavailable: false },
  { id: 3, name: 'Nordeste', unavailable: false },
  { id: 4, name: 'Sul', unavailable: false },
  { id: 5, name: 'Sudeste', unavailable: false },
  { id: 6, name: 'Todos', unavailable: false}
];

export default function Regiao() {
  const [selected, setSelected] = useState<Option | null>(null);

  function handleSelect(option: Option) {
    setSelected(option);
  }

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
  <div className="top-16 text-center items-center">
    <Listbox value={selected} onChange={handleSelect} as='div' className="relative inline-block text-left" >
      <div>
      <Listbox.Button className={`${styles.button} inline-flex w-full justify-center rounded-md text-base not-italic font-normal text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 items-center `}>
        
        {selected ? <span className="block truncate">{selected.name}</span> : <label>Região</label> }
        
        <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
      </Listbox.Button>
      </div>
      <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
  <Listbox.Options className={`${styles.menu} absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
    <div className="px-1 py-1">
    {options.map((option) => (
      <Listbox.Option key={option.name} value={option} disabled={option.unavailable} className={({ active }) =>
      classNames(
        active ? 'bg-indigo-600 mx-4  text-white not-italic font-semibold text-xs leading-[150%] text-[#EEEEEE] bg-[#164092] rounded-[7px]' : 'not-italic mx-4  font-semibold text-xs leading-[150%] text-[#EEEEEE]',
        'relative cursor-default select-none py-1 pl-3 pr-9 bg-[#131740]'
      )
      }>
        {({ selected, active }) => (
          <div className="group flex w-full items-center rounded-md px-1 py-1 text-sm" >
              {option.name}
          </div>
        )}
      </Listbox.Option>
    ))}
    </div>
  </Listbox.Options>
  </Transition>
</Listbox>
</div>

  )
}
