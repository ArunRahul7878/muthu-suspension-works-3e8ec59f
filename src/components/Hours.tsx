import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { WEEKLY_HOURS, getISTNow, getOpenStatus, formatRange } from "@/lib/hours";

const Hours = () => {
  const { day } = getISTNow();
  const { isOpen } = getOpenStatus();
  const today = WEEKLY_HOURS[day];
  const todayLabel = today && !("closed" in today) ? formatRange(today.open, today.close) : "Closed today";

  return (
    <Card className="border-border">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4 flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-full"><Clock className="w-5 h-5 text-primary" /></div>
            <div>
              <h3 className="font-semibold text-card-foreground">Business Hours</h3>
              <p className="text-sm text-muted-foreground">Today: {todayLabel}</p>
            </div>
          </div>
          <span className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold", isOpen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800")}>
            <span className={cn("w-2 h-2 rounded-full", isOpen ? "bg-green-600" : "bg-red-600")} />
            {isOpen ? "Open now" : "Closed"}
          </span>
        </div>

        <ul className="divide-y divide-border text-sm">
          {[1, 2, 3, 4, 5, 6, 0].map((d) => {
            const entry = WEEKLY_HOURS[d];
            const isToday = d === day;
            return (
              <li key={d} className={cn("flex justify-between py-2", isToday ? "font-semibold text-foreground" : "text-muted-foreground")}>
                <span>{entry.label}</span>
                <span>{"closed" in entry ? "Closed" : formatRange(entry.open, entry.close)}</span>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Hours;
