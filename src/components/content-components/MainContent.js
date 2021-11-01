import Title from "./Title";
import Subtitle from "./Subtitle";
import Picture from "./Picture";
import Description from "./Description";

const MainContent = (props) => {
  return (
    <section className = "main-content-item">
      <Title title = {props.title}/>
      <Subtitle subtitle = {props.subtitle} />
      <Picture picture = {props.picture} alt = {props.alt}/>
      <Description description = {props.description}/>
    </section>
  );
};

export default MainContent;
