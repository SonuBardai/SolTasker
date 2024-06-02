import { createAsyncThunk } from "@reduxjs/toolkit";
import { PublicKey } from "@solana/web3.js";
import getClient from "../../../api/config";
import { AxiosResponse } from "axios";

export const login = createAsyncThunk("user/login", async (publicKey: PublicKey) => {
  const apiClient = getClient();
  const response = (await apiClient.webAuthRouterLogin({ LoginPayload: { public_key: publicKey.toBase58() } })) as AxiosResponse;
  return response.data;
});
