"use server";
import { getServerTokenBearer } from "@/lib/access_token";
import http from "@/lib/http";
import axios from "axios";

export const getUsers = async (params: string = "") => {
  const token = await getServerTokenBearer();
  try {
    const res = await http.get<UserAccountPagination>(`user/list?${params}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Ha ocurrido un error");
  }
};
