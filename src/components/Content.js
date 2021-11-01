import MainContent from "./content-components/MainContent";
import SideContent from "./content-components/SideContent";

const Content = () => {
  return (
    <main>
      <div className="main-content">
        <MainContent
          title="Title Heading 1"
          subtitle="This is subtitle number 1"
          picture="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80"
          alt="computer on a desk"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <MainContent
          title="Title Heading 2"
          subtitle="This is subtitle number 2"
          picture="https://images.unsplash.com/photo-1635759845187-c936eddfd0ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
          alt="basketball on a court"
          description="Morbi non arcu risus quis varius quam quisque id diam. Risus ultricies tristique nulla aliquet. Id venenatis a condimentum vitae sapien pellentesque. At lectus urna duis convallis convallis tellus id. Eu nisl nunc mi ipsum faucibus vitae. Amet porttitor eget dolor morbi non arcu risus quis varius. Purus semper eget duis at tellus at urna condimentum mattis. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Ut sem nulla pharetra diam sit. Diam vulputate ut pharetra sit amet. Enim nec dui nunc mattis enim ut tellus elementum. Ut pharetra sit amet aliquam id diam maecenas ultricies. Eros donec ac odio tempor orci."
        />
      </div>
      <div className="side-content">
        <SideContent
          title="About Me"
          picture="https://images.unsplash.com/photo-1635527643921-ce2b9bbd5728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          alt="sushi roll"
          description="Id faucibus nisl tincidunt eget nullam non nisi. In eu mi bibendum neque egestas congue. Dignissim convallis aenean et tortor. Dictum non consectetur a erat nam. Semper eget duis at tellus at. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus."
        />
      </div>
    </main>
  );
};

export default Content;
