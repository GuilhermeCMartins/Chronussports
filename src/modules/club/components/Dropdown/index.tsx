import { Listbox, Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import styles from './styles.module.css'


type State = {
  label: string,
  items:{
    id: number,
    label: string
  }[];
}



export default function Dropdown({items, label}: State) {

    function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }


  return (
    <div className="top-16 text-center items-center">
      <Listbox as="div" className="relative inline-block text-left">
        <div>
          <Listbox.Button className={`${styles.button} inline-flex w-full justify-center rounded-md text-base not-italic font-normal text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 items-center `}>
            {label}
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
            <div className="px-1 py-1 ">
                {items?.map((item) =>(
                  <Listbox.Option key={item.id} value={item} className={({ active }) =>
                  classNames(
                    active ? 'bg-indigo-600 mx-4  text-white not-italic font-semibold text-xs leading-[150%] text-[#EEEEEE] bg-[#164092] rounded-[7px]' : 'not-italic mx-4  font-semibold text-xs leading-[150%] text-[#EEEEEE]',
                    'relative cursor-default select-none py-2 pl-3 pr-9 bg-[#131740]'
                  )
                }>
                  {({ active }) => (
                    <div
                      className={`
                      ${active && item.id != 1 ? styles.hover : ''} 
                      ${item.id === 1 ? styles.disable : ''} 
                      group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                    >
                      {item.label}
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


