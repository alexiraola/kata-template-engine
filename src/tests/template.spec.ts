import { TemplateEngine } from '../core/template';

describe('Template engine', () => {
  let engine: TemplateEngine;

  beforeEach(() => {
    engine = new TemplateEngine();
  });

  it('a template with no arguments returns the same string', () => {
    const template = 'example template';

    expect(engine.render(template, {}).text).toBe(template);
  });

  it('replaces provided argument in the template', () => {
    const template = 'example template with an ${param1}';

    expect(engine.render(template, { param1: 'argument' }).text).toBe('example template with an argument');
  });

  it('replaces provided arguments in the template', () => {
    const template = 'example template with an ${param1} and ${param2}';

    expect(engine.render(template, { param1: 'argument', param2: 'argument2' }).text).toBe('example template with an argument and argument2');
  });

  it('throws an error if a param in the template is missing in args', () => {
    const template = 'example template with ${param1} and ${param2}';
    const args = {
      param1: 'argument'
    };

    const result = engine.render(template, args);

    expect(result.warnings[0]).toBe('Missing argument param2');
  });

  it('throws an error if an empty param is provided', () => {
    const template = 'example template with ${} and ${param2}';
    const args = {
      '': 'argument',
      param2: 'argument2'
    };

    const result = engine.render(template, args);

    expect(result.warnings[0]).toBe('Invalid empty parameter in template');
  });
});
