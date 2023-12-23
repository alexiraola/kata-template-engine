import { TemplateParser } from "./template.parser";

export interface TemplateParams {
  [index: string]: string
}

export class TemplateEngine {
  parser = new TemplateParser();

  render(template: string, args: TemplateParams): string {
    const params = this.parser.parseParams(template);

    return params.reduce((template, param) => {
      return template.replace(`\$\{${param}}`, args[param]);
    }, template);
  }
}
