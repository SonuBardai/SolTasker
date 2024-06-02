import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_URL } from "../../../constants";
import { PublicKey } from "@solana/web3.js";

export const login = createAsyncThunk("user/login", async (publicKey: PublicKey) => {
  const response = await axios.post(`${BACKEND_URL}/v1/login`, { public_key: publicKey });
  return response.data;
});
