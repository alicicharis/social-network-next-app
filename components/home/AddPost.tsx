"use client";
import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormField, FormLabel, FormItem, FormControl } from "../ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import PreviewGallery from "./PreviewGallery";

const postSchema = z.object({
  text: z.string().min(1),
});

type PostSchema = z.infer<typeof postSchema>;

export interface IImage {
  id: number;
  file: string;
  preview: string;
}

const AddPost = () => {
  const [images, setImages] = useState<IImage[]>([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    console.log("Accepted files: ", acceptedFiles);

    const newImages = acceptedFiles.map((file: any, i: number) =>
      Object.assign(file, {
        id: i,
        preview: URL.createObjectURL(file),
      })
    );
    setImages((prevImages) => [...prevImages, ...newImages]);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const form = useForm<PostSchema>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      text: "",
    },
  });

  const onSubmitHandler = (data: PostSchema) => {
    console.log("Data: ", data);
  };

  const removeImageHandler = (imageId: number) => {
    setImages((prevImages) =>
      prevImages.filter((image) => {
        if (image.id === imageId) URL.revokeObjectURL(image.preview);

        return image.id !== imageId;
      })
    );
  };

  console.log("THESE ARE THE IMGEAS LENGTH: ", images.length);

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
            onSubmit={form.handleSubmit(onSubmitHandler)}
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
              onClick={() => removeImageHandler(0)}
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
