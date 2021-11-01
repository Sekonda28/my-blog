import Title from "./Title";
import Picture from "./Picture";
import Description from "./Description";

const SideContent = (props) => {
  return (
    <aside className="side-content-item">
      <Title title={props.title} />
      <Picture picture={props.picture} alt={props.alt} />
      <Description description={props.description} />
    </aside>
  );
};

export default SideContent;
