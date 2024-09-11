import Header from "@/components/header/Header";
import ReactSyntaxHighlighter from "react-syntax-highlighter";

const CheckoutPage = () => (
  <main className="bg-stone-100 h-full w-full flex flex-col">
    <Header />
    <h1 className="text-4xl text-center">!!! UNDER CONSTRUCTION !!!</h1>
    <div className="flex flex-1 flex-col p-8">
      <h2>Code Snippets, die ich noch gebrauchen könnte:</h2>
      <ReactSyntaxHighlighter language="javascript">
        {`
            console.log('console.log()');
            console.log('ay caramba');

            const infiniteRecursion = () => {
                return infiniteRecursion();
            }
        `}
      </ReactSyntaxHighlighter>
    </div>
  </main>
);

export default CheckoutPage;
