import {useState} from "react";
import {useRouter} from "next/router";

const DailyNotification = () => {
  const router = useRouter()
  const [hour, setHour] = useState<number | undefined>(undefined)
  const [minute, setMinute] = useState<number | undefined>(undefined)

  function showDailyNotification(hour: number, minute: number) {
    // @ts-ignore
    ShowDailyNotification.postMessage(JSON.stringify({
      message: '매일 같은 시간 보이는 알림입니다.',
      hour: hour,
      minute: minute
    }))
  }

  const submitTime = (hour: number, minute: number) => {
    showDailyNotification(hour, minute)
    router.back()
  }

  return (
    <div className="h-[90vh] flex items-center justify-center">
      <main className="flex flex-col space-y-7 items-center">
        <input
          className="border border-gray-500 rounded-lg px-3 py-1"
          type="number"
          value={hour}
          onChange={(e) => setHour(parseInt(e.target.value))}
          placeholder="Please enter hour"
        />
        <input
          className="border border-gray-500 rounded-lg px-3 py-1"
          type="number"
          value={minute}
          onChange={(e) => setMinute(parseInt(e.target.value))}
          placeholder="Please enter minutes"
        />
        {hour !== undefined && minute !== undefined && 0 <= hour && hour <= 24 && 0 <= minute && minute < 60 &&
          <button
            className="bg-amber-400 rounded-2xl px-3 py-1"
            onClick={() => submitTime(hour, minute)}
          >
            create notification
          </button>
        }
      </main>
    </div>
  );
};

export default DailyNotification;