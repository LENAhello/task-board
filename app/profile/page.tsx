import React from "react";
import { logoutAction } from "../actions/actions";

const page = () => {
  return <div>
    <form action={logoutAction}>
      <button type='submit'>
        sign out
      </button>
    </form>
  </div>;
};

export default page;
