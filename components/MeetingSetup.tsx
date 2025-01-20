/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useCall, VideoPreview } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";

const MeetingSetup = () => {
  const [isMicCamToggleOn, setisMicCamToggleOn] = useState(false);
  const call = useCall();
  if (!call) {
    throw new Error("useCall must be used within StreamCall component");
  }

  useEffect(() => {}, [isMicCamToggleOn, call?.camera, call?.microphone]);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
    </div>
  );
};

export default MeetingSetup;
