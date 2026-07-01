// Single source of truth for business hours (IST). Edit WEEKLY_HOURS here.
export type DayHours =
  | { label: string; open: string; close: string }
  | { label: string; closed: true };

export const WEEKLY_HOURS: Record<number, DayHours> = {
  0: { label: "Sunday", open: "09:00", close: "17:00" },
  1: { label: "Monday", open: "08:30", close: "20:30" },
  2: { label: "Tuesday", open: "08:30", close: "20:30" },
  3: { label: "Wednesday", open: "08:30", close: "20:30" },
  4: { label: "Thursday", open: "08:30", close: "20:30" },
  5: { label: "Friday", open: "08:30", close: "20:30" },
  6: { label: "Saturday", open: "08:30", close: "20:30" },
};

const WEEKDAY_MAP: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

export function getISTNow() {
  const fmt = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Kolkata", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false });
  const parts = fmt.formatToParts(new Date());
  const wd = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10);
  const minute = parseInt(parts.find((p) => p.type === "minute")?.value ?? "0", 10);
  return { day: WEEKDAY_MAP[wd] ?? 1, minutes: hour * 60 + minute };
}

export function toMin(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

export function formatTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hr = ((h + 11) % 12) + 1;
  return `${hr}:${String(m).padStart(2, "0")} ${period}`;
}

export function formatRange(open: string, close: string) {
  return `${formatTime(open)} – ${formatTime(close)}`;
}

export function getOpenStatus() {
  const { day, minutes } = getISTNow();
  const today = WEEKLY_HOURS[day];
  if (!today || "closed" in today) return { isOpen: false, detail: "" };
  const openM = toMin(today.open);
  const closeM = toMin(today.close);
  if (minutes >= openM && minutes < closeM) return { isOpen: true, detail: `Closes ${formatTime(today.close)}` };
  if (minutes < openM) return { isOpen: false, detail: `Opens ${formatTime(today.open)}` };
  return { isOpen: false, detail: "" };
}
