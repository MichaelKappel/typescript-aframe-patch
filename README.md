# typescript-aframe-patch
This project is to fix compatibility issues between TypeScrpt and AFrame

Coverts "this" context in component methods to a parameter that can be used in TypeScript
Turning "{method}(): void;" into "{method}(arg: AFrame.Component): void;"

Original signiture:
              export interface ComponentDefinition {
                  dependencies?: string[];
                  el?: Entity;
                  id?: string;
                  multiple?: boolean;
                  schema?: Schema;

                  init?(): void;
                  update?(oldData: any): void;
                  remove?(): void;
                  tick?(time: number, timeDelta: number): void;
                  play?(): void;
                  pause?(): void;
                  updateSchema?(): void;
                  remove?(): void;

                  [key: string]: any;
              }



New signiture:
              export interface ComponentDefinition {
                  dependencies?: string[];
                  el?: AFrame.Entity;
                  id?: string;
                  multiple?: boolean;
                  schema?: AFrame.Schema;

                  init?(arg: AFrame.Component): void;
                  update?(oldData: any, arg: AFrame.Component): void;
                  remove?(arg: AFrame.Component): void;
                  tick?(time: number, timeDelta: number, arg: AFrame.Component): void;
                  play?(arg: AFrame.Component): void;
                  pause?(arg: AFrame.Component): void;
                  updateSchema?(arg: AFrame.Component): void;
                  remove?(arg: AFrame.Component): void;

                  [key: string]: any;
              }
