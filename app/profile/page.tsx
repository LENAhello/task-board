import React from "react";
import { logoutAction } from "../actions/actions";
import { auth } from "@/auth";

const page = async () => {

  const session = await auth();
  console.log('sessions', session);

  return <div>
    <form action={logoutAction}>
      {session && session.user &&
        <>
          <h1>
            {session?.user.name}
          </h1>
          <button type='submit'>
            sign out
          </button>
        </>
      }
    </form>
  </div>;
};

export default page;
