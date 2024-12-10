/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import Component from './component';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	attributes.isEditing = true;

	return (
		<>
            <InspectorControls>
                <PanelBody title={__('Content', 'text-domain')} initialOpen={true}>
                    <TextControl
                        label={__('Text', 'text-domain')}
                        value={attributes.copyText}
                        onChange={(value) => setAttributes({ copyText: value })}
                        placeholder={__('Enter text...', 'text-domain')}
                    />
                </PanelBody>
            </InspectorControls>

			<div { ...useBlockProps() }>
				{ __(
					'Spotwhiskey block-name-standard – hello from the editor!',
					'spotwhiskey-blocks'
				) }
				<Component 
					attributes={attributes}
					setAttributes={setAttributes} 
				/>
			</div>
		</>
	);
}
