import { IconClipboardCopy, IconFileBroken } from "@tabler/icons-react";
import { BentoGridDemo } from "../../../components/BentoSlide";
import MyBentoGrid from "../../../components/Gallery";
import PageShell from "../../../components/PageShell";
import SliderWrapper from "../../../components/SliderWrapper";


const items = [
  {
    title: "Custom Title",
    description: "This content is passed as a prop.",
    imageUrl: "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Another Block",
    description: "Reusable and dynamic.",
    imageUrl: "https://images.pexels.com/photos/23775788/pexels-photo-23775788.jpeg",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Another Block",
    description: "Reusable and dynamic.",
    imageUrl: "https://images.pexels.com/photos/23775788/pexels-photo-23775788.jpeg",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Another Block",
    description: "Reusable and dynamic.",
    imageUrl: "https://images.pexels.com/photos/23775788/pexels-photo-23775788.jpeg",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Another Block",
    description: "Reusable and dynamic.",
    imageUrl: "https://images.pexels.com/photos/23775788/pexels-photo-23775788.jpeg",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Another Block",
    description: "Reusable and dynamic.",
    imageUrl: "https://images.pexels.com/photos/23775788/pexels-photo-23775788.jpeg",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Another Block",
    description: "Reusable and dynamic.",
    imageUrl: "https://images.pexels.com/photos/23775788/pexels-photo-23775788.jpeg",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Another Block",
    description: "Reusable and dynamic.",
    imageUrl: "https://images.pexels.com/photos/23775788/pexels-photo-23775788.jpeg",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
];
export default function GalleryPage() {
  return (
    <PageShell title="OUR GALLERY" breadcrumb="Gallery" className="flex justify-center">
      <SliderWrapper>
        {[
          <MyBentoGrid key={0}/>,
           <BentoGridDemo key={1} items={items}/>, 
           ]}
       </SliderWrapper>

    </PageShell>
  );
}
