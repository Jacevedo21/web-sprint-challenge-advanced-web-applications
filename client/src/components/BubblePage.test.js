import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchColor as mockFetchColor } from '../api/fetchColor'
import Bubbles from './Bubbles'

jest.mock('../api/fetchColor')

const data = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  },
]

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  mockFetchColor.mockResolvedValueOnce(data)
  render(<BubblePage />)
});

// import React from 'react'
// import { render } from '@testing-library/react'
// import BubblePage from './BubblePage'
// import axios from 'axios'
// import { axiosWithAuth } from './axiosWithAuth'
// jest.mock('react')
// jest.mock('axios')
// describe('I HATE THIS', () => {
// 	test('Fetches data and renders the bubbles', async () => {
// 		const { getByTestId } = render(<BubblePage />)
// 		const data = [ { id: 1 }, { id: 2 } ]
// 		axios.create.mockImplementationOnce(() => Promise.resolve(data))
// 		await expect(axiosWithAuth()).resolves.toEqual(data)
// 	})
// })
