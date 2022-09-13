import type { NextPage } from 'next'
import {useEffect, useState} from "react";

const Home: NextPage = () => {
  const [browserName, setBrowserName] = useState<string>('')
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf("edge") > -1:
        setBrowserName("MS Edge"); // MS 엣지
        break;
      case agent.indexOf("edg/") > -1:
        setBrowserName("Edge (chromium based)"); // 크롬 기반 엣지
        break;
      // @ts-ignore
      case agent.indexOf("opr") > -1 && !!window.opr:
        setBrowserName("Opera"); // 오페라
        break;
      // @ts-ignore
      case agent.indexOf("chrome") > -1 && !!window.chrome:
        setBrowserName("Chrome"); // 크롬
        break;
      case agent.indexOf("trident") > -1:
        setBrowserName("MS IE"); // 익스플로러
        break;
      case agent.indexOf("firefox") > -1:
        setBrowserName("Mozilla Firefox"); // 파이어 폭스
        break;
      case agent.indexOf("safari") > -1:
        setBrowserName("Safari"); // 사파리
        break;
      default:
        setBrowserName("other"); // 기타
    }
    setIsMobile(checkMobile)
  }, [])

  function showNotification() {
    // @ts-ignore
    ShowNotification.postMessage('한번 보이는 알림입니다.')
  }

  function showDailyNotification() {
    // @ts-ignore
    ShowDailyNotification.postMessage(JSON.stringify({
      message: '매일 같은 시간 보이는 알림입니다.',
      hour: 3,
      minute: 10
    }))
  }

  function checkMobile() {
    console.log("userAgent : ", navigator.userAgent)
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  return (
    <div className="h-[90vh] flex items-center justify-center">
      <main className="w-full flex flex-col space-y-10 items-center py-7 border border-gray-500">
        <button
          className="bg-amber-400 rounded-2xl px-3 py-1"
          onClick={showNotification}
        >
          Show Notification
        </button>
        <button
          className="bg-amber-400 rounded-2xl px-3 py-1"
          onClick={showDailyNotification}
        >
          Daily At Time Notification
        </button>
        <h1 className="text-2xl font-bold">Your Browser Type : {browserName}</h1>
        <button className={"bg-blue-500 text-white rounded-2xl px-3 py-1" + (isMobile ? ' visible' : ' hidden')}>
          This button is mobile only
        </button>
      </main>
    </div>
  )
}

export default Home
