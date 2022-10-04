import {useEffect, useState} from "react";
import Link from "next/link";

const Home = () => {
  const [browserName, setBrowserName] = useState<string>('')
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isPermission, setIsPermission] = useState<boolean>(false)

  useEffect(() => {
    if (isPermission) {
      // @ts-ignore
      document.getElementById("permissionState").innerHTML = "카메라 권한 설정이 완료되었습니다!"
    }
  }, [isPermission])

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

  function checkMobile() {
    console.log("userAgent : ", navigator.userAgent)
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  const getPermission = () => {
    // @ts-ignore
    GetPermission.postMessage('권한 얻기')
  }

  // @ts-ignore
  window.allowCamera = function () {
    setIsPermission(true)
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
        <Link
          href="dailyNotification"
        >
          <a className="bg-amber-400 rounded-2xl px-3 py-1">
            Daily At Time Notification
          </a>
        </Link>
        <h1 className="text-2xl font-bold">Your Browser Type : {browserName}</h1>
        <button className={"bg-blue-500 text-white rounded-2xl px-3 py-1" + (isMobile ? ' visible' : ' hidden')}>
          This button is mobile only
        </button>
        <button
          className="bg-purple-500 text-white rounded-2xl px-3 py-1"
          onClick={getPermission}
        >
          카메라 권한 얻기
        </button>
        <p id="permissionState">권한X</p>
      </main>
    </div>
  )
}

export default Home
