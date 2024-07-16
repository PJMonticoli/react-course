import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  return (
    <>
      <TwitterFollowCard
        userName="PMonticoli"
        name="Pablo JavierMonticoli"
      ></TwitterFollowCard>
      <TwitterFollowCard
        userName="joacota2"
        name="Joaco Gomez"
      ></TwitterFollowCard>
    </>
  );
}
