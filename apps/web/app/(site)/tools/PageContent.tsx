"use client";

import { Button } from "@cap/ui";
import Link from "next/link";
import {motion} from 'framer-motion'
import { useEffect } from "react";
import LeftBlueHue from "@/components/pages/HomePage/LeftBlueHue";

interface ToolCategory {
  title: string;
  description: string;
  href: string;
  icon: string;
}

const toolCategories: ToolCategory[] = [
  {
    title: "File Conversion",
    description:
      "Convert between different file formats directly in your browser",
    href: "/tools/convert",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Video Speed Controller",
    description: "Speed up or slow down your videos without losing quality",
    href: "/tools/video-speed-controller",
    icon: "M15.75 5.25a3 3 0 013 3m-3-3a3 3 0 00-3 3m3-3v1.5m0 9.75a3 3 0 01-3-3m3 3a3 3 0 003-3m-3 3v-1.5m-6-1.5h.008v.008H7.5v-.008zm1.5-9h.375c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-.375m1.5-4.5A1.125 1.125 0 0110.375 7.5h-1.5A1.125 1.125 0 017.75 8.625M10.5 12a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
  },
  {
    title: "Video Trimmer",
    description: "Cut unwanted sections from videos with precision",
    href: "/tools/trim",
    icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
  },
];

export function PageContent() {


  return (
    <>
     <div
        className="relative overflow-hidden pt-[100px] md:pt-[180px]"
        
      >
        <div className="relative z-10 px-5 w-full h-full flex flex-col justify-center">
          <div className="mx-auto text-center wrapper wrapper-sm">
            <h1 className="fade-in-down text-[2rem] leading-[2.5rem] md:text-[2.75rem] md:leading-[3.25rem] font-medium relative z-10 text-black mb-6">
               Try our free tools
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-md sm:text-xl text-zinc-500 fade-in-down animate-delay-1">
             Powerful browser-based utilities that run directly on your device. No uploads, no installations, maximum privacy.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 fade-in-up animate-delay-2 sm:flex-row sm:space-y-0 sm:space-x-4">
        
          </div>
         

        </div>

        
      </div>
      <div className="wrapper mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-12 mt-16">
           {toolCategories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group block p-8 border border-gray-200 bg-gray-1 rounded-xl hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-xl mb-5">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={category.icon}
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                  {category.title}
                </h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div
        className="mx-auto wrapper mt-16 mb-8 bg-white rounded-3xl overflow-hidden relative flex flex-col justify-center p-12"
        style={{
          minHeight: "300px",
          backgroundImage: "url('/illustrations/ctabg.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      
        >
         
          <div className=" mx-auto h-full flex flex-col justify-center items-center relative z-10">
            <div className="text-center max-w-[800px] mx-auto mb-8">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-12 mb-4 drop-shadow-md">
                The open source Loom alternative
              </h2>
              <p className="text-xl  mb-6 text-gray-10">
                Cap is lightweight, powerful, and cross-platform. Record and
                share securely in seconds with custom S3 bucket support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button
                variant="gray"
                href="/download"
                size="lg"
                className="w-full sm:w-auto transition-all duration-300 font-medium px-8 py-3"
              >
                Download Cap Free
              </Button>
            </div>
          </div>
        </div>
      </div>
      
    </>

  );
}
