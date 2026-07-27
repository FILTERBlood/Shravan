import { motion } from "framer-motion";
import projects from "../data/projects";


function Projects(){
    return(
        <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-500">
                Projects
            </h2>

            

        </motion.div>
        </section>

    );
}

export default Projects;