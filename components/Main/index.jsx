import { Article } from "./Article";
import { Sidebar } from "./Sidebar";

export function Main() {
  return (
    <main className="lg:justify-between lg:flex max-w-5xl container mx-auto px-4 py-8">
      <Article />
      <Sidebar />
    </main>
  );
}
