function parseParams(template: string) {
  // regex to match strings contained in ${}, values are added to group 1.
  const regex = /\${([^}]*)}/gm;
  return unique(group1Matches(template.matchAll(regex)));
}

function group1Matches(matches: IterableIterator<RegExpMatchArray>) {
  return Array.from(matches, (match) => match[1]);
}

function unique<T>(array: T[]) {
  return [...new Set(array)];
}

describe('Template parser', () => {
  it('returns an empty array for a template with no params', () => {
    const template = 'example template';

    const params = parseParams(template);

    expect(params).toEqual([]);
  });

  it('returns the correct array for a template with one param', () => {
    const template = 'example template with ${param}';

    const params = parseParams(template);

    expect(params).toEqual(['param']);
  });
});

