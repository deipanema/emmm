import Signin from "@/app/components/Signin";
import { authOptions } from "@/app/utils/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "로그인",
  description: "구글 간편 로그인",
};

type SigninPage = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SigninPage({
  searchParams: { callbackUrl },
}: SigninPage) {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (session) {
    redirect("/chat");
  }

  const providers = (await getProviders()) ?? {};

  return <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />;
}
