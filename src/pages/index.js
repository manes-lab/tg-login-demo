import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {

  let userId, username, firstName, lastName, languageCode;

  if (typeof window !== "undefined") {

    const tg = window.Telegram.WebApp;

    // 获取用户ID
    userId = tg.initDataUnsafe.user.id;

    // 获取用户名
    username = tg.initDataUnsafe.user.username;

    // 获取用户的名字
    firstName = tg.initDataUnsafe.user.first_name;

    // 获取用户的姓氏
    lastName = tg.initDataUnsafe.user.last_name;

    // 获取用户的语言代码
    languageCode = tg.initDataUnsafe.user.language_code;
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

      <div>
        {{ userId }}
        {{ username }}
        {{ firstName }}
        {{ lastName }}
        {{ languageCode }}
      </div>


    </main>
  );
}
