import './section-separator.scss';
export default function SectionSeparator(props) {
    return (
        <div className="section-separator">
          <span>{props.children}</span>
        </div>
    )
}