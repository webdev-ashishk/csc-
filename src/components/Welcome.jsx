import { motion } from 'motion/react';
const Welcome = () => {
  return (
    <motion.div
      initial={{
        opacity: 1,
        fontSize: '32px',
      }}
      animate={{
        x: 1000,
        opacity: 0,
        fontSize: '50px',
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        // repeatDelay: 2,
      }}
      className="inline-block text-nowrap poppins-black-italic py-3"
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
