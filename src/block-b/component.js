import arrowImage from './images/dallas-creek-square.webp';

export default function ArrowImage({ attributes, setAttributes }) {
    return (
        <section>
            <p>{ attributes.copyText }</p><br></br>
            <img src={arrowImage} className={attributes.className} alt={attributes.altText} />
        </section>
    );
}