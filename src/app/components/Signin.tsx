"use client";

import Image from "next/image";
import medium from "../../../public/images/login-md.png";
import large from "../../../public/images/login-lg.png";
import small from "../../../public/images/login-sm.png";
import google from "../../../public/images/googleicon.png";
import { ClientSafeProvider, signIn } from "next-auth/react";
import { Roboto } from "next/font/google";
import Footer from "./Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });

type Signin = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function Signin({ providers, callbackUrl }: Signin) {
  return (
    <div className="flex flex-col items-center w-full bg-white grow mx-auto">
      <picture className="flex flex-col items-center py-2">
        <Image
          src={large}
          alt="대형 로그인 이미지"
          className="hidden 2xl:block w-full max-w-5xl mx-auto"
          width={1280}
          height={720}
        />
        <Image
          src={medium}
          alt="중형 로그인 이미지"
          className="hidden md:block 2xl:hidden"
          width={768}
          height={432}
        />
        <Image
          src={small}
          alt="소형 로그인 이미지"
          className="block md:hidden"
          width={375}
          height={211}
        />
      </picture>
      <div className="flex flex-col items-center w-full max-w-sm mx-auto px-4">
        <h1 className="font-bold text-2xl leading-10">EMMM 로그인</h1>
        <p className="text-sm text-dark-gray text-center mb-2">
          실시간 대화에 참여하고 새로운 사람들과 소통하기 위해 로그인하세요.
        </p>
        {Object.values(providers).map(({ name, id }) => (
          <button
            key={id}
            onClick={() => signIn(id, { callbackUrl: callbackUrl })}
            className={`flex justify-center items-center px-2 py-3 my-4 rounded shadow bg-white hover:bg-light-gray text-sm w-full ${roboto.className}`}
            aria-label={`${name} 계정으로 로그인`}
          >
            <Image src={google} alt="Google 로고" width={24} height={24} />
            <p className="text-black-54 font-semibold ml-6">
              {name} 계정으로 로그인
            </p>
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
}
