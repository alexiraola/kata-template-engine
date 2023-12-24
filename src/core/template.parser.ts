export class TemplateParser {
  // It groups param values: ${param} -> 'param'.
  private PARAMS_REGEX = /\${([a-zA-Z0-9]*)}/gm;

  parseParams(template: string) {
    return this.unique(this.group1Matches(template.matchAll(this.PARAMS_REGEX)));
  }

  private group1Matches(matches: IterableIterator<RegExpMatchArray>) {
    return Array.from(matches, (match) => match[1]);
  }

  private unique(array: string[]) {
    return [...new Set(array)];
  }
}

