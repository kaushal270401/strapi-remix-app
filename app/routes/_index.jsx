import { useLoaderData } from "@remix-run/react";
import qs from 'qs'
import Card from "../Component/Card";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
const Query = (slug) => qs.stringify({
  populate: ['Blocks.Account_Name', 'Blocks.Account_Number'],
  filters: { slug: slug }
})

export async function loader() {
  const BASE_URL = "http://localhost:1337/api/pages?populate=*"
  const res = await fetch(`${BASE_URL}?${Query('home')}`)
  const data = await res.json()
  // return {message:'hello world'}
  return data
}

// function BlockRenderer(blocks) {
//   return blocks.map((block, index) => {
//     switch (blocks._component) {
//       case "page.CTA":
//         return <Card data={block} key={index} />
//       default:
//         return null;
//     }
//   })
// }

export default function Index() {
  const data = useLoaderData();
  const blocks = data.data[0].attributes.Blocks
  console.log(data.data[0].attributes.Blocks);
  return (
    <>
      {/* {BlockRenderer(blocks)} */}
      {blocks.map((block) => {
        return (
          <Card data={block} key={block.id} />
        )
      })}
    </>
  );
}
