import { Connection, programs } from "@metaplex/js";
const {
  metadata: { Metadata },
} = programs;

const connection = new Connection("devnet");
const tokenPublicKey = "5CsekquSfUcVMT6BUXSv66fV3QrZRiujuq2YByQ3F3";

const run = async () => {
  try {
    const ownedMetadata = await Metadata.load(connection, tokenPublicKey);
    console.log(ownedMetadata);
  } catch {
    console.log("Failed to fetch metadata");
  }
};

run();
