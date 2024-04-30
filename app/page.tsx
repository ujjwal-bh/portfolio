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

          {/* <div className="service-item">

          <div className="service-icon-box">
            <Image src="/images/icon-dev.svg" alt="Web development icon" width="40" height={40} />
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Web development</h4>

            <p className="service-item-text">
              High-quality development of sites at the professional level.
            </p>
          </div>

        </div>

        <div className="service-item">

          <div className="service-icon-box">
            <Image src="/images/icon-app.svg" alt="mobile app icon" width="40" height={40} />
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Mobile apps</h4>

            <p className="service-item-text">
              Professional development of applications for iOS and Android.
            </p>
          </div>

        </div>

        <div className="service-item">

          <div className="service-icon-box">
            <Image src="/images/icon-photo.svg" alt="camera icon" width="40" height={40} />
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Photography</h4>

            <p className="service-item-text">
              I make high-quality photos of any category at a professional level.
            </p>
          </div>

        </div> */}
        </div>
      </section>
    </article>
  );
}
