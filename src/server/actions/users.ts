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

export const deleteUserService = async (id: number) => {
  const token = await getServerTokenBearer();
  try {
    const res = await http.delete(`user/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Ha ocurrido un error");
  }
};

export const updateUserService = async (id: number, user: EditUser) => {
  const token = await getServerTokenBearer();
  try {
    const res = await http.put(`user/update/${id}`, JSON.stringify(user), {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Ha ocurrido un error");
  }
};

export const createUserService = async (user: Signup) => {
  try {
    const res = await http.post(`/auth/register`, JSON.stringify(user), {});
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Ha ocurrido un error");
  }
};
