import {
  UnitTestTree,
  SchematicTestRunner,
} from '@angular-devkit/schematics/testing';
import { switchMap } from 'rxjs';

export const defaultWorkspaceOptions = {
  name: 'workspace',
  newProjectRoot: 'projects',
  version: '12.1.3',
  minimal: true,
};

export const defaultAppOptions = {
  name: 'bar',
  inlineStyle: false,
  inlineTemplate: false,
  viewEncapsulation: 'Emulated',
  routing: false,
  style: 'css',
  skipTests: false,
};

const defaultLibOptions = {
  name: 'baz',
};

export function createWorkspace(
  schematicRunner: SchematicTestRunner,
  appTree: UnitTestTree,
  workspaceOptions = defaultWorkspaceOptions,
  appOptions = defaultAppOptions,
  libOptions = defaultLibOptions
) {
  const angularSchematic = '@schematics/angular';
  
  return schematicRunner
    .runExternalSchematicAsync(angularSchematic, 'workspace', workspaceOptions)
    .pipe(
      switchMap((tree: any) =>
        schematicRunner.runExternalSchematicAsync(
          angularSchematic,
          'application',
          appOptions,
          tree
        ) as any
      ) as any,
      switchMap((tree: any) =>
        schematicRunner.runExternalSchematicAsync(
          angularSchematic,
          'library',
          libOptions,
          tree
        ) as any
      ) as any
    )
    .toPromise() as Promise<UnitTestTree>;
}
