import { useState } from "react";

const Section = ({ description, title, visibleSection, isVisible }) => {
  console.log("isVisible:", isVisible);
  return (
    <div className=" m-2 border border-black border-solid">
      <h1 className="text-2xl font-bold m-5 ">{title}</h1>

      {visibleSection && (
        <p className="text-sm font-light m-5 ">{description}</p>
      )}
      <button
        className=" cursor-pointer border p-1 m-2 rounded-full bg-teal-400"
        onClick={isVisible}
      >
        {visibleSection ? "hide" : "show"}
      </button>
    </div>
  );
};
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  console.log("visible section in instamart ", visibleSection);
  return (
    <div className="min-h-screen ">
      <Section
        title={"About Instamart"}
        description={`This is About section of Instamart`}
        visibleSection={visibleSection === "about"}
        isVisible={
          visibleSection === "about"
            ? () => setVisibleSection(false)
            : () => setVisibleSection("about")
        }
      />
      <Section
        title={"Team Instamart"}
        description={`This is another section of Instamart, Team section of Instamart. Instamart has over 50 members.`}
        visibleSection={visibleSection === "team"}
        isVisible={
          visibleSection === "team"
            ? () => setVisibleSection(false)
            : () => setVisibleSection("team")
        }
      />
      <Section
        title={"Careers Instamart"}
        description={`This is Careers section of Instamart`}
        visibleSection={visibleSection === "career"}
        isVisible={
          visibleSection === "career"
            ? () => setVisibleSection(false)
            : () => setVisibleSection("career")
        }
      />
    </div>
  );
};
export default Instamart;
