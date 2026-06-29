import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// Edit weekly hours here. Times are 24h "HH:MM" in IST. Use null for closed.
const WEEKLY_HOURS: Record<
  number,
  { label: string; open: string; close: string } | { label: string; closed: true }
> = {
  0: { label: "Sunday", open: "10:00", close: "17:00" },
  1: { label: "Monday", open: "09:30", close: "20:00" },
  2: { label: "Tuesday", open: "09:30", close: "20:00" },
  3: { label: "Wednesday", open: "09:30", close: "20:00" },
  4: { label: "Thursday", open: "09:30", close: "20:00" },
  5: { label: "Friday", open: "09:30", close: "20:00" },
  6: { label: "Saturday", open: "09:30", close: "20:00" },
};

const WEEKDAY_MAP: Record<string, number> = {
  Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
};

function getISTNow() {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = fmt.formatToParts(new Date());
  const wd = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10);
  const minute = parseInt(parts.find((p) => p.type === "minute")?.value ?? "0", 10);
  return { day: WEEKDAY_MAP[wd] ?? 1, minutes: hour * 60 + minute };
}

function toMin(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function formatRange(open: string, close: string) {
  const f = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const hr = ((h + 11) % 12) + 1;
    return `${hr}:${String(m).padStart(2, "0")} ${period}`;
  };
  return `${f(open)} – ${f(close)}`;
}

const Hours = () => {
  const { day, minutes } = getISTNow();
  const today = WEEKLY_HOURS[day];
  const isOpen =
    today && !("closed" in today) &&
    minutes >= toMin(today.open) && minutes < toMin(today.close);

  const todayLabel =
    today && !("closed" in today)
      ? formatRange(today.open, today.close)
      : "Closed today";

  return (
    <Card className="border-border">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4 flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-full">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">Business Hours</h3>
              <p className="text-sm text-muted-foreground">Today: {todayLabel}</p>
            </div>
          </div>
          <span
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold",
              isOpen
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            )}
          >
            <span
              className={cn(
                "w-2 h-2 rounded-full",
                isOpen ? "bg-green-600" : "bg-red-600"
              )}
            />
            {isOpen ? "Open now" : "Closed"}
          </span>
        </div>

        <ul className="divide-y divide-border text-sm">
          {[1, 2, 3, 4, 5, 6, 0].map((d) => {
            const entry = WEEKLY_HOURS[d];
            const isToday = d === day;
            return (
              <li
                key={d}
                className={cn(
                  "flex justify-between py-2",
                  isToday ? "font-semibold text-foreground" : "text-muted-foreground"
                )}
              >
                <span>{entry.label}</span>
                <span>
                  {"closed" in entry
                    ? "Closed"
                    : formatRange(entry.open, entry.close)}
                </span>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Hours;