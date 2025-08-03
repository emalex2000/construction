import PageShell from "../../../components/PageShell";
import ServiceCard from "../../../components/ServiceCard";

export default function Services() {
  return (
    <PageShell
      title="OUR SERVICES"
      breadcrumb="Services"
      className="flex flex-col"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center px-4">
        <ServiceCard 
          image="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
          title="Design-Build Services"
          description="Lorem ipsum dolor sit amet consectetur. Placerat porttitor eget vestibulum augue sapien duis sagittis."
        />

        <ServiceCard 
          image="https://images.pexels.com/photos/33259520/pexels-photo-33259520.jpeg"
          title="Residential Construction"
          description="Lorem ipsum dolor sit amet consectetur. Placerat porttitor eget vestibulum augue sapien duis sagittis."
        />

        <ServiceCard 
          image="https://images.pexels.com/photos/12453933/pexels-photo-12453933.jpeg"
          title="Commercial Construction"
          description="Lorem ipsum dolor sit amet consectetur. Placerat porttitor eget vestibulum augue sapien duis sagittis."
        />

        <ServiceCard 
          image="https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg"
          title="Engineers and Quality Labour"
          description="Lorem ipsum dolor sit amet consectetur. Placerat porttitor eget vestibulum augue sapien duis sagittis."
        />
      </div>
    </PageShell>
  );
}
