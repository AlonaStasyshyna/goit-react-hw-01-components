import { Profile } from "./Profile/Profile";
import userData from "../components/Profile/data/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/data/data.json";


export const App = () => {
  return (
    <>
      <Profile user={userData} />

      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
