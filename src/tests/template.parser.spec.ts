import { TemplateParser } from '../core/template.parser';

describe('Template parser', () => {
  let parser: TemplateParser;

  beforeEach(() => {
    parser = new TemplateParser();
  })

  it('returns an empty array for a template with no params', () => {
    const template = 'example template';

    const params = parser.parseParams(template);

    expect(params).toEqual([]);
  });

  it('returns the correct array for a template with one param', () => {
    const template = 'example template with ${param}';

    const params = parser.parseParams(template);

    expect(params).toEqual(['param']);
  });

  it('returns the correct array for a template with many params', () => {
    const template = 'example template with ${param1}, ${param2} and ${param3}';

    const params = parser.parseParams(template);

    expect(params).toEqual(['param1', 'param2', 'param3']);
  });

  it('does not parse a malformed param', () => {
    const template = 'example template with $param1}, ${param2 and ${param3}';

    const params = parser.parseParams(template);

    expect(params).toEqual(['param3']);
  })
});

