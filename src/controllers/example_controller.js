import {Controller} from '@hotwired/stimulus';
import Sortable from 'sortablejs';

export default class extends Controller {
    sortable = undefined;

    connect() {
        console.log('connect');

        // Don't work
        // const item = this.element.querySelector('.test');

        // Work
        const item = this.element;

        this.sortable = new Sortable(item, {
            animation: 150,
            onUpdate: () => console.log('updated'),
            onEnd: () => console.log('ended'),
        });
    }

    disconnect() {
        this.sortable?.destroy();
    }
}