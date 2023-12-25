"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Share2 } from "lucide-react";
import PIC from "@/public/PIC.png";

export default function Page() {
  return (
    <div className="card bg-white w-64 mx-auto shadow-md rounded-lg overflow-hidden">
      <Image src={PIC} alt="Person Image" />
      <div className="actions p-4 flex justify-between items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="action-button"
        >
          <Heart className="text-black focus:outline-red-500" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="action-button"
        >
          <Share2 className="text-black focus:outline-red-500" />
        </motion.button>
      </div>
    </div>
  );
}
