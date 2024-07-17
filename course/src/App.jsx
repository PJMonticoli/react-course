import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
import { Title } from "./Title";
const users = [
  { userName: "PMonticoli", name: "Pablo Javier Monticoli" },
  { userName: "joacota2", name: "Joaco Gomez" },
  { userName: "Manyo9", name: "AgusM  " },
];
export function App() {
  return (
    <section className="App block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <Title text="A quién Seguir"></Title>
      {users.map(({ userName, name }) => {
        return (
          <TwitterFollowCard key={userName} userName={userName}>
            {name}
          </TwitterFollowCard>
        );
      })}

      {/* <TwitterFollowCard userName="PMonticoli">
        Pablo Javier Monticoli
         children Es lo mismo que poner el name = "Pablo ..". Acepta cualquier elemento 
      </TwitterFollowCard>
      <TwitterFollowCard userName="joacota2">Joaco Gomez</TwitterFollowCard> */}
    </section>
  );
}
