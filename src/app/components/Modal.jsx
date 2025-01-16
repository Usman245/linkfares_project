import React from 'react'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  } from "@nextui-org/react";
  import { usePaymentInputs, PaymentInputsWrapper } from "react-payment-inputs";
  import images from "react-payment-inputs/images";
  

const Modals = ({isOpen,onOpenChange}) => {
  //  const {  onOpenChange } = useDisclosure();
    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
      } = usePaymentInputs();
  return (
    <div>
        <Modal
                      isOpen={isOpen}
                      onOpenChange={onOpenChange}m
                      isDismissable={false}
                      isKeyboardDismissDisabled={true}
                      className='py-4 px-4'
                    >
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader className="flex flex-col gap-1">
                              Put the card Detail
                            </ModalHeader>
                            <ModalBody>
                              <div>
                            <div className='flex flex-col gap-4 '>
                                  <svg {...getCardImageProps({ images })} className=' w-20 h-10'/>
                                  <input {...getCardNumberProps()}  className='p-2 border border-gray-500 outline-none text-base rounded'/>
                                  <input {...getExpiryDateProps()}  className='p-2 border border-gray-500 outline-none text-base rounded'/>
                                  <input {...getCVCProps()}  className='p-2 border border-gray-500 outline-none text-base rounded'/>
                                </div>
                              </div>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                                className='focused:bg-transparent outline-none'
                              >
                                Cancel
                              </Button>
                              <Button
                                className="bg-green-600 text-white py-2 px-4 rounded cursor-pointer text-sm "
                                onPress={onClose}
                              >
                                Add Card
                              </Button>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>
    </div>
  )
}

export default Modals