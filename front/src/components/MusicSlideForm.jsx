import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const MusicSlideForm = ({ slide, offset, image }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  function useTilt(active) {
    const ref = useRef(null);
    useEffect(() => {
      if (!ref.current || !active) {
        return;
      }

      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined,
      };

      let el = ref.current;

      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;

        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };

      el.addEventListener("mousemove", handleMouseMove);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);

    return ref;
  }
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <>
      <motion.div
        ref={ref}
        className="slide"
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
          x,
          y,
          rotateX,
          rotateY,
          z: 10,
        }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <motion.div
          className="slideContent"
          style={{
            backgroundImage: `url('${slide.image.src}')`,
          }}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div className="slideContentInner" style={{ x, y, rotateX, rotateY, z: 100 }}>
            <h2 className="slideTitle">{slide.songName}</h2>
            <h3 className="slideSubtitle">{slide.singerName}</h3>
          </motion.div>
        </motion.div>
        {/* </div> */}
      </motion.div>
    </>
  );
};

export default MusicSlideForm;