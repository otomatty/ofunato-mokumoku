// イベントの型定義
export interface CalendarEvent {
  summary: string;
  start: {
    dateTime: string;
  };
  end: {
    dateTime: string;
  };
  location?: string;
}

// Google Calendar APIから直近1ヶ月のイベントを取得する関数
let cachedUpcomingEvents: CalendarEvent[] | null = null;
let upcomingEventsCacheTimestamp: number | null = null;
const UPCOMING_EVENTS_CACHE_DURATION = 5 * 60 * 1000; // 5分

export async function fetchUpcomingEvents(): Promise<CalendarEvent[] | null> {
  const now = Date.now();

  // キャッシュが有効かどうかを確認
  if (
    cachedUpcomingEvents &&
    upcomingEventsCacheTimestamp &&
    now - upcomingEventsCacheTimestamp < UPCOMING_EVENTS_CACHE_DURATION
  ) {
    return cachedUpcomingEvents;
  }

  const API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
  const CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID;

  if (!API_KEY || !CALENDAR_ID) {
    console.error("Google Calendar API key or Calendar ID is not set");
    return null;
  }

  const nowISO = new Date().toISOString();
  const oneMonthLaterISO = new Date(
    Date.now() + 30 * 24 * 60 * 60 * 1000
  ).toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${nowISO}&timeMax=${oneMonthLaterISO}&singleEvents=true&orderBy=startTime`;

  console.log("Fetching upcoming events from URL:", url); // URLをコンソールに表示

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      cachedUpcomingEvents = data.items as CalendarEvent[];
      upcomingEventsCacheTimestamp = now;
      return cachedUpcomingEvents;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching upcoming events:", error);
    return null;
  }
}

// Google Calendar APIから直近のイベントを1つだけ取得する関数
let cachedEvent: CalendarEvent | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5分

export async function fetchNextEvent(): Promise<CalendarEvent | null> {
  const now = Date.now();

  // キャッシュが有効かどうかを確認
  if (cachedEvent && cacheTimestamp && now - cacheTimestamp < CACHE_DURATION) {
    return cachedEvent;
  }

  const API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
  const CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID;

  if (!API_KEY || !CALENDAR_ID) {
    console.error("Google Calendar API key or Calendar ID is not set");
    return null;
  }

  const nowISO = new Date().toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${nowISO}&singleEvents=true&orderBy=startTime&maxResults=1`;

  console.log("Fetching next event from URL:", url); // URLをコンソールに表示

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      cachedEvent = data.items[0] as CalendarEvent;
      cacheTimestamp = now;
      return cachedEvent;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching next event:", error);
    return null;
  }
}

// 場所の名前を抽出する関数
export function getLocationName(location: string): string {
  // 住所の部分を削除して場所の名前だけを抽出
  const name = location.split(",")[0];
  return name;
}

// 場所に応じた画像を取得する関数
export function getLocationImage(location: string): string {
  if (location.includes("大船渡テレワークセンター")) {
    return "/images/ofunatotelework.jpeg"; // 大船渡テレワークセンターの画像パス
  } else if (location.includes("おおふなぽーと")) {
    return "/images/ofunaport.jpg"; // おおふなぽーとの画像パス
  } else {
    return "/images/default.jpg"; // デフォルトの画像パス
  }
}

// 時間範囲をフォーマットする関数
export function formatTimeRange(start: string, end: string): string {
  const startTime = new Date(start).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const endTime = new Date(end).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${startTime}~${endTime}`;
}

// 日付と曜日をフォーマットする関数
export function formatDateAndDay(dateString: string): {
  date: string;
  day: string;
} {
  const date = new Date(dateString);
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "numeric",
    day: "numeric",
  };
  const dayOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
  };
  const formattedDate = date.toLocaleDateString("ja-JP", dateOptions);
  const formattedDay = date
    .toLocaleDateString("ja-JP", dayOptions)
    .replace("曜日", "");
  return { date: formattedDate, day: formattedDay };
}

// 年を取得する関数
export function getYear(dateString: string): string {
  const date = new Date(dateString);
  return date.getFullYear().toString();
}
