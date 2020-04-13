import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import SubComponent from './SubComponent';
import './scss/main.scss';

const editor = new EditorJS({
    holderId: 'app',
    tools: {
        sub: SubComponent,
        header: {
            class: Header,
            inlineToolbar: true,
        },
        list: {
            class: List,
            inlineToolbar: true,
        },
        checklist: {
            class: Checklist,
            inlineToolbar: true,
        },
    },
});

const outputEl = document.querySelector('#output');
const btn = document.createElement('button');
const pre = document.createElement('pre');
btn.type = 'button';
btn.innerText = 'Show output';
btn.classList.add('btn');
btn.classList.add('btn-primary');

outputEl.appendChild(btn);
outputEl.appendChild(pre);

btn.addEventListener('click', () => {
    editor.save().then((outputDate) => {
        pre.innerText = JSON.stringify(outputDate, null, '\t');
        console.log('Data ', outputDate);
    })
        .catch((error) => {
            console.log('Saving failed ', error);
        });
});
