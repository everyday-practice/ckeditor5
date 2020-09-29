import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

class MediaButtonPlugin extends Plugin {
	init() {
		console.log( 'MediaButtonPlugin was initialized' );
		const editor = this.editor;

		editor.ui.componentFactory.add( 'insertStrapiMedia', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'Insert Strapi media',
				icon: imageIcon,
				tooltip: true
			} );

			// Callback executed once the image is clicked.
			view.on( 'execute', () => {
        const { element } = view;
        const mediaButtonEvent = new CustomEvent('mediaButton', {
          bubbles: true,
        });
        element.dispatchEvent(mediaButtonEvent);
			} );

			return view;
		} );
	}
}

export default MediaButtonPlugin;
