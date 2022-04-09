import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Solkittycat } from "../target/types/solkittycat";

describe("solkittycat", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Solkittycat as Program<Solkittycat>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
