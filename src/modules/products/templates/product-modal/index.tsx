'use client'

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function ProductModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className="!px-0 !h-[20px] hover:opacity-75" onPress={onOpen}>Find My Size</Button>
      <Modal 
        backdrop="opaque"
        size="3xl"
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">Size Guide</ModalHeader>
              <ModalBody>
              <div className="esc-size-guide px-0 lg:px-4">
  <div className="esc-size-guide--table-wrap">
    <p className="mb-4">
      All measurments are in inches. Note that the
      sizes are approximate and may vary depending on design &amp; stitching
      style
    </p>
    <table className="esc-size-guide--table">
      <tbody>
        <tr className="esc-size-guide--row">
          <th className="esc-size-guide--heading esc-size-guide--col1 esc-size-guide--row1">
            Size
          </th>
          <th className="esc-size-guide--heading esc-size-guide--col2 esc-size-guide--row1">
            XS
          </th>
          <th className="esc-size-guide--heading esc-size-guide--col3 esc-size-guide--row1">
            S
          </th>
          <th className="esc-size-guide--heading esc-size-guide--col4 esc-size-guide--row1">
            M
          </th>
          <th className="esc-size-guide--heading esc-size-guide--col5 esc-size-guide--row1">
            L
          </th>
          <th className="esc-size-guide--heading esc-size-guide--col6 esc-size-guide--row1">
            XL
          </th>
        </tr>
        <tr className="esc-size-guide--row">
          <td className="esc-size-guide--cell esc-size-guide--col1 esc-size-guide--row2">
            Length
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col2 esc-size-guide--row2">
            APS
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col3 esc-size-guide--row2">
            APS
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col4 esc-size-guide--row2">
            APS
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col5 esc-size-guide--row2">
            APS
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col6 esc-size-guide--row2">
            APS
          </td>
        </tr>
        <tr className="esc-size-guide--row">
          <td className="esc-size-guide--cell esc-size-guide--col1 esc-size-guide--row3">
            Chest
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col2 esc-size-guide--row3">
            32
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col3 esc-size-guide--row3">
            34
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col4 esc-size-guide--row3">
            36-38
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col5 esc-size-guide--row3">
            40-42
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col6 esc-size-guide--row3">
            44-46
          </td>
        </tr>
        <tr className="esc-size-guide--row">
          <td className="esc-size-guide--cell esc-size-guide--col1 esc-size-guide--row4">
            Waist
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col2 esc-size-guide--row4">
            26
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col3 esc-size-guide--row4">
            28
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col4 esc-size-guide--row4">
            30-34
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col5 esc-size-guide--row4">
            38-42
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col6 esc-size-guide--row4">
            44
          </td>
        </tr>
        <tr className="esc-size-guide--row">
          <td className="esc-size-guide--cell esc-size-guide--col1 esc-size-guide--row5">
            Hips
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col2 esc-size-guide--row5">
            36
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col3 esc-size-guide--row5">
            36-38
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col4 esc-size-guide--row5">
            38-40
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col5 esc-size-guide--row5">
            42
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col6 esc-size-guide--row5">
            46-48
          </td>
        </tr>
        <tr className="esc-size-guide--row">
          <td className="esc-size-guide--cell esc-size-guide--col1 esc-size-guide--row6">
            Daman
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col2 esc-size-guide--row6">
            22
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col3 esc-size-guide--row6">
            23
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col4 esc-size-guide--row6">
            24
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col5 esc-size-guide--row6">
            25
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col6 esc-size-guide--row6">
            26
          </td>
        </tr>
        <tr className="esc-size-guide--row">
          <td className="esc-size-guide--cell esc-size-guide--col1 esc-size-guide--row7">
            Sleeves
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col2 esc-size-guide--row7">
            22
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col3 esc-size-guide--row7">
            22
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col4 esc-size-guide--row7">
            22
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col5 esc-size-guide--row7">
            23
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col6 esc-size-guide--row7">
            23
          </td>
        </tr>
        <tr className="esc-size-guide--row">
          <td className="esc-size-guide--cell esc-size-guide--col1 esc-size-guide--row8">
            Shoulder
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col2 esc-size-guide--row8">
            13.5
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col3 esc-size-guide--row8">
            14
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col4 esc-size-guide--row8">
            15
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col5 esc-size-guide--row8">
            15.5
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col6 esc-size-guide--row8">
            16.5
          </td>
        </tr>
        <tr className="esc-size-guide--row">
          <td className="esc-size-guide--cell esc-size-guide--col1 esc-size-guide--row9">
            Sleeve Opening
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col2 esc-size-guide--row9">
            APS
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col3 esc-size-guide--row9">
            APS
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col4 esc-size-guide--row9">
            APS
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col5 esc-size-guide--row9">
            APS
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col6 esc-size-guide--row9">
            APS
          </td>
        </tr>
        <tr className="esc-size-guide--row">
          <td className="esc-size-guide--cell esc-size-guide--col1 esc-size-guide--row10">
            UK Size
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col2 esc-size-guide--row10">
            6-8
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col3 esc-size-guide--row10">
            8-10
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col4 esc-size-guide--row10">
            12-14
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col5 esc-size-guide--row10">
            14-16
          </td>
          <td className="esc-size-guide--cell esc-size-guide--col6 esc-size-guide--row10">
            16-18
          </td>
        </tr>
      </tbody>
    </table>
    <p className="mt-4 text-tin">
      *APS: As Per Style
    </p>
  </div>
</div>

              </ModalBody>
              <ModalFooter className="!justify-center">
                <Button color="danger" variant="light" onPress={onClose} className="border-ui-border-base bg-ui-bg-subtle border text-base h-8 rounded-rounded py-2 px-8 hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150">
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}