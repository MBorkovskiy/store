import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils/constant/url";

export const getUsers = createAsyncThunk<IUser[]>(
  "products/getUsers",
  async () => {
    const responce = await axios.get(`${BASE_URL}/users`);
    return responce.data.users;
  }
);

interface IHair {
  color: string;
  type: string;
}

interface IAddress {
  address: string;
  city: string;
  coordinates: ICoordinates;
  postalCode: string;
  state: string;
}

interface ICoordinates {
  lat: number;
  lng: number;
}

interface IBank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: IHair;
  domain: string;
  ip: string;
  address: IAddress;
  macAddress: string;
  university: string;
  bank: IBank;
  company: IAddress;
  department: string;
  name: string;
  title: string;
  user: string;
}

interface IInitialState {
  users: IUser[];
}

const initialState: IInitialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
  reducers: {
    changeUsers: (state, action) => {
      state.users = [...state.users, { ...action.payload }];
    },
  },
});

export const { changeUsers } = usersSlice.actions;
export default usersSlice.reducer;
