import { TemplateParser } from "./template.parser";

export type TemplateParams = {
  [index: string]: string;
}

export class TemplateResult {
  constructor(readonly text: string, readonly warnings: string[]) { }

  addWarnings(warnings: string[]) {
    return new TemplateResult(this.text, this.warnings.concat(warnings));
  }
}

export class TemplateEngine {
  parser = new TemplateParser();

  render(template: string, args: TemplateParams): TemplateResult {
    const params = this.parser.parseParams(template);

    const resultTemplate = params.reduce((template, param) => {
      return template.replace(`\$\{${param}}`, args[param]);
    }, template);

    return new TemplateResult(resultTemplate, [])
      .addWarnings(this.validParamsWarnings(params))
      .addWarnings(this.missingParamsWarnings(params, args));
  }

  validParamsWarnings(params: string[]) {
    if (params.includes('')) {
      return ['Invalid empty parameter in template'];
    }
    return [];
  }

  missingParamsWarnings(params: string[], args: TemplateParams) {
    const missingParams = params.filter(param => !Object.keys(args).includes(param));

    return missingParams.map(param => `Missing argument ${param}`);
  }
}
