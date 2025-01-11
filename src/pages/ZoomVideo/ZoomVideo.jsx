import uitoolkit from "@zoom/videosdk-ui-toolkit";
import "@zoom/videosdk-ui-toolkit/dist/videosdk-ui-toolkit.css";
import "./ZoomVideo.css";
import KJUR from "jsrsasign";
import { useLocation } from "react-router-dom";

function ZoomVideo() {
  const location = useLocation();
  const calender = location.state?.calender;

  let sessionContainer = null;

  const config = {
    videoSDKJWT: "",
    sessionName: "calender?.sessionName",
    userName: "Admin",
    sessionPasscode: "",
    features: ["video", "audio", "settings", "users", "chat", "share"],
    options: { init: {}, audio: {}, video: {}, share: {} },
    virtualBackground: {
      allowVirtualBackground: true,
      allowVirtualBackgroundUpload: true,
      virtualBackgrounds: [
        "https://images.unsplash.com/photo-1715490187538-30a365fa05bd?q=80&w=1945&auto=format&fit=crop",
      ],
    },
  };

  function generateSignature(
    sdkKey,
    sdkSecret,
    sessionName,
    role,
    sessionKey,
    userIdentity
  ) {
    const iat = Math.round(new Date().getTime() / 1000) - 30;
    const exp = iat + 60 * 60 * 2;
    const oHeader = { alg: "HS256", typ: "JWT" };
    const oPayload = {
      app_key: sdkKey,
      tpc: sessionName,
      role_type: role,
      session_key: sessionKey,
      user_identity: userIdentity,
      version: 1,
      iat: iat,
      exp: exp,
    };
    const sHeader = JSON.stringify(oHeader);
    const sPayload = JSON.stringify(oPayload);
    const sdkJWT = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, sdkSecret);
    console.log("sdkJWT", sdkJWT);
    return sdkJWT;
  }

  function getVideoSDKJWT() {
    sessionContainer = document.getElementById("sessionContainer");
    document.getElementById("join-flow").style.display = "none";
    console.log("JOIN");
    config.videoSDKJWT = generateSignature(
      "TIGK7yRp4vnptQLs1PR5QpJZeSTz48LPkF7F",
      "n1ykXF1bQN9ifkn3zV0xS9cDjLyrdBu8RbwL",
      config.sessionName,
      1,
      "session123",
      "Admin"
    );
    joinSession();
  }

  function joinSession() {
    console.log(config);
    if (sessionContainer) {
      uitoolkit.joinSession(sessionContainer, config);
      sessionContainer && uitoolkit.onSessionClosed(sessionClosed);
    }
  }

  const sessionClosed = () => {
    console.log("session closed");
    sessionContainer && uitoolkit.closeSession(sessionContainer);
    document.getElementById("join-flow").style.display = "block";
  };

  console.log("Navigating with data:", calender); // في handleZoomClick
  console.log("Received location state:", location.state);

  return (
    <main className=" w-2/3 mx-auto mt-20 md:mt-32">
      <div id="join-flow">
        {/* <h1>Zoom Video SDK Sample React</h1> */}
        {/* <p>User interface offered by the Video SDK UI Toolkit</p> */}
        <button onClick={getVideoSDKJWT} className="">
          Join Session
        </button>
      </div>
      <div id="sessionContainer"></div>
    </main>
  );
}

export default ZoomVideo;
