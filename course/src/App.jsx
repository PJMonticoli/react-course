import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
import { Title } from "./Title";

export function App() {
  return (
    <section className="App block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <Title text="Follow People on Twitter"></Title>
      <TwitterFollowCard userName="PMonticoli">
        Pablo Javier Monticoli
        {/* children Es lo mismo que poner el name = "Pablo ..". Acepta cualquier elemento */}
      </TwitterFollowCard>
      <TwitterFollowCard userName="joacota2">Joaco Gomez</TwitterFollowCard>
    </section>
  );
}
