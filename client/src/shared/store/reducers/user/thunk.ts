import { createAsyncThunk } from "@reduxjs/toolkit";
import { PublicKey } from "@solana/web3.js";
import getClient from "../../../api/config";

export const login = createAsyncThunk("user/login", async (publicKey: PublicKey) => {
  const apiClient = getClient();
  const response = await apiClient.webAuthRouterLogin({ LoginPayload: { public_key: publicKey.toBase58() } });
  return response.data;
});
