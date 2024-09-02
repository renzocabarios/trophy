import { app } from "./app";
import { connectDB } from "./db";
import ENV from "./env";

(() => {
  connectDB(ENV.MONGO_CON).then(() => {
    console.log(`Database connected to ${ENV.MONGO_CON}`);
    app.listen(9000, () => {
      console.log("solana-action-express is running!");
    });
  });
})();
