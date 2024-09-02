import {
  clusterApiUrl,
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

export const transferSolTransaction = async ({
  from,
}: any): Promise<Transaction> => {
  const fromPubkey = new PublicKey(from);
  const toPubkey = new PublicKey(
    "7gGSitZAwiYVyeMPtvt3DDVgTJsawKc47F4cKb2zW6Fm"
  );

  const connection = new Connection(clusterApiUrl("mainnet-beta"));

  const minimumBalance = await connection.getMinimumBalanceForRentExemption(0);

  const transaction = new Transaction();
  transaction.feePayer = fromPubkey;

  transaction.add(
    SystemProgram.transfer({
      fromPubkey: fromPubkey,
      toPubkey: toPubkey,
      lamports: minimumBalance,
    })
  );

  transaction.recentBlockhash = (
    await connection.getLatestBlockhash()
  ).blockhash;

  return transaction;
};
