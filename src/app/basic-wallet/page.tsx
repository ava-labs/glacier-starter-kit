import Image from "next/image";
import { AvaCloudSDK} from "@avalabs/avacloud-sdk";

export default function BasicWallet() {


const avaCloudSDK = new AvaCloudSDK({
  apiKey: process.env.GLACIER_API_KEY,
  chainId: "43114",
  network: "mainnet",
});


const fetchChains = async () => {
  const result = await avaCloudSDK.metrics.evm.chains.listChains({
    network: "mainnet",
  });
  for await (const page of result) {
    // Handle the page
    console.log(page.result.chains);
  }
};

fetchChains();

return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.avalabs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/ava-labs.svg"
              alt="Ava Labs Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
