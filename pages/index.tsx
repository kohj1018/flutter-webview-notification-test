import type { NextPage } from 'next'

const Home: NextPage = () => {
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

  return (
    <div className="mx-auto mt-64 flex flex-col space-y-10 items-center py-7 border border-gray-500">
      <button
        className="bg-amber-400 rounded-2xl px-3 py-1"
        onClick={showNotification}
      >
        Show Notification
      </button>
      <button
        className="bg-amber-400  rounded-2xl px-3 py-1"
        onClick={showDailyNotification}
      >
        Daily At Time Notification
      </button>
    </div>
  )
}

export default Home
