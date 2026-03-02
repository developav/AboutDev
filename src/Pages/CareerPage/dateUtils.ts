// dateUtils.ts - утилиты для работы с датами

export interface DateRange {
  start: Date;
  end?: Date; // undefined = "Present"
}

/**
 * Форматирует дату в формат "Sep 2024"
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    year: 'numeric' 
  });
}

/**
 * Рассчитывает длительность между двумя датами
 */
export function calculateDuration(start: Date, end?: Date): string {
  const endDate = end || new Date();
  
  const totalMonths = 
    (endDate.getFullYear() - start.getFullYear()) * 12 +
    (endDate.getMonth() - start.getMonth());
  
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  const parts: string[] = [];
  
  if (years > 0) {
    parts.push(`${years} yr${years !== 1 ? 's' : ''}`);
  }
  
  if (months > 0) {
    parts.push(`${months} mo${months !== 1 ? 's' : ''}`);
  }
  
  if (parts.length === 0) {
    return "Less than 1 month";
  }
  
  return parts.join(' ');
}

/**
 * Форматирует период работы
 */
export function formatEmploymentPeriod(start: Date, end?: Date): string {
  const startStr = formatDate(start);
  const endStr = end ? formatDate(end) : "Present";
  const duration = calculateDuration(start, end);
  
  return `${startStr} - ${endStr} · ${duration}`;
}
