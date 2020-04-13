import EditorJS from '@editorjs/editorjs';
import SubComponent from './SubComponent';

const editor = new EditorJS({
    holderId: 'app',
    tools: {
        class: SubComponent
    }
});