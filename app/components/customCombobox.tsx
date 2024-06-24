import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import React from "react";
import Select from "react-select";
import { SlCheck } from "react-icons/sl";

interface ComboBoxProps {
  options: string[];
  onChange: (selectedOption: string) => void;
  selected?: string;
}

const CustomCombobox = ({ options, onChange, selected }: ComboBoxProps) => {
  return (
    <Listbox value={selected} onChange={onChange}>
      {({ open }) => (
        <>
          <div className="relative">
            <ListboxButton className="relative size-full py-2 cursor-default rounded-md bg-white text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <div className="flex items-center justify-between">
                <span className="ml-3 block truncate">{selected}</span>
              </div>
            </ListboxButton>

            <Transition
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((item) => (
                  <ListboxOption
                    key={item}
                    className={`${(focus: any) => {
                      focus ? "bg-indigo-600 text-white" : "text-gray-900";
                    }} relative cursor-default select-none py-2 pl-3 pr-9`}
                    value={item}
                  >
                    {({ selected, focus }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={`${(selected: boolean) => {
                              selected ? "font-semibold" : "font-normal";
                            }} ml-3 block truncate`}
                          >
                            {item}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={`${(focus: any) => {
                              focus ? "text-white" : "text-indigo-600";
                            }} absolute inset-y-0 right-0 flex items-center pr-4`}
                          >
                            <SlCheck />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default CustomCombobox;
