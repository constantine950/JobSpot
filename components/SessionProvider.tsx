"use client";

import { SessionProvider as Provider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  session: any | null;
};

export default function SessionProvider({ children, session }: Props) {
  return <Provider session={session}>{children}</Provider>;
}
