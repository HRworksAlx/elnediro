import Header from "@/components/header/Header";
import Products from "@/components/products";
import { revalidatePath } from "next/cache";

const AdminPage = () => {
  const addProduct = async (formData: FormData) => {
    "use server";
    try {
      await fetch(`${process.env.API_BASE_URL}/api/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          likes: 0,
          name: formData.get("name"),
          price: formData.get("price"),
        }),
      });
      revalidatePath("/admin");
    } catch (error) {
      console.error("Error adding new Product", error);
    }
  };
  return (
    <main className="bg-stone-100 w-full min-h-full flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col p-8 gap-4">
        <h1>Neue Produkte:</h1>
        <form action={addProduct} className="flex flex-col gap-4">
          <input className="p-4" type="text" name="name" placeholder="Name" />
          <input
            className="p-4"
            type="number"
            name="price"
            placeholder="Price"
          />
          <button className="bg-slate-800 text-slate-50 p-4" type="submit">
            Ay caramba!
          </button>
        </form>
        <h2>Produkte</h2>
        <Products />
      </div>
    </main>
  );
};

export default AdminPage;
