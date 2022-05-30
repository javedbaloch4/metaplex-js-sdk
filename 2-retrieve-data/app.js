import { Connection, programs } from "@metaplex/js";
const {
  metaplex: { Store, AuctionManager },
  metadata: { Metadata },
  auction: { Auction },
  vault: { Vault },
} = programs;

const connection = new Connection("devnet");
const publicKey = "Gz3vYbpsB2agTsAwedtvtTkQ1CG9vsioqLW3r9ecNpvZ";

/**
 * Entities
 */
// Metadata
const metadata = await Metadata.load(connection, publicKey);
// Auction
const auction = await Auction.load(connection, publicKey);
// Vault
const vault = await Vault.load(connection, publicKey);
// Metaplex
const auctionManager = await AuctionManager.load(connection, publicKey);
const store = await Store.load(connection, publicKey);
