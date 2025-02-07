import { motion } from 'motion/react';
const Welcome = () => {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        x: 1000,
        opacity: 0,
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        // repeatDelay: 2,
      }}
      className="inline-block text-nowrap"
      id="welcome2"
    >
      <h1
        className="text-[2rem] font-extrabold p-2 m-2 bg-gradient-to-r from-blue-500 via-red-500 to-green-500 bg-clip-text text-transparent"
        id="Welcome"
      >
        welcome to Quick links ...
      </h1>
    </motion.div>
  );
};

export default Welcome;
