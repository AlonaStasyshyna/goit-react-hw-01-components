import { Profile } from "./Profile/Profile";
import userData from "../components/data/user.json";

export const App = () => {
  return (
    <>
      <Profile user={userData} />
    </>
  );
};
