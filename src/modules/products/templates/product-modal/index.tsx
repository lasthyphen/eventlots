'use client'

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function ProductModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
            <Button
          onPress={onOpen}
          aria-expanded="false"
          data-state="closed"
          data-orientation="vertical"
        >
          <div className="text-grey-90 hover:bg-grey-5 active:bg-grey-5 active:text-violet-60 focus:border-violet-60 disabled:text-grey-30 bg-transparent disabled:bg-transparent rounded-rounded group relative p-[6px]">
            <div className="h-10 w-10">
                  <svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.934 20.552c5.295.029 13.147-2.248 13.519-8.304 0-4.585-6.03-8.31-13.445-8.31-8.585.04-16.244 5.122-12.42 11.492 2.742 3.801 7.848 5.053 12.346 5.122zm.074-13.154c4.3 0 7.674 2.125 7.674 4.85-.23 6.417-15.124 6.414-15.348 0 0-2.725 3.367-4.85 7.674-4.85z"
        fill="#000"
      />
      <path
        d="M14.018 15.85c3.491 0 6.439-1.65 6.439-3.608 0-1.96-2.948-3.615-6.439-3.615-3.49 0-6.438 1.656-6.438 3.614 0 1.96 2.947 3.609 6.438 3.609zM27.456 19.946V16.11a10.714 10.714 0 01-3.806 3.362c1.274.104 2.519.267 3.806.475zM34.742 23.16a43.385 43.385 0 00-13.524-2.59C14.72 23.088 4.25 21.707.563 16.11v1.865a11.515 11.515 0 005.134 9.583v-3.367a.618.618 0 011.236 0v4.084a11.227 11.227 0 003.898 1.15v-2.386a.618.618 0 111.236 0v2.46h3.893v-4.023a.618.618 0 011.235 0V29.5h2.985c.302 0 .611.006.914.006v-1.823a.618.618 0 011.236 0v1.872c1.31.068 2.607.204 3.898.396v-3.195a.618.618 0 011.236 0v3.405c1.31.24 2.614.55 3.899.92v-1.47a.618.618 0 111.236 0v1.847c.123.037.24.08.364.117l1.384.458a.622.622 0 00.816-.587v-7.699a.626.626 0 00-.42-.587z"
        fill="#000"
      />
    </svg>
            </div>
          </div>
        </Button>
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