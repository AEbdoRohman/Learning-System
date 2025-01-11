import { useEffect, useRef } from "react";
import { ZoomVideo } from "@zoom/videosdk";
import CryptoJS from "crypto-js";
import { Buffer } from "buffer";

const ZoomMeeting = () => {
  const zoomClient = useRef(null);

  const generateSignature = (sdkKey, sdkSecret, meetingNumber, role) => {
    const timestamp = new Date().getTime() - 30000;
    const msg = Buffer.from(sdkKey + meetingNumber + timestamp + role).toString(
      "base64"
    );
    const hash = CryptoJS.HmacSHA256(msg, sdkSecret).toString(
      CryptoJS.enc.Base64
    );
    const signature = Buffer.from(
      `${sdkKey}.${meetingNumber}.${timestamp}.${role}.${hash}`
    ).toString("base64");
    return signature;
  };

  useEffect(() => {
    const initZoom = async () => {
      zoomClient.current = ZoomVideo.createClient();
      zoomClient.current.init("en-US", "CDN");

      const sdkKey = "<YOUR_SDK_KEY>";
      const sdkSecret = "<YOUR_SDK_SECRET>";
      const meetingNumber = "<MEETING_NUMBER>";
      const userName = "Guest";
      const role = 0; // 0 للمشاركين، 1 للمضيفين
      const signature = generateSignature(
        sdkKey,
        sdkSecret,
        meetingNumber,
        role
      );

      try {
        await zoomClient.current.join(
          sdkKey,
          signature,
          meetingNumber,
          userName
        );
        console.log("Joined Zoom session successfully.");
      } catch (error) {
        console.error("Error joining Zoom session:", error);
      }
    };

    initZoom();
  }, []);

  return (
    <div id="zoom-meeting-container" style={{ width: "100%", height: "100vh" }}>
      {/* Zoom meeting UI will appear here */}
    </div>
  );
};

export default ZoomMeeting;
