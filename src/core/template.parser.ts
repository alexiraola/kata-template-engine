export function parseParams(template: string) {
  // regex to match strings contained in ${}, values are added to group 1.
  const regex = /\${([a-zA-Z0-9]*)}/gm;
  return unique(group1Matches(template.matchAll(regex)));
}

function group1Matches(matches: IterableIterator<RegExpMatchArray>) {
  return Array.from(matches, (match) => match[1]);
}

function unique<T>(array: T[]) {
  return [...new Set(array)];
}


