import { TemplateParser } from "./template.parser";

export interface TemplateParams {
  [index: string]: string
}

export class TemplateEngine {
  parser = new TemplateParser();

  render(template: string, args: TemplateParams): string {
    const params = this.parser.parseParams(template);

    this.ensureParamsProvided(params, args);

    return params.reduce((template, param) => {
      return template.replace(`\$\{${param}}`, args[param]);
    }, template);
  }

  ensureParamsProvided(params: string[], args: TemplateParams) {
    const missingParams = params.filter(param => !Object.keys(args).includes(param));

    if (missingParams.length > 0) {
      throw new Error(`Missing argument ${missingParams.join(', ')}`);
    }
  }
}
