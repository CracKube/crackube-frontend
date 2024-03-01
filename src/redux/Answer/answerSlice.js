import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAsyncAnswer = createAsyncThunk(
  "answer/fetchAsyncAnswer",
  async () => {
    const response = await fetch(
      `https://crackube-backend-test.onrender.com/questions/get`
    );
    const data = await response.json();
    return data;
  }
);

export const fetchAsyncAnswerDetail = createAsyncThunk(
  "answer/fetchAsyncAnswerDetail",
  async (id) => {
    const response = await fetch(
      `https://api.crackube.com/answers/get/${id}`
    );
    const data = await response.json();
    return data;
  }
);

const initialState = {
  answers: [],
  selectedAnswer: [],
};

const answerSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    addAnswer: (state, { payload }) => {
      state.answers = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncAnswer.pending, (state) => {
        console.log("pending");
      })
      .addCase(fetchAsyncAnswer.fulfilled, (state, { payload }) => {
        return { ...state, answers: payload };
      })
      .addCase(fetchAsyncAnswer.rejected, (state) => {
        console.log("rejected");
      })
      .addCase(fetchAsyncAnswerDetail.fulfilled, (state, { payload }) => {
        console.log("fetched successfully answer detail");
        return { ...state, selectedAnswer: payload };
      });
  },
});

export const { addAnswer } = answerSlice.actions;
export const getAnswer = (state) => state.answers.answers;
export default answerSlice.reducer;
