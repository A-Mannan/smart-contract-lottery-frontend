import React from "react";
import { ConnectButton } from "web3uikit";

export default function () {
  return (
    <div className="p-5 border-b-2 flex">
      <h1
        className="p-4 font-bold text-3xl"
      >
        Decentralized Lottery
      </h1>
      <div className="py-2 px-4 ml-auto">
        <ConnectButton moralisAuth={false} />
      </div>
    </div>
  );
}
