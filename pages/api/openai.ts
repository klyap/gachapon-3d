// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from "openai";
import type { PrizeData } from '../../types';

type Error = {
  error: any
}
type PrizeDataResponse = PrizeData | Error;


const configuration = new Configuration({
  // organization: "org-1EJ20qCDh5wrnKL41luygsKE",
  apiKey: process.env.OPENAI_API_KEY,
});

export const listEngines = async () => {

  const openai = new OpenAIApi(configuration);
  const response = await openai.listModels().then(
    (resp) => {
      console.log(resp);
    }
  );
  return response;
}

export const generateItem = async () => {
  const openai = new OpenAIApi(configuration);
  const req = {
    "model": "text-davinci-003", //"text-davinci-003", "babbage", "curie", "ada", ""
    "prompt": "give me a name for a cute magical item, followed by the symbol ' - ' and then a description of its appearance and lore\n",
    // "prompt": "give me a name for a cute magical item, followed by the symbol ' - ' and then a short description of it, followed by the symbol ' - ' and then its color\n",
    "max_tokens": 60,
    "temperature": 1.2,
    // "top_p": 1,
    "n": 1,
    "stream": false,
    "logprobs": null,
  }

  let magicalitem = '';
  let name = '';
  let description = '';

  const response = await openai.createCompletion(req).then(
    (resp) => {
      console.log(resp.data.choices);
      name = resp.data.choices[0].text?.split(' - ')[0] || '';
      description = resp.data.choices[0].text?.split(' - ')[1] || '';
      magicalitem = resp.data.choices[0].text || '';
    }
  );

  let imgUrl = '';
  const imgReq = {
    "prompt": `${magicalitem} digital illustration 3d render pastel cute`,
    "n": 1,
    "size": "256x256"
  }

  //@ts-ignore
  const response2 = await openai.createImage(imgReq).then(
    (resp) => {
      console.log(resp.data.data[0].url);
      imgUrl = resp.data.data[0].url || '';
    }
  );

  return { name, description, imgUrl };
}



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PrizeDataResponse>
) {
  try {
    const itemData = await generateItem();
    res.status(200).send(itemData);
  } catch (err) {
    res.status(500).send({ error: err });
  }
}
