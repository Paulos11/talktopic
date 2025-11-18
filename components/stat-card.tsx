import { Card, CardContent } from "./ui/card";
import { LucideIcon, ArrowUp, ArrowDown } from "lucide-react";
import { formatNumber, formatCurrency, formatPercentage, cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  trend?: number;
  format?: "number" | "currency" | "percentage" | "text";
  iconColor?: string;
  iconBgColor?: string;
}

export function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  format = "number",
  iconColor = "text-primary",
  iconBgColor = "bg-primary/10",
}: StatCardProps) {
  const formatValue = () => {
    if (format === "text") return value;
    const numValue = typeof value === "string" ? parseFloat(value) : value;

    switch (format) {
      case "currency":
        return formatCurrency(numValue);
      case "percentage":
        return formatPercentage(numValue);
      default:
        return formatNumber(numValue);
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold mt-2">{formatValue()}</p>
            {trend !== undefined && (
              <div className="flex items-center mt-2 text-sm">
                {trend > 0 ? (
                  <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span
                  className={cn(
                    "font-medium",
                    trend > 0 ? "text-green-500" : "text-red-500"
                  )}
                >
                  {Math.abs(trend)}%
                </span>
                <span className="text-muted-foreground ml-1">vs last month</span>
              </div>
            )}
          </div>
          <div className={cn("p-3 rounded-full", iconBgColor)}>
            <Icon className={cn("h-6 w-6", iconColor)} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}