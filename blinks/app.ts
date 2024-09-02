import "express-async-errors";
import express from "express";
import cors from "cors";
import {
  ActionError,
  ActionGetResponse,
  ActionPostResponse,
  ActionsJson,
  createPostResponse,
} from "@solana/actions";
import { transferSolTransaction } from "./transactions";
import { startSession, ClientSession } from "mongoose";
import userService from "./services";
export const app = express();

// MIDDLEWARES
app.use(express.json());
app.options(
  "*",
  cors({
    methods: ["GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"],
    allowedHeaders: [
      "Content-Type, Authorization, Content-Encoding, Accept-Encoding",
    ],
    preflightContinue: true,
    optionsSuccessStatus: 204,
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Encoding, Accept-Encoding"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
  );
  res.setHeader("Content-Encoding", "compress");
  res.setHeader("Content-Type", "application/json");
  next();
});

// ROUTES
app.use("/actions.json", (req, res) => {
  const payload: ActionsJson = {
    rules: [
      {
        pathPattern: "/*",
        apiPath: "/actions/*",
      },
      {
        pathPattern: "/actions/**",
        apiPath: "/actions/**",
      },
    ],
  };
  res.json(payload);
});

app
  .get("/actions/raffle", (req, res) => {
    const payload: ActionGetResponse = {
      type: "action",
      title: "1000 $SEND Giveaway",
      icon: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.15752-9/454803144_1548754692715033_6543378702746072351_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEPHvqC-ExSyfHXcsvtgZXXejZ-NZOEsqR6Nn41k4SypLtOP7N7hkIKvIPmo-YgOB0erF69pTRMMDYvl6wSEphB&_nc_ohc=eQ4ZmXX1hzsQ7kNvgEe0gMI&_nc_ht=scontent.fmnl17-3.fna&oh=03_Q7cD1QHWCDVJC7HJDmST-TibG53HyqoekbC_WDNpDfE6h-Ffbg&oe=66FBCD09",
      description: `🏆 Trophy's Inaugural Blink Giveaway 🚀

Join the giveaway through the blink and stand a chance to win 1000 $SEND! Make sure to follow our account so you can join the next giveaway.

Prize: 1000 $SEND 🏆

Winner will be announced on September 7, 2024 3:00:00 PM PST
May the odds be in your favor! 🍀

If the transaction rejects, your wallet will still be entered. 🤝`,
      label: "Join the raffle",
    };
    res.json(payload);
  })
  .post("/actions/raffle", async (req, res) => {
    const { account } = req.body;
    const session: ClientSession = await startSession();
    let data: any;

    try {
      const transaction = await session
        .withTransaction(async () => {
          const transaction = await transferSolTransaction({ from: account });
          const serviceResponse = await userService.add(
            { walletAddress: account },
            session
          );

          data = transaction;
        })
        .then(() => {
          return data;
        })
        .finally(() => {
          session.endSession();
        });
      const payload: ActionPostResponse = await createPostResponse({
        fields: {
          transaction,
          message: `It is our first raffle, please be kind. huhu`,
        },
      });
      res.json(payload);
      return;
    } catch (err: any) {
      let actionError: ActionError = {
        message: "You have already joined the raffle",
      };
      res.status(400).json(actionError);
    }
  });
