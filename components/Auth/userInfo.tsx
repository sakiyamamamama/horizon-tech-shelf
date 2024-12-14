import { SessionProvider, signOut, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function UserInfo(){
  return (
    <SessionProvider>
      <Session />
    </SessionProvider>)
}

export function Session() {
  const { data: session } = useSession();
  
  const [isVisible, setIsVisible] = useState(false); // トグルの状態を管理
  const toggleRef = useRef<HTMLDivElement>(null); // toggle要素への参照
  const toggleTargetRef = useRef<HTMLDivElement>(null); // toggleTarget要素への参照

  // ドキュメント全体のクリックを監視
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // toggleTargetまたはtoggleの外部がクリックされた場合に非表示
      if (
        toggleTargetRef.current &&
        !toggleTargetRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  if (session) {

    return (
      <>
        <div className="max-w-md">
          <div id="toggle" ref={toggleRef}
            onClick={(event) => {
              event.stopPropagation(); // クリックイベントの伝播を防ぐ
              setIsVisible((prev) => !prev); // 状態を切り替え
            }}
            className="cursor-pointer flex p-1 rounded-lg bg-gray-200">
              <Image src={session.user?.image ? session.user?.image : "/user_icon.png"} alt="UserIcon"  className="h-auto w-9 rounded-full"/>
            </div>
            {isVisible && (
              <div
                id="toggleTarget"
                ref={toggleTargetRef}
                className="absolute bg-white p-2 rounded-md w-24 translate-y-1 translate-x-[-50%]"
              >
                <ul>
                    <li className="relative hover:bg-slate-200 rounded-sm p-1">
                        <button>マイページ</button>
                    </li>
                    <li className="relative hover:bg-slate-200 rounded-sm p-1">
                        <button onClick={() => signOut()}>Sign out</button>
                    </li>
                </ul>
            </div>)}
            <div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div></div>
  );
}