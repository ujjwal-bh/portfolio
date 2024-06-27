import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { data } from "@/utils/data";

export default function Home() {
  return (
    <article className="about">
      <SectionTitle>Hello Everyone</SectionTitle>

      <section className="about-text">
        {data.description.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="tags-list">
          {data.skills.map((item, index) => {
            return (
              <li className="tags-item" key={index}>
                #{item}
              </li>
            );
          })}
        </ul>
      </section>
      <section className="service">
        <h3 className="h3 service-title">What i&#39;m doing</h3>

        <div className="service-list">
          {data.services.map((item, index) => {
            const { Icon, description, title } = item;
            return (
              <ServiceCard
                key={index}
                Icon={Icon}
                title={title}
                description={description}
              />
            );
          })}
        </div>
      </section>
    </article>
  );
}
