import {UpdateRecorder} from '@angular-devkit/schematics';
import {DevkitFileSystem} from 'ng-morph';

import {findElementsByTagName} from '../../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../../utils/templates/template-resource';
import {TemplateResource} from '../../../../interfaces';
import {closeStartTag, removeClosingTag, replaceOpenTag, replaceSizeAttr} from './common';

export function migrateCheckbox({
    resource,
    recorder,
    fileSystem,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    const elements = findElementsByTagName(template, `tui-checkbox`);

    elements.forEach(({attrs, sourceCodeLocation}) => {
        if (!sourceCodeLocation) {
            return;
        }

        replaceSizeAttr(attrs, sourceCodeLocation, recorder, templateOffset);
        replaceOpenTag(sourceCodeLocation, recorder, templateOffset, {
            tag: `tui-checkbox`,
            directive: `tuiCheckbox`,
            type: `checkbox`,
        });
        closeStartTag(sourceCodeLocation, recorder, templateOffset);
        removeClosingTag(sourceCodeLocation, recorder, templateOffset);
    });
}
