// import { useSelector } from "react-redux";


// export default function userAuth() {
//   const { user } = useSelector((state: any) => state.user);
//   if (user) {
//     return true;
//   } else {
//     return false;
//   }
// }


// gpt code
import { useSelector } from "react-redux";
export default function UserAuth() {
  const {user} = useSelector((state:any) => state.auth);

  if (user) {
    return true;
  } else {
    return false;
  }
}
