import { motion } from "framer-motion";

function Graph({ data }) {
  return (
    <motion.div className="historyGraphFrame" style={{ position: "relative", height: 200, width: "100%" }}>
      <motion.svg style={{ width: "100%", height: "100%" }}>
        <motion.path d={createPath(data)} stroke="#01a0c7" strokeWidth={2} fill="transparent" />
      </motion.svg>
    </motion.div>
  );
}

function createPath(data) {
  let path = "M";
  data.forEach((point, index) => {
    const x = (point[0] / 200) * 100;
    const y = 200 - (point[1] / 100) * 200;
    path += `${x} ${y} `;
    if (index !== data.length - 1) {
      path += "L";
    }
  });
  return path;
}

export default Graph;
