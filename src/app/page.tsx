import Header from "@/components/header/Header";
import Products from "@/components/products";

export default async function Home() {
  return (
    <main className="bg-stone-100 h-full w-full">
      <Header />
      <Products />
    </main>
  );
}
