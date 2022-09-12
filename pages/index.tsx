import type { NextPage } from 'next'

const Home: NextPage = () => {
  function showNotification() {
    // @ts-ignore
    ShowNotification.postMessage('한번 보이는 알림입니다.')
  }

  function showDailyNotification() {
    // @ts-ignore
    ShowDailyNotification.postMessage('매일 같은 시간 보이는 알림입니다.')
  }

  return (
    <div className="mx-auto mt-96 flex flex-col space-y-3 items-center">
      <button onClick={showNotification}>
        Show Notification
      </button>
      <button onClick={showDailyNotification}>
        Daily At Time Notification
      </button>
    </div>
  )
}

export default Home
