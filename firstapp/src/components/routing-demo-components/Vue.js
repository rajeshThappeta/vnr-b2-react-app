import React from "react";

function Vue() {
  return (
    <div className=" text-center">
      <h1 className="display-3 text-primary">Vue</h1>
      <p className="lead">
        In earlier computing models like client-server, the processing load for
        the application was shared between code on the server and code installed
        on each client locally. In other words, an application had its own
        pre-compiled client program which served as its user interface and had
        to be separately installed on each user's personal computer. An upgrade
        to the server-side code of the application would typically also require
        an upgrade to the client-side code installed on each user workstation,
        adding to the support cost and decreasing productivity. In addition,
        both the client and server components of the application were usually
        tightly bound to a particular computer architecture and operating system
        and porting them to others was often prohibitively expensive for all but
        the largest applications (Nowadays,[when?] native apps for mobile
        devices are also hobbled by some or all of the foregoing issues)
      </p>
    </div>
  );
}

export default Vue;
