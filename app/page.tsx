import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { data } from "@/utils/data";

export default function Home() {
  return (
    <article className="about" data-page="about">
      <SectionTitle>About</SectionTitle>

      <section className="about-text">
        <p>
         {data.description1}
        </p>

        <p>
         {data.description2}
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i&#39;m doing</h3>

        <div className="service-list">
          {data.services.map((item, index)=> {
            const {Icon, description, title} = item;
            return <ServiceCard key={index} Icon={Icon} title={title} description={description}/>
          })}
        </div>
      </section>
    </article>
  );
}
