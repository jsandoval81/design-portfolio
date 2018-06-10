import { helper } from '@ember/component/helper';

export function projectImageProportion(params/*, hash*/) {
    var img = params[0],
        proportion = 'tall';

    if (img.w / img.h > 1) {
        proportion = 'wide';
    }

    return proportion;
}

export default helper(projectImageProportion);
