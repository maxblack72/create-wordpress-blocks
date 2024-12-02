import { InnerBlocks } from '@wordpress/block-editor';

const Section = ({attributes}) => {
    const { 
        isEditing, 
        copyText 
    } = attributes;
    
    return (
        <section>
            is Editing? {isEditing ? 'true' : 'false'}<br />
            this is copytext: { copyText } <br/>
            {isEditing ? <InnerBlocks /> : <InnerBlocks.Content /> }
        </section>
    );
}

export default Section;
