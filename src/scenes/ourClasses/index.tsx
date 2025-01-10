import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Strength training isn't just about vanity. It can help control weight, stop bone loss, improve balance, and boost energy levels..",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Yoga is a great way to work on your flexibility and strength. Just about everyone can do it, too -- it's not just for people who can touch their toes or want to meditate.",
    image: image2,

  },
  {
    name: "Ab Core Classes",
    description:
      "Core exercises are an important part of a well-rounded fitness program. Aside from occasional sit-ups and push-ups, however, core exercises are often neglected.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Adventure classes are a great way to get out of your comfort zone and try something new. They are also a great way to meet new people and make new friends.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Fitness classes are a great way to get in shape and stay in shape. They are also a great way to meet new people and make new friends.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Training classes are a great way to get in shape and stay in shape. They are also a great way to meet new people and make new friends.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              We provide world class fitness equipment, trainers and classes to
              get you to your ultimate fitness goals with ease. We provide true
              care into each and every member.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
