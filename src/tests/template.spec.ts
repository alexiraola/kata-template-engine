import { TemplateEngine } from '../core/template';

describe('Template engine', () => {
  it('a template with no arguments returns the same string', () => {
    const template = 'example template';
    const engine = new TemplateEngine();

    expect(engine.render(template, {})).toBe(template);
  })

});
