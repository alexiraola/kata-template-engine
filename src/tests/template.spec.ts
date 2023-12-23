import { TemplateEngine } from '../core/template';

describe('Template engine', () => {
  it('a template with no arguments returns the same string', () => {
    const template = 'example template';
    const engine = new TemplateEngine();

    expect(engine.render(template, {})).toBe(template);
  });

  it('replaces provided arguments in the template', () => {
    const template = 'example template with an ${param1}';
    const engine = new TemplateEngine();

    expect(engine.render(template, { param1: 'argument' })).toBe('example template with an argument');
  });

});
