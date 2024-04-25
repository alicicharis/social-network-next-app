"use client";

import React, { useState, useImperativeHandle } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import PhotoGallery from "./PhotoGallery";

const Modal = React.forwardRef((props, ref) => {
  const [startImage, setStartImage] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    childMethod(i: any) {
      childMethod(i);
    },
  }));

  function childMethod(i: any) {
    setStartImage(i);
    setOpen(true);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="w-[1000px] flex justify-center bg-transparent border-none p-0 gap-0 m-0 space-x-0"
      >
        <PhotoGallery startIndex={startImage} />
      </DialogContent>
    </Dialog>
  );
});

export default Modal;
