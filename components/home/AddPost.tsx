"use client";
import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormField, FormLabel, FormItem, FormControl } from "../ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

const postSchema = z.object({
  text: z.string().min(1),
  image: z.any(),
});

type PostSchema = z.infer<typeof postSchema>;

const AddPost = () => {
  const [file, setFile] = useState<any>();
  const [selectedImage, setSelectedImage] = useState<any>("");

  const getFile = (event: any) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const form = useForm<PostSchema>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      text: "",
      image: "",
    },
  });

  const onSubmitHandler = (data: PostSchema) => {
    console.log("Data: ", data);

    // const objectUrl = window.URL.createObjectURL(data.image);
    // setSelectedImage(objectUrl);
  };

  // useEffect()
  // return () => URL.revokeObjectURL(objectUrl);

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
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="file-input">
                    <ImageIcon className="text-slate-300 hover:text-black transition-all ease-in cursor-pointer" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="file-input"
                      type="file"
                      className="hidden"
                      onChange={getFile}
                      // {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* <FormLabel htmlFor="file-input">
                <Image className="text-slate-300 hover:text-black transition-all ease-in cursor-pointer" />
              </FormLabel>

              <input id="file-input" type="file" className="hidden" /> */}
            {/* <Image className="text-slate-300 hover:text-black transition-all ease-in cursor-pointer" /> */}
            {/* <Button type="submit">Submit</Button> */}
          </form>
        </Form>
      </div>
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
            src="/images/image-test.webp"
            alt="user-image"
            width={900}
            height={900}
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 bg-black rounded-lg bg-opacity-100 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-70 flex items-center justify-center">
            <p className="text-white text-lg">Click to remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
