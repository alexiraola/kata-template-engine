export interface TemplateParams {
  [index: string]: string
}

export class TemplateEngine {
  render(template: string, args: TemplateParams): string {
    return template.replace('${param1}', args.param1);
  }
}
