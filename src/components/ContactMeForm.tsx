"use client";
import React from "react";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import SplitText from "./ui/SplitText";
import { sendEmail } from "@/server/action";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z.string().min(2, {
    message: "Message must be at least 5 characters.",
  }),
});

export function ContactMeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted");
    console.log(values);
    try {
      const response = await sendEmail(values);
      if (response.success) {
        toast.success(response.message);
        form.reset();
      } else {
        toast.error("Email not sent");
      }
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  }
  return (
    <div className="max-w-4xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-inherit flex flex-col gap-8 md:gap-14 ">
      <div className="flex flex-col items-center gap-1 md:gap-2 w-full">
        <SplitText
          text="Contact Me"
          className="text-2xl font-bold text-stone-300 mb-2 md:text-4xl self-center"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
          rootMargin="-50px"
        />
        <p className="text-center text-stone-200 text-xs md:text-base">
          Am one email away from giving you the best service💯
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 md:space-y-6 "
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/2">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                      className="bg-inherit border border-stone-300 text-stone-100 focus:ring-0 focus:border-none"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="bg-inherit border border-stone-300 text-stone-100"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Message..."
                    {...field}
                    className="bg-inherit border border-stone-300 text-stone-100"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Contact Me &rarr;
            <BottomGradient />
          </Button>
        </form>
      </Form>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

      <div className="flex flex-col space-y-4 md:space-y-2">
        <Link
          href="https://x.com/sbn_clinton?t=WLV8nVRw6jBiGSNvbWO35Q&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full border border-stone-600 text-stone-200 rounded-md h-10 font-medium shadow-input dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        >
          <RiTwitterXFill className="h-6 w-6 " />
          <span className=" text-sm">Twitter</span>
          <BottomGradient />
        </Link>
        <Link
          href="https://www.linkedin.com/in/somto-nwali-0977ba1aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full border border-stone-600 text-stone-200 rounded-md h-10 font-medium shadow-input dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        >
          <FaLinkedinIn className="h-6 w-6 " />
          <span className=" text-sm">LinkedIn</span>
          <BottomGradient />
        </Link>
        <Link
          href="https://www.instagram.com/sbn_clinton?igsh=MXE1dXBmNDl6Z2hkOQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full border border-stone-600 text-stone-200 rounded-md h-10 font-medium shadow-input dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        >
          <FaInstagram className="h-6 w-6 " />
          <span className="text-sm">Instagram</span>
          <BottomGradient />
        </Link>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
