import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

type Gif = {
  gifText?: string;
  gifHTML?: string;
};

async function getGif(): Promise<Gif> {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&tag=motivation&rating=g`;
  // console.log(url)
  const response = await axios.get(url);
  const responseData = await response.data;
  let gifText: string;
  let gifHTML: string;

  gifText = responseData.data.images.original.url;
  gifHTML = gifText;
  return { gifText, gifHTML };
}

export { getGif };
