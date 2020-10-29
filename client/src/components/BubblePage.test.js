import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import axios from 'axios';
import { fetchApi as mockFetchApi } from './fetchApi.js'
jest.mock('./fetchApi.js')

// const randoms = () => {
//   axios
//     .get("http://localhost:5000/api/colors")
//     .then((res) => setColorList(res.data))
//     .catch((err) => err);
// };

const res = {
  data: [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff",
      },
      id: 1,
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc",
      },
      id: 2,
    },
    {
      color: "aqua",
      code: {
        hex: "#00ffff",
      },
      id: 3,
    },
    {
      color: "aquamarine",
      code: {
        hex: "#7fffd4",
      },
      id: 4,
    },
    {
      color: "lilac",
      code: {
        hex: "#9a99dd",
      },
      id: 5,
    },
    {
      color: "softpink",
      code: {
        hex: "#dd99ba",
      },
      id: 6,
    },
    {
      color: "bisque",
      code: {
        hex: "#dd9a99",
      },
      id: 7,
    },
  ]
}

test("Fetches data and renders bubbles", async () => {
  mockFetchApi.mockResolvedValueOnce(res)
  localStorage.setItem('sprint_token', "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98")
  render(<BubblePage />);
  
  await waitFor(() => {
    screen.getByText(/limegreen/i)
    screen.getByText(/bubbles/i)
  })

  const color = screen.getByText(/limegreen/i);
  expect(color).toBeInTheDocument();

  const bubbles = screen.getByText(/bubbles/i);
  expect(bubbles).toBeInTheDocument();
});