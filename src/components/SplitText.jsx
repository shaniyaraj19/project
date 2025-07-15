import { motion } from "framer-motion";

const defaultAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
    },
  }),
};

const SplitText = ({ children, className = "", animation = defaultAnimation }) => {
  return (
    <span className={className}>
      {children.split(" ").map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default SplitText;
