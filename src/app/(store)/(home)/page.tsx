export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <h1>hellow world</h1>;
}
