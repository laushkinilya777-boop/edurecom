export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes
    .filter((c) => typeof c === 'string')
    .join(' ');
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

export function formatXP(xp: number): string {
  if (xp >= 1000000) {
    return `${(xp / 1000000).toFixed(1)}M`;
  }
  if (xp >= 1000) {
    return `${(xp / 1000).toFixed(1)}K`;
  }
  return xp.toString();
}

export function getNextLevelXP(level: number): number {
  return 10000 + level * 500;
}

export function calculateLevel(totalXP: number): { level: number; currentXP: number; nextLevelXP: number } {
  let level = 1;
  let xpUsed = 0;

  while (xpUsed + getNextLevelXP(level) <= totalXP) {
    xpUsed += getNextLevelXP(level);
    level++;
  }

  const currentXP = totalXP - xpUsed;
  const nextLevelXP = getNextLevelXP(level);

  return { level, currentXP, nextLevelXP };
}
