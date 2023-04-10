import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Typography from "./Typography";
import Button from "./Button";
import { useRouter } from "next/router";
import { useDeleteDocument } from "@/hooks/Documents";

export default function SaveModal({
  isOpen,
  closeModal,
  fileName,
  documentId,
}: {
  isOpen: boolean;
  fileName: string;
  documentId: string;

  closeModal: () => void;
}) {
  const { mutate } = useDeleteDocument(documentId);
  const router = useRouter();
  const handelDelete = async () => {
    if (documentId) {
      mutate();
      closeModal();
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
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
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="h-[218px] w-[343px] transform space-y-4 overflow-hidden rounded bg-white p-6 text-left align-middle transition-all dark:bg-[#1D1F22]">
                  <div className="w-full space-y-4">
                    <Typography
                      type="h4"
                      className="text-[#35393F] dark:text-white"
                    >
                      Delete this document?
                    </Typography>
                    <Typography
                      type="p"
                      className="text-[#7C8187] dark:text-[#C1C4CB]"
                    >
                      Are you sure you want to delete the ‘{fileName}’ document
                      and its contents? This action cannot be reversed.
                    </Typography>

                    <Button onClick={handelDelete}>
                      <Typography type="heading-medium" className="text-white">
                        Confirm & Delete
                      </Typography>
                    </Button>
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
