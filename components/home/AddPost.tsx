"use client";
import { useState, useCallback, useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Dropzone from "react-dropzone";
import { cn } from "@/lib/utils";
import { useFormState } from "react-dom";

import { Form, FormField, FormLabel, FormItem, FormControl } from "../ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import PreviewGallery from "./PreviewGallery";
import { mutationFunction } from "@/lib/actions";
import { Button } from "../ui/button";
import { PostSchema, postSchema } from "@/lib/zod-schema";
import { addPost } from "@/lib/actions";
import SubmitButton from "../SubmitButton";

export interface IImage {
  id: number;
  file: string;
  preview: string;
}

const AddPost = () => {
  const ref = useRef<HTMLFormElement>(null);

  const [state, formAction] = useFormState(addPost, {
    message: "",
  });

  ////
  const [images, setImages] = useState<IImage[]>([]);

  const { mutate } = useMutation({
    mutationFn: (data: string) => mutationFunction(data),
  });

  const onDrop = useCallback((acceptedFiles: any) => {
    const newImages: any = acceptedFiles.map((file: any, i: number) =>
      Object.assign(file, {
        id: i,
        preview: URL.createObjectURL(file),
      })
    );
    setImages((prevImages) => [...prevImages, ...newImages]);

    acceptedFiles.forEach((acceptedFile: any) =>
      append({
        file: acceptedFile,
      })
    );
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const form = useForm<PostSchema>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      text: "",
      images: "",
    },
  });

  const { append, fields } = useFieldArray({
    name: "images",
    control: form.control,
  });

  const onSubmitHandler = (data: PostSchema) => {
    console.log("Data: ", data.images);

    console.log("Images: ", images);
    mutate(JSON.stringify(data));
  };

  // const removeImageHandler = (imageId: number) => {
  //   setImages((prevImages) =>
  //     prevImages.filter((image) => {
  //       if (image.id === imageId) URL.revokeObjectURL(image.preview);

  //       return image.id !== imageId;
  //     })
  //   );
  // };

  useEffect(() => {
    return () =>
      images.forEach((image: any) => URL.revokeObjectURL(image.preview));
  }, []);

  return (
    <div className="flex p-4 flex-col bg-white rounded-lg shadow-sm space-y-2">
      <p className="font-normal text-slate-500 text-lg">Post something</p>
      <Separator />
      <div className="flex gap-2 sm:gap-3">
        <Avatar>
          <AvatarImage src="/images/user-image.jpg" alt="@haris" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Form {...form}>
          <form
            ref={ref}
            // onSubmit={form.handleSubmit(onSubmitHandler)}
            action={formAction}
            className="flex items-center w-full gap-1 justify-between"
          >
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="What's on your mind?"
                      className="placeholder:text-slate-300"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="images"
              render={() => (
                <FormItem>
                  <FormControl>
                    <div {...getRootProps()}>
                      <label htmlFor="images">
                        <ImageIcon className="text-slate-300 hover:text-black transition-all ease-in cursor-pointer" />
                      </label>
                      <Input
                        id="file-input"
                        type="file"
                        className="hidden"
                        {...getInputProps}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            {/* <div {...getRootProps()}>
              <label htmlFor="images">
                <ImageIcon className="text-slate-300 hover:text-black transition-all ease-in cursor-pointer" />
              </label>
              <Input
                id="file-input"
                type="file"
                className="hidden"
                {...getInputProps}
              />
            </div> */}
            <SubmitButton>Add</SubmitButton>
          </form>
        </Form>
      </div>
      {images.length === 1 && (
        <div className="flex justify-center items-center">
          <div
            className="flex justify-center relative group overflow-hidden cursor-pointer"
            style={{
              position: "relative",
              width: "100%",
              height: "auto",
            }}
          >
            <Image
              src={images[0].preview}
              alt="user-image"
              width={900}
              height={900}
              className="w-full h-auto rounded-lg"
            />
            <div
              // onClick={() => removeImageHandler(0)}
              className="absolute inset-0 bg-black rounded-lg bg-opacity-100 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-70 flex items-center justify-center"
            >
              <p className="text-white text-lg">Click to remove</p>
            </div>
          </div>
        </div>
      )}
      {images.length > 1 && <PreviewGallery images={images} />}
    </div>
  );
};

export default AddPost;
