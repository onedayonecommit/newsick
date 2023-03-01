import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchSearch = createAsyncThunk("total/query", async (word) => {
  try {
    const result = await axios({
      method: "get",
      url: `https://www.poopoobin.com/total/?word=${word}`,
    });
    console.log(result, "디스패치 서치");
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
