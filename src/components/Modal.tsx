import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Emogi, emojiIcons } from "./Emogi";

type InputProps = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  selected: number[];
  setSelected: React.Dispatch<React.SetStateAction<number[]>>;
};
export function Modal({ modal, setModal, selected, setSelected }: InputProps) {
  function closeModal() {
    setModal(false);
  }

  function openModal() {
    setModal(true);
  }

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-in duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-in duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-dark p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex flex-wrap gap-9">
                    {Object.keys(emojiIcons).map((id) => {
                      return (
                        <Emogi
                          num={Number(id)}
                          key={id}
                          selected={selected}
                          setSelected={setSelected}
                        />
                      );
                    })}
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="text-white inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Done
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
